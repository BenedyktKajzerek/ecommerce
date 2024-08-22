import { Footer } from "../components/layouts/Footer";
import { Navbar } from "../components/layouts/Navbar";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Main Content Area */}
      <div className="flex-grow container pt-60">
        
        <h1>About Us</h1>

      </div>

      <Footer/>
    </div>
  )
};

export { About };