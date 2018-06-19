<template>
  <div class='date-update'>
    Updated at <time :datetime="dateFormated">{{dateFormated}}</time>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'last-update',
  props: ['lastUpdate'],
  data: function () {
    return {
      dateFormated: this.formatDate(this.lastUpdate)
    }
  },
  methods: {
    formatDate: function (date) {
      return moment(date).format('hh:mm:ss A')
    }
  },
  mounted () {
    this.dateFormated = this.formatDate(this.lastUpdate)
  }
}
</script>
