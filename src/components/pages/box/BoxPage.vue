<template>
    <TopContainer>
        <div class="mb-3">
            <h3 class="text-center">{{ box.title }}</h3>
            <div>
                <a class="btn w-100 btn-theme" href="">Details</a>
            </div> 
        </div>
        
        <div class="mb-3">
            <a class="btn w-100 btn-theme" :href="getNewCardPageUrl()">New card</a>
        </div>
        
        <div class="mb-4">
            <p class="mb-2">Cards to repeat for today: {{ box.cardToRepeatQuantity }}</p>
            <a class="btn w-100 btn-theme" href="">Start repetition</a>
        </div>
        
    </TopContainer>
</template>

<script>
import TopContainer from '../../fragments/TopContainer.vue';
import apiService from '../../../module/apiService';
import { BOX_URL } from '../../../module/apiUrls';

export default {
    data() {
        return {
            box: {
                id: null,
                title: null,
                maxRepetitionLevel: null,
                lastRepetitionLevel: null,
                lastRepetitionDate: null,
                cardToRepeatQuantity: null
            }
        }
    },

    methods:
    {
        getBox() {
            apiService.postAuthedJson(BOX_URL, this.getBoxId())
                .then(response => response.json())
                .then(boxJson => {
                    this.box.id = boxJson.id;
                    this.box.title = boxJson.title;
                    this.box.cardToRepeatQuantity = boxJson.cardToRepeatQuantity;
                });
        },

        getNewCardPageUrl() {
            return '/card/new?box-id=' + this.getBoxId();
        },

        // ToDo | Refactor
        getBoxId() {
            const queryString = window.location.search;
            const urlParams = new URLSearchParams(queryString);
            return urlParams.get('id')
        }
    },

    mounted() {
        this.getBox();
    },

    components: { TopContainer }
}
</script>