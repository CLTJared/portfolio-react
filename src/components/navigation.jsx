// Bringing in the required import from 'react-router-dom'
import { Link } from 'react-router-dom';
import Navbar from './ui/navbar';

export default function Navigation() {
  // The Navbar UI component will render each of the Link elements in the links prop
  return (
    <Navbar
      links={[
        <Link key={1} className="nav-link" to="/">
            Home
        </Link>,
        <Link key={2} className="nav-link" to="/about">
            About Me
        </Link>,
        <Link key={3} className="nav-link" to="/portfolio">
            Portfolio
        </Link>,
        <Link key={4} className="nav-link" to="/contact">
            Contact
        </Link>,
        <Link key={5} className="nav-link" to="https://sites.google.com/view/www-hijared-us/home" target="_blank">
            Resume
        </Link>,
      ]}
    />
  );
}
