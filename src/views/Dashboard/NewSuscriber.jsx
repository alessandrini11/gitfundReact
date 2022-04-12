import React from 'react'
import SuscriberForm from '../../components/SuscriberForm'
import AdminNavbar from '../../components/navbar/AdminNavbar'
const NewSuscriber = (props) => {
  return (
    <div>
        <AdminNavbar></AdminNavbar>
        <SuscriberForm></SuscriberForm>
    </div>
  )
}

export default NewSuscriber