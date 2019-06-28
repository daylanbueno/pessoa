import axios from 'axios'

const interceptor  = axios.interceptors.request.use(async (config) =>{
  try {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers['Authorization'] = `${token}`
    }
    return config
  }catch (e) {
    console.error('Não conseguiu pegar o token')
  }
})

export default (interceptor)
  

