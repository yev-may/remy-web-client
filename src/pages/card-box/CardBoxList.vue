<template>

  <div class="theme-card-box mb-4" v-for="box in boxes">
    <div class="text-center">
      <h5>{{ box.title }}</h5>
    </div>
    <div>
      <div>
        <a class="btn w-100 btn-theme">Repeat</a>
        <p>{{ 'Last repeat: ' + box.lastRepeat }}</p>
      </div>
      <div>
        <a class="btn w-100 btn-theme">Details</a>
      </div>
    </div>
  </div>

  <b-pagination
    v-model="currentPage"
    :total-rows="totalRows"
    :per-page="perPage"
    @change="handlePageChange">
  </b-pagination>

</template>

<script>
import { requestFactory } from './../../module/requestFactory.js'
import { tokenHolder } from './../../module/tokenHolder.js'

const REGISTRATION_URL = 'http://localhost:8080/card-box/pageable'

export default {
    data() {
      return {
        boxes: [],

        perPage: 3,
        totalRows: 1,
        currentPage: 1,

        cardBoxesRequest : {
          page: this.currentPage,
          size: this.perPage
        }
      }
    },

    methods: 
    {
      handlePageChange(value) {
        this.currentPage = value;
        this.updateCardBoxes();
      },
      
      updateCardBoxes() {
        this.getCardBoxes()
          .then(json => this.handleResponse(json));
      },

      getCardBoxes() {
        return requestFactory.postAuthedJsonRequest(REGISTRATION_URL, { page: this.currentPage, size: this.perPage }, tokenHolder.getToken())
          .then(response => response.json());
      },

      handleResponse(json) {
        this.boxes = json.facets;
        this.currentPage = json.currentPage;
        this.totalRows = json.totalElements;
        console.log(this.boxes);
      }
    },
    
    beforeMount() {
      this.updateCardBoxes();
    }
}
</script>