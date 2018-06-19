import Vue from 'vue'
import Card from '@/components/card/Card'
import moment from 'moment'

const Constructor = Vue.extend(Card)
const cityName = 'Curitiba'
const country = 'BR'
const temperature = '12.2'
const humidity = '90.5'
const pressure = '777,65'
const updated = '10:11:12'
const storageNameBegin = 'ContaazulFrontEnd'

describe('Card.vue', () => {
  const vm = new Constructor({
    propsData: {
      cityName: cityName,
      country: country,
      isFooterData: false,
      isLoading: false,
      lastUpdate: moment().format()
    }
  }).$mount()

  it('Deve mostrar o nome da cidade e pais no Header', () => {
    const txt = vm.$el.querySelector('.card-header').textContent

    expect(txt).to.contain(cityName)
    expect(txt).to.contain(country)
  })

  it('Se isFooterData == false NAO deve mostrar o componente "HumidityPressure"', () => {
    const footerData = vm.$el.querySelector('.card-footer-data')

    expect(footerData).to.equal(null)
  })

  it('Se isLoading == true DEVE mostrar o component "Loading"', () => {
    const loading = vm.$el.querySelector('.card-loading')
    vm._data.isLoading = true
    expect(vm._data.isLoading).to.equal(true)
    expect(loading).to.not.equal(null)
  })

  it('Se isLoading == true NAO deve mostrar o componente "HumidityPressure"', () => {
    const footerData = vm.$el.querySelector('.card-footer-data')
    vm._data.isLoading = true
    expect(vm._data.isLoading).to.equal(true)
    expect(footerData).to.equal(null)
  })

  it('Se isLoading == true NAO deve mostrar o componente "LastUpdate"', () => {
    const lastUpdate = vm.$el.querySelector('time')
    vm._data.isLoading = true
    expect(vm._data.isLoading).to.equal(true)
    expect(lastUpdate).to.equal(null)
  })

  it('Se isLoading == true NAO deve mostrar o componente "Temperature"', () => {
    const temp = vm.$el.querySelector('.card-temperature')
    vm._data.isLoading = true
    expect(vm._data.isLoading).to.equal(true)
    expect(temp).to.equal(null)
  })

  it('Testando se a funcao getTemperatura esta salvando os nomes da cidade e estado', () => {
    vm.getTemperature(cityName, country)

    expect(vm._props.cityName).to.equal(cityName)
    expect(vm._props.country).to.equal(country)
  })

  it('Testando funcao callApi', () => {
    vm._data.isLoading = false
    vm.callApi()

    expect(vm._data.isLoading).to.equal(true)
  })

  it('Testando se a funcao recallApi esta chamando a funcao callApi', () => {
    vm._data.isLoading = false
    vm._data.isError = true
    vm.reCallApi()

    expect(vm._data.isLoading).to.equal(true)
    expect(vm._data.isError).to.equal(false)
  })

  it('Testando se a funcao createObject retorna um objeto com os dados informados', () => {
    const object = vm.createObject(cityName, country, temperature, humidity, pressure, updated)

    expect(object).to.be.a('object')
    expect(object.city).to.equal(cityName)
    expect(object.country).to.equal(country)
    expect(object.temperature).to.equal(temperature)
    expect(object.humidity).to.equal(humidity)
    expect(object.pressure).to.equal(pressure)
    expect(object.lastUpdate).to.equal(updated)
  })

  it('A funcao saveTemperature deve salvar os dados da temperatura em data', () => {
    vm.saveTemperature(temperature, humidity, pressure, updated)

    expect(vm._data.temperature).to.equal(temperature)
    expect(vm._data.humidity).to.equal(humidity)
    expect(vm._data.pressure).to.equal(pressure)
    expect(vm._data.lastUpdate).to.equal(updated)
  })

  it(`StorageName DEVE estar no padra ${storageNameBegin}-NOME_DA_CIDADE,PAIS`, () => {
    expect(vm._data.storageName).to.contain(cityName)
    expect(vm._data.storageName).to.contain(country)
    expect(vm._data.storageName).to.equal(`${storageNameBegin}-${cityName},${country}`)
  })

  it(`Verificando se esta agendando uma atualização da temperatura depois de 10 min`, () => {
    vm._data.isScheduled = false
    vm.scheduleCallApi(cityName, country)
    expect(vm._data.isScheduled).to.equal(true)
  })
})
