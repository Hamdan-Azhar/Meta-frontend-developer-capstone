import './App.css';
import ReserveTablePage from './ReserveTablePage';
import HomePage from './HomePage';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import ReservationConfirmationPage from './ReservationConfirmationPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
           <Route path="/" element={<HomePage />} />
           <Route path="/reservation" element={<ReserveTablePage />} />
          <Route path="/reservation/confirmation" element={<ReservationConfirmationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
