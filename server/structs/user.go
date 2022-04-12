package structs

type User struct {
	//personal details
	Name   string `json:"name"`
	DOB    string `json:"dob"`
	Sex    string `json:"sex"`
	Mobile int    `json:"mobile"`
	GovtID GovtID `json:"govtID"`
	//contact details
	Guardian        Guardian `json:"guardian"`
	Email           string   `json:"email"`
	EmergencyNumber int      `json:"emergencyNumber"`
	//Address details
	Address string `json:"address"`
	Country string `json:"country"`
	State   string `json:"state"`
	City    string `json:"city"`
	Pincode int    `json:"pincode"`
	//other details
	Occupation     string `json:"occupation"`
	Religion       string `json:"religion"`
	MarritalStatus bool   `json:"marritalStatus"`
	BloodGroup     string `json:"bloodGroup"`
	Nationality    string `json:"nationality"`
}

type GovtID struct {
	IdType string `json:"idType"`
	Id     string `json:"id"`
}

type Guardian struct {
	Label string `json:"label"`
	Name  string `json:"name"`
}
