import { HandleBlurType, HandleChangeType } from "../../types/formik.types";
import { User } from "../../types/user";
import { Select } from "../Select";
import { TextInput } from "../TextInput";

interface props {
	handleBlur: HandleBlurType;
	handleChange: HandleChangeType;
	values: User;
}

export const OtherDetails: React.FC<props> = ({ handleBlur, handleChange, values }) => {
	return (
		<div>
			<h2
				style={{
					fontFamily: "sans-serif",
				}}
			>
				Other Details
			</h2>
			<div
				style={{
					display: "grid",
					gridTemplateColumns: "7% 18% 4% 18% 9% 20% 9% 15%",
					gridRowGap: "10px",
					width: "1160px",
					// backgroundColor:"red"
				}}
			>
				<label htmlFor="Occupation">Occupation</label>
				<TextInput name="occupation" placeholder="Enter Occupation" type="text" width="150px" />
				<label htmlFor="Religion">Religion</label>
				<Select
					handleBlur={handleBlur}
					handleChange={handleChange}
					selectInitialValue="Enter Religion"
					selectName="religion"
					selectOptions={["Hindu", "Muslim", "Christian", "Other"]}
					stateValue={values.religion}
					width="150px"
				/>
				<label htmlFor="Marital Status">Marital Status</label>
				<Select
					handleBlur={handleBlur}
					handleChange={handleChange}
					selectInitialValue="Enter Marital Status"
					selectName="marritalStatus"
					selectOptions={["married", "not married"]}
					stateValue={values.marritalStatus}
					width="150px"
				/>
				<label htmlFor="Blood Group">Blood Group</label>
				<Select
					handleBlur={handleBlur}
					handleChange={handleChange}
					selectInitialValue="Group"
					selectName="bloodGroup"
					selectOptions={["A", "A+", "AB", "AB-", "O+"]}
					stateValue={values.bloodGroup}
					width="150px"
				/>
				<label htmlFor="Nationality">Nationality</label>
				<TextInput name="nationality" value="Indian" type="text" width="150px" />
			</div>
		</div>
	);
};
