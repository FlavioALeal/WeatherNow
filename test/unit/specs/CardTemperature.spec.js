import Vue from 'vue'
import Temperature from '@/components/card/Temperature'
const Constructor = Vue.extend(Temperature)

describe('Temperature.vue', () => {
  it('Deve mostrar a temperatura com o valor informado', () => {
    const temperatureValue = '10'
    const vm = new Constructor({
      propsData: { temperature: temperatureValue }
    }).$mount()

    const temp = vm.$el.querySelector('.card-temperature').textContent

    expect(temp).to.equal(temperatureValue)
  })

  it('A temperatura deve ser um numero inteiro', () => {
    const temperatureInt = '5'
    const temperatureFloat = 5.4
    const vm = new Constructor({
      propsData: { temperature: temperatureFloat }
    }).$mount()

    const temp = vm.$el.querySelector('.card-temperature').textContent

    expect(temp).to.equal(temperatureInt)
  })

  it('isBlue == true para temperatura <= 5', () => {
    const vm = new Constructor({
      propsData: { temperature: 5 }
    }).$mount()

    expect(vm._data.isBlue).to.equal(true)
  })

  it('isOrange == true para temperatura <= 25', () => {
    const vm = new Constructor({
      propsData: { temperature: 25 }
    }).$mount()

    expect(vm._data.isOrange).to.equal(true)
  })

  it('isRed == true para temperatura > 25', () => {
    const vm = new Constructor({
      propsData: { temperature: 30 }
    }).$mount()

    expect(vm._data.isRed).to.equal(true)
  })

  it('Deve mostrar o simbolo de graus celsius na temperatura', () => {
    const vm = new Constructor({
      propsData: { temperature: 30 }
    }).$mount()

    const temp = vm.$el.querySelector('.card-temperature-simbol').textContent

    expect(temp).to.contain('°')
  })

  it('Verifica a funcao "changeTemperatureColor"', () => {
    const vm = new Constructor().$mount()
    const colorBlue = 5
    const colorOrange = 25
    const colorRed = 26

    vm._data.isBlue = false
    vm._data.isOrange = false
    vm._data.isRed = false

    vm.changeTemperatureColor(colorBlue)
    expect(vm._data.isBlue).to.equal(true)

    vm.changeTemperatureColor(colorOrange)
    expect(vm._data.isOrange).to.equal(true)

    vm.changeTemperatureColor(colorRed)
    expect(vm._data.isRed).to.equal(true)
  })
})
