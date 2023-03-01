//Import db connection from config folder
let db = require("../config");
//Import bcrypt module
let { hash, compare, hashSync } = require("bcrypt");

// creating a token
let { createToken } = require("../middleware/AuthenticatedUser.js");

class User {
    login(req, res) {
      const { emailAddress, userPassword } = req.body;
      const strQry = `
              SELECT userID,firstName,lastName ,emailAddress,userPassword,gender,
              userRole,userProfile,cellphoneNumber,joinDate
              FROM Users 
              WHERE emailAddress = ${emailAddress};
  
              `;
  
      db.query(strQry, async (err, data) => {
        if (err) throw err;
        if (!data || data == null) {
          res.status(401).json({ err: "You provided the wrong email address" });
        } else {
          await compare(userPassword, data[0].userPassword, (cErr, cResult) => {
            // create token
            const jwToken = createToken({
              emailAddress,
              userPassword,
            });
            //saving token
            res.cookie("LegitUser", jwToken, {
              maxAge: 3600000,
              httpOnly: true,
            });
            if (cResult) {
              res.status(200).json({
                msg: "Logged in",
                jwToken,
                result: data[0],
              });
            } else {
              res.status(401).json({
                err: "You entered an invalid password or did not register.",
              });
            }
          });
        }
      });
    }
  
    fetchUsers(req, res) {
      const strQry = `
          SELECT
          userID,firstName,lastName ,emailAddress,gender,userRole,userProfile,cellphoneNumber,joinDate FROM Users;
          `;
      db.query(strQry, (err, data) => {
        if (err) throw err;
        else res.status(200).json({ result: data });
      });
    }
  
    fetchUser(req, res) {
      const strQry = `
          SELECT     userID,firstName,lastName,  gender , cellphoneNumber, emailAddress,userRole ,userProfile ,joinDate  FROM Users WHERE userID = ?;
          `;
      db.query(strQry, [req, params.id], (err, data) => {
        if (err) throw err;
        else res.status(200).json({ result: data });
      });
    }
  
      async createUser(req, res) {
          // Payload
          let detail = req.body;
          // Hashing user password
          detail.userPassword = await 
          hash(detail.userPassword, 15);
          // This information will be used for authentication.
          let user = {
              emailAddress: detail.emailAddress,
              userPassword: detail.userPassword
          }
          // sql query
          const strQry =
          `INSERT INTO Users
          SET ?;`;
          db.query(strQry, [detail], (err)=> {
              if(err) {
                  res.status(401).json({err});
              }else {
                  // Create a token
                  const jwToken = createToken(user);
                  // This token will be saved in the cookie. 
                  // The duration is in milliseconds.
                  res.cookie("LegitUser", jwToken, {
                      maxAge: 3600000,
                      httpOnly: true
                  });
                  res.status(200).json({msg: "A user record was saved."})
              }
          })    
      }
  
      updateUser(req, res) {
          let data = req.body;
          if(data.userPassword !== null || 
              data.userPassword !== undefined)
              data.userPassword = hashSync(data.userPassword, 15);
          const strQry = 
          `
          UPDATE Users
          SET ?
          WHERE userID = ?;
          `;
          //db
          db.query(strQry,[data, req.params.id], 
              (err)=>{
              if(err) throw err;
              res.status(200).json( {msg: 
                  "A row was affected"} );
          })    
      }
  
      deleteUser(req, res) {
          const strQry = 
          `
          DELETE FROM Users
          WHERE userID = ?;
          `;
          //db
          db.query(strQry,[req.params.id], 
              (err)=>{
              if(err) throw err;
              res.status(200).json( {msg: 
                  "A record was removed from a database"} );
          })    
      }
  
  }
  
  class Product {
      fetchProducts(req, res) {
          const strQry = `SELECT prodID, prodName, prodDescription, category, price, prodQuantity, imgURL
          FROM Products;`;
          db.query(strQry, (err, results)=> {
              if(err) throw err;
              res.status(200).json({results: results})
          });
      }
      fetchProduct(req, res) {
          const strQry = `SELECT prodID, prodName, prodDescription, category, price, prodQuantity, imgURL
          FROM products
          WHERE prodID = ?;`;
          db.query(strQry, [req.params.id], (err, results)=> {
              if(err) throw err;
              res.status(200).json({results: results})
          });
  
      }
      addProduct(req, res) {
          const strQry = 
          `
          INSERT INTO Products
          SET ?;
          `;
          db.query(strQry,[req.body],
              (err)=> {
                  if(err){
                      res.status(400).json({err: "Unable to insert a new record."});
                  }else {
                      res.status(200).json({msg: "Product saved"});
                  }
              }
          );    
  
      }
      updateProduct(req, res) {
          const strQry = 
          `
          UPDATE Products
          SET ?
          WHERE prodID = ?;
          `;
          db.query(strQry,[req.body, req.params.id],
              (err)=> {
                  if(err){
                      res.status(400).json({err: "Unable to update a record."});
                      console.log(err)
                  }else {
                      res.status(200).json({msg: "Product updated"});
                  }
              }
          );    
  
      }
      deleteProduct(req, res) {
          const strQry = 
          `
          DELETE FROM Products
          WHERE prodID= ?;
          `;
          db.query(strQry,[req.params.id], (err)=> {
              if(err) res.status(400).json({err: "The record was not found."});
              res.status(200).json({msg: "A product was deleted."});
          })
      }
  
  }
  // Export User class
  module.exports = {
      User, 
      Product
  }
  
