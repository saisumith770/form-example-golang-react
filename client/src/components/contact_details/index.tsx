import { HandleBlurType, HandleChangeType } from "../../types/formik.types";
import { User } from "../../types/user";
import { Grid1 } from "./Grid1";
import { Grid2 } from "./Grid2";

interface props {
	handleBlur: HandleBlurType;
	handleChange: HandleChangeType;
	values: User;
}

export const ContactDetails: React.FC<props> = ({ handleBlur, handleChange, values }) => {
	return (
		<div>
			<h2
				style={{
					fontFamily: "sans-serif",
				}}
			>
				Contact Details
			</h2>
			<div
				style={{
					display: "flex",
				}}
			>
				<Grid1 handleBlur={handleBlur} handleChange={handleChange} values={values} />
				<Grid2 />
			</div>
		</div>
	);
};
