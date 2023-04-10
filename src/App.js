import './App.css';
import { Route, Routes } from "react-router-dom";
import Layout from './components/Layout';
import About from './pages/About';
import IndexPage from './pages/IndexPage';
import Navbar from './components/Navbar';
import HeaderSection from './components/HeaderSection';
import Projects from './pages/Projects';


function App() {
  return (
    <div>
      <Navbar />
      <HeaderSection />
      <main>
        <About />
        <Projects />
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