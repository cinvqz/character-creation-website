const signupFormHandler = async function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form data
    const name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    // Send data to the server using fetch
    try{
        const response = await fetch("/signup/check", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({name, email, password})
    });
        if (response.ok) {
            // Redirect to home page on success
            document.location.replace('/home');
        } else {
            // Handle errors
            console.error('Error:', response.statusText);
        }
    }
    catch(error){
        console.error(error);
    };
};
document.querySelector('#signupbtn').addEventListener('click', signupFormHandler);
