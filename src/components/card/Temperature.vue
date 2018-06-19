<template>
  <div class="card-temperature-row" v-if="!isLoading" :class="{ 'textBlue': isBlue, 'textOrange': isOrange, 'textRed': isRed }">
      <div class='card-temperature'>{{intTemperature}}</div>
      <div class="card-temperature-simbol">&deg;</div>
  </div>
</template>

<script>
export default {
  name: 'temperature',
  props: ['temperature', 'isLoading'],
  data () {
    return {
      isBlue: false,
      isOrange: false,
      isRed: false,
      intTemperature: 0
    }
  },
  methods: {
    changeTemperatureColor: function (temp) {
      const maxBlueColor = 5
      const maxOrangeColor = 25
      if (temp <= maxBlueColor) {
        this.isBlue = true
      } else if (temp > maxBlueColor && temp <= maxOrangeColor) {
        this.isOrange = true
      } else if (temp > maxOrangeColor) {
        this.isRed = true
      }
    },
    convertToInt: function (value) {
      this.intTemperature = Math.round(value)
    }
  },
  watch: {
    temperature: function (newVal, oldVal) {
      this.changeTemperatureColor(newVal)
      this.convertToInt(newVal)
    }
  },
  created () {
    this.convertToInt(this.temperature)
    this.changeTemperatureColor(this.intTemperature)
  }
}
</script>

<style>
  .card-temperature{
    display: inline-block;
    text-align: center;
    font-size: 80px;
    margin-top: 15px;
    margin-bottom: 15px;
    height: 100px;
    line-height: 100px;
    vertical-align: top;
  }

  .card-temperature-simbol{
    font-size: 40px;
    vertical-align: top;
    display: inline-block;
    padding-top: 30px;
  }

  .card-temperature-row{
    position: relative;
    vertical-align: middle;
  }

  .textBlue{
    color: #69A3FF;
  }

  .textOrange{
    color: #FF9632;
  }

  .textRed{
    color: #ED1946;
  }
</style>
