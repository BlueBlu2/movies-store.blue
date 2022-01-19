import favouritReducer from './favouritIds';
import itemsReducer from './favouritItems';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  favourit: favouritReducer,
  items: itemsReducer,
});

export default rootReducer;
