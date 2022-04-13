import { useEffect, useState } from 'react'
import AdminNavbar from '../../components/navbar/AdminNavbar'
import AdminWithdrawalTable from '../../components/WithdrawalTable'
import { depenses} from '../../bd/fakeDb'
const AdminWithdrawal = () => {
  const [depensesData, setDepensesData] = useState([])
  useEffect(() =>{
    setDepensesData(depenses)
  },[])
  return (
    <div>
        <AdminNavbar></AdminNavbar>
        <div className="w-11/12 mx-auto">
            <h3 className="uppercase text-2xl">Liste des retrais</h3>
            <AdminWithdrawalTable admin data={depensesData} ></AdminWithdrawalTable>
        </div>
        
    </div>
  )
}

export default AdminWithdrawal