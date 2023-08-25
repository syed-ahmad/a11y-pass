import "./styles.css";
import { CreatePasswordForm } from "./Password";

export default function App() {
  return (
    <div className="App">
      <h1>Create Password</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <CreatePasswordForm />
      </div>
    </div>
  );
}
