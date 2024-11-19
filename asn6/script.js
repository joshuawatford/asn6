changeThisPageFunc = function() {
   userInput = document.createElement("ul");
   //grabbing email
   email = document.createElement("li");
   email.textContent = document.querySelector('#email').value;
   userInput.appendChild(email);
   //grabbing password
   password = document.createElement("li");
   password.textContent = document.querySelector('#password').value;
   userInput.appendChild(password);
   //grabbing first name
   fname = document.createElement("li");
   fname.textContent = document.querySelector('#fname').value;
   userInput.appendChild(fname);
   //grabbing last name
   lname = document.createElement("li");
   lname.textContent = document.querySelector('#lname').value;
   userInput.appendChild(lname);
   //grabbing phone number
   phone_number = document.createElement("li");
   phone_number.textContent = document.querySelector('#phone_number').value;
   userInput.appendChild(phone_number);
   
   //grabbing budget
   budget = document.createElement("li");
   budget.textContent = document.querySelector('#budget').value;
   userInput.appendChild(budget);
   //grabbing choice
   let choice = document.createElement("li");
   let selectedChoice = document.querySelector('input[name="choice"]:checked');
   choice.textContent = selectedChoice ? (selectedChoice.id === "yes" ? "Fresh manicure on bare nails" : "Removing old manicure before new set.") : "No choice selected";
   userInput.appendChild(choice);
   //grabbing select
   select = document.createElement("li");
   select.textContent = document.querySelector('#select').value;
   userInput.appendChild(select);
   //grabbing checkboxes
   let checkedBoxes = document.querySelectorAll('input[name="checkbox"]:checked');
   checkedBoxes.forEach(checkbox => {
       let checkboxItem = document.createElement("li");
       checkboxItem.textContent = checkbox.id; 
       userInput.appendChild(checkboxItem);
   });
   //grabbing color
   color = document.createElement("li");
   color.textContent = document.querySelector('#color').value;
   userInput.appendChild(color);
   //grabbing file
   file = document.createElement("li");
   file.textContent = document.querySelector('#file').value;
   userInput.appendChild(file);
   //grabbing comments
   comments = document.createElement("li");
   comments.textContent = document.querySelector('#comments').value;
   userInput.appendChild(comments);
   const outputContainer = document.getElementById("output");
   if (!outputContainer) {
       const newContainer = document.createElement("div");
       newContainer.id = "output";
       newContainer.appendChild(userInput);
       document.body.appendChild(newContainer);
   } else {
       outputContainer.innerHTML = ""; // Clear previous output
       outputContainer.appendChild(userInput);
   }
   
}
      
