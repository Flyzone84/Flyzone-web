function Footer() {
    try {
        return (
            <footer data-name="footer" className="bg-gray-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div data-name="footer-about" className="col-span-2 md:col-span-1">
                            <h3 className="text-xl font-bold mb-4">FLYZONE84</h3>
                            <p className="text-gray-400">
                                Leading provider of cybersecurity solutions and services.
                            </p>
                        </div>
                        <div data-name="footer-links">
                            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                            <ul className="space-y-2">
                                <li><a href="#services" className="text-gray-400 hover:text-white">Services</a></li>
                                <li><a href="#features" className="text-gray-400 hover:text-white">Features</a></li>
                                <li><a href="#team" className="text-gray-400 hover:text-white">Team</a></li>
                                <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
                            </ul>
                        </div>
                        <div data-name="footer-social">
                            <h3 className="text-xl font-bold mb-4">Connect</h3>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-400 hover:text-white">
                                    <i className="fab fa-twitter text-xl"></i>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    <i className="fab fa-linkedin text-xl"></i>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    <i className="fab fa-github text-xl"></i>
                                </a>
                            </div>
                        </div>
                        <div data-name="footer-newsletter">
                            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
                            <form className="flex">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="bg-gray-800 text-white px-4 py-2 rounded-l-lg focus:outline-none"
                                />
                                <button
                                    type="submit"
                                    className="bg-blue-900 px-4 py-2 rounded-r-lg hover:bg-blue-800"
                                >
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-8 pt-8 text-center">
                        <p className="text-gray-400">
                            © 2024 FLYZONE84. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        );
    } catch (error) {
        console.error('Footer error:', error);
        reportError(error);
        return null;
    }
}
