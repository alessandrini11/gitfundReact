import React from 'react'
import Navbar from '../../components/navbar/AdminNavbar'
import Card from '../../components/Card'
import Area from '../../components/charts/Area'
import Bar from '../../components/charts/Bar'
import Pie from '../../components/charts/Pies'
import { Add, Remove, LocalAtm, Person } from '@material-ui/icons'
const Dashoard = () => {
  return (
    <div>
      <Navbar></Navbar>
      <main>
        <div className="w-11/12 mx-auto md:max-w-4xl">
          <h1 className="text-4xl my-5">Statistiques</h1>
          <section className="mb-8">
            <div className="grid grid-cols-2 gap-3 md:gap-8 text-white text-xl">
              <Card name="Dépots" icon={<Add/>} bg="bg-purple-500"></Card>
              <Card name="Dépenses" icon={<Remove/>} bg="bg-pink-500"></Card>
              <Card name="Solde" icon={<LocalAtm/>} bg="bg-green-500"></Card>
              <Card name="Solde" icon={<Person/>} bg="bg-blue-500"></Card>
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