import {Field} from 'formik'

interface SelectTextInputProps{
    handleChange:any,
    handleBlur:any,
    stateValue:any,
    selectName:string,
    inputName:string,
    selectInitialValue:string,
    selectOptions:string[],
    inputPlaceholder:string,
    selectWidth:string,
    inputWidth:string
}
  
export const SelectTextInput:React.FC<SelectTextInputProps> = ({
    handleBlur,
    handleChange,
    stateValue,
    inputName,
    selectName,
    selectInitialValue,
    selectOptions,
    inputPlaceholder,
    inputWidth,
    selectWidth
}) => {
return (
    <div style={{
        marginLeft:"20px",
        display: "flex"
    }}>
        <select 
            name={selectName}
            onChange={handleChange}
            onBlur={handleBlur}
            value={stateValue}
            style={{
                minWidth:selectWidth
            }}
        >
            <option value={selectInitialValue} label={selectInitialValue}>
            {selectInitialValue}
            </option>
            {
                selectOptions.map((element,index) => (
                    <option value={element} label={element} key={index}>
                    {element}
                    </option>
                ))
            }
        </select>
        <Field 
            type="text"
            name={inputName}
            placeholder={inputPlaceholder}
            style={{
                minWidth:inputWidth,
                marginLeft:"10px"
            }}
        />
    </div>
)}