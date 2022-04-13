import React from 'react'
import AdminNavBar from '../../components/navbar/AdminNavbar'
import AdminDepositTable from '../../components/DepositTable'
import { deposits, suscriber} from '../../bd/fakeDb'
class AdminDeposit extends React.Component {
  state = {
    homeDepot: [],
    homeSuscriber: [],
  } 
  componentDidMount() {
      this.setState({
          homeDepot: deposits,
          homeSuscriber: suscriber
      })
  }
    render() {
      const depotsList = {
        depots: this.state.homeDepot,
        suscribers: this.state.homeSuscriber
      }
      return (
        <div>
          <AdminNavBar></AdminNavBar>
          <div className="w-11/12 mx-auto">
            <h3 className="text-2xl uppercase mt-3">Liste des Dépots</h3>
            <AdminDepositTable admin data={depotsList} ></AdminDepositTable>
          </div>
          
        </div>
      )
    }
}

export default AdminDeposit