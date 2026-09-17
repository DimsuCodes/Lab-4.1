function formatFullName(firstName, lastName) {
    // Step 1: check for missing names FIRST, before anything else
    if (!firstName || !lastName) {
        return "Invalid name input.";
    }

    // putting first + last name to lower case
    let lowFirstName = firstName.toLowerCase(); //richard
    let lowLastName = lastName.toLowerCase();   //sin
    console.log("lowFirstName: " + lowFirstName);
    console.log("lowLastName: " + lowLastName);

    // capitalize the first letter of each
    let capFirstName = lowFirstName.charAt(0).toUpperCase() + lowFirstName.slice(1);
    let capLastName = lowLastName.charAt(0).toUpperCase() + lowLastName.slice(1);

    // combine in "lastName, firstName" format
    return capLastName + ", " + capFirstName;
}

const firstNameInput = document.getElementById("firstNameInput");
const lastNameInput = document.getElementById("lastNameInput");
const formatBtn = document.getElementById("formatBtn");
const result = document.getElementById("result");

formatBtn.addEventListener("click", function() {
    const formatted = formatFullName(firstNameInput.value, lastNameInput.value);
    result.textContent = formatted;
});