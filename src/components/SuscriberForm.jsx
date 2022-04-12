import { useState} from 'react'
import { CircularProgress } from '@material-ui/core'

const SuscriberForm = (props) => {
    const [isLoading, setIsLoading] = useState(false)
    const submitHandler = (e) => {
        e.preventDefault()
        setIsLoading(prevState => !prevState)
    }
    const buttonText = props.edit ? 'Modifier' : 'Enregistrer'
  return (
    <div className="flex justify-center mt-20">
        <div className="w-11/12 md:w-1/3 mx-auto">
            <h3 className="uppercase text-2xl text-center"> {props.edit ? 'Modifier' : 'Ajouter'} un Adherent</h3>
            <form action=" " className="" onSubmit={submitHandler}>
                <div className="flex flex-col py-2">
                    <label htmlFor="nom">Nom</label>
                    <input type="text" className="border rounded py-1 px-2"/>
                </div>
                <div className="flex flex-col py-2">
                    <label htmlFor="prenom">Prenom</label>
                    <input type="text" className="border rounded py-1 px-2"/>
                </div>
                <div className="grid grid-cols-2 gap-2">
                    <div className="flex flex-col py-2">
                        <label htmlFor="matricule">Matricule</label>
                        <input type="text" className="border rounded py-1 px-2"/>
                    </div>
                    <div className="flex flex-col py-2">
                        <label htmlFor="photo">Photo</label>
                        <input type="file" className="border rounded py-1 px-2"/>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                    <div className="flex flex-col py-2">
                        <label htmlFor="sexe">Sexe</label>
                        <select name="" className="border rounded py-1 px-2" id="">
                            <option value="">Homme</option>
                            <option value="">Femme</option>
                        </select>
                    </div>
                    <div className="flex flex-col py-2">
                        <label htmlFor="specialité">Spécialité</label>
                        <select name="" className="border rounded py-1 px-2" id="">
                            <option value="">GLO</option>
                            <option value="">GRT</option>
                        </select>
                    </div>
                    
                </div>
                <button type="submit" disabled={isLoading} className={`w-full flex justify-center rounded ${isLoading ? 'bg-green-700' : 'bg-green-500'} text-white mt-2 py-2`}>
                {isLoading ? <CircularProgress color="inherit"></CircularProgress> : buttonText }
                </button>
            </form>
        </div>
    </div>
  )
}

export default SuscriberForm