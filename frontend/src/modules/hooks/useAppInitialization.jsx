
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import users from '../../modules/users';
import catalog from '../../modules/catalog';


export const useAppInitialization = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const initializeAuthentication = async () => {
            try {
                await dispatch(users.actions.tryLoginFromServiceToken());
            } catch (error) {
                console.error("Failed to login with service token:", error);
                dispatch(users.actions.logout());
            }
        };

        const loadCategories = async () => {
            try {
                await dispatch(catalog.actions.findAllCategories());
            } catch (error) {
                console.error("Failed to load categories:", error);
            }
        };

        initializeAuthentication();
        loadCategories();
    }, [dispatch]);
};
