import { combineReducers } from 'redux';
import headerReducer from './header-data/reducer.js';
// import initReducer from './init-data/reducer';
// import sortReducer from './sort-data/reducer';
// import cityReducer from './city-data/reducer';


const NameSpace = {
   HEADER: 'HEADER',
   INIT: 'INIT',
   SORT: 'SORT',
   CITY: 'CITY',
};

export default combineReducers({
   [NameSpace.HEADER]: headerReducer,
   [NameSpace.INIT]: headerReducer,
   // [NameSpace.SORT]: sortReducer,
   // [NameSpace.CITY]: cityReducer,
});

export { NameSpace };
