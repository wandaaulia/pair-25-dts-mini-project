import { Navigate, Outlet } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../config/firebase'

const PublicRoute = () => {
    const [user, loading] = useAuthState(auth);
    if (!loading) {
        return user ? <Navigate to={'/'} /> : <Outlet />
    }
}

export default PublicRoute