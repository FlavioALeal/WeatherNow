import Vue from 'vue'
import LastUpdate from '@/components/card/LastUpdate'
import moment from 'moment'

const Constructor = Vue.extend(LastUpdate)
const data = moment().format()
const dateFormat = 'hh:mm:ss A'
const dataAM = moment('2018-06-17 4:30', 'YYYY-MM-DD HH:mm')
const dataPM = moment('2018-06-17 20:30', 'YYYY-MM-DD HH:mm')
const updateText = 'Updated at'

const vm = new Constructor({
  propsData: {
    lastUpdate: data
  }
}).$mount()

describe('LastUpdate.vue', () => {
  it('Deve mostrar a hora de atualizacao no footer do card', () => {
    const footer = vm.$el.querySelector('time').textContent

    expect(footer).to.contain(moment(data).format(dateFormat))
  })

  it(`Deve conter o texto "${updateText}" no footer do card`, () => {
    const footer = vm.$el.innerText

    expect(footer).to.contain(updateText)
  })

  it('Deve mostrar AM se o horario for MENOR que 12:00', () => {
    const vm = new Constructor({
      propsData: {
        lastUpdate: dataAM
      }
    }).$mount()

    const footer = vm.$el.querySelector('time').textContent

    expect(footer).to.contain('AM')
  })

  it('Deve mostrar PM se o horario for MAIOR que 12:00', () => {
    const vm = new Constructor({
      propsData: {
        lastUpdate: dataPM
      }
    }).$mount()

    const footer = vm.$el.querySelector('time').textContent

    expect(footer).to.contain('PM')
  })

  it('Funcao "formatDate" deve retornar somente o horario de uma dada', () => {
    const df = vm.formatDate(dataAM)

    expect(df).to.equal('04:30:00 AM')
  })
})
