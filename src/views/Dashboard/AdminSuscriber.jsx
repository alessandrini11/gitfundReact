import { useState, useEffect } from 'react'
import AdminSuscriberTable from '../../components/SuscriberTable'
import AdminNavbar from '../../components/navbar/AdminNavbar'
import axios from '../../utils/axios'
const AdminSuscriber = () => {
  const [suscriberData, setSuscriberData] = useState([])
  useEffect(() => {
    axios
      .get('/suscribers')
      .then(data => {
        setSuscriberData(data.data.suscribers)
      })
      .catch(err => console.log(err))
  },[])
  return (
    <div>
      <AdminNavbar></AdminNavbar>
      <div className="w-11/12 mx-auto">
        <h3>Sucribers</h3>
        <AdminSuscriberTable admin data={suscriberData}></AdminSuscriberTable>
      </div>
    </div>
  )
}

export default AdminSuscriber