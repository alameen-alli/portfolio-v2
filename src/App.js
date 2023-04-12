import './App.css';
import { Route, Routes } from "react-router-dom";
import Layout from './components/Layout';
import About from './pages/About';
import IndexPage from './pages/IndexPage';
import Navbar from './components/Navbar';
import HeaderSection from './components/HeaderSection';
import ProjectSection from './pages/ProjectSection';
import OtherProjects from './pages/OtherProjects';
import ContactSection from './pages/ContactSection';
import Socials from './components/Socials';


function App() {
  return (
    <div>
      <Navbar />
      <HeaderSection />
      <main>
        <About />
        <ProjectSection />
        <OtherProjects />
        <ContactSection />
        <Socials />
      </main>
    </div>
    // <Routes>
    //   <Route path="/" element={<Layout />}>
    //     <Route index element={<IndexPage />} />
    //     <Route path="/about-me" element={<About />} />
    //      {/* <Route path="/register" element={<RegisterPage />} />
    //     <Route path="/create" element={<CreatePost />} />
    //     <Route path="/post/:id" element={<PostPage />} />
    //     <Route path="/edit/:id" element={<EditPost />} /> */}
    //   </Route>
    // </Routes>
  );
}

export default App;