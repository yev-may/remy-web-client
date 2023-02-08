<template>
    <div class="container">
        <div class="row justify-content-md-center">
            <div class="col-3">
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
            </div>
        </div>
    </div>
</template>

<script>
import { requestFactory } from './../module/requestFactory.js'
import { tokenHolder } from './../module/tokenHolder.js'

const GENERATE_TOKEN_URL = 'http://localhost:8080/token/new'

export default {
    data() {
        return {
            userForm : {
                username: "",
                password: ""
            }
        }
    },
    methods: {
        sendLoginRequest() {
    
            requestFactory.uathRequest(GENERATE_TOKEN_URL, 'POST', 
                {'Content-Type': 'application/json;charset=utf-8'}, 
                JSON.stringify(this.userForm))
                    .then(jwtResponse => jwtResponse.json())
                    .then(jwtResponseJson => this.handlejwtResponse(jwtResponseJson));            
        },
        
        handlejwtResponse(jwtResponseJson) {
            tokenHolder.setToken(jwtResponseJson.jwtToken);
        }
    }
}
</script>