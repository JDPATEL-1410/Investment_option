import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Calculators from './pages/Calculators';
import Resources from './pages/Resources';
import Contact from './pages/Contact';

// Service Pages
import MutualFunds from './pages/services/MutualFunds';
import SIP from './pages/services/SIP';
import Lumpsum from './pages/services/Lumpsum';
import WealthManagement from './pages/services/WealthManagement';
import Education from './pages/services/Education';
import Retirement from './pages/services/Retirement';
import Tax from './pages/services/Tax';
import FinancialPlanning from './pages/services/FinancialPlanning';
import Insurance from './pages/services/Insurance';

// Policy Pages
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import Disclaimers from './pages/Disclaimers';

function App() {
    return (
        <Router>
            <ScrollToTop />
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/calculators" element={<Calculators />} />
                        <Route path="/resources" element={<Resources />} />
                        <Route path="/contact" element={<Contact />} />

                        {/* Service Pages */}
                        <Route path="/services/mutual-funds" element={<MutualFunds />} />
                        <Route path="/services/sip" element={<SIP />} />
                        <Route path="/services/lumpsum" element={<Lumpsum />} />
                        <Route path="/services/wealth-management" element={<WealthManagement />} />
                        <Route path="/services/education" element={<Education />} />
                        <Route path="/services/retirement" element={<Retirement />} />
                        <Route path="/services/tax" element={<Tax />} />
                        <Route path="/services/financial-planning" element={<FinancialPlanning />} />
                        <Route path="/services/insurance" element={<Insurance />} />

                        {/* Policy Pages */}
                        <Route path="/privacy" element={<PrivacyPolicy />} />
                        <Route path="/terms" element={<TermsConditions />} />
                        <Route path="/disclaimers" element={<Disclaimers />} />

                        {/* Login - Placeholder for now */}
                        <Route path="/login" element={<div className="pt-32 pb-20 text-center"><h1 className="text-4xl font-bold">Login Page - Coming Soon</h1></div>} />
                    </Routes>
                </main>
                <Footer />
                <FloatingButtons />
            </div>
        </Router>
    );
}

export default App;
