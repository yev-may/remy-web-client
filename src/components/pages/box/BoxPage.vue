<template>
    <TopContainer>
        <h2 class="text-center">{{ box.title }}</h2>
    </TopContainer>
</template>

<script>
import TopContainer from '../../fragments/TopContainer.vue';

export default {
    data() {
        return {
            box: {
                title: 'Test 1'
            }
        }
    },

    components: { TopContainer }
}
</script>