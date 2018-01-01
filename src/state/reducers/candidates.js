const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CANDIDATES_SUCCESS':
      return action.candidates;
    case 'MOVE_CARD': 
      return [...state.filter(item => item !== action.product)]
    default:
      return state;
  }
}



export const accepted  =(state = initialState, action) => {
  switch (action.type) {
    case 'ACCEPTED': {
      let newState = [...state, action.product]
      return  newState
    }
    default:
      return state;
  }
}

export const rejected = (state = initialState, action) => {
  switch (action.type) {
    case 'REJECTED': {
      let newState = [...state, action.product]
      return  newState
    }
    default:
      return state;
  }
}
