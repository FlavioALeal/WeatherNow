import Vue from 'vue'
import Loading from '@/components/card/Loading'

const Constructor = Vue.extend(Loading)
const vm = new Constructor().$mount()
const { alt, src } = vm.$el.querySelector('.card-loading img')

describe('Loading.vue', () => {
  it('Deve mostrar uma imagem de loading', () => {
    expect(src).to.have.length.above(4)
  })

  it('A imagem deve ter o alt preenchido', () => {
    expect(alt).to.have.length.above(5)
  })
})
