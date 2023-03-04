<template>
  <TopContainer>

    <BoxFacet v-for="boxFacet in boxes" 
      :boxFacet="boxFacet" 
      class="mb-4"/>

    <div>
      <button class="btn w-100 btn-theme" @click="showNewBoxForm = !showNewBoxForm">{{ creationFromHideBtnText }}</button>
    </div>
    <div v-if="!showNewBoxForm">
      <form>
        <div class="my-2">
          <label for="title" class="form-label">Title</label>
          <input v-model="boxForm.title" type="text" class="form-control" id="title">
          <div class="alert alert-warning mt-1" v-if="emailErrorMessage != null">
            <span>{{ titleErrorMessage }}</span>
          </div>
        </div>
        <button @click="sendBoxCreationRequest" class="btn w-100 btn-theme">Create</button>
      </form>
    </div>

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

import { requestFactory } from '../../../module/requestFactory.js'
import { tokenHolder } from '../../../module/tokenHolder.js'

const REGISTRATION_URL = 'http://localhost:8080/card-box/pageable'
const BOX_CREATION_URL = 'http://localhost:8080/card-box/create'

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
            },
            showNewBoxForm: true,
            fieldErrors: [],
            boxForm: {
                title: ""
            }
        };
    },
    computed: {
        creationFromHideBtnText() {
            return this.showNewBoxForm ? "Create new" : "Cancel";
        },
        titleErrorMessage() {
            return getErrorMessage("title");
        }
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
        },
        sendBoxCreationRequest() {
            requestFactory.postAuthedJsonRequest(BOX_CREATION_URL, this.boxForm, tokenHolder.getToken());
        },
        // ToDo | Extract
        getErrorMessage(field) {
            for (let error of this.fieldErrors) {
                if (error.field == field) {
                    return error.message;
                }
            }
        }
    },
    beforeMount() {
        this.updateCardBoxes();
    },
    component: {
        TopContainer
    },
    components: { TopContainer, BoxFacet }
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