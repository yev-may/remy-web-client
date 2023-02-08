<template>
    <div class="mt-5 mb-3 text-center">
        <h3 >Authorization</h3>
    </div>
    <form id="loginForm" @submit.prevent="submit">
        <div class="my-2">
            <label for="login" class="form-label">Login</label>
            <input v-model="userForm.username" type="text" class="form-control" id="login">
        </div>
        <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input v-model="userForm.password" type="password" class="form-control" id="password">
        </div>
        <button @click="sendLoginRequest()" class="btn w-100 btn-theme">Sign in</button>
    </form>
    <div class="mt-3 text-center">
        <a href="/registration">Create account</a>
    </div>
</template>

<script>
import { requestFactory } from './../module/requestFactory.js'
import { tokenHolder } from './../module/tokenHolder.js'

const GENERATE_TOKEN_URL = 'http://localhost:8080/token/new'
const SUCCES_AUTH_URL = '/'

export default {
    data() {
        return {
            userForm : {
                username: "",
                password: ""
            }
        }
    },

    methods: 
    {
        sendLoginRequest() {
            requestFactory.postJsonRequest(GENERATE_TOKEN_URL, this.userForm)
                    .then(response => this.validateResponse(response))
                    .then(jwtResponse => this.toJson(jwtResponse))
                    .then(jwtResponseJson => this.handlejwtResponse(jwtResponseJson))
                    .then(jwtToken => this.succesfulRedirect(jwtToken));           
        },
        
        validateResponse(response) {
            if(!response.ok) {
                alert('Wrong login or password');
                return null;
            }
            return response;
        },

        toJson(jwtResponse) {
            if (jwtResponse == null) return;
            return jwtResponse.json();
        },

        handlejwtResponse(jwtResponseJson) {
            if (jwtResponseJson == null) return;
            tokenHolder.setToken(jwtResponseJson.jwtToken);
            return jwtResponseJson.jwtToken;
        },

        succesfulRedirect(jwtToken) {
            if(jwtToken == null) return;
            window.location.pathname = SUCCES_AUTH_URL;
        }
    }
}
</script>