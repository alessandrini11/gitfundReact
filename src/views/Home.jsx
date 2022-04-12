import { Component } from 'react'
import Navbar from '../components/navbar/Navbar'
import Image from '../images/1.png'
import Card from '../components/Card'
import DepositTable from '../components/DepositTable'
import WithdrawalTable from '../components/WithdrawalTable'
import Footer from '../components/Footer'
import { Add, Remove, LocalAtm } from '@material-ui/icons'
import { deposits, depenses, suscriber} from '../bd/fakeDb'
class Home extends Component  {
    state = {
        homeDepot: [],
        homeDepenses: [],
        homeSuscriber: [],
    }
    componentDidMount() {
        this.setState({
            homeDepot: deposits,
            homeDepenses: depenses,
            homeSuscriber: suscriber
        })
    }
    render(){
        let totalDepots = 0
        this.state.homeDepot.map(depot => {
            return totalDepots = totalDepots + depot.amount
        })
        let totalDepense = 0
        this.state.homeDepenses.map(depense => {
            return totalDepense = totalDepense + depense.amount
        })
        const solde = totalDepots - totalDepense
        const depotsList = {
            depots: this.state.homeDepot.slice(0,4),
            suscribers: this.state.homeSuscriber
        }
        return (
            <div>
                <Navbar></Navbar>
                <div className="w-11/12 mx-auto md:max-w-4xl">
                    <main>
                        <section className="mb-8 mt-4">
                            <div className="flex items-center">
                                <div>
                                    <h2 className="text-2xl font-semibold md:text-5xl">Bienvenue sur git fund</h2>
                                    <p className="md:text-xl text-gray-500">Cette minie plateforme est dédiée au suivis des cotisations et des dépenses éffectuées jusqu'au jour de notre
                                        sortie de polytech </p>
                                </div>
                                <div className="hidden md:block">
                                    <img src={Image} alt=""/>
                                </div>
                            </div>
                        </section>
                        <section className="my-8">
                            <div className="flex text-white">
                                <Card amount={totalDepots} name="Dépots" icon={<Add/>} bg="bg-blue-500"></Card>
                                <Card amount={totalDepense} name="Dépenses" icon={<Remove/>} bg="bg-pink-500"></Card>
                                <Card amount={solde} name="Solde" icon={<LocalAtm/>} bg="bg-green-500"></Card>
                            </div>
                        </section>
                        <section>
                            <h1 className="text-3xl">Les Transactions Récentes</h1>
                            <div className="border shadow my-5 py-3 px-2">
                                <h2 className="mb-4 text-2xl">Dépot</h2>
                                <DepositTable data={depotsList}></DepositTable>
                            </div>
                            <div className="border shadow my-5 py-3 px-2">
                                <h2 className="text-2xl mb-4">Retrait</h2>
                                <WithdrawalTable data={this.state.homeDepenses}></WithdrawalTable>
                            </div>
                        </section>
                    </main>
                </div>
                <Footer></Footer>
            </div>
            
          )
    }
}

export default Home