import {Field} from 'formik'

interface TextInputProps{
    name:string,
    placeholder?:string,
    type:string,
    width:string,
    value?:string
  }
  
export const TextInput:React.FC<TextInputProps> = ({
    name,
    placeholder,
    type,
    width,
    value
}) => {
    return (
        <div>
            <Field 
                type={type}
                name={name}
                placeholder={placeholder}
                style={{
                    borderRadius:"3px",
                    borderWidth:"1px",
                    height:"20px",
                    marginLeft:"20px",
                    width
                }}
                value={value}
            />
        </div>
    )
}