import { useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../utils/axios'
import { CircularProgress } from '@material-ui/core'
const DepositForm = (props) => {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const [suscribers, setSuscribers] = useState([])
    let [suscriber, setSuscriber] = useState(null)
    let [amount, setAmount] = useState(0)

    useEffect(() => {
        axios
            .get('/suscribers')
            .then(response => {
                setSuscribers(response.data.suscribers)
            })
            .catch(error => {
                console.log(error)
            })
    },[])
    const submitHandler = (e) => {
        e.preventDefault()
        setIsLoading(prevState => !prevState)
        
        const data = {
            suscriber,
            amount
        }
        axios
            .post('/deposits/',data)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                if (error.response) {
                  console.log(error.response.data);
                }
            })

        navigate('/admin/retraits')
        
        
    }
  return (
    <div className="w-11/12 md:w-1/3 mx-auto">
        <h3 className="uppercase text-2xl text-center"> {props.edit ? 'Modifier' : 'Effectuer'} un Dépots</h3>
        <form action="" className="" onSubmit={submitHandler}>
            <div className="flex flex-col py-2">
                <label htmlFor="adherent">Adhérent</label>
                <select name="suscriber" className="bg-white border rounded py-1 px-2" onChange={ (e) => setSuscriber(e.target.value) }>
                    {suscribers.map(suscriber => (
                         <option key={suscriber._id} value={suscriber._id}>{suscriber.firstName + ' ' +suscriber.lastName} </option>
                    ))}
                </select>
            </div>
            <div className="flex flex-col py-2">
                <label htmlFor="somme">Somme</label>
                <select name="amount" defaultValue={1000} className="bg-white border rounded py-1 px-2" onChange={ (e) => setAmount( +e.target.value) }>
                    <option value="1000">1000</option>
                    <option value="2000">2000</option>
                    <option value="5000">5000</option>
                    <option value="10000">10000</option>
                </select>
            </div>
            <button disabled={isLoading} type="submit" className={`w-full flex justify-center rounded ${isLoading ? 'bg-green-700' : 'bg-green-500'} text-white mt-2 py-2`}>
                {isLoading ? <CircularProgress color="inherit"></CircularProgress> : 'Enregistrer' }  
            </button>
        </form>
    </div>
  )
}

export default DepositForm