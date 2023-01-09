import { Route, Routes } from 'react-router-dom';
import './App.css';
import StickyNavbar from './components/StickyNavBar';
import { AuthContextProvider } from './context/AuthContext';
import BecomeProvider from './pages/BecomeProvider';
import CreateProviderAccount from './pages/CreateProviderAccount';
import CreateSpaceInitial from './pages/CreateSpaceInitial';
import Home from './pages/Home';
import ProviderDashboard from './pages/ProviderDashboard';
import ProviderSignUp from './pages/ProviderSignUp';

function App() {
  return (
    <div>
      <AuthContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/become-a-provider" element={<ProviderSignUp />} />
        <Route path="/sign-up" element={<CreateProviderAccount />} />
        <Route path="become-a-provider/:uid" element={<StickyNavbar />} />
      </Routes>
      </AuthContextProvider>
      
    </div>
  );
}

export default App;
