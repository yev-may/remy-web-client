<template>
<header >
    <div class="container full-height">
        <div class="row align-items-center full-height">
            <div class="col-auto">
                <h1>Remy</h1>
            </div>
            <div class="col-auto ms-auto">
                <a href="/" class="btn btn-sign-in" role="button">Sign in</a>
            </div>
        </div>
    </div>
</header>
</template>


<style>
header {
    height: 7.5vh;
    color: var(--color-1);
    background-color: var(--color-c);
}
.btn-sign-in {
    color: var(--color-1) !important;
    border-color: var(--color-1) !important;
    background-color: var(--color-c) !important;
}
.btn-sign-in:hover {
    color: var(--color-c) !important;
    border-color: var(--color-1) !important;
    background-color: var(--color-1) !important;
}
.btn-sign-in:active {
    color: var(--color-1) !important;
    border-color: var(--color-1) !important;
    background-color: var(--color-c) !important;
}
</style>