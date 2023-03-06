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
        <button @click="saveCard()" class="btn w-100 btn-theme mt-3">Save</button>
        <a class="btn w-100 btn-theme mt-3" :href="getBoxUrl()">Back</a>
    </CenterContainer>
</template>

<script>
import CenterContainer from '../../fragments/CenterContainer.vue';

import api from '../../../module/apiService';

const NEW_CARD_URL = 'http://localhost:8080/card/create'

export default {
    data() {
        return {
            cardForm: {
                boxId: this.getBoxId(),
                question: '',
                answer: ''
            }
        }
    },

    methods:
    {
        saveCard() {
            api.postAuthedJson(NEW_CARD_URL, this.cardForm)
        },

        getBoxUrl() {
            return '/box?id=' + this.getBoxId();
        },

        // ToDo | Refactor
        getBoxId() {
            const queryString = window.location.search;
            const urlParams = new URLSearchParams(queryString);
            return urlParams.get('box-id')
        }
    },

    components: { CenterContainer }
}
</script>