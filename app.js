function App() {
    try {
        return (
            <div data-name="app-container">
                <Navbar />
                <Hero />
                <Services />
                <Features />
                <Stats />
                <Team />
                <Contact />
                <Footer />
            </div>
        );
    } catch (error) {
        console.error('App error:', error);
        reportError(error);
        return null;
    }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
