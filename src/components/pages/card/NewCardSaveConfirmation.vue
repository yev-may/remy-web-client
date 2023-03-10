<template>
    <div class="confirmation-wrapper" v-if="isVisible">
        <div class="confirmation-content">
            <div class="theme-form">
                <p class="mb-0">Question:</p>
                <p>{{ cardForm.question }}</p>
                <p class="mb-0">Answer:</p>
                <p>{{ cardForm.answer }}</p>
                <p class="mb-0">Are you sure you want to save the card?</p>
                <button @click="cancel()" class="btn w-50 btn-theme mt-3">Cancel</button>
                <button @click="confirm()" class="btn w-50 btn-theme mt-3">Confirm</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        cardForm: Object,
        isVisible: Boolean,
        cancelCallback: Function,
        confirmCallback: Function,
    },

    methods: 
    {
        cancel() {
            this.cancelCallback();
        },

        confirm() {
            this.confirmCallback();
        }
    }
}
</script>

<style>
.confirmation-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.confirmation-content {
  max-width: 450px;
  text-align: center;
}

</style>