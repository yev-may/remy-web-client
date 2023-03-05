<template>
    <TopContainer>
        <div class="mb-3">
            <h3 class="text-center">{{ box.title }}</h3>
            <div>
                <a class="btn w-100 btn-theme" href="">Details</a>
            </div> 
        </div>
        
        <div class="mb-3">
            <p class="mb-2">New cards today: {{ box.cardsAddedToday }}</p>
            <a class="btn w-100 btn-theme" :href="getNewCardPageUrl()">New card</a>
        </div>
        
        <div class="mb-4">
            <p class="mb-2">Cards to repeat for today: {{ box.cardsToRepeatToday }}</p>
            <a class="btn w-100 btn-theme" href="">Start repetition</a>
        </div>
        
    </TopContainer>
</template>

<script>
import TopContainer from '../../fragments/TopContainer.vue';

export default {
    data() {
        return {
            box: {
                id: 1,
                title: 'Test 1',
                cardsAddedToday: 5,
                cardsToRepeatToday: 5
            }
        }
    },

    methods:
    {
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

    components: { TopContainer }
}
</script>