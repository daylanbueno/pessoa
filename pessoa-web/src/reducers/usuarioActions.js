
export const efetuarLogin = user => ({
    type: 'EFETUAR_LOGIN',
    payload: user
})  
export const eftuarLogout = isValido => ({
  type: 'EFETUAR_LOGOU',
  payload: isValido
})
    