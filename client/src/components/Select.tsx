import { HandleBlurType, HandleChangeType } from "../types/formik.types";
import { User } from "../types/user";

interface SelectProps {
	selectName: string;
	handleChange: HandleChangeType;
	handleBlur: HandleBlurType;
	stateValue: string | number;
	selectInitialValue: string;
	selectOptions: string[];
	width: string;
}

export const Select: React.FC<SelectProps> = ({ handleBlur, handleChange, selectInitialValue, selectName, selectOptions, stateValue, width }) => {
	return (
		<select
			name={selectName}
			onChange={handleChange}
			onBlur={handleBlur}
			value={stateValue}
			style={{
				width,
				marginLeft: "20px",
			}}
		>
			<option value={selectInitialValue} label={selectInitialValue}>
				{selectInitialValue}
			</option>
			{selectOptions.map((element, index) => (
				<option value={element} label={element} key={index}>
					{element}
				</option>
			))}
		</select>
	);
};
