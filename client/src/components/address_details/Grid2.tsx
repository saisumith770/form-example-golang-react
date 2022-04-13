import { User } from "../../types/user"
import { Select } from "../Select"
import { TextInput } from "../TextInput"

interface props{
    handleBlur:any,
    handleChange:any,
    values:User
  }

export const Grid2:React.FC<props> = ({
    handleBlur,
    handleChange,
    values
}) => {
    return (
        <div style={{
            display: "grid",
            gridTemplateColumns:"10% 47% 5% 38%",
            width:"660px",
            gridRowGap:"10px"
        }}>
            <label htmlFor='State'>State</label>
            <Select 
                handleBlur={handleBlur}
                handleChange={handleChange}
                selectInitialValue='Enter State'
                selectName='state'
                selectOptions={["Hyderabad","Telangana"]}
                stateValue={values.state}
                width="250px"
            />
            <label htmlFor="City">City</label>
            <Select 
                handleBlur={handleBlur}
                handleChange={handleChange}
                selectInitialValue='Enter city/town/village'
                selectName='city'
                selectOptions={["Vijayawada"]}
                stateValue={values.city}
                width="200px"
            />
            <label htmlFor='Pincode'>Pincode</label>
            <TextInput 
                name='pincode'
                placeholder='Enter Pincode'
                type='text'
                width="150px"
            />
        </div>
    )
}