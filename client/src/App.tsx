import {Formik,Form} from 'formik'

import './App.css'
import { PersonalDetails } from './components/personal_details';
import { ContactDetails } from './components/contact_details';
import { User } from './types/user';
import { AddressDetails } from './components/address_details';
import { OtherDetails } from './components/other_details';

const initialValues:User = {
  name:"",
  dob:"",
  sex:"OTHER",
  mobile:0,
  govtID:{
    idType:"",
    id:""
  },
  address:"",
  bloodGroup:"",
  city:"",
  country:"India",
  email:"",
  emergencyNumber:0,
  guardian:{
    label:"",
    name:""
  },
  marritalStatus:false,
  nationality:"Indian",
  occupation:"",
  pincode:0,
  religion:"",
  state:""
}

function App() {
  return (
    <div className="App">
      <Formik initialValues={initialValues} onSubmit={(data,{setSubmitting}) => {
        setSubmitting(true)

        fetch("http://localhost:8080/user/create", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(response => response.json())
        .then(json => console.log(json));

        setSubmitting(false)
      }}>
        {({isSubmitting,handleBlur,handleChange,values}) => (
          <Form style={{
            // backgroundColor:"red",
            // width:"1300px"
            display: "flex",
            flexDirection:"column",
            alignItems:"center"
          }}>
            <PersonalDetails 
              handleBlur={handleBlur}
              handleChange={handleChange}
              values={values as any}
            />
            <ContactDetails 
              handleBlur={handleBlur}
              handleChange={handleChange}
              values={values as any}
            />
            <AddressDetails 
              handleBlur={handleBlur}
              handleChange={handleChange}
              values={values as any}
            />
            <OtherDetails 
              handleBlur={handleBlur}
              handleChange={handleChange}
              values={values as any}
            />
            <button 
              disabled={isSubmitting}  
              type="submit"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default App;
