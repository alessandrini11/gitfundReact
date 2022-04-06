import Navbar from '../components/navbar/Navbar'
import WithdrawalTable from '../components/WithdrawalTable'
import Footer from '../components/Footer'

const Withdrawals = () => {
  return (
    <div>
        <Navbar></Navbar>
        <div className="w-11/12 mx-auto md:max-w-4xl min-h-64">
            <div className="mt-8">
                <h1 className="ml-5 md:ml-0 text-3xl font-sans">Tous les retraits</h1>
                <WithdrawalTable/>
            </div>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default Withdrawals