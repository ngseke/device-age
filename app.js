const birthday = {
  'Macbook Pro': '2016-04-01',
  'iPhone 8': '2018-09-25',
  'iPad 6th Gen': '2018-07-02',
  'AirPods': '2018-01-23',
}
const devices = Object.keys(birthday)

new Vue({
  el: '#app',
  data: () => ({
    current: devices[0],
    format: 'ymd',
  }),
  mounted() {
    document.querySelector('body').classList.remove('hide')
  },
  methods: {
    select (name) {
      this.current = name
    },
    setTitle (name) {
      document.title = `How old is my ${name}?`
    },
    toggleFormat () {
      const formats = ['ymd', 'd', 'birthday']
      const newIndex = (formats.findIndex(i => i === this.format) + 1) % formats.length
      this.format = formats[newIndex]
    }
  },
  computed: {
    devices () {
      return devices
    },
    age () {
      const { year, month, day } = calc(birthday[this.current])
      return { year, month, day }
    },
    day () {
      return moment().diff(birthday[this.current], 'days')
    },
    birthday () {
      return birthday[this.current]
    },
  },
  watch: {
    current: {
      immediate: true,
      handler (value) {
        this.setTitle(value)
      }
    }
  }
})

function calc (date) {
  const a = moment()
  const b = moment(date)

  const year = a.diff(b, 'year')
  b.add(year, 'years')

  const month = a.diff(b, 'months')
  b.add(month, 'months')

  const day = a.diff(b, 'days')

  return { year, month, day }
}