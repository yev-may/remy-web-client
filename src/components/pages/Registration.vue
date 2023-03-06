<template>
    <CenterContainer>
        <div class="mt-5 mb-3 text-center">
            <h3>Registration</h3>
        </div>
        <form @submit.prevent="submit" id="registrationForm">
            <div class="alert alert-warning mt-1" v-for="error in objectErrors">
                <span>{{ error }}</span>
            </div>
            <div class="my-2">
                <ValidatedFormField labelValue="Email" :errorMessage="emailErrorMessage" id="email">
                    <input v-model="userForm.email" type="text" class="form-control" id="email" >
                </ValidatedFormField>
            </div>
            <div class="my-2">
                <ValidatedFormField labelValue="Login" :errorMessage="loginErrorMessage" id="login">
                    <input v-model="userForm.login" type="text" class="form-control" id="login">
                </ValidatedFormField>
                <label for="login" class="form-label"></label>
            </div>
            <div class="mb-2">
                <ValidatedFormField labelValue="Password" :errorMessage="passwordErrorMessage" id="password">
                    <input v-model="userForm.password" type="password" class="form-control" id="password">
                </ValidatedFormField>
            </div>
            <div class="mb-3">
                <ValidatedFormField labelValue="Repeat password" :errorMessage="passwordErrorMessage" id="repeatPassword">
                    <input v-model="userForm.repeatPassword" type="password" class="form-control" id="repeatPassword">
                </ValidatedFormField>
            </div>
        </form>
        <button @click="sendRegistrationRequest()" class="btn w-100 btn-theme">Create account</button>
    </CenterContainer>
</template>

<script>
import CenterContainer from '../fragments/CenterContainer.vue'
import ValidatedFormField from '../fragments/ValidatedFormField.vue'

import api from './../../module/apiService.js'

import { REGISTRATION_URL } from '../../module/apiUrls'
import { POST_REGISTRATION_URL } from '../../module/apiUrls'

export default {
    data() {
        return {
            userForm: {
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
            api.postJson(REGISTRATION_URL, this.userForm)
                .then(response => response.json())
                .then(responseJson => this.validateResponse(responseJson))
                .then(isRegistered => this.postRedirect(isRegistered));
        },

        validateResponse(responseJson) {
            this.fieldErrors = responseJson.fieldErrors;
            this.objectErrors = responseJson.objectErrors;
            return responseJson.fieldErrors == null && responseJson.objectErrors == null
        },

        postRedirect(shouldRedirect) {
            if(shouldRedirect) {
                window.location.pathname = POST_REGISTRATION_URL;
            }
        },

        // ToDo | Extract
        getErrorMessage(field) {
            for (let error of this.fieldErrors) {
                if (error.field == field) {
                    return error.message;
                }
            }
        }
    },

    components: {
        CenterContainer, ValidatedFormField
    }
}
</script>