import {useState, useEffect} from 'react'
import Navbar from '../../components/navbar/AdminNavbar'
import Card from '../../components/Card'
import Area from '../../components/charts/Area'
import Bar from '../../components/charts/Bar'
import { Add, Remove, LocalAtm, Person } from '@material-ui/icons'
import { depenses, suscriber, deposits} from '../../bd/fakeDb'
import axios from '../../utils/axios'
const Dashoard = () => {
  const [depotsData, setDepotsData] = useState([])
  const [depensesData, setDepensesData] = useState([])
  const [suscriberData, setSuscriberData] = useState([])

  useEffect(() => {
    axios
      .get('/withdrawals')
      .then(data => {
        setDepensesData(data.data.withdrawals)
      })
      .catch(error => {
          console.log(error)
      })
    axios
      .get('/deposits')
      .then(data => {
        setDepotsData(data.data.deposits)
      })
      .catch(error => {
          console.log(error)
      })
    
    axios
      .get('/suscribers')
      .then(data => {
        setSuscriberData(data.data.suscribers)
      })
      .catch(error => {
          console.log(error)
      })
  },[])
    let totalDepots = 0
    depotsData.map(depot => {
        return totalDepots = totalDepots + depot.amount
    })
    let totalDepense = 0
    depensesData.map(depense => {
        return totalDepense = totalDepense + depense.amount
    })
    const solde = totalDepots - totalDepense
  return (
    <div>
      <Navbar></Navbar>
      <main>
        <div className="w-11/12 mx-auto md:max-w-4xl">
          <h1 className="text-4xl my-5">Statistiques</h1>
          <section className="mb-8">
            <div className="grid grid-cols-2 gap-3 md:gap-8 text-white text-xl">
              <Card amount={totalDepots} name="Dépots" icon={<Add/>} bg="bg-purple-500"></Card>
              <Card amount={totalDepense} name="Dépenses" icon={<Remove/>} bg="bg-pink-500"></Card>
              <Card amount={solde} name="Solde" icon={<LocalAtm/>} bg="bg-green-500"></Card>
              <Card suscriber={suscriberData} name="Adherent" icon={<Person/>} bg="bg-blue-500"></Card>
            </div>
          </section>
          <section className="">
            <div className="mb-10">
            <Area/>

            <Bar/>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default Dashoard