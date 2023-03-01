 <template>
    <div class="container-fluid">
      <div class="row"><h1>Users</h1></div>
      <div class="row">
      <table class="table table-striped"  >
         <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Lastname</th>
      <th scope="col">EmailAddress</th>
      <th scope="col">Action</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
   <tr v-for="user in users" :key="user.userID">
<td>{{user.firstName}}</td>
<td>{{user.lastName}}</td>
<td>{{user.emailAddress}}</td>
<td></td>
<td></td>
</tr>
  </tbody>
     </table>
   </div>
    </div>
 </template>
 
 <script>
 import {computed} from '@vue/runtime-core';
import {useStore} from 'vuex';
export default{
  setup(){

    const store= useStore();
    store.dispatch('fetchUsers');
    const users = 
    computed(()=>store.state.users);
    return{
      users
    }
  }

}
 </script>
 
 <style scoped>
 
 </style>