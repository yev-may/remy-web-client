<template>
    <CenterContainer>
        <form @submit.prevent="submit" id="newCardForm">
            <div class="form-group mb-3">
                <label lass="mb-1" for="questionTextArea">Question</label>
                <textarea v-model="cardForm.question" class="form-control" id="questionTextArea" rows="3" placeholder="Type here the question"></textarea>
            </div>
            <div class="form-group">
                <label class="mb-1" for="answerTextArea">Answer</label>
                <textarea v-model="cardForm.answer" class="form-control" id="answerTextArea" rows="3" placeholder="Type here the answer"></textarea>
            </div>
        </form>
        <button @click="showConfirmationForm()" class="btn w-100 btn-theme mt-3">Save</button>
        <a class="btn w-100 btn-theme mt-3" :href="getBoxUrl()">Back</a>

        <NewCardSaveConfirmation 
            :cardForm="cardForm" 
            :isVisible="isConfirmationFormVisible" 
            :cancelCallback="hideConfirmationForm"
            :confirmCallback="saveCard"/>
    </CenterContainer>
</template>

<script>
import CenterContainer from '../../fragments/CenterContainer.vue';
import NewCardSaveConfirmation from './NewCardSaveConfirmation.vue';

import api from '../../../module/apiService';

import { CARD_CREATION_URL } from '../../../module/apiUrls';

export default {
    data() {
        return {
            cardForm: {
                boxId: this.getBoxId(),
                question: '',
                answer: ''
            },
            isConfirmationFormVisible: false
        }
    },

    methods:
    {
        showConfirmationForm() {
            this.isConfirmationFormVisible = true;
        },

        hideConfirmationForm() {
            this.isConfirmationFormVisible = false;
        },

        saveCard() {
            api.postAuthedJson(CARD_CREATION_URL, this.cardForm)
            .then(this.hideConfirmationForm())
            .then(this.clearForm());
        },

        clearForm() {
            this.cardForm.question = "";
            this.cardForm.answer = "";
        },

        getBoxUrl() {
            return '/box?id=' + this.getBoxId();
        },

        // ToDo | Refactor
        getBoxId() {
            const queryString = window.location.search;
            const urlParams = new URLSearchParams(queryString);
            return urlParams.get('box-id');
        }
    },

    components: { CenterContainer, NewCardSaveConfirmation }
}
</script>