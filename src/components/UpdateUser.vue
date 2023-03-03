<template>
    <div>
        <h2>Edit User</h2>
        
        <form v-for="user in user" :key="user">
            <input type="text" :placeholder="user.firstName" class="form-control text-center w-75 mx-auto mb-2" v-model="payload.firstName">
            <input type="text" :placeholder="user.lastName" class="form-control text-center w-75 mx-auto mb-2" v-model="payload.lastName">  
            <input type="text" :placeholder="user.gender" class="form-control text-center w-75 mx-auto mb-2" v-model="payload.gender">
            <input type="number" :placeholder="user.cellphoneNumber" class="form-control text-center w-75 mx-auto mb-2" v-model="payload.cellphoneNumber">
            <input type="email" :placeholder="user.emailAdd" class="form-control text-center w-75 mx-auto mb-2" v-model="payload.emailAdd">
            <input type="url" :placeholder="user.userProfile" class="form-control text-center w-75 mx-auto mb-2" v-model="payload.userProfile">
            <input type="text" placeholder="Enter Password" class="form-control text-center w-75 mx-auto mb-2" v-model="payload.userPass">
            <div class="btn-group">
                <button type="submit" class="btn btn-success" v-on:click="edit">Submit</button>
                <button type="reset" class="btn btn-danger">Reset</button>
            </div>
        </form>
        </div>
</template>

<script>
import {useStore} from 'vuex';
import {computed} from '@vue/runtime-core';
import router from '@/router';
export default{
    setup(){
        const store = useStore();
        const getLocation = () => {
            let locationArr = location.pathname.split('/');
            let locationID = locationArr[locationArr.length-1];
            return locationID
        }
        let payload = {
            userID: getLocation(),
            firstName: '',
            lastName: '',
            gender: '',
            cellphoneNumber: '',
            emailAdd: '',
            userPass: '',
            userProfile: 'https://i.postimg.cc/3rZ0H0D8/profile-Image.png',
        };
        store.dispatch("updateProduct")
        
        // console.log(getLocation())
        
        const edit = () => {
            store.dispatch("updateUser", payload)
            router.push({name:'admin'})
            store.dispatch("fetchUsers");
        }
        const user = computed(()=>store.state.user)
        return{
            edit,
            user,
            payload
        }
    },
    
}
</script>
