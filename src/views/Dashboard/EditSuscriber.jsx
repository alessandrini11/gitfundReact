import React from 'react'
import SuscriberForm from '../../components/SuscriberForm'
import AdminNavbar from '../../components/navbar/AdminNavbar'
const EditSuscriber = () => {
  return (
    <div>
      <AdminNavbar></AdminNavbar>
      <SuscriberForm edit></SuscriberForm>
    </div>
  )
}

export default EditSuscriber