import { Facebook, Linkedin, Twitter, Youtube, Instagram, Apple, Cuboid as Android } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          {/* For Clients Column */}
          <div className="col-md-3 mb-4">
            <h5>For Clients</h5>
            <ul className="footer-links">
              <li><a href="#">How to hire</a></li>
              <li><a href="#">Talent Marketplace</a></li>
              <li><a href="#">Project Catalog</a></li>
              <li><a href="#">Hire an agency</a></li>
              <li><a href="#">Enterprise</a></li>
              <li><a href="#">Any Hire</a></li>
              <li><a href="#">Contract-to-hire</a></li>
              <li><a href="#">Direct Contracts</a></li>
              <li><a href="#">Hire worldwide</a></li>
              <li><a href="#">Hire in the USA</a></li>
            </ul>
          </div>

          {/* For Talent Column */}
          <div className="col-md-3 mb-4">
            <h5>For Talent</h5>
            <ul className="footer-links">
              <li><a href="#">How to find work</a></li>
              <li><a href="#">Direct Contracts</a></li>
              <li><a href="#">Find freelance jobs worldwide</a></li>
              <li><a href="#">Find freelance jobs in the USA</a></li>
              <li><a href="#">Win work with ads</a></li>
              <li><a href="#">Exclusive resources with Freelancer Plus</a></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="col-md-3 mb-4">
            <h5>Resources</h5>
            <ul className="footer-links">
              <li><a href="#">Help & support</a></li>
              <li><a href="#">Success stories</a></li>
              <li><a href="#">Upwork reviews</a></li>
              <li><a href="#">Resources</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Affiliate programme</a></li>
              <li><a href="#">Free Business Tools</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="col-md-3 mb-4">
            <h5>Company</h5>
            <ul className="footer-links">
              <li><a href="#">About us</a></li>
              <li><a href="#">Leadership</a></li>
              <li><a href="#">Investor relations</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Our impact</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Contact us</a></li>
              <li><a href="#">Partners</a></li>
              <li><a href="#">Trust, safety & security</a></li>
              <li><a href="#">Modern slavery statement</a></li>
            </ul>
          </div>
        </div>

        {/* Social and Mobile Links */}
        <div className="footer-bottom">
          <div className="social-links">
            <span>Follow us</span>
            <div className="social-icons">
              <a href="#" className="social-icon"><Facebook size={20} /></a>
              <a href="#" className="social-icon"><Linkedin size={20} /></a>
              <a href="#" className="social-icon"><Twitter size={20} /></a>
              <a href="#" className="social-icon"><Youtube size={20} /></a>
              <a href="#" className="social-icon"><Instagram size={20} /></a>
            </div>
          </div>

          <div className="mobile-links">
            <span>Mobile app</span>
            <div className="app-icons">
              <a href="#" className="app-icon"><Apple size={20} /></a>
              <a href="#" className="app-icon"><Android size={20} /></a>
            </div>
          </div>
        </div>

        {/* Copyright and Legal */}
        <div className="footer-legal">
          <div className="copyright">
            © 2015 - 2025 Upwork® Global Inc.
          </div>
          <div className="legal-links">
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
            <a href="#">CA Notice at Collection</a>
            <a href="#">Cookie Settings</a>
            <a href="#">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}