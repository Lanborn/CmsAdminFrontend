import axios from 'axios'

// axios的实例对象
// axios.request({
//   method: 'GET'
// })
axios.get('http://123.207.32.32:8000/home/multidata').then((res) => {
  console.log(res)
})

// axios
//   .get('http://httpbin.org/get', {
//     params: {
//       name: 'coderLan',
//       age: 18
//     }
//   })
//   .then((res) => {
//     console.log(res.data)
//   })

// Promise本身是可以有类型的

// 4. axios的配置选项
// 4.1 全局的配置

axios.defaults.baseURL = 'http://httpbin.org'
axios.defaults.timeout = 10000
// axios.defaults.headers = {}

// axios
//   .get('/get', {
//     params: {
//       name: 'coderLan',
//       age: 18
//     },
//     timeout: 5000,
//     headers: {}
//   })
//   .then((res) => {
//     console.log(res.data)
//   })

// 5. axios.all
axios
  .all([
    axios.get('/get', { params: { name: 'Coderlan', age: 19 } }),
    axios.post('/post', {
      data: { name: 'lan', age: 10 }
    })
  ])
  .then((res) => {
    console.log(res[0])
    console.log(res[1])
  })

// 6. axios的拦截器
// fn1: 请求发送成功执行的
// fn2: 请求发送失败执行的
axios.interceptors.request.use(
  (config) => {
    // 1. 添加Token
    // 2. loading
    console.log('请求拦截成功')
    return config
  },
  (err) => {
    console.log('请求发送错误')
    return err
  }
)

// fn1: 数据响应成功 20x
axios.interceptors.response.use(
  (res) => {
    console.log('响应成功')

    return res.data
  },
  (err) => {
    console.log('响应失败')
    return err
  }
)
