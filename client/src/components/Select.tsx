import { User } from "../types/user"

interface SelectProps{
    selectName:string,
    handleChange:any,
    handleBlur:any,
    stateValue:any,
    selectInitialValue:string,
    selectOptions:string[],
    width:string
}

export const Select:React.FC<SelectProps> = ({
    handleBlur,
    handleChange,
    selectInitialValue,
    selectName,
    selectOptions,
    stateValue,
    width
}) => {
    return (
        <select 
            name={selectName}
            onChange={handleChange}
            onBlur={handleBlur}
            value={stateValue}
            style={{
                width,
                marginLeft:"20px"
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
    )
}