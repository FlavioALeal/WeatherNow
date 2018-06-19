<template>
  <div class="card-footer-data">
      <div class="row50">
          <div class="card-footer-label">HUMIDITY</div>
          <div class
          ="card-footer-value humidity">{{intHumidity}}<span>%</span></div>
      </div>
      <div class="row50">
          <div class="card-footer-label">PRESSURE</div>
          <div class="card-footer-value pressure">{{intPressure}}<span>hPa</span></div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'humidity-pressure',
  props: ['humidity', 'pressure'],
  data () {
    return {
      intPressure: 0,
      intHumidity: 0
    }
  },
  methods: {
    pressureToInt: function (value) {
      this.intPressure = Math.round(value)
    },
    humidityToInt: function (value) {
      this.intHumidity = Math.round(value)
    }
  },
  watch: {
    pressure: function (newVal, oldVal) {
      this.pressureToInt(newVal)
    },
    humidity: function (newVal, oldVal) {
      this.humidityToInt(newVal)
    }
  },
  created () {
    this.pressureToInt(this.pressure)
    this.humidityToInt(this.humidity)
  }
}
</script>

<style>
  .card-footer-label{
    font-size: 12px;
    margin-bottom: 5px;
  }

  .card-footer-value{
    font-size: 15px;
    font-weight: bold;
    color: #737C84;
  }

  .card-footer-value span{
    font-size: 11px !important;
    font-weight: normal !important;
  }

  .card-footer-data {
    margin-bottom: 15px;
    height: 30px;
  }
  .row50{
    width: 50%;
    float: left;
  }

</style>
