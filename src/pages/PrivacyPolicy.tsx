import React from 'react';
import { Head } from 'vite-react-ssg';

const PRIVACY_URL = 'https://constructclients.com/privacy-policy';
const PRIVACY_TITLE = 'Privacy Policy | ConstructClients';
const PRIVACY_DESCRIPTION =
  'Learn how ConstructClients collects, uses, and protects your information when you use our website and marketing services.';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-transparent text-[#16325c]">
      <Head>
        <title>{PRIVACY_TITLE}</title>
        <meta name="description" content={PRIVACY_DESCRIPTION} />
        <link rel="canonical" href={PRIVACY_URL} />
        <meta property="og:url" content={PRIVACY_URL} />
        <meta property="og:title" content={PRIVACY_TITLE} />
        <meta property="og:description" content={PRIVACY_DESCRIPTION} />
        <meta name="twitter:title" content={PRIVACY_TITLE} />
        <meta name="twitter:description" content={PRIVACY_DESCRIPTION} />
      </Head>
      {/* Header Section */}
      <div className="bg-white/30 text-[#16325c] py-20 relative overflow-hidden backdrop-blur-sm">
        <div className="absolute inset-0 bg-glow opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center animate-float relative">
            <div className="absolute inset-0 bg-glow rounded-3xl -z-10 opacity-30"></div>
            <div className="relative z-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-glow mb-4">
                <span className="bg-gradient-to-r from-[#c9a227] via-[#f0d78c] to-[#d4af37] bg-clip-text text-transparent">Privacy Policy</span>
              </h1>
              <p className="text-lg md:text-xl text-[#3d5a80]">
                Learn how we protect and manage your data at ConstructClients
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto glass-panel rounded-xl p-8 md:p-12">
          <p className="text-[#3d5a80] mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-[#d4af37]">1. Introduction</h2>
            <p className="text-[#16325c] leading-relaxed">
              Welcome to ConstructClients! This Privacy Policy outlines our practices regarding the collection, use, and protection 
              of your information when you visit our website or engage with our social media marketing services. Please read this 
              policy carefully to understand how we handle your data.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-[#d4af37]">2. Information We Collect</h2>
            <p className="text-[#16325c] leading-relaxed mb-4">
              We collect and process personal information to provide our services effectively. The types of information we may collect include:
            </p>
            <ul className="list-disc ml-6 text-[#16325c] space-y-2">
              <li><strong className="text-[#d4af37]">Client Information:</strong> To facilitate our services, we may collect names, contact details, business information, and payment details.</li>
              <li><strong className="text-[#d4af37]">Employee Information:</strong> For our team members, we collect necessary employment-related information for administrative purposes.</li>
              <li><strong className="text-[#d4af37]">Website Visitors:</strong> When you visit our website, we may collect non-personal information such as IP addresses, browser types, and device information.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-[#d4af37]">3. How We Use Your Information</h2>
            <p className="text-[#16325c] leading-relaxed mb-4">We use the collected information for the following purposes:</p>
            <ul className="list-disc ml-6 text-[#16325c] space-y-2">
              <li><strong className="text-[#d4af37]">Service Delivery:</strong> To provide social media marketing services to our clients.</li>
              <li><strong className="text-[#d4af37]">Communication:</strong> To communicate with clients, employees, and website visitors regarding our services, updates, and promotions.</li>
              <li><strong className="text-[#d4af37]">Analytics:</strong> To analyze website usage and improve our services.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-[#d4af37]">4. Information Sharing</h2>
            <p className="text-[#16325c] leading-relaxed mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
              except as described in this Privacy Policy or as required by law.
            </p>
            <ul className="list-disc ml-6 text-[#16325c] space-y-2">
              <li><strong className="text-[#d4af37]">Third-Party Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our website, conducting our business, or servicing clients.</li>
              <li><strong className="text-[#d4af37]">Legal Compliance:</strong> We may disclose your information if required to comply with laws, regulations, or legal processes.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-[#d4af37]">5. Security Measures</h2>
            <p className="text-[#16325c] leading-relaxed">
              We take reasonable measures to protect your information from unauthorized access or disclosure. This includes 
              physical, electronic, and managerial procedures to safeguard and secure the information we collect.
            </p>
            <p className="text-[#16325c] leading-relaxed mt-4">
              <strong className="text-[#d4af37]">Storage Location and Method:</strong> All client/customer data is securely stored on encrypted servers 
              located within England. We employ industry-standard security measures to ensure the confidentiality and integrity 
              of the data.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-[#d4af37]">6. Your Rights and Choices</h2>
            <p className="text-[#16325c] leading-relaxed mb-4">You have the right to:</p>
            <ul className="list-disc ml-6 text-[#16325c] space-y-2">
              <li><strong className="text-[#d4af37]">Access Your Information:</strong> Request access to the personal information we hold about you.</li>
              <li><strong className="text-[#d4af37]">Correct Your Information:</strong> Ask us to correct any inaccurate or incomplete information.</li>
              <li><strong className="text-[#d4af37]">Delete Your Information:</strong> Request the deletion of your personal information under certain circumstances.</li>
              <li><strong className="text-[#d4af37]">Complaints:</strong> If you have any complaints, please email us at info@ConstructClients.ai, and we will handle the issue to the best of our ability.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-[#d4af37]">7. Data Retention</h2>
            <p className="text-[#16325c] leading-relaxed">
              We retain your information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, 
              unless a longer retention period is required or permitted by law.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-[#d4af37]">8. Changes to the Privacy Policy</h2>
            <p className="text-[#16325c] leading-relaxed">
              We may update this Privacy Policy periodically to reflect changes in our practices. We will notify you of any 
              significant changes through our website.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-[#d4af37]">9. Contact Information</h2>
            <p className="text-[#16325c] leading-relaxed">
              For questions or concerns regarding this Privacy Policy, please contact us at{' '}
              <a href="mailto:info@ConstructClients.ai" className="text-[#d4af37] hover:text-[#c9a227] transition-colors">
                info@ConstructClients.ai
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 