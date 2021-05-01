import React from 'react'
import {Formik,Form,ErrorMessage,Field} from 'formik'
import * as Yup from 'yup';
import { Grid,Button,TextField } from '@material-ui/core';

interface FormValues{
    name:string,
    password:string,
    email:string,
    confirmPassword: string;

}
interface Props {
    submit: React.Dispatch<React.SetStateAction<number>>;
    
  }
const initialValue :FormValues ={
    name:'',
    password:'',
    email:'',
    confirmPassword:''
}

const registerSchema = Yup.object().shape({
    name:Yup.string()
    .max(7,'Name must have at least 7character')
    .required("This field is required"),
    password:Yup.string()
    .max(6,'Pasword at least 6 digit')
    .required("This field is required"),
    email:Yup.string()
    .email("missing @")
    .required("This field is required"),
    confirmPassword: Yup.string()
    .required("Required")
    .oneOf([Yup.ref("password")], "Password is not matching"),
}) 

const InfoForm:React.FC<Props>=({submit}) =>{

    const forSubmit =(values:FormValues):void =>{
        alert(JSON.stringify(values));
    }
    return (
        <div>
     
        <Formik 
        initialValues={initialValue}
        onSubmit={(values:FormValues)=>{
            submit(1);
        }}
        validationSchema={registerSchema}
        >
            {({dirty, isValid}) =>
          {  return(
            <Form >   
                     <h3>Account Information</h3> 
                     
            <Grid container spacing={1} justify="center">
                
            <Grid item xs={12} sm={4}  justify="center" alignItems="center">
                {/* For Name Field */}
                <Field
                  name="name"
                  as={TextField}
                  label="NAME"
                  variant="outlined"
                  helperText={
                    <ErrorMessage name="name" />
                  }
                  fullWidth
                />
              </Grid>

              <Grid item xs={12} sm={4}>
               {/* For Email Field */}
               <Field name='email' 
                      as={TextField}
                      label="Email"
                      type='email'
                      variant="outlined"
                      helperText={
                        <ErrorMessage name="email"/>
                      } 
                      fullWidth

                      />

              </Grid>

              <Grid item sm={8} xs={10}>
               
                            {/* For Password Field */}
              <Field name='password' 
                      as={TextField}
                      type='password'
                      label="Password"
                      variant="outlined"
                      helperText={
                        <ErrorMessage name="password"/>
                      } 
                      fullWidth 

                      />
              </Grid>

              <Grid item sm={8} xs={10}>
              <Field name='confirmPassword' 
                      as={TextField}
                      type='password'
                      label="Confirm Password"
                      variant="outlined"
                      helperText={
                        <ErrorMessage name="confirmPassword"/>
                      } 
                      fullWidth

                      />  
              </Grid>
            
            </Grid>
            <br/>
                <Button variant="contained" color="primary" type='submit' disabled={!dirty || !isValid}>
                    Submit
                    </Button>
                <Button variant="contained" color="primary" type="submit"  onClick={() => submit(0)}>
                Next
              </Button>
           
            </Form>
            )}
            }
        </Formik>
        </div>
    )
}

export default InfoForm
