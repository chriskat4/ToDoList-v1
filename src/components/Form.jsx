import React, { useState } from 'react'
import { TextField , Button } from '@mui/material'

export default function Form ({todoHandler}) {
  const [text, setText] = useState("");
  const [id, setId] = useState(0);

  const todoCreate = (text) => {
    const todoObj = {text:text, id:id}
    setId(id + 1);
    todoHandler(todoObj);
    document.getElementById("outlined-basic").value=null;
  }

  return (
    <div style={{ display:"flex", justifyContent:"center",alignItems:"center" }}>
        <TextField id="outlined-basic" label="*Tarefa" variant="outlined" onChange={(e)=>setText(e.target.value)} />
        <Button variant="outlined" style={ { margin:"2em" } } onClick={() => todoCreate(text)}>ADD</Button>
    </div>
  )
}
