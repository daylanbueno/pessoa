const INITIAL_STATE = {
    isAutenticado: false
  }
  
  export default (state, action) => {
    if (typeof state === 'undefined') {
      return INITIAL_STATE
    }
    switch (action.type) {
      case 'EFETUAR_LOGIN':
        return { ...state, isAutenticado: action.payload }
      case 'EFETUAR_LOGOU':
        return { ...state, isAutenticado: action.payload }
      default:
        return state
    }
  }