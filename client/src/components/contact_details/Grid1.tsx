import { HandleBlurType, HandleChangeType } from "../../types/formik.types";
import { User } from "../../types/user";
import { SelectTextInput } from "../SelectTextInput";

interface props {
	handleBlur: HandleBlurType;
	handleChange: HandleChangeType;
	values: User;
}

export const Grid1: React.FC<props> = ({ handleBlur, handleChange, values }) => {
	return (
		<div
			style={{
				width: "500px",
				display: "grid",
				gridTemplateColumns: "25% 65%",
			}}
		>
			<label htmlFor="Guardian">Guardian Details</label>
			<SelectTextInput
				handleBlur={handleBlur}
				handleChange={handleChange}
				inputName="guardian.name"
				inputPlaceholder="Enter Guardian Name"
				inputWidth="200px"
				selectInitialValue="Enter Label"
				selectName="guardian.label"
				selectOptions={["Father", "Mother", "Guardian"]}
				selectWidth="110px"
				stateValue={values.guardian.label}
			/>
		</div>
	);
};
