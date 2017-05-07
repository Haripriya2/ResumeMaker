export default function () {
  return {
    id: 0,
    first: "Renu",
    last: "Dhingra",
    age: 28,
    email: "renudhingra@gmail.com",
    dob: "03/05/1993",
    localAddress: {
        a1: "335 Name Street, Unit #",
        a2: "Town, Province, N2H 3Y6",
        pin: "1-519-500-1111"
    },
   permanentAddress: {
       a1: "335 Name Street, Unit #",
       a2: "Town, Province, N2H 3Y6",
       pin: "1-519-500-1111"
   },
   qualifications: {
       q1: "Undergraduate degree",
       q2: "Postgraduate degree",
       q3: "Phd"
   },
   WorkExperience: {
       work1: {
           company: "Company A",
           city: "City A",
           country: "India",
           jobTitle: "Analyst",
           start: "04/01/2009",
           end: "09/09/2011"
       },
       work2: {
           company: "Company B",
           city: "City B",
           country: "India",
           jobTitle: "Analyst",
           start: "16/09/2011",
           end: "present"
       }
   }
  }
}
