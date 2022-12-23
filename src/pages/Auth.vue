<template>
    <div class="container">
        <div class="row justify-content-md-center">
            <div class="col-3">
                <div class="mt-5 mb-3 text-center">
                    <h3 >Authorization</h3>
                </div>
                <form>
                    <div class="my-2">
                        <label for="login" class="form-label">Login</label>
                        <input type="text" class="form-control" id="login">
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" class="form-control" id="password">
                    </div>
                    <button type="submit" class="btn w-100 btn-theme">Sign in</button>
                </form>
                <div class="mt-3 text-center">
                    <a href="/registration">Create account</a>
                </div>
            </div>
        </div>
    </div>
</template>