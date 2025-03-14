function Stats() {
    try {
        const stats = [
            { number: "500+", label: "Clients Protected" },
            { number: "99.9%", label: "Uptime" },
            { number: "24/7", label: "Support" },
            { number: "100+", label: "Security Experts" }
        ];

        return (
            <section data-name="stats-section" className="py-20 bg-blue-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div 
                                key={index}
                                data-name={`stat-card-${index}`}
                                className="stat-card text-center p-6 rounded-lg"
                            >
                                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                                <div className="text-blue-200">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Stats error:', error);
        reportError(error);
        return null;
    }
}
