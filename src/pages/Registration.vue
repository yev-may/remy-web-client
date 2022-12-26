<template>
    <div class="container">
        <div class="row justify-content-md-center">
            <div class="col-3">
                <div class="mt-5 mb-3 text-center">
                    <h3 >Registration</h3>
                </div>
                <form @submit.prevent="submit" id="registrationForm">
                    <div class="my-2">
                        <label for="login" class="form-label">Email</label>
                        <input v-model="userForm.email" type="text" class="form-control" id="login">
                    </div>
                    <div class="my-2">
                        <label for="login" class="form-label">Login</label>
                        <input v-model="userForm.login" type="text" class="form-control" id="login">
                    </div>
                    <div class="mb-2">
                        <label for="password" class="form-label">Password</label>
                        <input v-model="userForm.password" type="password" class="form-control" id="password">
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Repeat password</label>
                        <input v-model="userForm.repeatPassword" type="password" class="form-control" id="password">
                    </div>
                </form>
                <button @click="sendRegistrationRequest()" class="btn w-100 btn-theme">Create account</button>
            </div>
        </div>
    </div>
</template>

<script>

const REGISTRATION_URL = 'http://localhost:8080/user/register'

export default {
    data() {
        return {
            userForm : {
                email: "",
                login: "",
                password: "",
                repeatPassword: ""
            }
        }
    },
    methods: {
        sendRegistrationRequest() {
            fetch(REGISTRATION_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(this.userForm)
            })
            .then(response => response.json())
            .then(responseJson => console.log(responseJson));
        }
    }
}
</script>