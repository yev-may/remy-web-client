<template>
    <CenterContainer>
        <div class="mt-5 mb-3 text-center">
            <h3>Logout</h3>
            <p>Are you sure you want to logout?</p>
        </div>
        <button @click="logout()" class="btn w-100 btn-theme">Sumbit</button>
    </CenterContainer>
</template>

<script>
import CenterContainer from '../fragments/CenterContainer.vue';

import { tokenHolder } from './../../module/tokenHolder.js'

const AFTER_LOGOUT_URL = "/"

export default {
    methods: 
    {
        logout() {
            tokenHolder.logout();
            window.location.pathname = AFTER_LOGOUT_URL;
        }
    },

    components: {
        CenterContainer
    }
}
</script>