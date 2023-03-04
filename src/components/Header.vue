<template>
<header>
    <div class="container full-height">
        <div class="row align-items-center full-height">
            <div class="col-auto">
                <div class="row align-items-center">
                    <div class="col-auto">
                        <h1>Remy</h1>
                    </div>
                    <div class="col-auto">
                        <button @click="changeCurrentPath('/boxes')" class="btn btn-theme-c">Boxes</button>
                    </div>
                </div>
            </div>
            <div class="col-auto ms-auto">
                <div class="col-auto">
                    <div v-if="!isAuhed">   
                        <button @click="changeCurrentPath('/auth')" class="btn btn-theme-c">Sign in</button>
                    </div>
                    <div v-else>
                        <button @click="changeCurrentPath('/logout')" class="btn btn-theme-c">Logout</button>
                    </div>
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
    color: var(--color-main);
    background-color: var(--color-secondary);
}
</style>