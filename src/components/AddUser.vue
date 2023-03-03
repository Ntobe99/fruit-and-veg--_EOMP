<template>
  <button
    type="button"
    class="btn btn-dark"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
  >
    Add User
  </button>

  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Add User!</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group">
              <label for="firstName">First Name</label>
              <input
                type="text"
                class="form-control"
                id="firstName"
                v-model="firstName"
              />
            </div>
            <div class="form-group">
              <label for="lastName">Last Name</label>
              <textarea
                class="form-control"
                id="prodDescription"
                rows="3"
                v-model="lastName"
              ></textarea>
            </div>
            <div class="form-group">
              <label for="emailAddress">Email Address</label>
              <textarea
                class="form-control"
                id="emailAddress"
                rows="3"
                v-model="emailAddress"
              ></textarea>
            </div>

            <div class="form-group">
              <label for="category">Category</label>
              <select class="form-control" id="category" v-model="category">
                <option value="fruits">Male</option>
                <option value="vegetables">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div class="form-group">
              <label for="category">Category</label>
              <select class="form-control" id="category" v-model="category">
                <option value="fruits">Admin</option>
                <option value="vegetables">User</option>
              </select>
            </div>

            <div class="form-group">
              <label for="userProfile">Profile</label>
              <input
                type="url"
                class="form-control"
                id="userProfile"
                rows="3"
                v-model="userProfile"
              />
            </div>

            <div class="form-group">
              <label for="cellphoneNumber">Cellphone Number</label>
              <textarea
                class="form-control"
                id="cellphoneNumber"
                rows="3"
                v-model="cellphoneNumber"
              ></textarea>
            </div>

            <div class="form-group">
              <label for="date">Date Joined</label>
              <input
                type="date"
                class="form-control"
                id="joinDate"
                v-model="joinDate"
              />
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
