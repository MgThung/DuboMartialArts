
  // Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    const users = JSON.parse(localStorage.getItem("userData"));
    
    // Get the form input values
    const id=generateid();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const gender = document.getElementById("gender").value;
    const address = document.getElementById("address").value;
    const membership = document.getElementById("membership").value;
    

    function generateid(){
      const ID = Date.now();
        return ID;
    }

    // Create an object to store the user data
    const userData = {
      id:id,
      name: name,
      email: email,
      phone: phone,
      gender: gender,
      address: address,
      membership: membership,
    };
    
    if(users!=null){
      users.push(userData);
    localStorage.setItem("userData", JSON.stringify(users));

    }else{
      const userDataArray = [];
      userDataArray.push(userData);
      localStorage.setItem("userData",JSON.stringify(userDataArray));
    }
    // Save the user data to web local storage

    // Redirect the user to the "Thank You" page after successful registration
     window.location.href = "thankyou.html";
  }

  // Add event listener to the form submission
  const form = document.getElementById("registrationForm");
  form.addEventListener("submit", handleFormSubmit);