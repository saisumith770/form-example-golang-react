import { Formik, Form } from "formik";

import "./App.css";
import { PersonalDetails } from "./components/personal_details";
import { ContactDetails } from "./components/contact_details";
import { User } from "./types/user";
import { AddressDetails } from "./components/address_details";
import { OtherDetails } from "./components/other_details";

import { Alert } from "@mui/material";
import { useEffect, useState } from "react";

const initialValues: User = {
	name: "",
	dob: "",
	sex: "",
	mobile: 0,
	govtID: {
		idType: "",
		id: "",
	},
	address: "",
	bloodGroup: "",
	city: "",
	country: "India",
	email: "",
	emergencyNumber: 0,
	guardian: {
		label: "",
		name: "",
	},
	marritalStatus: "",
	nationality: "Indian",
	occupation: "",
	pincode: 0,
	religion: "",
	state: "",
};

function App() {
	const [formSubmissionState, setFormSubmissionState] = useState<"error" | "success" | null>(null);
	useEffect(() => {
		if (formSubmissionState !== null) {
			setTimeout(() => {
				setFormSubmissionState(null);
			}, 5000);
		}
	}, [formSubmissionState]);
	return (
		<div className="App">
			{formSubmissionState === "error" && <Alert severity="error">There was an issue while submitting the form!</Alert>}
			{formSubmissionState === "success" && <Alert severity="success">Successfully saved patient</Alert>}
			<Formik
				initialValues={initialValues}
				onSubmit={(data, { setSubmitting }) => {
					setSubmitting(true);

					fetch("http://localhost:8080/user/create", {
						method: "POST",
						body: JSON.stringify(data),
						headers: {
							"Content-type": "application/json; charset=UTF-8",
						},
					})
						.then((response) => response.json())
						.then((json) => {
							console.log(json);
							setFormSubmissionState("success");
						})
						.catch((err) => {
							console.log(err);
							setFormSubmissionState("error");
						});

					// console.log(data);

					setSubmitting(false);
				}}
			>
				{({ isSubmitting, handleBlur, handleChange, values }) => (
					<Form
						style={{
							// backgroundColor:"red",
							// width:"1300px"
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
						}}
					>
						<PersonalDetails handleBlur={handleBlur} handleChange={handleChange} values={values} />
						<ContactDetails handleBlur={handleBlur} handleChange={handleChange} values={values} />
						<AddressDetails handleBlur={handleBlur} handleChange={handleChange} values={values} />
						<OtherDetails handleBlur={handleBlur} handleChange={handleChange} values={values} />
						<button disabled={isSubmitting} type="submit">
							Submit
						</button>
					</Form>
				)}
			</Formik>
		</div>
	);
}

export default App;
