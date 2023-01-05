import { Route, Routes } from 'react-router-dom';
import './App.css';
import { AuthContextProvider } from './context/AuthContext';
import BecomeProvider from './pages/BecomeProvider';
import CreateProviderAccount from './pages/CreateProviderAccount';
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
        <Route path="become-a-provider/:uid" element={<BecomeProvider />} />
      </Routes>
      </AuthContextProvider>
      
    </div>
  );
}

export default App;
