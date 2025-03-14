function Team() {
    try {
        const team = [
            {
                name: "Sarah Johnson",
                role: "Chief Security Officer",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300"
            },
            {
                name: "Michael Chen",
                role: "Security Architect",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300"
            },
            {
                name: "Emily Rodriguez",
                role: "Threat Analyst",
                image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=300"
            },
            {
                name: "David Kim",
                role: "Security Engineer",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300"
            }
        ];

        return (
            <section id="team" data-name="team-section" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Expert Team</h2>
                        <p className="text-xl text-gray-600">Meet the professionals keeping your business secure</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {team.map((member, index) => (
                            <div 
                                key={index}
                                data-name={`team-member-card-${index}`}
                                className="team-member-card bg-white rounded-xl overflow-hidden shadow-lg"
                            >
                                <img 
                                    src={member.image} 
                                    alt={member.name}
                                    className="w-full h-64 object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                                    <p className="text-gray-600">{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Team error:', error);
        reportError(error);
        return null;
    }
}
