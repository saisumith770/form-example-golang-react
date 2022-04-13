import { TextInput } from "../TextInput";

export const Grid2: React.FC = () => {
	return (
		<div
			style={{
				width: "660px",
				display: "grid",
				gridTemplateColumns: "5% 33% 31% 31%",
			}}
		>
			<label htmlFor="Email">Email</label>
			<TextInput name="email" placeholder="Enter Email" type="text" width="160px" />
			<label htmlFor="Emergency Contact Number">Emergency Contact Number</label>
			<TextInput name="emergencyNumber" placeholder="Enter Emergency No" type="number" width="160px" />
		</div>
	);
};
