const birthday = {
  'Macbook Pro 13" 2015 Early': '2016-04-01',
  'Macbook Pro 13" 2020': '2020-07-15',
  'iPhone 12': '2021-03-20',
  'iPhone 8': '2018-09-25',
  'iPad 6th Gen': '2018-07-02',
  'AirPods': '2018-01-23',
  'AirPods Pro': '2020-07-09',
  'Apple Watch SE': '2020-09-23',
}
const devices = Object.keys(birthday)

new Vue({
  el: '#app',
  data: () => ({
    birthday,
  }),
  mounted() {
    document.querySelector('body').classList.remove('hide')
  },
  methods: {
    setTitle (name) {
      document.title = `How old is my ${name}?`
    },
    toggleFormat () {
      const formats = ['ymd', 'd', 'birthday']
      const newIndex = (formats.findIndex(i => i === this.format) + 1) % formats.length
      this.format = formats[newIndex]
    },
    getAge (date) {
      const { year, month, day } = calc(date)
      return { year, month, day }
    },
    getDays (date) {
      return moment().diff(date, 'days')
    },
  },
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
