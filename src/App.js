import './App.css';
import Layout from './components/Layout';
import IndexPage from './pages/IndexPage';
import ProjectOneDetails from './pages/ProjectOneDetails';
import ProjectTwoDetails from './pages/ProjectTwoDetails';
import { Router, Routes, Route } from 'react-router-dom';


function App() {
  return (



    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<IndexPage />} />
      </Route>
      <Route>
        <Route path='/shopmaster' element={<ProjectOneDetails />} />
        <Route path='/techwow' element={<ProjectTwoDetails />} />
      </Route>
    </Routes>


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

    // <div>
    //   <Navbar />
    //   <HeaderSection />
    //   <main>
    //     <About />
    //     <ProjectSection />
    //     <OtherProjects />
    //     <ContactSection />
    //     <Socials />
    //   </main>
    // </div>
  );
}

export default App;