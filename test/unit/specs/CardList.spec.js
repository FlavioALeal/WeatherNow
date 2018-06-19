import Vue from 'vue'
import CardList from '@/components/CardList'

const Constructor = Vue.extend(CardList)
const cityName = 'Nuuk'
const countryName = 'GL'

describe('CardList.vue', () => {
  it('Deve mostrar o nome da Cidade e Pais no Header', () => {
    const vm = new Constructor({
      propsData: {
        city: cityName,
        country: countryName
      }
    }).$mount()

    const header = vm.$el.querySelector('.card-header').textContent

    expect(header).to.equal(cityName + ', ' + countryName)
  })

  it('A funcao "mobileCheck" deve retornar false', () => {
    const vm = new Constructor().$mount()
    const check = vm.mobileCheck()

    expect(check).to.equal(null)
  })
})
