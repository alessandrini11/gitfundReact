import Navbar from '../components/navbar/Navbar'
import SuscriberTable from '../components/SuscriberTable'
import Footer from '../components/Footer'

const Suscriber = () => {
  return (
    <div>
        <Navbar></Navbar>
        <div className="w-11/12 mx-auto min-h-64">
            <div className="mt-8">
                <h1 className="ml-5 md:ml-0 text-3xl font-sans">Tous les adhérents</h1>
                <SuscriberTable/>
            </div>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default Suscriber