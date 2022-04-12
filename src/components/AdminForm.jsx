import { useState} from 'react'
import { CircularProgress } from '@material-ui/core'

const AdminForm = (props) => {
    const [isLoading, setIsLoading] = useState(false)
    const submitHandler = (e) => {
        e.preventDefault()
        setIsLoading(prevState => !prevState)
    }
    const buttonText = props.edit ? 'Modifier' : 'Enregistrer'
  return (
    <div className="w-11/12 md:w-1/3 mx-auto">
        <h3 className="uppercase text-2xl text-center"> {props.edit ? 'Modifier' : 'Ajouter'} un Admin</h3>
        <form action=" " className="" onSubmit={submitHandler}>
            <div className="flex flex-col py-2">
                <label htmlFor="pseudo">Pseudo</label>
                <input type="text" className="border rounded py-1 px-2"/>
            </div>
            <div className="flex flex-col py-2">
                <label htmlFor="role">Role</label>
                <select name="" className="bg-white border rounded py-1 px-2" id="">
                    <option value="">Visiteur</option>
                    <option value="">Admin</option>
                    <option value="">Super Admin</option>
                </select>
            </div>
            <div className="flex flex-col py-2">
                <label htmlFor="mdp">Mot de passe</label>
                <input type="text" className="border rounded py-1 px-2"/>
            </div>
            <div className="flex flex-col py-2">
                <label htmlFor="confirm">Confirmation</label>
                <input type="number" className="border rounded py-1 px-2"/>
            </div>
            <button type="submit" disabled={isLoading} className={`w-full flex justify-center rounded ${isLoading ? 'bg-green-700' : 'bg-green-500'} text-white mt-2 py-2`}>
            {isLoading ? <CircularProgress color="inherit"></CircularProgress> : buttonText }
            </button>
        </form>
    </div>
  )
}

export default AdminForm