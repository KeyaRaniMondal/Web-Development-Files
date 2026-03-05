import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
                <nav>
                    <h6 className="footer-title">CS-Ticket System</h6>
                    <p>Your trusted ticketing solution for seamless support management.</p>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About Us</a>
                    <a className="link link-hover">Our Mission</a>
                    <a className="link link-hover">Contact Saled</a>

                </nav>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Products & Services</a>
                    <a className="link link-hover">Customer Stories</a>
                    <a className="link link-hover">Download Apps</a>
                </nav>

                <nav>
                    <h6 className="footer-title">Information</h6>
                    <a className="link link-hover">Privacy Policy</a>
                    <a className="link link-hover">Terms & Conditions</a>
                    <a className="link link-hover">Join Us</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Social Links</h6>
                    <a className="link link-hover">@CS — Ticket System</a>
                    <a className="link link-hover">@CS — Ticket System</a>
                    <a className="link link-hover">@CS — Ticket System</a>
                    <a className="link link-hover">support@cst.com</a>
                </nav>
                <hr />
            </footer>
        </div>
    );
};

export default Footer;