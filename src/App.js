import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/layout/Navbar';
import Home from './component/pages/Home';
import AboutPage from './component/pages/AboutPage';
import NotFoundPage from './component/pages/NotFoundPage';
import Footer from './component/Footer';
import { GithubProvider } from './component/context/github/GithubContext';
import { AlertProvider } from './component/context/alert/AlertContext';
import Alert from './component/layout/Alert';
import User from './component/users/User';

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className='flex flex-col justify-between h-screen'>
            <Navbar />
            <main className='container mx-auto px-3 pb-20'>
              <Alert />
              <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/about' element={<AboutPage />} />
                <Route path='/user/:login' element={<User />} />
                <Route path='/*' element={<NotFoundPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
