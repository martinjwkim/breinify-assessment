import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Dashboard from "./Dashboard";

function App() {
  return (
    <Container className="bg-light min-vw-100 min-vh-100 d-flex justify-content-center py-5 sm-pt-3">
      <Dashboard />
    </Container>
  );
}

export default App;
