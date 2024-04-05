import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import ProcessSection from './components/ProcessSection/ProcessSection';
import ClassesSection from './components/ClassesSection/ClassesSection';
import BMICalculator from './components/BMICalculator/BMICalculator';
import TrainersSection from './components/TrainersSection/TrainersSection';
import PurchaseSection from './components/PurchaseSection/PurchaseSection';
import ReviewSection from './components/ReviewSection/ReviewSection';
import ContactSection from './components/ContactSection/ContactSection';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Header />
      <ProcessSection />
      <ClassesSection />
      <BMICalculator />
      <TrainersSection />
      <PurchaseSection />
      <ReviewSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
