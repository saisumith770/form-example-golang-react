export interface User {
	//personal details
	name: string;
	dob: string;
	sex: "MALE" | "FEMALE" | "OTHER" | "";
	mobile: number;
	govtID: GovtID;
	//contact details
	guardian: Guardian;
	email: string;
	emergencyNumber: number;
	//Address details
	address: string;
	country: string;
	state: string;
	city: string;
	pincode: number;
	//other details
	occupation: string;
	religion: string;
	marritalStatus: "married" | "not married" | "";
	bloodGroup: string;
	nationality: string;
}

interface GovtID {
	idType: string;
	id: string;
}

interface Guardian {
	label: string;
	name: string;
}
