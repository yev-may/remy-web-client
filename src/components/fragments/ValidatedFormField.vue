<template>
    <label class="form-label" :for="id">{{ labelValue }}</label>
    <slot></slot>
    <div class="alert alert-warning mt-1" v-if="errorMessage != null">
        <span>{{ errorMessage }}</span>
    </div>
</template>

<script>
export default {
    props: {
        id: String,
        labelValue: String,
        errorMessage: String       
    }
}
</script>