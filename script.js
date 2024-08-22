function getFormvalue() {
    // Get the form element
    const form = document.querySelector('form');

    // Get the values of the First Name and Last Name fields
    const firstName = form.elements['firstname'].value;
    const lastName = form.elements['lastname'].value;

    // Display the full name using alert
    alert(firstName + ' ' + lastName);
}