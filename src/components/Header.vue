<template>
<header >
    <div class="container full-height">
        <div class="row align-items-center full-height">
            <div class="col-auto">
                <h1>Remy</h1>
            </div>
            <div class="col-auto ms-auto">
                <div v-if="!isAuhed">   
                    <button @click="changeCurrentPath('/auth')" class="btn btn-theme-c">Sign in</button>
                </div>
                <div v-else>
                    <button @click="changeCurrentPath('/logout')" class="btn btn-theme-c">Logout</button>
                </div>
            </div>
        </div>
    </div>
</header>
</template>

<script>
import { tokenHolder } from './../module/tokenHolder.js'

export default {
    data() {
        return {
            isAuhed : tokenHolder.isUathed()
        }
    },

    methods: {
        changeCurrentPath(newPath) {
            if(window.location.pathname != newPath) {
                window.location.pathname = newPath;
            }
        }
    }
}
</script>

<style>
header {
    height: 7.5vh;
    color: var(--color-1);
    background-color: var(--color-c);
}
</style>