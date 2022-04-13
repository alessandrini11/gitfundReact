import { useState, useEffect } from 'react'
import AdminSuscriberTable from '../../components/SuscriberTable'
import AdminNavbar from '../../components/navbar/AdminNavbar'
import { suscriber, deposits } from '../../bd/fakeDb'
const AdminSuscriber = () => {
  const [suscriberData, setSuscriberData] = useState([])
  const [depositsData, setDepositsData] = useState([])
  useEffect(() => {
    setSuscriberData(suscriber)
    setDepositsData(deposits)
  },[])
  const suscriberList = {
    depots: depositsData,
    suscribers: suscriberData
  }
  return (
    <div>
      <AdminNavbar></AdminNavbar>
      <div className="w-11/12 mx-auto">
        <h3>Sucribers</h3>
        <AdminSuscriberTable admin data={suscriberList}></AdminSuscriberTable>
      </div>
    </div>
  )
}

export default AdminSuscriber