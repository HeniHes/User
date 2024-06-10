import React, { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);

  // Step 2: Use useEffect to fetch data when the component mounts
  useEffect(() => {
    // This is like the robot's arm reaching out to get data
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json()) // Convert the response to JSON
      .then((data) => setUsers(data)) // Store the data in state
      .catch((error) => console.error("Error fetching data:", error)); // Handle any errors
  }, []); // Empty array means this effect runs once when the component mounts

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li> // Display each user's name
        ))}
      </ul>
    </div>
  );
}

export default App;
