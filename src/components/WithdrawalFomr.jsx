import { useState } from 'react'
import { CircularProgress } from '@material-ui/core'
import {useNavigate} from 'react-router-dom'
import axios from '../utils/axios'
const WithdrawalFomr = (props) => {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    let [reason, setReason] = useState('')
    let [amount, setAmount] = useState(0)
    console.log(amount, reason)
    const submitHandler = (e) => {
        e.preventDefault()
        setIsLoading(prevState => !prevState)

        const data = {
            reason,
            amount
        }
        axios
            .post('/withdrawals/',data)
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

    const buttonText = props.edit ? 'Modifier' : 'Retirer'
  return (
    <div className="w-11/12 md:w-1/3 mx-auto">
        <h3 className="uppercase text-2xl text-center mt-5"> {props.edit ? 'Modifier' : 'Effectuer'} un Retrait</h3>
        <form action=" " className="" onSubmit={submitHandler}>
            <div className="flex flex-col py-2">
                <div className="flex flex-col py-2">
                    <label htmlFor="somme">Somme</label>
                    <input type="number" onChange={(e) => setAmount(+e.target.value)} className="border rounded py-1 px-2"/>
                </div>
            </div>
            <div className="flex flex-col py-2">
                <label htmlFor="motif">Motif</label>
                <textarea type="text" onChange={(e) => setReason( e.target.value)} className="border rounded py-1 px-2"/>
            </div>
            <button disabled={isLoading} type="submit" className={`w-full flex justify-center rounded ${isLoading ? 'bg-green-700' : 'bg-green-500'} text-white mt-2 py-2`}>
                {isLoading ? <CircularProgress color="inherit"></CircularProgress> : buttonText }
            </button>
        </form>
    </div>
  )
}

export default WithdrawalFomr