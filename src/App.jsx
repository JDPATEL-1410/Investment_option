import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import RiskProfile from './pages/RiskProfile';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import CommissionDisclosure from './pages/CommissionDisclosure';

// Services
import MutualFunds from './pages/services/MutualFunds';
import GoalPlanning from './pages/services/GoalPlanning';
import PortfolioReview from './pages/services/PortfolioReview';
import TaxPlanning from './pages/services/TaxPlanning';
import Insurance from './pages/services/Insurance';
import RetirementPlanning from './pages/services/RetirementPlanning';

// Goals
import DreamHome from './pages/goals/DreamHome';
import WealthCreation from './pages/goals/WealthCreation';
import Retirement from './pages/goals/Retirement';
import ChildEducation from './pages/goals/ChildEducation';
import ChildWedding from './pages/goals/ChildWedding';
import EmergencyFund from './pages/goals/EmergencyFund';

// Calculators
import SIPCalculator from './pages/calculators/SIPCalculator';
import LumpsumCalculator from './pages/calculators/LumpsumCalculator';
import RetirementCalculator from './pages/calculators/RetirementCalculator';
import EMICalculator from './pages/calculators/EMICalculator';
import StepUpSIPCalculator from './pages/calculators/StepUpSIPCalculator';
import SWPCalculator from './pages/calculators/SWPCalculator';

// Research
import TrailingReturns from './pages/research/TrailingReturns';

function App() {
    return (
        <HelmetProvider>
            <Router>
                <ScrollToTop />
                <ScrollProgress />
                <div className="flex flex-col min-h-screen overflow-x-hidden">
                    <Header />
                    <main className="flex-1">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/blog" element={<Blog />} />
                            <Route path="/risk-profile" element={<RiskProfile />} />

                            {/* Services */}
                            <Route path="/services/mutual-funds" element={<MutualFunds />} />
                            <Route path="/services/goal-planning" element={<GoalPlanning />} />
                            <Route path="/services/portfolio-review" element={<PortfolioReview />} />
                            <Route path="/services/tax-planning" element={<TaxPlanning />} />
                            <Route path="/services/insurance" element={<Insurance />} />
                            <Route path="/services/retirement-planning" element={<RetirementPlanning />} />

                            {/* Goals */}
                            <Route path="/goals/dream-home" element={<DreamHome />} />
                            <Route path="/goals/wealth-creation" element={<WealthCreation />} />
                            <Route path="/goals/retirement" element={<Retirement />} />
                            <Route path="/goals/child-education" element={<ChildEducation />} />
                            <Route path="/goals/child-wedding" element={<ChildWedding />} />
                            <Route path="/goals/emergency-fund" element={<EmergencyFund />} />

                            {/* Calculators */}
                            <Route path="/calculators/sip" element={<SIPCalculator />} />
                            <Route path="/calculators/lumpsum" element={<LumpsumCalculator />} />
                            <Route path="/calculators/retirement" element={<RetirementCalculator />} />
                            <Route path="/calculators/emi" element={<EMICalculator />} />
                            <Route path="/calculators/step-up-sip" element={<StepUpSIPCalculator />} />
                            <Route path="/calculators/swp" element={<SWPCalculator />} />

                            {/* Research */}
                            <Route path="/research/trailing-returns" element={<TrailingReturns />} />

                            {/* Legal */}
                            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                            <Route path="/terms" element={<Terms />} />
                            <Route path="/commission-disclosure" element={<CommissionDisclosure />} />
                        </Routes>
                    </main>
                    <Footer />
                    <WhatsAppFloat />
                    <BackToTop />
                </div>
            </Router>
        </HelmetProvider>
    );
}

export default App;
