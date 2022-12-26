<template>
<header >
    <div class="container full-height">
        <div class="row align-items-center full-height">
            <div class="col-auto">
                <h1>Remy</h1>
            </div>
            <div class="col-auto ms-auto">
                <button @click="changeCurrentPath('/auth')" class="btn btn-theme-c">Sign in</button>
            </div>
        </div>
    </div>
</header>
</template>

<script>
export default {
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