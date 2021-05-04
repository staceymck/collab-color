import { combineReducers } from 'redux';
import canvasReducer from './canvasReducer';
import paintingReducer from './paintingReducer';
import studioReducer from './studioReducer';

const rootReducer = combineReducers({
  canvases: canvasReducer,
  paintings: paintingReducer,
  studioCanvas: studioReducer
})

export default rootReducer