import { useState } from 'react'

import { CircularProgress } from '@material-ui/core'
const DepositForm = (props) => {
    const [isLoading, setIsLoading] = useState(false)
    const submitHandler = (e) => {
        e.preventDefault()
        setIsLoading(prevState => !prevState)
    }
  return (
    <div className="w-11/12 md:w-1/3 mx-auto">
        <h3 className="uppercase text-2xl text-center"> {props.edit ? 'Modifier' : 'Effectuer'} un Dépots</h3>
        <form action=" " className="" onSubmit={submitHandler}>
            <div className="flex flex-col py-2">
                <label htmlFor="adherent">Adhérent</label>
                <select name="" className="bg-white border rounded py-1 px-2" id="">
                    <option value="">GLO</option>
                    <option value="">GRT</option>
                </select>
            </div>
            <div className="flex flex-col py-2">
                <label htmlFor="somme">Somme</label>
                <select name="" className="bg-white border rounded py-1 px-2" id="">
                    <option value="">1000</option>
                    <option value="">2000</option>
                    <option value="">5000</option>
                    <option value="">10000</option>
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