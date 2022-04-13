import { User } from "../../types/user"
import { Grid1 } from "./Grid1"
import { Grid2 } from "./Grid2"

interface props{
  handleBlur:any,
  handleChange:any,
  values:User
}

export const PersonalDetails:React.FC<props> = ({
  handleBlur,
  handleChange,
  values
}) => {
    return (
      <div>
        <h2 style={{
          fontFamily:"sans-serif"
        }}>
          Personal Details
        </h2>
        <div style={{
          display:"flex"
        }}>
          <Grid1 />
          <Grid2 
            handleBlur={handleBlur}
            handleChange={handleChange}
            values={values as any}
          />
        </div>
      </div>
    )
}