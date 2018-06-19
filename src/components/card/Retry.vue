<template>
  <div class="card-retry vAlign" v-if="!isError">
      <div class="card-retry-text">Something went wrong</div>
      <div class="card-retry-button" v-on:click="callAPi">Try Again</div>
  </div>
</template>

<script>

export default {
  name: 'retry',
  props: ['isError'],
  methods: {
    callAPi: function () {
      this.$emit('reCallApi', this.cityName, this.country)
    }
  }
}
</script>

<style>
  .card-retry{
    text-align: center;
  }

  .card-retry-text{
    color: #ED1946;
    font-size: 16px;
    margin-bottom: 20px;

  }
  .card-retry-button{
    color: #737C84;
    border: 1px solid #737C84;
    padding: 10px;
    width: 100px;
    text-align: center;
    border-radius: 21px;
    margin: 0px auto;

  }
</style>
