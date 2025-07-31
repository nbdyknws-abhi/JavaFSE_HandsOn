
import "./App.css";

function App() {
  const officeDetails = {
    Name: "Cognizant",
    Rent: 50000,
    // Rent: 70000,
    Address: "Chennai",
  };
  const rentColor = officeDetails.Rent <= 60000 ? "red" : "green";

  return (
    <>
      <div className="App">
        <h1>Office Space , at Affordable Range</h1>

        <img
          src="/Office.jpg"
          alt="Office Space"
          style={{ width: "25%", height: "25%" }}
        />

        <h3>Name: {officeDetails.Name}</h3>
        <h3>
          Rent:{" "}
          <span style={{ color: rentColor }}>Rs. {officeDetails.Rent}</span>
        </h3>
        <h3>Address: {officeDetails.Address}</h3>
      </div>
    </>
  );
}

export default App;
