const API_AUTH_URL = "http://localhost/netzwelt-devtest/home.html";
const API_DATA_URL = "https://example.com/api/regions";

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch(API_AUTH_URL, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    }).then(response => response.json())
      .then(data => {
          if (data.valid) {
              document.getElementById('loginForm').style.display = 'none';
              document.getElementById('home').style.display = 'block';
              fetchData();
          } else {
              document.getElementById('loginError').innerText = "Invalid Credentials";
          }
      });
}

function fetchData() {
    fetch(API_DATA_URL)
        .then(response => response.json())
        .then(data => {
            // Render the hierarchical data (simplifying here for the example)
            let content = "";
            for (let region of data.regions) {
                content += `<p>${region.name}</p>`;
                for (let city of region.cities) {
                    content += `<p style="margin-left:20px">${city.name}</p>`;
                    for (let barangay of city.barangays) {
                        content += `<p style="margin-left:40px">${barangay.name}</p>`;
                    }
                }
            }
            document.getElementById('dataTree').innerHTML = content;
        });
}

