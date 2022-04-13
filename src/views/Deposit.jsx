import { Component } from 'react'
import Navbar from '../components/navbar/Navbar'
import DepositTable from '../components/DepositTable'
import Footer from '../components/Footer'
import axios from '../utils/axios'
class Deposit extends Component {
  state = {
    homeDepot: [],
    homeSuscriber: [],
  } 
  componentDidMount() {
    axios
      .get('/deposits')
      .then(data => {
          this.setState({
              homeDepot: data.data.deposits
          })
      })
      .catch(error => {
          console.log(error)
      })
  }
  render(){
    const depotsList = {
      depots: this.state.homeDepot,
      suscribers: this.state.homeSuscriber
  }
    return (
      <div>
          <Navbar></Navbar>
          <div className="w-11/12 mx-auto md:max-w-4xl min-h-64">
              <div className="mt-8">
                  <h1 className="ml-5 md:ml-0 text-3xl font-sans">Tous les dépots</h1>
                  <DepositTable data={this.state.homeDepot} ></DepositTable>
              </div>
          </div>
          <Footer></Footer>
      </div>
    )
  }
}

export default Deposit