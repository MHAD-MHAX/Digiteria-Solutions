import { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';

interface ContactFormProps {
  title?: string;
  backgroundImage?: string;
  backgroundColor?: string;
}

const ContactForm = ({
  title = 'Have any questions? Get in touch',
  backgroundImage = 'https://ext.same-assets.com/4069049614/1079313491.webp',
  backgroundColor = 'bg-optum-teal/20'
}: ContactFormProps) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    organization: '',
    sector: '',
    enquiryType: '',
    message: '',
    privacyPolicy: false,
    marketing: false
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would submit the form data to a backend
    console.log('Form submitted:', formData);
    alert('Thank you for your message. This is a demo, so no data has been sent.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const sectors = [
    'Select a sector',
    'Primary care',
    'Secondary care',
    'Community care',
    'Pharmacy',
    'Life sciences',
    'Academic research',
    'Other'
  ];

  const enquiryTypes = [
    'Select an enquiry type',
    'Product information',
    'Technical support',
    'Sales enquiry',
    'Partnership opportunity',
    'Career information',
    'Media enquiry',
    'Other'
  ];

  return (
    <section className={`py-12 ${backgroundColor}`}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Form Container */}
          <div className="lg:col-span-8 bg-white rounded-lg overflow-hidden shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              {/* Image */}
              <div
                className="lg:col-span-2 bg-cover bg-center min-h-[300px] lg:min-h-full hidden lg:block"
                style={{ backgroundImage: `url(${backgroundImage})` }}
              ></div>

              {/* Form */}
              <div className="lg:col-span-3 p-6 md:p-8">
                <h3 className="text-2xl mb-6">{title}</h3>
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <input
                        type="text"
                        name="firstName"
                        placeholder="Your first name*"
                        className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:border-optum-blue"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Your last name*"
                        className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:border-optum-blue"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <input
                        type="email"
                        name="email"
                        placeholder="Your email address*"
                        className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:border-optum-blue"
                        required
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Your phone number*"
                        className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:border-optum-blue"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <input
                        type="text"
                        name="organization"
                        placeholder="Your organisation name*"
                        className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:border-optum-blue"
                        required
                        value={formData.organization}
                        onChange={handleChange}
                      />
                    </div>
            
                  </div>

        

                  <div className="mb-6">
                    <textarea
                      name="message"
                      placeholder="What questions do you have?*"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-optum-blue min-h-[120px]"
                      required
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>



           

                  <button
                    type="submit"
                    className="btn-primary w-full md:w-auto"
                  >
                    Send message
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Additional content could go here */}
          <div className="lg:col-span-4 hidden lg:block">
            {/* This space is intentionally left blank to match the layout */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
