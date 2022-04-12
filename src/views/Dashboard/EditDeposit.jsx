import React from 'react'
import DepositForm from '../../components/DepositForm'
import AdminNavbar from '../../components/navbar/AdminNavbar'
const EditDeposit = () => {
  return (
    <div>
    <AdminNavbar></AdminNavbar>
      <div className="flex justify-center mt-10">
        <DepositForm edit></DepositForm>
      </div>
    </div>
  )
}

export default EditDeposit