import { Link } from 'react-router-dom';
import Hero from '../components/ui/Hero';
import ContactForm from '../components/ui/ContactForm';
import ServiceCard from '../components/ui/ServiceCard';

import Image from "../Images/Health2.mp4";
import { FaUserMd, FaClinicMedical, FaPrescriptionBottleAlt, FaChartLine, FaFlask } from 'react-icons/fa';

const AboutPage = () => {
  const services = [
    {
      title: 'Primary care',
      description: '58% of GP practices use our clinical systems',
      icon: <FaUserMd size={32} className="text-optum-blue" />,
      ctaLink: '/primary-care',
    },
    {
      title: 'Community care',
      description: '19% of community organisations use EMIS Web',
      icon: <FaClinicMedical size={32} className="text-optum-blue" />,
      ctaLink: '/community-care',
    },
    {
      title: 'Community pharmacy',
      description: '45% of pharmacies use ProScript Connect',
      icon: <FaPrescriptionBottleAlt size={32} className="text-optum-blue" />,
      ctaLink: '/community-pharmacy',
    },
    {
      title: 'Population health',
      description: '86% of ICSs supported via the population health management delivery programme',
      icon: <FaChartLine size={32} className="text-optum-blue" />,
      ctaLink: '/population-health',
    },
    {
      title: 'Community pharmacy',
      description: '90% of pharmacies in England use PharmOutcomes to deliver pharmacy first',
      icon: <FaPrescriptionBottleAlt size={32} className="text-optum-blue" />,
      ctaLink: '/pharmacy-services',
    },
    {
      title: 'Life sciences',
      description: '1,000+ Recruit active GP practices',
      icon: <FaFlask size={32} className="text-optum-blue" />,
      ctaLink: '/life-sciences',
    },
  ];

  const values = [
    {
      title: 'Integrity',
      description: 'Do the right thing and follow through on our shared commitment to quality.',
    },
    {
      title: 'Compassion',
      description: 'Listen, advocate and act with urgency for those we serve and our colleagues.',
    },
    {
      title: 'Inclusion',
      description: 'Welcome, value, respect and hear all voices and diverse points of view.',
    },
    {
      title: 'Relationships',
      description: 'Work together to deepen connections and collaboration for better outcomes.',
    },
    {
      title: 'Innovation',
      description: 'Invent a better future by learning from the past.',
    },
    {
      title: 'Performance',
      description: 'Strive for high quality results in everything we do.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Who we are"
        description="Digiteria Solutions Limited is a health-tech company committed to driving digital transformation in healthcare across Nigeria. We specialize in developing digital products and platforms that streamline health information management. From digital portfolio management and electronic patient records to comprehensive healthcare marketplace solutions, our services are designed to make healthcare delivery smarter, faster, and more efficient."
        
      />




<section className="bg-gray-100 py-16 px-6">
<p className="text-3xl font-bold text-center text-gray-800">Mission Statement</p><br></br>
  <div className="max-w-3xl mx-auto bg-white p-10 rounded-lg shadow-md">
    <p className="text-xl md:text-2xl leading-relaxed text-gray-800">
      At <span className="font-semibold text-blue-600">Digiteria Solutions Limited</span>, we aim to revolutionize healthcare and healthcare education through innovative software solutions that empower providers and enhance patient care. We are dedicated to delivering secure, user-friendly technologies that improve clinical outcomes, optimize workflows, and support data-driven decision-making.
    </p>
  </div>
</section>


<section className="bg-gradient-to-r from-blue-100 to-blue-200 py-20 px-6">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-4xl font-bold text-blue-900 mb-6">Vision Statement</h2>
    <p className="text-xl leading-relaxed text-blue-800">
      To be a leading innovator in healthcare education and technology, transforming the delivery of care through intelligent, seamless, and accessible software solutions. We envision a future where every Nigerian healthcare provider is empowered with cutting-edge tools to deliver personalized, data-driven care, improving patient outcomes and enhancing the overall healthcare experience.
    </p>
  </div>
</section>
 




      {/* Contact Form Section */}
      <div id="enquiry">
        <ContactForm />
      </div>
    </>
  );
};

export default AboutPage;
