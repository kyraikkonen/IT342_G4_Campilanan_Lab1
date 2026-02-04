import { useEffect, useState } from "react";

function Dashboard({ loggedInUser, setLoggedInUser }) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (loggedInUser) {
      fetch(`http://localhost:8080/api/auth/dashboard/${loggedInUser}`)
        .then((res) => res.json())
        .then((data) => setUserData(data));
    }
  }, [loggedInUser]);

  const handleLogout = () => {
    setLoggedInUser(null); // logout
  };

  if (!userData) return <p>Loading...</p>;

  return (
    <div className="card">
      <h2>Dashboard</h2>
      <p>Welcome, {userData.username}!</p>
      <p>Email: {userData.email}</p>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
}

export default Dashboard;
