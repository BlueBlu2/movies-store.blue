export default function favouritItemsReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_TO_ITEMS':
      return [...state, action.movie];
    case 'REMOVE_FROM_ITEMS':
      return state.filter((val) => val.id !== action.movie.id);
    default:
      return state;
  }
}
