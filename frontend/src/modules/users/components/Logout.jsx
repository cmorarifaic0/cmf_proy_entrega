import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import * as actions from '../actions'; 

const Logout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [error, setError] = useState('');

    useEffect(() => {
        const performLogout = async () => {
            try {
                await dispatch(actions.logout()); 
                navigate('/');
            } catch (err) {
                setError('Failed to log out. Please try again.'); 
            }
        };

        performLogout();
    }, [dispatch, navigate]);

    return (
        <div>
            {error && <p>{error}</p>} // Display error message if logout fails
        </div>
    );
}

export default Logout;
