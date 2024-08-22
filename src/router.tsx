import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { About } from "./routes/About";
import { FAQ } from "./routes/FAQ";
import { Contact } from "./routes/Contact";

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/about-us', element: <About /> },
  { path: '/faq', element: <FAQ /> },
  { path: '/contact', element: <Contact /> },
]);

export { router };
