import { Footer } from "../components/layouts/Footer";
import { Navbar } from "../components/layouts/Navbar";

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Main Content Area */}
      <div className="flex-grow container pt-60">
        <div>Contact</div>
      </div>

      <Footer/>
    </div>
  )
};

export { Contact };
