import Vue from 'vue'
import Retry from '@/components/card/Retry'

const Constructor = Vue.extend(Retry)
const text = 'Something went wrong'
const buttonText = 'Try Again'

describe('Retry.vue', () => {
  it(`Deve mostrar o texto ${text}`, () => {
    const vm = new Constructor().$mount()

    const txt = vm.$el.querySelector('.card-retry-text').textContent

    expect(txt).to.equal(text)
  })

  it(`Deve mostrar botao ${buttonText}`, () => {
    const vm = new Constructor().$mount()

    const txt = vm.$el.querySelector('.card-retry-button').textContent

    expect(txt).to.equal(buttonText)
  })
})
