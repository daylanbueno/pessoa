const INITIAL_STATE = {
    isAutenticado: false
  }
  
  export default (state, action) => {
    if (typeof state === 'undefined') {
      console.log('state',state, 'action',action)
      return INITIAL_STATE
    }
    switch (action.type) {
      case 'EFETUAR_LOGIN':
        return { ...state, isAutenticado: action.payload }
      case 'EFETUAR_LOGOU':
        localStorage.removeItem('token')
        return { ...state, isAutenticado: action.payload }
      default:
        return state
    }
  }