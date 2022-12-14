// Add your code here
function submitData(name, email) {
  console.log("call submitData");
  const user = {
    name: name,
    email: email,
  };

  const configuration = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(user),
  };

return  fetch(" http://localhost:3000/users", configuration)
    .then((res) => res.json())
    .then((userData) => renderUser(userData))
    .catch((error) => errorInfo(error));
}

function renderUser(userData) {
  console.log("call renderUser");

  const li = document.createElement("li");
  const text = `User Name = ${userData.name}
       Email ＝ ${userData.email}
       ID = ${userData.id}`;
  li.innerText = text
  document.querySelector("#users").appendChild(li);
}

function errorInfo(messenge) {
  document.querySelector("#errorInfo").innerHTML = messenge;
}
