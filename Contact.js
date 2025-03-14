function Contact() {
    try {
        const [formData, setFormData] = React.useState({
            name: '',
            email: '',
            message: ''
        });

        const handleSubmit = (e) => {
            e.preventDefault();
            // Handle form submission here
            console.log('Form submitted:', formData);
        };

        const handleChange = (e) => {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value
            });
        };

        return (
            <section id="contact" data-name="contact-section" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
                        <p className="text-xl text-gray-600">Get in touch with our security experts</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div data-name="contact-info" className="space-y-6">
                            <div className="flex items-center space-x-4">
                                <i className="fas fa-map-marker-alt text-2xl text-blue-900"></i>
                                <div>
                                    <h3 className="text-xl font-semibold">Location</h3>
                                    <p className="text-gray-600">123 Security Street, Cyber City, 10001</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <i className="fas fa-phone text-2xl text-blue-900"></i>
                                <div>
                                    <h3 className="text-xl font-semibold">Phone</h3>
                                    <p className="text-gray-600">+1 (555) 123-4567</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <i className="fas fa-envelope text-2xl text-blue-900"></i>
                                <div>
                                    <h3 className="text-xl font-semibold">Email</h3>
                                    <p className="text-gray-600">contact@flyzone84.com</p>
                                </div>
                            </div>
                        </div>

                        <form data-name="contact-form" onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-800 transition duration-300"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Contact error:', error);
        reportError(error);
        return null;
    }
}
