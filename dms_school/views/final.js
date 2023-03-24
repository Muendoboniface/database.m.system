// Get the search input and button elements
const searchInput = document.getElementById("search-bar");
const searchButton = document.getElementById("search-btn");

// Add an event listener to the search button
searchButton.addEventListener("click", () => {
  // Get the table body element
  const tableBody = document.getElementById("table-body");
  // Get the search query
  const query = searchInput.value.toLowerCase();
  // Loop through the table rows and search for the query
  for (let i = 0; i < tableBody.rows.length; i++) {
    const row = tableBody.rows[i];
    const rowData = row.innerHTML.toLowerCase();
    // If the query is found in the row data, select the row and break out of the loop
    if (rowData.includes(query)) {
      row.style.backgroundColor = "purple";
    } 
    // else {
    //   row.style.backgroundColor = "white";
    // }
  }
});


// Get necessary elements
const addButton = document.getElementById("add-btn");
const saveButton = document.getElementById("save-btn");
const tableBody = document.getElementById("table-body");
const modal = document.getElementById("modal");
const closeModalButton = document.getElementById("close-btn");
const addStudentButton = document.getElementById("add-student-btn");
const editButtons = document.getElementsByClassName("edit-btn");
const deleteButtons = document.getElementsByClassName("delete-btn");

// Initialize counter for student number
let counter = 1;
// Open modal on Add button click
addButton.addEventListener("click", () => {
  modal.style.display = "block";
  });
  
  // Close modal on Close button click
  closeModalButton.addEventListener("click", () => {
  modal.style.display = "none";
  });
  
  // Add student to table on Add Student button click
  addStudentButton.addEventListener("click", () => {
  const name = document.getElementById("name").value;
  const adm = document.getElementById("adm").value;
  const year = document.getElementById("year").value;
  const program = document.getElementById("program").value;
  const email = document.getElementById("email").value;
  
  // Create new table row and populate with student information
const newRow = document.createElement("tr");
newRow.innerHTML = `<td>${counter}</td> <td>${name}</td> <td>${adm}</td> <td>${year}</td> <td>${program}</td> <td>${email}</td> <td> <button class="edit-btn">Edit</button> <button class="delete-btn">Delete</button> </td>`;

  // Increment student number counter
  counter++;
  
  // Add new row to table body
  tableBody.appendChild(newRow);
  
  // Clear form fields
  document.getElementById("add-form").reset();
  
  // Close modal
  modal.style.display = "none"; 
  
  // Add event listeners to new row's Edit and Delete buttons  
  newRow.querySelector(".edit-btn").addEventListener("click", editStudent);
  newRow.querySelector(".delete-btn").addEventListener("click", deleteStudent);
  });
  
  // Function to handle editing a student's information
  function editStudent() {
  const row = this.parentNode.parentNode;
  const cells = row.getElementsByTagName("td");
  
  // Change Edit button to Save button
  const editButton = cells[6].querySelector(".edit-btn");
  editButton.innerHTML = "Save";
  editButton.removeEventListener("click", editStudent);
  editButton.addEventListener("click", saveStudent);
  
  // Make row's cells editable
  for (let i = 1; i <= 5; i++) {
  const cell = cells[i];
  const text = cell.innerText;
  
  // Replace cell's inner text with input field
  cell.innerHTML = `<input type="text" value="${text}">`;
  }
  }
  
  // Function to handle saving a student's information after editing
  function saveStudent() {
  const row = this.parentNode.parentNode;
  const cells = row.getElementsByTagName("td");
  
  // Change Save button back to Edit button
  const saveButton = cells[6].querySelector(".edit-btn");
  saveButton.innerHTML = "Edit";
  saveButton.removeEventListener("click", saveStudent);
  saveButton.addEventListener("click", editStudent);
  
  // Make row's cells non-editable
  for (let i = 1; i <= 5; i++) {
  const cell = cells[i];
  const input = cell.querySelector("input");
  const text = input.value;
  
  // Replace input field with cell's inner text
  cell.innerHTML = text;
 }
  }
  
  // Function to handle deleting a student's information
  function deleteStudent() {
  const row = this.parentNode.parentNode;
  tableBody.removeChild(row);
  }
// Add functionality to Add button
addButton.addEventListener("click", () => {
  modal.style.display = "block";
  });
  
  // Add functionality to Close button
  closeModalButton.addEventListener("click", () => {
  modal.style.display = "none";
  });
  
  // Add functionality to Add Student button
  addStudentButton.addEventListener("click", () => {
  const name = document.getElementById("name").value;
  const adm = document.getElementById("adm").value;
  const year = document.getElementById("year").value;
  const program = document.getElementById("program").value;
  const email = document.getElementById("email").value;
  
// Create new row with student information
const newRow = document.createElement("tr");
newRow.innerHTML = `<td>${counter}</td><td>${name}</td><td>${adm}</td><td>${year}</td><td>${program}</td><td>${email}</td><td><button class="edit-btn">Edit</button><button class="delete-btn">Delete</button></td>`;

  // Increment student number counter and append new row to table
  counter++;
  tableBody.appendChild(newRow);
  
  // Add event listeners to new row's edit and delete buttons
  const newEditButton = newRow.querySelector(".edit-btn");
  const newDeleteButton = newRow.querySelector(".delete-btn");
  newEditButton.addEventListener("click", editStudent);
  newDeleteButton.addEventListener("click", deleteStudent);
  
  // Hide modal
  modal.style.display = "none";
  });