function Hero() {
    try {
        return (
            <div data-name="hero-section" className="hero-gradient text-white pt-24 pb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div data-name="hero-content" className="space-y-8">
                            <h1 className="text-5xl font-bold leading-tight">
                                Securing Your Digital Future with Advanced Cybersecurity
                            </h1>
                            <p className="text-xl text-blue-100">
                                Protect your business with state-of-the-art security solutions and expert consulting services.
                            </p>
                            <div className="space-x-4">
                                <a href="#contact" data-name="cta-button" className="bg-white text-blue-900 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition duration-300">
                                    Get Started
                                </a>
                                <a href="#services" data-name="learn-more-button" className="border border-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-900 transition duration-300">
                                    Learn More
                                </a>
                            </div>
                        </div>
                        <div data-name="hero-image" className="hidden md:block">
                            <img 
                                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800"
                                alt="Cybersecurity Illustration"
                                className="w-full rounded-lg shadow-2xl floating"
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Hero error:', error);
        reportError(error);
        return null;
    }
}
