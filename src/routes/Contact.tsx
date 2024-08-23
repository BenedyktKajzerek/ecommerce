import { Footer } from "../components/layouts/Footer";
import { Navbar } from "../components/layouts/Navbar";

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Main Content Area */}
      <div className="flex-grow container pt-40">
        <h1 className="font-extrabold text-7xl text-center mb-12 bg-gradient-to-bl from-primary-light to-secondary-dark text-transparent bg-clip-text">
          Contant Us
        </h1>

        <div className="p-6 rounded-lg max-w-lg w-full ml-auto mr-auto text-center text-grey">
          <p className="text-lg mb-4">
            If you have any questions or need further information, feel free to reach out to us.
          </p>
          <p className="text-lg mb-4">
            <strong className="text-white">Address:</strong><br />
            1234 Detail Street,<br />
            Detailing, CA 12345
          </p>
          <p className="text-lg mb-4">
            <strong className="text-white">Email:</strong><br />
            carscontact@gmail.com
          </p>
          <p className="text-lg">
            <strong className="text-white">Phone:</strong><br />
            123 456 789
          </p>
        </div>
      
      </div>

      <Footer/>
    </div>
  )
};

export { Contact };
