import { useAuth } from '../hooks/useAuth'
import { Navigate } from 'react-router'
import Loading from '../../../Loading'


const Protected = ({ children }) => {

    const { loading, user } = useAuth()

    if (loading) {
        return <Loading message='Please wait...' />
    }

    if (!user) {
        return <Navigate to={"/login"} />
    }

    return children
}

export default Protected