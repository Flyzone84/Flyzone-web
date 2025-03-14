function Services() {
    try {
        const services = [
            {
                icon: "shield-halved",
                title: "Cyber Defense",
                description: "Advanced threat protection and security infrastructure solutions."
            },
            {
                icon: "magnifying-glass",
                title: "Security Auditing",
                description: "Comprehensive security assessments and vulnerability testing."
            },
            {
                icon: "cloud",
                title: "Cloud Security",
                description: "Secure cloud infrastructure and data protection services."
            },
            {
                icon: "user-shield",
                title: "Identity Protection",
                description: "Advanced identity and access management solutions."
            }
        ];

        return (
            <section id="services" data-name="services-section" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
                        <p className="text-xl text-gray-600">Comprehensive cybersecurity solutions for your business</p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <div 
                                key={index}
                                data-name={`service-card-${index}`}
                                className="service-card bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300"
                            >
                                <div className="text-blue-900 mb-4">
                                    <i className={`fas fa-${service.icon} text-4xl service-icon`}></i>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                                <p className="text-gray-600">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Services error:', error);
        reportError(error);
        return null;
    }
}
