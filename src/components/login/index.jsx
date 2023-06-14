import { useState } from "react" 
import axios from "axios"

const Login = () => {

  const [datos, setDatos] = useState({
    user: "",
    password: ""
  });

  const handleInputChange = (event) => {
    let {name, value} = event.target;
    let newDatos = {...datos, [name]: value};
    setDatos(newDatos)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
     if (!event.target.checkValidity()) {
        console.log("No enviar")
     }else {
        let res = await axios.post('http://localhost:7000/login', datos)
        console.log(res.data)
     }
  }

  return (
    <main className="form-signin text-center shadow-lg p-3 ">
        <form id="formLogin" action="/login" method="post" onSubmit={handleSubmit}>
            <img className="mb-4" src="../img/bootstrap-logo.svg" alt="" width="72" height="57" />
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

            <div className="form-floating">
            <input type="text" onChange={handleInputChange} value={datos.user} className="form-control" id="user" name="user" placeholder="Usuario" required />
            <label htmlFor="floatingInput">Usuario</label>
            </div>
            <div className="form-floating">
            <input type="password" onChange={handleInputChange} value={datos.password} className="form-control" id="password" name="password" placeholder="Password" required />
            <label htmlFor="floatingPassword">Password</label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">Ingresar</button>
        </form>
        <br />
        <a href="/register" type="button" className="w-100 btn btn-lg btn-info"> Regitrarse</a>
    </main>   
  )
}

export default Login