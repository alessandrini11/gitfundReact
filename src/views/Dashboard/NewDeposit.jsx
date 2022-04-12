import React from 'react'
import DepositForm from '../../components/DepositForm'
import AdminNavbar from '../../components/navbar/AdminNavbar'
const NewDeposit = (props) => {
  return (
    <div>
      <AdminNavbar></AdminNavbar>
      <div className="flex justify-center items-center mt-20">
        <DepositForm></DepositForm>
      </div>
    </div>
  )
}

export default NewDeposit