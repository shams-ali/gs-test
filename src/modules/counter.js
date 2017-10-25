export const INCREMENT_REQUESTED = 'counter/INCREMENT_REQUESTED'
export const INCREMENT = 'counter/INCREMENT'
export const DECREMENT_REQUESTED = 'counter/DECREMENT_REQUESTED'
export const DECREMENT = 'counter/DECREMENT'

const initialState = {
  count: [],
  question: 0,
  isIncrementing: false,
  isDecrementing: false
}

export default (state = initialState, {type, points}) => {
  switch (type) {
    case INCREMENT_REQUESTED:
      return {
        ...state,
        isIncrementing: true
      }

    case INCREMENT:
      return {
        ...state,
        previousCount: state.count,
        count: state.count.concat(points),
        question: state.question + 1,
        isIncrementing: !state.isIncrementing
      }

    case DECREMENT_REQUESTED:
      return {
        ...state,
        isDecrementing: true
      }

    case DECREMENT:
      return {
        ...state,      
        count: state.count.slice(0, -1),
        question: state.question && state.question - 1,        
        isDecrementing: !state.isDecrementing
      }

    default:
      return state
  }
}

export const increment = (points) => {
  return dispatch => {
    dispatch({
      type: INCREMENT_REQUESTED,
    })

    dispatch({
      type: INCREMENT,
      points
    })
  }
}

export const decrement = (points) => {
  return dispatch => {
    dispatch({
      type: DECREMENT_REQUESTED
    })

    dispatch({
      type: DECREMENT,
      points
    })
  }
}