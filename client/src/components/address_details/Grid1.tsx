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
			<label htmlFor="Address">Address</label>
			<TextInput name="address" placeholder="Enter Address" type="text" width="400px" />
			<label htmlFor="Country">Country</label>
			<TextInput name="country" value="India" type="text" width="300px" />
		</div>
	);
};
