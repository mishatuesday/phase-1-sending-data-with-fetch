// Add your code here
// const formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle",
//   };
  
//   // method: "POST" is missing from the object below
//   const configurationObject = {
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json",
//     },
//     body: JSON.stringify(formData),
//   };
  
//   fetch("http://localhost:3000/dogs", configurationObject)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (object) {
//       console.log(object);
//     })
//     .catch(function (error) {
//       alert("Bad things! Ragnarők!");
//       console.log(error.message);
//     });

const submitTheFF = document.getElementById("theFuckingForm");
submitTheFF.addEventListener("submit", doForm, false);


function doForm (e) {
    e.preventDefault()
    const uName = document.getElementById("nameSubmission").value
    const uEmail = document.getElementById("emailSubmission").value
    const theDataObject = {
        name: uName,
        email: uEmail
    }
    console.log(theDataObject)
    submitData(theDataObject)
    // use fetch post request to add uName and uEmail to db.json
}

function submitData (newUser) {
    const configObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(newUser)
    }
    
  return fetch("http://localhost:3000/users", configObject)
//   .then()
//   .then()
}
// function configObject(data) {
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json",
//     },
//     body: JSON.stringify(data)
//     }
