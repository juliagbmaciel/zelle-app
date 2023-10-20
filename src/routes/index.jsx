import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';
import { useSelector } from 'react-redux';

const Routes = () => {
    const {signed} = useSelector(state => {return state.userReducer})


    return signed ? <AppRoutes /> : <AuthRoutes />;
  
};

export default Routes;