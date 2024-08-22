function getFormvalue() {
    // Get the values of the First Name and Last Name fields
    const firstName = document.querySelector('input[name="fname"]').value;
    const lastName = document.querySelector('input[name="lname"]').value;

    // Display the full name using alert
    alert(firstName + ' ' + lastName);
}
