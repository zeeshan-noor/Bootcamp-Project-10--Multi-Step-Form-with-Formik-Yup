import React from 'react'
import { Button } from '@material-ui/core';
interface Props {
  values: any;
  submit: React.Dispatch<React.SetStateAction<number>>;
  setFormValues:React.Dispatch<React.SetStateAction<{}>>
}
const Review:React.FC<Props>=({values,submit,setFormValues}) =>{
    
    const forSubmit =():void =>{
        setFormValues({})
        submit(0)
    }
    
    return (
        <div >
            <div style={{'textAlign':'center'}}>
            
            <h2>Your Name is :{" "} {values.firstName} {values.lastName}</h2>
            <h2>Your Father name is :{ " "}{values.fatherName}</h2>
            <h2>Your Email is :{ " "}{values.email}</h2>
            <h2>Your City name is :{ " "}{values.city}</h2>
            <h2>Your Age is :{ " "}{values.age}</h2>
          
          <Button variant="contained" onClick={() => submit(1)} >
            BACK
          </Button>
            <Button variant="contained" color="secondary" type="submit" onClick={() => forSubmit() } > 
            RESET 
          </Button> 
         
</div> 
        </div>
    ) 
}

export default Review
