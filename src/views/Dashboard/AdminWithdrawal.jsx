import React from 'react'
import AdminNavbar from '../../components/navbar/AdminNavbar'
import AdminWithdrawalTable from '../../components/WithdrawalTable'
const AdminWithdrawal = () => {
  return (
    <div>
        <AdminNavbar></AdminNavbar>
        <div className="w-11/12 mx-auto">
            <h3 className="uppercase text-2xl">Liste des retrais</h3>
            <AdminWithdrawalTable admin></AdminWithdrawalTable>
        </div>
        
    </div>
  )
}

export default AdminWithdrawal