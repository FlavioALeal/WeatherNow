import Vue from 'vue'
import HP from '@/components/card/HumidityPressure'

const Constructor = Vue.extend(HP)
const humidityValue = 10
const pressureValue = 800

describe('HumidityPressure.vue', () => {
  it('Deve mostrar o valor informado para HUMIDITY + "%"', () => {
    const vm = new Constructor({
      propsData: { humidity: humidityValue }
    }).$mount()

    const hum = vm.$el.querySelector('.humidity').textContent

    expect(hum).to.equal(humidityValue + '%')
  })

  it('Deve mostrar o valor informado para PRESSURE + "hPa"', () => {
    const vm = new Constructor({
      propsData: { pressure: pressureValue }
    }).$mount()

    const pre = vm.$el.querySelector('.pressure').textContent

    expect(pre).to.equal(pressureValue + 'hPa')
  })

  it('PRESSURE deve ser um numerio inteiro', () => {
    const pressureInt = '891'
    const pressureFloat = 890.77
    const vm = new Constructor({
      propsData: { pressure: pressureFloat }
    }).$mount()

    const pres = vm.$el.querySelector('.pressure').textContent
    vm.pressureToInt(pressureFloat)

    expect(pres).to.equal(pressureInt + 'hPa')
    expect(vm._data.intPressure).to.equal(891)
  })

  it('HUMIDITY deve ser um numerio inteiro', () => {
    const humidityInt = '70'
    const humidityFloat = 70.13
    const vm = new Constructor({
      propsData: { humidity: humidityFloat }
    }).$mount()

    const hum = vm.$el.querySelector('.humidity').textContent
    vm.humidityToInt(humidityFloat)

    expect(hum).to.equal(humidityInt + '%')
    expect(vm._data.intHumidity).to.equal(70)
  })
})
