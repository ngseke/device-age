const birthday = {
  'Macbook Pro': '2016-04-01',
  'iPhone 8': '2018-09-25',
  'iPad 6th Gen': '2018-07-02',
  'AirPods': '2018-01-23',
}
const devices = Object.keys(birthday)

window.onload = () => {
  generateMenu()
  setCurrentDevice(devices[0])
  document.querySelector('body').classList.remove('hide')
}
 
function generateMenu () {
  const el = document.querySelector('ul.menu')
  
  devices.forEach(name => {
    const li = document.createElement('li')
    const a = document.createElement('a')
    
    a.innerHTML = name
    a.setAttribute('href', '#')
    li.appendChild(a)
    el.appendChild(li)
    
    a.addEventListener('click', e => {
      e.preventDefault()
      setCurrentDevice(name)
    })
  })
}

function setCurrentDevice (name) {
  const device = document.querySelector('.device')
  const age = document.querySelector('h2.age')
  device.innerHTML = name
  const { year: y, month: m, day: d } = calc(birthday[name])
  
  age.innerHTML = `${y}y ${m}m ${d}d`
  setTitle(document.querySelector('h1').innerText)
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

function setTitle (text) {
  document.title = text
}