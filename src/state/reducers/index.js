import { combineReducers } from "redux";

import candidates, {accepted, rejected} from './candidates'

export default combineReducers({
  candidates,
  accepted,
  rejected
});
