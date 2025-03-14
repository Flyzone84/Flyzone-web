function Features() {
    try {
        const features = [
            {
                title: "24/7 Monitoring",
                description: "Round-the-clock security monitoring and threat detection.",
                icon: "clock"
            },
            {
                title: "Incident Response",
                description: "Rapid response team for security incidents and breaches.",
                icon: "bolt"
            },
            {
                title: "Compliance Support",
                description: "Ensure compliance with industry regulations and standards.",
                icon: "check-circle"
            },
            {
                title: "Security Training",
                description: "Comprehensive security awareness training programs.",
                icon: "graduation-cap"
            }
        ];

        return (
            <section id="features" data-name="features-section" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
                        <p className="text-xl text-gray-600">Industry-leading features that set us apart</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <div 
                                key={index}
                                data-name={`feature-card-${index}`}
                                className="feature-card p-6 border border-gray-200 rounded-xl hover:border-blue-500"
                            >
                                <div className="text-blue-900 mb-4">
                                    <i className={`fas fa-${feature.icon} text-3xl`}></i>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Features error:', error);
        reportError(error);
        return null;
    }
}
