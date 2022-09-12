import Device from '../types/Device'

const devices: Device[] = [
  { name: 'MacBook Pro 13" 2015 Early', birthday: '2016-04-01' },
  { name: 'MacBook Pro 13" 2020', birthday: '2020-07-15' },
  { name: 'iPhone 12', birthday: '2021-03-20' },
  { name: 'iPhone 8', birthday: '2018-09-25' },
  { name: 'iPad 6th Gen', birthday: '2018-07-02' },
  { name: 'iPad Pro 11 3rd Gen', birthday: '2022-03-28' },
  { name: 'AirPods', birthday: '2018-01-23' },
  { name: 'AirPods Pro', birthday: '2020-07-09' },
  { name: 'Apple Watch SE', birthday: '2020-09-23' },
  { name: 'Nintendo Switch', birthday: '2021-05-13' },
]
  .map((device) => ({
    ...device,
    key: Symbol(device.name),
  }))

export default devices
