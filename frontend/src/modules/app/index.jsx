import * as actions from './actions';
import * as selectors from './../../store/selectors';
import 'bootstrap/dist/css/bootstrap.min.css';
import appReducer from './reducer';

export {default as Home} from "./components/Home";

export {default as Catalog} from "./components/Catalog";

export {default as App} from "./components/App";

export default {actions, appReducer, selectors};
