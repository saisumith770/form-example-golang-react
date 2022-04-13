import { HandleBlurType, HandleChangeType } from "../../types/formik.types";
import { User } from "../../types/user";
import { Select } from "../Select";
import { SelectTextInput } from "../SelectTextInput";
import { TextInput } from "../TextInput";

interface props {
	handleBlur: HandleBlurType;
	handleChange: HandleChangeType;
	values: User;
}

export const Grid2: React.FC<props> = ({ handleBlur, handleChange, values }) => {
	return (
		<div
			style={{
				display: "grid",
				gridTemplateColumns: "17% 48% 5% 30%",
				width: "660px",
				gridRowGap: "10px",
			}}
		>
			<label htmlFor="Date Of Birth" className="required">
				Date Of Birth
			</label>
			<TextInput name="dob" placeholder="DD/MM/YYYY" type="text" width="250px" />
			<label htmlFor="Sex" className="required">
				Sex
			</label>
			<Select
				handleBlur={handleBlur}
				handleChange={handleChange}
				selectInitialValue="<INACTIVE>"
				selectName="sex"
				selectOptions={["Male", "Female", "Other"]}
				stateValue={values.sex}
				width="150px"
			/>
			<label htmlFor="Govt Issued Id">Govt Issued Id</label>
			<SelectTextInput
				handleBlur={handleBlur}
				handleChange={handleChange}
				inputName="govtID.id"
				inputPlaceholder="Enter GovtID"
				selectInitialValue="Select a GovtId type"
				selectName="govtID.idType"
				selectOptions={["Adhar", "Pan"]}
				stateValue={values.govtID.idType}
				inputWidth="340px"
				selectWidth="150px"
			/>
		</div>
	);
};
