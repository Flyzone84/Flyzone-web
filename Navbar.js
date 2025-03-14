function Navbar() {
    try {
        const [isOpen, setIsOpen] = React.useState(false);

        return (
            <nav data-name="navbar" className="bg-white shadow-lg fixed w-full z-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <div className="text-2xl font-bold text-blue-900" data-name="logo">
                                FLYZONE84
                            </div>
                        </div>
                        
                        <div className="hidden md:flex items-center space-x-8">
                            <a href="#services" data-name="nav-services" className="text-gray-700 hover:text-blue-900">Services</a>
                            <a href="#features" data-name="nav-features" className="text-gray-700 hover:text-blue-900">Features</a>
                            <a href="#team" data-name="nav-team" className="text-gray-700 hover:text-blue-900">Team</a>
                            <a href="#contact" data-name="nav-contact" className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800">
                                Contact Us
                            </a>
                        </div>

                        <div className="md:hidden flex items-center">
                            <button
                                data-name="mobile-menu-button"
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-gray-700 hover:text-blue-900"
                            >
                                <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
                            </button>
                        </div>
                    </div>
                </div>

                {isOpen && (
                    <div data-name="mobile-menu" className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-blue-900">Services</a>
                            <a href="#features" className="block px-3 py-2 text-gray-700 hover:text-blue-900">Features</a>
                            <a href="#team" className="block px-3 py-2 text-gray-700 hover:text-blue-900">Team</a>
                            <a href="#contact" className="block px-3 py-2 text-blue-900 font-medium">Contact Us</a>
                        </div>
                    </div>
                )}
            </nav>
        );
    } catch (error) {
        console.error('Navbar error:', error);
        reportError(error);
        return null;
    }
}
