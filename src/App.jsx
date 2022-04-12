
import './App.css';
import Home from './views/Home'
import Deposit from './views/Deposit'
import Withdrawals from './views/Withdrawals';
import Suscriber from './views/Suscriber'
import Dashboard from './views/Dashboard/Dashboard'
import AdminDeposit from './views/Dashboard/AdminDeposit';
import AdminWithdrawal from './views/Dashboard/AdminWithdrawal'
import AdminSuscriber from './views/Dashboard/AdminSuscriber';
import SuscriberProfile from './views/SuscriberProfile'
import NewSuscriber from './views/Dashboard/NewSuscriber'
import NewDeposit from './views/Dashboard/NewDeposit'
import EditSuscriber from './views/Dashboard/EditSuscriber'
import EditDeposit from './views/Dashboard/EditDeposit'
import NewWithdrawal from './views/Dashboard/NewWithdraw'
import EditWithdrawal from './views/Dashboard/EditWithdrawal'
import NewAdmin from './views/Dashboard/NewAdmin'
import AdminList from './views/Dashboard/Admin'
import { Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/depots" element={<Deposit/>} />
        <Route path="/retraits" element={<Withdrawals/>} />
        <Route path="/adherents" element={<Suscriber/>} />
        <Route path="/admin/dashboard" element={<Dashboard/>} />
        <Route path="/admin/depots" element={<AdminDeposit/>} />
        <Route path="/admin/retraits" element={<AdminWithdrawal/>} />
        <Route path="/admin/adherents" element={<AdminSuscriber/>} />
        <Route path="/adherents/:id" element={<SuscriberProfile/>} />
        <Route path="/admin/adherents/new" element={<NewSuscriber/>} />
        <Route path="/admin/adherents/edit/:id" element={<EditSuscriber/>} />
        <Route path="/admin/depots/new" element={<NewDeposit/>} />
        <Route path="/admin/depots/edit/:id" element={<EditDeposit/>} />
        <Route path="/admin/withdrawal/new" element={<NewWithdrawal/>} />
        <Route path="/admin/withdrawal/edit/:id" element={<EditWithdrawal/>} />
        <Route path="/admin/admin/" element={<AdminList/>} />
        <Route path="/admin/admin/new" element={<NewAdmin/>} />
        <Route path="/admin/admin/edit/:id" element={<AdminList/>} />
      </Routes>
      
    </div>
  );
}

export default App;
