const initState = {
  game: {},
  screen: {},
  isLoading: true,
};

const detailReducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return { ...state };
    case "GET_DETAIL":
      return {
        ...state,
        game: action.payload.game,
        screen: action.payload.screen,
        isLoading: false,
      };
    case "LOADING_DETAIL":
      return {
        ...state,
        isLoading: true,
      };
  }
};

export default detailReducer;
