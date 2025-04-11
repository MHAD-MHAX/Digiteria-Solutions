import { Link } from 'react-router-dom';
import Hero from '../components/ui/Hero';
import SolutionCard from '../components/ui/SolutionCard';
import ServiceCard from '../components/ui/ServiceCard';
import ContactForm from '../components/ui/ContactForm';
import { FaHospital, FaPrescriptionBottleAlt, FaUserMd, FaChartLine, FaClinicMedical, FaFlask } from 'react-icons/fa';

const HomePage = () => {
  const solutions = [
    {
      title: 'Medicines Optimisation',
      description: 'Supported by analytics and population health management, our portfolio is designed to make prescribing safe, cost effective and simple.',
      imageUrl: 'https://ext.same-assets.com/4069049614/384574081.webp',
      ctaText: 'Discover more',
      ctaLink: '/medicines-optimisation',
    },
    {
      title: 'Collaborative PCN working',
      description: "We're providing PCNs with the right tools to collaborate effectively, share resources and strengthen their service offering.",
      imageUrl: 'https://ext.same-assets.com/4069049614/1499727412.webp',
      ctaText: 'Discover more',
      ctaLink: '/pcn',
    },
    {
      title: 'Empowering pharmacies',
      description: 'Manage dispensing, services, and patient engagement seamlessly with our comprehensive technology designed for the modern pharmacy landscape.',
      imageUrl: 'https://ext.same-assets.com/4069049614/1408070915.webp',
      ctaText: 'Discover more',
      ctaLink: '/empowering-pharmacies',
    },
    {
      title: 'Clinical trial recruitment',
      description: 'Connecting study sponsors with our vast community of healthcare professionals and patients to source quality clinical trial candidates at speed.',
      imageUrl: 'https://ext.same-assets.com/4069049614/287999525.webp',
      ctaText: 'Discover more',
      ctaLink: '/clinical-trial-recruitment',
    },
    {
      title: 'Proactive care with Pathway',
      description: 'Our innovative Pathway solution is enabling healthcare teams to easily identify groups of at-risk patients to deliver proactive diagnosis, treatment and management.',
      imageUrl: 'https://ext.same-assets.com/4069049614/3244488348.webp',
      ctaText: 'Discover more',
      ctaLink: '/proactive-care-with-pathway',
    },
    {
      title: 'Data driven transformation',
      description: 'Identify and manage cohorts of patients, take actionable steps and measure the impact of interventions for scaled data driven transformation.',
      imageUrl: 'https://ext.same-assets.com/4069049614/2435774130.webp',
      ctaText: 'Discover more',
      ctaLink: '/data-driven-transformation',
    },
  ];

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
      title: 'Pharmacy services',
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

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Digiteria Solutions"
        description="At Digiteria Solutions Limited, we aim to revolutionize healthcare and healthcare education through innovative software solutions that empower providers and enhance patient care. We are dedicated to delivering secure, user-friendly technologies that improve clinical outcomes, optimize workflows, and support data-driven decision-making."
        ctaText="Find out more about us"
        ctaLink="/about-us"
        secondaryCtaText="Get in touch"
        secondaryCtaLink="https://clouder-nu.vercel.app/"
      />

      {/* EMIS is now Optum Section */}
      <section className="bg-optum-teal/20 py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-optum-blue mb-6">Digiteria</h2>
              <p className="text-optum-blue/80 mb-6">
              At Digiteria Solutions Limited, we aim to revolutionize healthcare and healthcare education through innovative software solutions that empower providers and enhance patient care.
              </p>
              <Link to="/about-us" className="btn-primary inline-block">
                Find out more
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://ext.same-assets.com/4069049614/1880410844.webp"
                alt="Doctor with iPad"
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                {/* Play button */}
                <div className="bg-white rounded-full h-16 w-16 flex items-center justify-center shadow-lg">
                  <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-optum-blue border-b-[10px] border-b-transparent ml-1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

  



  


      {/* News Section */}
      <section className="py-16 bg-optum-teal/10">
        <div className="container">
      

      
        </div>
      </section>

      {/* Contact Form Section */}
      <div id="enquiry">
        <ContactForm />
      </div>
    </>
  );
};

export default HomePage;
