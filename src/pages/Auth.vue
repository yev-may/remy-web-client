<template>
    <div class="container">
        <div class="row justify-content-md-center">
            <div class="col-3">
                <div class="mt-5 mb-3 text-center">
                    <h3 >Authorization</h3>
                </div>
                <form id="loginForm" @submit.prevent="submit">
                    <div class="my-2">
                        <label for="login" class="form-label">Email</label>
                        <input v-model="userForm.email" type="text" class="form-control" id="login">
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

const LOGIN_URL = 'http://localhost:8080/user/login'

export default {
    data() {
        return {
            userForm : {
                email: "",
                password: ""
            }
        }
    },
    methods: {
        sendLoginRequest() {
            fetch(LOGIN_URL, {
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