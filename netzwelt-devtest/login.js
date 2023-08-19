function login() {
    const enteredUsername = document.getElementById('username').value;
    const enteredPassword = document.getElementById('password').value;

    fetch('/users.json')
        .then(response => response.json())
        .then(data => {
            const user = data.users.find(user => user.username === enteredUsername && user.password === enteredPassword);
            if (user) {
                alert('Login successful!');
                window.location.href = '/home.html';
            } else {
                alert('Invalid credentials!');
            }
        })
        .catch(error => {
            console.error('Error fetching JSON:', error);
        });
}