import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'

const Add = (props) => {
    var[input,setinput]=useState(props.data);
    console.log(props.data)
    const inputhandler1 = (e) =>{
        const {name,value}=e.target
        setinput({...input,[name]:value})
    }
    const readValues=()=>{
      console.log("clicked")
      if(props.method==="post"){
      axios.post(" http://localhost:3005/products",input)
      .then(Response=>{
        alert("successfully added")
      })

    }
    
   else if(props.method==="put"){
    axios.put("http://localhost:3005/products/"+input.id,input)
    .then(reponse=>{
      alert("updated successfully")
      window.location.reload(false)
    })
    .catch(err=>console.log(err))
   }
    }
  return (
    <div>
   <p></p>
      <TextField   variant="outlined" onChange={inputhandler1} label='name'
      name='name' value={input.name}> </TextField>  <p></p>
       
      <TextField id="outlined-basic" label="brand" variant="outlined" onChange={inputhandler1} 
      name='brand' value={input.brand} /><p></p>
       <TextField id="outlined-basic" label="quantity" variant="outlined" onChange={inputhandler1} 
      name='quantity' value={input.quantity} /><p></p>
       <TextField id="outlined-basic" label="price" variant="outlined" onChange={inputhandler1} 
      name='price' value={input.price} /><p></p>
       
      <Button variant="contained"onClick={readValues}> save</Button><p></p>
    </div>
  )
  }

export default Add