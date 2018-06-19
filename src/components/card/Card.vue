<template>
    <div class="card">
      <div class='card-header card-divider'>{{cityName}}, {{country}}</div>
        <div class='card-content' :class='isFooterData? "cardExpansible" : "cardNormal"'>
            <loading v-if="isLoading" />
            <retry
              v-if="isError"
              v-on:reCallApi="reCallApi()"
              />
            <div v-if="!isError && !isLoading">
              <temperature
                :temperature="this.temperature"
                :isLoading="this.isLoading"
                />
              <div class='card-footer' v-if="!isLoading">
                  <humidity-pressure
                    v-if="isFooterData"
                    :humidity="this.humidity"
                    :pressure="this.pressure"
                  />
                  <last-update :lastUpdate="this.lastUpdate" />
              </div>
            </div>
        </div>
    </div>
</template>

<script>
import Loading from '@/components/card/Loading'
import HumidityPressure from '@/components/card/HumidityPressure'
import LastUpdate from '@/components/card/LastUpdate'
import Temperature from '@/components/card/Temperature'
import Retry from '@/components/card/Retry'
import axios from 'axios'
import moment from 'moment'

const openWeatherID = 'dd4ed5346161bb03b748eeca4f90adb7'

export default {
  name: 'card',
  props: ['cityName', 'country', 'isFooterData'],
  components: {
    Loading,
    HumidityPressure,
    LastUpdate,
    Temperature,
    Retry,
    moment
  },
  data: function () {
    return {
      isLoading: false,
      isError: false,
      temperature: 0,
      humidity: 0,
      pressure: 0,
      storageName: '',
      lastUpdate: '',
      isScheduled: false
    }
  },
  methods: {
    getTemperature: function (cityName, country) {
      const data = localStorage.getItem(this.storageName)
      if (data === null) {
        this.callApi(cityName, country)
      } else {
        const dataObj = JSON.parse(data)
        const date = moment(dataObj.lastUpdate)
        const dateToCompare = date.add(10, 'm')
        if (moment(moment().format()).isAfter(dateToCompare)) {
          this.callApi(cityName, country)
        } else {
          let placeString = localStorage.getItem(this.storageName)
          let place = JSON.parse(placeString)
          this.saveTemperature(place.temperature, place.humidity, place.pressure, place.lastUpdate)
          this.isLoading = false
        }
      }
    },
    reCallApi: function () {
      this.callApi(this.cityName, this.country)
    },
    callApi: function (cityName, country) {
      this.isLoading = true
      this.isError = false
      axios.get(`http://api.openweathermap.org/data/2.5/forecast?APPID=${openWeatherID}&q=${cityName},${country}&units=metric`)
        .then(response => {
          const {city, list} = response.data
          let date = moment().format()
          this.saveTemperature(
            list[0].main.temp,
            list[0].main.humidity,
            list[0].main.grnd_level,
            date
          )

          localStorage.setItem(this.storageName,
            JSON.stringify(this.createObject(
              city.name,
              city.country,
              list[0].main.temp,
              list[0].main.humidity,
              list[0].main.grnd_level,
              date
            )
            ))
          this.isLoading = false
          this.isScheduled = false
          this.scheduleCallApi(cityName, country)
        })
        .catch(error => {
          console.log(error)
          this.isLoading = false
          this.isError = true
        })
    },
    createObject: function (city, country, temperature, humidity, pressure, updated) {
      let places = {'city': city, 'country': country, 'temperature': temperature, 'humidity': humidity, 'pressure': pressure, 'lastUpdate': updated}
      return places
    },
    saveTemperature: function (temperature, humidity, pressure, lastUpdate) {
      this.temperature = temperature
      this.lastUpdate = lastUpdate
      this.humidity = humidity
      this.pressure = pressure
    },
    scheduleCallApi: function (cityName, country) {
      const self = this
      this.isScheduled = true
      setTimeout(function () {
        self.callApi(cityName, country)
      }, 600000)
    }
  },
  created () {
    this.storageName = `ContaazulFrontEnd-${this.cityName},${this.country}`
    this.getTemperature(this.cityName, this.country)
  }
}
</script>

<style>
    .card{
        border-radius: 5px;
        background-color: #fff;
        width: 250px;
        min-width: 250px;
        border-top: 1px solid #EBEBEB;
        border-left: 1px solid #EBEBEB;
        border-right: 1px solid #EBEBEB;
        text-align: left;
        vertical-align: middle;
        margin-left: 40px;
        box-shadow: 1px 2px 2px 2px rgba(51, 51, 51, .1);
    }

    .cardNormal{
        height: 170px;
    }

    .cardExpansible{
        height: 216px;
    }
    .card-header{
        text-align: center;
        color: #737C84;
        font-size: 18px;
        padding-top: 10px;
        padding-bottom: 10px;
        margin-bottom: 1px;
    }

    .card-divider{
        border-bottom: 1px solid #EBEBEB;
    }

    .card-content{
        position: relative;
        text-align: center;
    }

    .card-footer{
        text-align: center;
        background-color: #f1f1f1;
        color: #B4B4B4;
        padding-top: 15px;
        padding-bottom: 15px;
        font-size: 10px;
    }

</style>
