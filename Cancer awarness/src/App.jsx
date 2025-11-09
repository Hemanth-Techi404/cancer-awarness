import Nav from './Components/Nav';
import Hero from './Components/Hero';
import InspirationalQuotes from './Components/InspirationalQuotes';
import ContactForm from './Components/ContactForm';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <Hero id="home" />
      <InspirationalQuotes id="quotes" />
      <ContactForm id="contact" />

      <footer className="bg-gray-900 text-white py-8 px-4 text-center">
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} Cancer Awareness & Support. Together we are stronger.
        </p>
      </footer>
    </div>
  );
}

export default App;
