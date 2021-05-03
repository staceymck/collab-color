import { combineReducers } from 'redux';
import canvasReducer from './canvasReducer';
import paintingReducer from './paintingReducer';

const rootReducer = combineReducers({
  canvases: canvasReducer,
  paintings: paintingReducer
})

export default rootReducer