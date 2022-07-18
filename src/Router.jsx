import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SelectProfile from './components/auth/SelectProfile'
import Home from './components/Home'


function router() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/select-profile' element={<SelectProfile />} />
            </Routes>
        </Router>
    )
}

export default router
