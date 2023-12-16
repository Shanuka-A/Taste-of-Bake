const initialState = {
  loading: false,
  cakes: [],
  error: null,
};


export const getAllCakesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CAKES_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'GET_CAKES_SUCCESS':
      return {
        ...state,
        loading: false,
        cakes: action.payload,
        error: null,
      };
    case 'GET_CAKES_FAILED':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
