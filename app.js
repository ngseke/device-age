const { createApp, onMounted } = Vue
const birthday = {
  'MacBook Pro 13" 2015 Early': '2016-04-01',
  'MacBook Pro 13" 2020': '2020-07-15',
  'iPhone 12': '2021-03-20',
  'iPhone 8': '2018-09-25',
  'iPad 6th Gen': '2018-07-02',
  'iPad Pro 11 3rd Gen': '2022-03-28',
  'AirPods': '2018-01-23',
  'AirPods Pro': '2020-07-09',
  'Apple Watch SE': '2020-09-23',
}

function getDays (date) {
  return moment().diff(date, 'days')
}

function getAge (date) {
  const { year, month, day } = calc(date)
  return { year, month, day }
}

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

createApp({
  setup () {
    onMounted(() => {
      document.querySelector('body').classList.remove('hide')
    })

    return { birthday, getAge, getDays }
  },
}).mount('#app')
