import React from 'react'
import AdminNavBar from '../../components/navbar/AdminNavbar'
import AdminDepositTable from '../../components/DepositTable'
const AdminDeposit = () => {
  return (
    <div>
      <AdminNavBar></AdminNavBar>
      <div className="w-11/12 mx-auto">
        <h3 className="text-2xl uppercase mt-3">Liste des Dépots</h3>
        <AdminDepositTable admin ></AdminDepositTable>
      </div>
      
    </div>
  )
}

export default AdminDeposit