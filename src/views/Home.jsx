import Navbar from '../components/navbar/Navbar'
import Image from '../images/1.png'
import Card from '../components/Card'
import DepositTable from '../components/DepositTable'
import WithdrawalTable from '../components/WithdrawalTable'
import Footer from '../components/Footer'
import { Add, Remove, LocalAtm } from '@material-ui/icons'
const Home = () => {
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
                        <Card name="Dépots" icon={<Add/>} bg="bg-blue-500"></Card>
                        <Card name="Dépenses" icon={<Remove/>} bg="bg-pink-500"></Card>
                        <Card name="Solde" icon={<LocalAtm/>} bg="bg-green-500"></Card>
                    </div>
                </section>
                <section>
                    <h1 className="text-3xl">Les Transactions Récentes</h1>
                    <div class="border shadow my-5 py-3 px-2">
                        <h2 class="mb-4 text-2xl">Dépot</h2>
                        <DepositTable></DepositTable>
                    </div>
                    <div class="border shadow my-5 py-3 px-2">
                        <h2 class="text-2xl mb-4">Retrait</h2>
                        <WithdrawalTable></WithdrawalTable>
                    </div>
                </section>
            </main>
        </div>
        <Footer></Footer>
    </div>
    
  )
}

export default Home