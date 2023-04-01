import { AppBar, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Add from './Add'

const View = () => {
    var[update,setupdate]=useState(false)
    var[selected,setSelected]=useState([])
    var[products,setProducts]=useState([])
    
    useEffect(()=>{
        axios.get("http://localhost:3005/products")
      .then(Response=>{setProducts(products=Response.data)
     console.log(products)
    })
    .catch(error=>console.log(error))
    },[])
    const deleteValue=(id)=>{
     console.log(id)
     axios.delete("http://localhost:3005/products/"+id)
     .then(response=>{
        alert("successfully deleted")
        Window.location.reload(false)
     })
     .catch(err=>console.log(err))
    }
    const updateValue=(value)=>{
        setSelected(value)
        setupdate(true)
    }
    var finaljsx= <TableContainer>
    <Table>
        <TableHead>
        <TableRow>
            <TableCell>name</TableCell>
            <TableCell>brand</TableCell>
            <TableCell>quantiy</TableCell>
            <TableCell>price</TableCell>

        </TableRow>
        </TableHead>
        <TableBody>
            {products.map((value,index)=>{
                return<TableRow>
                    <TableCell>{value.id}</TableCell>
                    <TableCell>{value.name}</TableCell>
                    <TableCell>{value.brand}</TableCell>
                    <TableCell>{value.quantity}</TableCell>
                    <TableCell>{value.price}</TableCell>
                    <TableCell><Button onClick={()=>deleteValue(value.id)}>delete</Button></TableCell>
                    <TableCell><Button onClick={()=>updateValue(value)}>update</Button></TableCell>
                </TableRow>
})}
        </TableBody>
    </Table>
</TableContainer>
if(update)
finaljsx=<Add data={selected}method='put'/>
  return (
   finaljsx
  )
}

export default View

