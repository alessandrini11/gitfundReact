import React from 'react'
import AdminSuscriberTable from '../../components/SuscriberTable'
import AdminNavbar from '../../components/navbar/AdminNavbar'
const AdminSuscriber = () => {
  return (
    <div>
      <AdminNavbar></AdminNavbar>
      <div className="w-11/12 mx-auto">
        <h3>Sucribers</h3>
        <AdminSuscriberTable admin></AdminSuscriberTable>
      </div>
    </div>
  )
}

export default AdminSuscriber