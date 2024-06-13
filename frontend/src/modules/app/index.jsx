import * as actions from './actions';
import * as selectors from './../../store/selectors';
import 'bootstrap/dist/css/bootstrap.min.css';
import appReducer from './reducer';
import Catalog from './components/Catalog';

export {default as Catalog} from "./components/Catalog";

export {default as App} from "./components/App";

export default {actions, appReducer, selectors};
