<template>
  <TopContainer>

    <BoxFacet v-for="boxFacet in boxes" 
      :boxFacet="boxFacet" 
      class="mb-4"/>

    <NewBoxForm />

    <div class="overflow-auto mt-4">
      <b-pagination 
        v-model="currentPage" 
        :total-rows="totalRows" 
        :per-page="perPage" 
        @change="handlePageChange"
        align="center">
      </b-pagination>
    </div>
  </TopContainer>
</template>

<script>
import TopContainer from '../../fragments/TopContainer.vue'
import BoxFacet from './BoxFacet.vue'
import NewBoxForm from './NewBoxForm.vue'

import { requestFactory } from '../../../module/requestFactory.js'
import { tokenHolder } from '../../../module/tokenHolder.js'

const REGISTRATION_URL = 'http://localhost:8080/box/pageable'

export default {
    data() {
        return {
            boxes: [],
            perPage: 3,
            totalRows: 1,
            currentPage: 1,
            cardBoxesRequest: {
                page: this.currentPage,
                size: this.perPage
            }
        };
    },

    methods: {
        handlePageChange(value) {
            this.currentPage = value;
            this.updateCardBoxes();
        },
        updateCardBoxes() {
            this.getCardBoxes()
                .then(json => this.handleResponse(json));
        },
        getCardBoxes() {
            return requestFactory.postAuthedJsonRequest(REGISTRATION_URL, { page: this.currentPage - 1, size: this.perPage }, tokenHolder.getToken())
                .then(response => response.json());
        },
        handleResponse(json) {
            this.boxes = json.facets;
            this.totalRows = json.totalElements;
            console.log(this.boxes);
        }
    },
    beforeMount() {
        this.updateCardBoxes();
    },
    component: {
        TopContainer
    },
    components: { TopContainer, BoxFacet, NewBoxForm }
}
</script>

<style>
.page-item>.page-link {
  color: var(--color-c);
  background-color: var(--color-1);
  border: var(--bs-pagination-border-width) solid var(--color-c)
}

.page-item.active>.page-link {
  color: var(--color-1);
  background-color: var(--color-c);
}
</style>