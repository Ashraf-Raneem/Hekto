import logo from "./logo.svg";
import "./App.css";
import PrimaryNav from "./components/navbars/PrimaryNav";
import SecondaryNav from "./components/navbars/SecondaryNav";

function App() {
    return (
        <div>
            <SecondaryNav />
            <PrimaryNav />
        </div>
    );
}

export default App;
