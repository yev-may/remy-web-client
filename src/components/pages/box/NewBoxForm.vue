<template>
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
</template>

<script>
import api from '../../../module/apiService.js'

import { BOX_CREATION_URL } from '../../../module/apiUrls';

export default {

    data() {
        return {
            showNewBoxForm: true,
            fieldErrors: [],
            boxForm: {
                title: ""
            }
        }
    },

    computed: {
        creationFromHideBtnText() {
            return this.showNewBoxForm ? "Create new" : "Cancel";
        },
        titleErrorMessage() {
            return getErrorMessage("title");
        }
    },

    methods: 
    {
        sendBoxCreationRequest() {
            api.postAuthedJson(BOX_CREATION_URL, this.boxForm);
        },
        // ToDo | Extract
        getErrorMessage(field) {
            for (let error of this.fieldErrors) {
                if (error.field == field) {
                    return error.message;
                }
            }
        }
    }
}
</script>