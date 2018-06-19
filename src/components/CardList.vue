<template>
    <div class="cards-row vAlign">
        <card v-for="place in places" :class="place.className" :cityName="place.city" :country="place.country" :isFooterData="place.isFooterData" :key="place.id" v-bind:style="{order: isMobile? place.mobileOrder : place.mobileOrder.desktopOrder} "></card>
    </div>
</template>

<script>
import Card from '@/components/card/Card'
export default {
  name: 'card-list',
  components: {
    Card
  },
  data () {
    return {
      places: [
        {id: 1, city: 'Nuuk', country: 'GL', isFooterData: false, desktopOrder: 1, mobileOrder: 2, className: 'card1'},
        {id: 2, city: 'Urubici', country: 'BR', isFooterData: true, desktopOrder: 2, mobileOrder: 1, className: 'card2'},
        {id: 3, city: 'Nairobi', country: 'KE', isFooterData: false, desktopOrder: 3, mobileOrder: 3, className: 'card3'}
      ],
      isMobile: false
    }
  },
  methods: {
    mobileCheck: function () {
      let check = {
        Android: function () {
          return navigator.userAgent.match(/Android/i)
        },
        BlackBerry: function () {
          return navigator.userAgent.match(/BlackBerry/i)
        },
        iOS: function () {
          return navigator.userAgent.match(/iPhone|iPad|iPod/i)
        },
        Opera: function () {
          return navigator.userAgent.match(/Opera Mini/i)
        },
        Windows: function () {
          return navigator.userAgent.match(/IEMobile/i)
        },
        any: function () {
          return (check.Android() || check.BlackBerry() || check.iOS() || check.Opera() || check.Windows())
        }
      }
      return check.any()
    }
  },
  mounted () {
    this.isMobile = this.mobileCheck()
  }
}
</script>
