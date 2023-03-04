<template>
    <CenterContainer>
        <div class="mt-5 mb-3 text-center">
            <h3>Authorization</h3>
        </div>
        <div class="alert alert-warning mt-1" v-if="error != null">
            <span>{{ error }}</span>
        </div>
        <form id="loginForm" @submit.prevent="submit">
            <div class="my-2">
                <label for="login" class="form-label">Login</label>
                <input v-model="userForm.login" type="text" class="form-control" id="login">
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
    </CenterContainer>
</template>

<script>
import CenterContainer from '../fragments/CenterContainer.vue'

import { requestFactory } from '../../module/requestFactory.js'
import { tokenHolder } from '../../module/tokenHolder.js'

const GENERATE_TOKEN_URL = 'http://localhost:8080/token/get'
const SUCCES_AUTH_URL = '/'

export default {
    data() {
        return {
            userForm : {
                login: "",
                password: ""
            },
            error: null
        }
    },

    methods: 
    {
        sendLoginRequest() {
            requestFactory.postJsonRequest(GENERATE_TOKEN_URL, this.userForm)
                .then(response => this.validateRepose(response))
                .then(response => this.handleReponse(response))
                .then(isAuthed => this.postRedirect(isAuthed));
        },

        validateRepose(response) {
            if(!response.ok) {
                this.error = 'Wrong login or password';
                return null;
            }
            return response.json();
        },

        handleReponse(jsonResponse) {
            if(jsonResponse == null) {
                return false;
            }
            console.log(jsonResponse);
            tokenHolder.setToken(jsonResponse.token);
            return true;
        },

        postRedirect(shouldRedirect) {
            if(shouldRedirect) {
                window.location.pathname = SUCCES_AUTH_URL;
            }
        }
    },
    
    components: {
        CenterContainer
    }
}
</script>