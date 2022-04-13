import { TextInput } from "../TextInput";

export const Grid1: React.FC = () => {
	return (
		<div
			style={{
				display: "grid",
				gridTemplateColumns: "10% 80%",
				gridRowGap: "10px",
				width: "500px",
			}}
		>
			<label htmlFor="Name" className="required">
				Name
			</label>
			<TextInput name="name" placeholder="Enter Name" type="text" width="400px" />
			<label htmlFor="Mobile">Mobile</label>
			<TextInput name="mobile" placeholder="Enter Mobile" type="number" width="300px" />
		</div>
	);
};
