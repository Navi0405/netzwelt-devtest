// const jsonData = {
//     loc: [
//       {
//         id: "1",
//         name: "Metro Manila",
//         parent: null
//       },
//       {
//         id: "101",
//         name: "Manila",
//         parent: "1"
//       },
//       {
//         id: "10101",
//         name: "Malate",
//         parent: "101"
//       },
//       {
//         id: "10102",
//         name: "Ermita",
//         parent: "101"
//       },
//       {
//         id: "10103",
//         name: "Binondo",
//         parent: "101"
//       },
//       {
//         id: "102",
//         name: "Makati",
//         parent: "1"
//       },
//       {
//         id: "10201",
//         name: "Poblacion",
//         parent: "102"
//       },
//       {
//         id: "10202",
//         name: "Bel-Air",
//         parent: "102"
//       },
//       {
//         id: "10203",
//         name: "San Lorenzo",
//         parent: "102"
//       },
//       {
//         id: "10204",
//         name: "Urdaneta",
//         parent: "102"
//       },
//       {
//         id: "103",
//         name: "Marikina",
//         parent: "1"
//       },
//       {
//         id: "10301",
//         name: "Sto Nino",
//         parent: "103"
//       },
//       {
//         id: "10302",
//         name: "Malanday",
//         parent: "103"
//       },
//       {
//         id: "10303",
//         name: "Concepcion I",
//         parent: "103"
//       },
//       {
//         id: "2",
//         name: "CALABARZON",
//         parent: null
//       },
//       {
//         id: "201",
//         name: "Laguna",
//         parent: "2"
//       },
//       {
//         id: "20101",
//         name: "Calamba",
//         parent: "201"
//       },
//       {
//         id: "20102",
//         name: "Sta. Rosa",
//         parent: "201"
//       },
//       {
//         id: "202",
//         name: "Cavite",
//         parent: "2"
//       },
//       {
//         id: "20201",
//         name: "Kawit",
//         parent: "202"
//       },
//       {
//         id: "203",
//         name: "Batangas",
//         parent: "2"
//       },
//       {
//         id: "20301",
//         name: "Lipa",
//         parent: "203"
//       },
//       {
//         id: "20302",
//         name: "Tanauan",
//         parent: "203"
//       },
//       {
//         id: "3",
//         name: "Central Luzon",
//         parent: null
//       },
//       {
//         id: "301",
//         name: "Bulacan",
//         parent: "3"
//       },
//       {
//         id: "302",
//         name: "Nueva Ecija",
//         parent: "3"
//       },
//       {
//         id: "303",
//         name: "Tarlac",
//         parent: "3"
//       },
//       {
//         id: "304",
//         name: "Pampanga",
//         parent: "3"
//       }
//     ]
//   };
  
//   function organizeData('/data.json') {
//       // ... (as provided in the previous answer)
//   }
  
//   const organizedLocations = organizeData(jsonData.data);
  
//   // Function to populate main dropdown
//   function populateMainDropdown() {
//       const dropdown = document.getElementById('locationDropdown');
//       const topLevelLocations = organizedLocations["root"];
  
//       topLevelLocations.forEach(location => {
//           const option = document.createElement('option');
//           option.value = location.id;
//           option.textContent = location.name;
//           dropdown.appendChild(option);
//       });
//   }
  
//   // Add change event listener to main dropdown to show sub-locations
//   document.getElementById('locationDropdown').addEventListener('change', function() {
//       const subDropdown = document.getElementById('subLocationDropdown');
//       while (subDropdown.firstChild) {
//           subDropdown.removeChild(subDropdown.firstChild);
//       }
      
//       const selectedLocationId = this.value;
//       const subLocations = organizedLocations[selectedLocationId] || [];
  
//       if (subLocations.length > 0) {
//           subLocations.forEach(subLocation => {
//               const option = document.createElement('option');
//               option.value = subLocation.id;
//               option.textContent = subLocation.name;
//               subDropdown.appendChild(option);
//           });
//           subDropdown.style.display = 'block';
//       } else {
//           subDropdown.style.display = 'none';
//       }
//   });
  
//   populateMainDropdown();

document.addEventListener('DOMContentLoaded', function() {
  // Your code here


var jsonData = '{ "name": "John Doe", "age": 30, "email": "johndoe@example.com" }';
var obj = JSON.parse(jsonData);

document.getElementById('locationDropdown').innerHTML = 
  "Name: " + obj.name + "<br>" +
  "Age: " + obj.age + "<br>" +
  "Email: " + obj.email;

});