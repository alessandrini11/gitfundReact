import React from 'react'
import AdminNavBar from '../../components/navbar/AdminNavbar'
import AdminDepositTable from '../../components/DepositTable'
import { deposits, suscriber} from '../../bd/fakeDb'
import axios from '../../utils/axios'
class AdminDeposit extends React.Component {
  state = {
    homeDepot: []
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
    render() {
      return (
        <div>
          <AdminNavBar></AdminNavBar>
          <div className="w-11/12 mx-auto">
            <h3 className="text-2xl uppercase mt-3">Liste des Dépots</h3>
            <AdminDepositTable admin data={this.state.homeDepot} ></AdminDepositTable>
          </div>
          
        </div>
      )
    }
}

export default AdminDeposit