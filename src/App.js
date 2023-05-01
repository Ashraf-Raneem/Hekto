import logo from "./logo.svg";
import "./App.css";
import PrimaryNav from "./components/navbars/PrimaryNav";
import SecondaryNav from "./components/navbars/SecondaryNav";
import Cover from "./components/cover/Cover";

function App() {
    return (
        <div>
            <SecondaryNav />
            <PrimaryNav />
            <Cover />
        </div>
    );
}

export default App;
