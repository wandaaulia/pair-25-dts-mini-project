import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SelectProfile from './components/auth/SelectProfile'
import Home from './components/Home'
import theme from './themes/theme';
import { ThemeProvider } from '@mui/material';

function router() {
    return (
          <ThemeProvider theme={theme}> 
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/select-profile' element={<SelectProfile />} />
            </Routes>
        </Router>
        </ThemeProvider>
    )
}

export default router
