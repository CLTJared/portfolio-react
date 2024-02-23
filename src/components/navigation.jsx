// Bringing in the required import from 'react-router-dom'
import { Link } from 'react-router-dom';
import Navbar from './ui/navbar';

export default function Navigation() {
  // The Navbar UI component will render each of the Link elements in the links prop
  return (
    <Navbar
      links={[
        <Link key={1} className="nav-link text-primary" to="/">
            Home
        </Link>,
        <Link key={2} className="nav-link text-primary" to="/about">
            About Me
        </Link>,
        <Link key={3} className="nav-link text-primary" to="/portfolio">
            Portfolio
        </Link>,
        <Link key={4} className="nav-link text-primary" to="/contact">
            Contact
        </Link>,
        <Link key={5} className="nav-link text-primary" to="http://www.hijared.us" target="_blank">
            Resume
        </Link>,
      ]}
    />
  );
}