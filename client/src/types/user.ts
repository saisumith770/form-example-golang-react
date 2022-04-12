export interface User{
	//personal details
	name:string
	dob:string
	sex:"MALE" | "FEMALE" | "OTHER"
	mobile:string
	govtID:GovtID
	//contact details
	guardian:Guardian
	email:string
	emergencyNumber:string
	//Address details
	address:string
	country:string
	state:string
	city:string
	pincode:string
	//other details
	occupation:string 
	religion:string 
	marritalStatus:boolean   
	bloodGroup:string 
	nationality:string 
}

interface GovtID {
	idType:string
	id:string
}

interface Guardian {
	label:string
	name:string
}