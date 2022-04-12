import React from 'react'
import AdminNavbar from '../../components/navbar/AdminNavbar'
import WithdrawalForm from '../../components/WithdrawalFomr'
const EditWithdrawal = () => {
  return (
    <div>
        <AdminNavbar></AdminNavbar>
        <WithdrawalForm edit></WithdrawalForm>
    </div>
  )
}

export default EditWithdrawal