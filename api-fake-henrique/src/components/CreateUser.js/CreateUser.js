import { useState } from "react"
import axios from "axios";
import '../../App.css';



function CreateUser(){
    const [name, setName] = useState("");
    const [job, setJob] = useState("");
    
    function createUser(event){
        event.preventDefault();
        let user = JSON.stringify({name:name, job:job})
        axios.post('https://reqres.in/api/users', user)
            .then((response)=>{
                console.log(response)
            }

            )
            .catch((error)=>{
                console.log(error)
            }
            );
    }



    return(
        <form onSubmit={createUser} className="form">
            <h1>Formulario cadastro</h1>
            
            <input
            type="text"
            placeholder="digite seu nome aqui"
            value={name}
            onChange={(event)=>setName(event.target.value)}
            >
            </input>

            <input
            type="text"
            placeholder="digite seu trabalho aqui"
            value={job}
            onChange={(event)=>setJob(event.target.value)}
            >
            </input>

            <button
            type="submit"
            >
                Cadastro
            </button>

        </form>
    );
}

export default CreateUser;