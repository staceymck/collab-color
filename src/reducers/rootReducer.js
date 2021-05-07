import { combineReducers } from 'redux';
import canvasReducer from './canvasReducer';
import paintingReducer from './paintingReducer';
import studioReducer from './studioReducer';
import errorReducer from './errorReducer';

const rootReducer = combineReducers({
  canvases: canvasReducer,
  paintings: paintingReducer,
  studioCanvas: studioReducer,
  errors: errorReducer
})

export default rootReducer