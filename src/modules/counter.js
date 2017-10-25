export const INCREMENT = 'counter/INCREMENT';
export const DECREMENT = 'counter/DECREMENT';

const initialState = {
  count: [],
  question: 0,
}

export default (state = initialState, {type, points}) => {
  switch (type) {

    case INCREMENT:
      return {
        ...state,
        previousCount: state.count,
        count: state.count.concat(points),
        question: state.question + 1,
      }

    case DECREMENT:
      return {
        ...state,      
        count: state.count.slice(0, -1),
        question: state.question && state.question - 1,
      }

    default:
      return state
  }
}

export const increment = (points) => {
  return dispatch => {
    dispatch({
      type: INCREMENT,
      points
    })
  }
}

export const decrement = (points) => {
  return dispatch => {
    dispatch({
      type: DECREMENT,
      points
    })
  }
}