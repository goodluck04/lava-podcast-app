import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import EditTranscript from "./components/EditTranscript";
import CreateNewProject from "./pages/CreateNewProject";
import Projects from "./pages/Projects";
import UploadFlow from "./pages/UploadFlow";
// import Home from "./pages/Home";
// import Home from "./pages/Home";
// import SignIn from "./pages/SignIn";
// import SignUp from "./pages/SignUp";
// import About from "./pages/About";
// import Profile from "./pages/Profile";
// import Header from "./components/Header";
// import { PrivateRoute } from "./components/PrivateRoute";
// import CreateListing from "./pages/CreateListing";
// import UpdateListing from "./pages/UpdateListing";
// import Listing from "./pages/Listing";
// import Search from "./pages/Search";



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-new-project" element={<CreateNewProject />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/upload/:id/:id" element={<EditTranscript />} />
        <Route path="/project/:id" element={<UploadFlow />} />
        
      </Routes>
    </BrowserRouter>
  );
}
