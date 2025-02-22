import './App.css';
import {BrowserRouter} from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import AppContent from "./components/Content/AppContent";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Navbar />
                <AppContent />
                <Footer />
            </div>
        </BrowserRouter>

    );
}

export default App;
