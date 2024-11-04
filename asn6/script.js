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
   /*/grabbing date
   date = document.createElement("li");
   date.textContent = document.querySelector('#date').value;
   userInput.appendChild(date);
   //grabbing time
   time = document.createElement("li");
   time.textContent = document.querySelector('#time').value;
   userInput.appendChild(time);*/
   //grabbing budget
   budget = document.createElement("li");
   budget.textContent = document.querySelector('#budget').value;
   userInput.appendChild(budget);
   /*/grabbing choice
   choice = document.createElement("li");
   choice.textContent = document.querySelector('#choice').value;
   userInput.appendChild(choice);*/
   //grabbing select
   select = document.createElement("li");
   select.textContent = document.querySelector('#select').value;
   userInput.appendChild(select);
   /*/grabbing checkbox
   checkbox = document.createElement("li");
   checkbox.textContent = document.querySelector('#checkbox').value;
   userInput.appendChild(checkbox);*/
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
   document.body.innerHTML = userInput.outerHTML;
   
}
      
