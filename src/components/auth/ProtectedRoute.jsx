import { Navigate, Outlet } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../config/firebase'

const ProtectedRoute = () => {
    const [user, loading] = useAuthState(auth);
    if (!loading) {
        return user ? <Outlet /> : <Navigate to={'/select-profile'} />
    }
}

export default ProtectedRoute