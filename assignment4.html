<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Registration Form and Sortable Table</title>
  <!-- Bootstrap CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
  <!-- Custom CSS -->
  <style>
    .table-container {
      margin-top: 20px;
    }
    .form-container {
      margin-bottom: 30px;
    }
    .filter-container {
      margin-top: 20px;
    }
  </style>
</head>
<body>

<div class="container">
  <!-- Registration Form -->
  <div class="form-container">
    <h2>Registration Form</h2>
    <form id="registrationForm">
      <div class="mb-3">
        <label for="name" class="form-label">Full Name</label>
        <input type="text" class="form-control" id="name" placeholder="Enter full name" required>
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input type="email" class="form-control" id="email" placeholder="Enter email" required>
      </div>
      <div class="mb-3">
        <label for="age" class="form-label">Age</label>
        <input type="number" class="form-control" id="age" placeholder="Enter age" required>
      </div>
      <button type="submit" class="btn btn-primary">Register</button>
    </form>
  </div>

  <!-- Filter and Sort Options -->
  <div class="filter-container">
    <input type="text" id="searchInput" class="form-control" placeholder="Search by name" onkeyup="filterTable()">
  </div>

  <!-- Table for Registered Users -->
  <div class="table-container">
    <h3>Registered Users</h3>
    <table class="table table-striped" id="registrationTable">
      <thead>
        <tr>
          <th scope="col" onclick="sortTable(0)">Name <i class="bi bi-sort"></i></th>
          <th scope="col" onclick="sortTable(1)">Email</th>
          <th scope="col" onclick="sortTable(2)">Age</th>
        </tr>
      </thead>
      <tbody id="tableBody">
        <!-- Dynamic rows will be added here -->
      </tbody>
    </table>
  </div>
</div>

<!-- Bootstrap JS and Popper.js -->
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js"></script>

<script>
  // JavaScript to handle the registration form submission
  document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;

    const newRow = document.createElement("tr");

    newRow.innerHTML = `
      <td>${name}</td>
      <td>${email}</td>
      <td>${age}</td>
    `;

    document.getElementById("tableBody").appendChild(newRow);

    // Clear the form after submission
    document.getElementById("registrationForm").reset();
  });

  // JavaScript function for sorting the table
  function sortTable(n) {
    const table = document.getElementById("registrationTable");
    const rows = Array.from(table.rows).slice(1); // Exclude header row
    let isAscending = table.querySelector("th:nth-child(" + (n + 1) + ")").classList.contains("asc");

    rows.sort((rowA, rowB) => {
      const cellA = rowA.cells[n].textContent.trim();
      const cellB = rowB.cells[n].textContent.trim();

      if (isAscending) {
        return cellA.localeCompare(cellB);
      } else {
        return cellB.localeCompare(cellA);
      }
    });

    // Toggle sorting direction
    table.querySelector("th:nth-child(" + (n + 1) + ")").classList.toggle("asc", !isAscending);

    // Append the sorted rows back to the table
    rows.forEach(row => table.appendChild(row));
  }

  // JavaScript function for filtering the table by name
  function filterTable() {
    const input = document.getElementById("searchInput");
    const filter = input.value.toUpperCase();
    const table = document.getElementById("registrationTable");
    const rows = table.getElementsByTagName("tr");

    Array.from(rows).forEach(row => {
      const nameCell = row.getElementsByTagName("td")[0];
      if (nameCell) {
        const nameText = nameCell.textContent || nameCell.innerText;
        row.style.display = nameText.toUpperCase().includes(filter) ? "" : "none";
      }
    });
  }
</script>

</body>
</html>
