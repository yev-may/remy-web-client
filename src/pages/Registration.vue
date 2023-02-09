<template>
    <div class="mt-5 mb-3 text-center">
        <h3 >Registration</h3>
    </div>
    <form @submit.prevent="submit" id="registrationForm">
        <div class="alert alert-warning mt-1" v-for="error in objectErrors">
                <span>{{ error }}</span>
            </div>
        <div class="my-2">
            <label for="login" class="form-label">Email</label>
            <input v-model="userForm.email" type="text" class="form-control" id="login">
            <div class="alert alert-warning mt-1" v-if="emailErrorMessage != null">
                <span>{{ emailErrorMessage }}</span>
            </div>
        </div>
        <div class="my-2">
            <label for="login" class="form-label">Login</label>
            <input v-model="userForm.login" type="text" class="form-control" id="login">
            <div class="alert alert-warning mt-1" v-if="loginErrorMessage != null">
                <span>{{ loginErrorMessage }}</span>
            </div>
        </div>
        <div class="mb-2">
            <label for="password" class="form-label">Password</label>
            <input v-model="userForm.password" type="password" class="form-control" id="password">
            <div class="alert alert-warning mt-1" v-if="passwordErrorMessage != null">
                <span>{{ passwordErrorMessage }}</span>
            </div>
        </div>
        <div class="mb-3">
            <label for="password" class="form-label">Repeat password</label>
            <input v-model="userForm.repeatPassword" type="password" class="form-control" id="password">
        </div>
    </form>
    <button @click="sendRegistrationRequest()" class="btn w-100 btn-theme">Create account</button>
</template>

<script>
import { requestFactory } from './../module/requestFactory.js'

const REGISTRATION_URL = 'http://localhost:8080/user/register'

export default {
    data() {
        return {
            userForm : {
                email: "",
                login: "",
                password: "",
                repeatPassword: ""
            },
            fieldErrors: [],
            objectErrors: []
        }
    },

    computed: 
    {
        emailErrorMessage() {
            return this.getErrorMessage('email');
        },

        loginErrorMessage() {
            return this.getErrorMessage('login');
        },

        passwordErrorMessage() {
            return this.getErrorMessage('password');
        },
    },
    
    methods: 
    {
        sendRegistrationRequest() {
            requestFactory.postJsonRequest(REGISTRATION_URL, this.userForm)
                .then(response => response.json())
                .then(responseJson => this.validateResponse(responseJson))
                .then(responseJson => console.log(responseJson));
        },

        validateResponse(responseJson) {
            this.fieldErrors = responseJson.fieldErrors;
            this.objectErrors = responseJson.objectErrors;
        },

        getErrorMessage(field) {
            for (let error of this.fieldErrors) {
                if(error.field == field) {
                    return error.message;
                }
            }
        }
    }
}
</script>