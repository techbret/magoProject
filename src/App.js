import { Route, Routes } from 'react-router-dom';
import './App.css';
import CreateProviderAccount from './pages/CreateProviderAccount';
import Home from './pages/Home';
import ProviderSignUp from './pages/ProviderSignUp';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/become-a-provider" element={<ProviderSignUp />} />
        <Route path="/sign-up" element={<CreateProviderAccount />} />
      </Routes>
      
    </div>
  );
}

export default App;
