import axios from "axios";
import { useState } from "react";


function App(){
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [contactnumber, setContactnumber] = useState("");

  const saveDetails = (e)=>{
    
    e.preventDefault();

    
    
    const details = {
      Name: name,
      Email: email,
      Contactnumber: contactnumber
    }
    axios.post("http://localhost:4000/user/save-details",details).then((res)=>{
      console.log(res);
    })

  }
  return(
    <form >
      
      <label>Name
      <input
          type="text"
          id = "name"
          value = {name}
          onChange = {(e)=>setName(e.target.value)}
      
      />
      </label>

      <label>Email
        <input 
            type = "text"
            id="email"
            value = {email}
            placeholder = "Enter Your Email"
            onChange = {(e)=>setEmail(e.target.value)}
        />
      </label>

      <label>Contact Number
        <input
        type = "text"
        id = "contactnumber"
        value = {contactnumber}
        placeholder = "Enter Your Contact Number"
        onChange = {(e)=>setContactnumber(e.target.value)}
        />
      </label>

      <button type = "button" onClick = {saveDetails}> Save </button>
        
    </form>
  ) 
}


export default App;