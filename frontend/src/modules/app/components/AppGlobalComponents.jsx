import { useSelector, useDispatch } from 'react-redux';
import ErrorDialog from '../../common';
import * as actions from '../actions';
import * as selectors from '../../../store/selectors';

const ConnectedErrorDialog = () => {
    const error = useSelector(selectors.getError);
    const dispatch = useDispatch();

    const handleClose = () => dispatch(actions.error(null));

    return <ErrorDialog error={error} onClose={handleClose} />
};

const AppGlobalComponents = () => (
    <div>
        <ConnectedErrorDialog />
    </div>
);

export default AppGlobalComponents;
