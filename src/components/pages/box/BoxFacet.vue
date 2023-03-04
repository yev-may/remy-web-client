<template>
    <div class="theme-card-box">
      <div class="text-center">
        <h5>{{ boxFacet.title }}</h5>
      </div>
      <div>
        <div>
          <a class="btn w-100 btn-theme">Open</a>
          <p class="mt-3 mb-0">Last repeated: {{ boxFacet.lastRepeat }}</p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    props: {
        boxFacet: {
            type: Object,
            required: true
        }
    }
}
</script>