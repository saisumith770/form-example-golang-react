import {Formik,Form} from 'formik'

import './App.css'
import { PersonalDetails } from './components/personal_details';
import { ContactDetails } from './components/contact_details';
import { User } from './types/user';
import { AddressDetails } from './components/address_details';

const initialValues:User = {
  name:"",
  dob:"",
  sex:"OTHER",
  mobile:"",
  govtID:{
    idType:"",
    id:""
  },
  address:"",
  bloodGroup:"",
  city:"",
  country:"India",
  email:"",
  emergencyNumber:"",
  guardian:{
    label:"",
    name:""
  },
  marritalStatus:false,
  nationality:"Indian",
  occupation:"",
  pincode:"",
  religion:"",
  state:""
}

function App() {
  return (
    <div className="App">
      <Formik initialValues={initialValues} onSubmit={(data,{setSubmitting}) => {
        setSubmitting(true)
        console.log(data)
        setSubmitting(false)
      }}>
        {({isSubmitting,handleBlur,handleChange,values}) => (
          <Form>
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
