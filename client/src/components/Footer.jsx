import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-12 w-full ">
            <div className=" mx-auto px-6 md:px-12 w-2/3 m-auto ">
                <div className="flex flex-col md:flex-row md:justify-between">

                    <div className="mb-6 md:mb-0">
                        <h2 className="text-2xl font-bold mb-4">Ecomzy</h2>
                        <p className="mb-4">
                            We are committed to providing you with the best shopping experience.

                        </p>
                        <p className="mb-4">1234 Y-street, Delhi, India</p>
                        <p className="mb-4">Phone: +91 923-456-7890</p>
                        <p>Email: <a href="mailto:support@ecomzy.com" className="text-blue-400">support@ecomzy.com</a></p>
                        <div className="mt-4 flex ">
                            <a href="https://facebook.com" className="text-gray-400 hover:text-white mx-2">
                                <FaFacebookF size={20} />
                            </a>
                            <a href="https://twitter.com" className="text-gray-400 hover:text-white mx-2">
                                <FaTwitter size={20} />
                            </a>
                            <a href="https://instagram.com" className="text-gray-400 hover:text-white mx-2">
                                <FaInstagram size={20} />
                            </a>
                            <a href="https://linkedin.com" className="text-gray-400 hover:text-white mx-2">
                                <FaLinkedinIn size={20} />
                            </a>
                        </div>
                    </div>


                    <div className="mb-6 md:mb-0">
                        <h3 className="text-lg font-semibold mb-4">Navigation</h3>
                        <ul>
                            <li className="mb-2"><a href="/about" className="hover:text-gray-400">About Us</a></li>
                            <li className="mb-2"><a href="/" className="hover:text-gray-400">Products</a></li>
                            <li className="mb-2"><a href="/services" className="hover:text-gray-400">Services</a></li>
                            <li className="mb-2"><a href="/contact" className="hover:text-gray-400">Contact</a></li>
                            <li><a href="/faq" className="hover:text-gray-400">FAQ</a></li>
                        </ul>
                    </div>


                    <div className="mb-6 md:mb-0">
                        <h3 className="text-lg font-semibold mb-4">Legal</h3>
                        <ul>
                            <li className="mb-2"><a href="/privacy-policy" className="hover:text-gray-400">Privacy Policy</a></li>
                            <li className="mb-2"><a href="/terms-of-service" className="hover:text-gray-400">Terms of Service</a></li>
                            <li><a href="/returns" className="hover:text-gray-400">Return Policy</a></li>
                        </ul>
                    </div>


                    
                </div>


                <div className="text-center mt-5">
                    <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Ecomzy. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
