export default function favouritIdsReducer(state = {}, action) {
  switch (action.type) {
    case 'ADD_TO_FAV':
      //return [...state, action.movie];
      //let hkey = action.movie;
      return { ...state, [action.movie]: true };
    case 'REMOVE_FROM_FAV':
      //return state.filter((val) => val !== action.movie);
      //   let hkey = action.movie;
      return { ...state, [action.movie]: false };
    default:
      return state;
  }
}
