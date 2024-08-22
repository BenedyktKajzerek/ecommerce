import { Footer } from "../components/layouts/Footer";
import { Navbar } from "../components/layouts/Navbar";
import about from "../assets/about.jpg"

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="container flex-grow pt-60">

        <div className="flex flex-col md:flex-row items-center justify-between">

          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-bl from-primary-light to-secondary-dark text-transparent bg-clip-text">About Us</h1>
            <p className="text-lg mb-4">
              Welcome to Premium Detailing! We are a team of passionate individuals dedicated to providing the best
              products and services to our customers. Our mission is to deliver exceptional value and quality in everything we do.
            </p>
            <p className="text-lg mb-4">
              Founded in 2012, we have grown from a small startup to a leader in our industry. We believe in innovation,
              integrity, and customer satisfaction as the cornerstones of our success.
            </p>
          </div>

          <div className="md:w-1/2 flex justify-end">
            <img
              src={ about }
              alt="About Us"
              className="rounded-lg shadow-lg w-full md:w-4/5"
            />
          </div>
        </div>

      </div>

      <Footer/>
    </div>
  )
};

export { About };