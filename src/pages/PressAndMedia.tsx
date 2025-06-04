import React from 'react';
import Layout from '@/components/Layout';
import { useTheme } from '@/components/ThemeProvider';

const PressAndMedia: React.FC = () => {
  const { theme } = useTheme();
  
  console.log('Current theme:', theme);

  const isLightMode = theme === 'light';

  return (
    <Layout>
      <section className="py-16 relative bg-background text-foreground dark:text-white">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url("/lovable-uploads/Desktop - 11_edited.jpg")',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed'
          }}
        ></div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 dark:bg-black/50"></div>
        
        {/* Content */}
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <h1 className="heading-xl mb-10 text-center text-white drop-shadow-sm">Press & Media</h1>

          <div className="max-w-4xl mx-auto space-y-12">
            {/* Media Resources Section */}
            <div className="bg-white/60 dark:bg-black/40 backdrop-blur-sm rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-semibold mb-6 text-blue-900 dark:text-brand-blue">Media Resources</h2>
              <p className="text-gray-900 dark:text-gray-300 mb-6">
                Here you will find media and press resources about LIQUIDMIND® such as Logo and Media contact details.
              </p>
              <p className="text-gray-900 dark:text-gray-300">
                For media-related enquiries contact: <a href="mailto:support@liquidmind.ai" className="text-blue-700 dark:text-brand-blue hover:underline">support@liquidmind.ai</a>
              </p>
            </div>

            {/* Logo Section */}
            <div className="bg-white/60 dark:bg-black/40 backdrop-blur-sm rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-semibold mb-6 text-blue-900 dark:text-brand-blue">Logo</h2>
              <p className="text-gray-900 dark:text-gray-300 mb-6">
                Download official Logo of "LIQUIDMIND®", contact our team for usage.
              </p>
              <div className="aspect-video bg-white dark:bg-gray-800 rounded-lg flex items-center justify-center p-8">
                <img 
                  src={theme === 'dark' 
                    ? "/lovable-uploads/ff9e5cb3-b82b-43ea-9259-c3017ffbedee-Photoroom.png"
                    : "/lovable-uploads/day-mode/liquid-mind-logo-day.png"
                  }
                  alt="LIQUIDMIND Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Company Information Section */}
            <div className="bg-white/60 dark:bg-black/40 backdrop-blur-sm rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-semibold mb-6 text-blue-900 dark:text-brand-blue">Company Information</h2>
              <p className="text-gray-900 dark:text-gray-300 mb-6">
                Here, find everything about the company, milestones, key facts, reports, etc.
              </p>
              <div className="aspect-video bg-white/80 dark:bg-gray-800 rounded-lg flex items-center justify-center overflow-hidden">
                <img 
                  src="/lovable-uploads/MSMEsummit.jpeg" 
                  alt="MSME Summit" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Images and Videos Section */}
            <div className="bg-white/60 dark:bg-black/40 backdrop-blur-sm rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-semibold mb-6 text-blue-900 dark:text-brand-blue">Images and Videos</h2>
              <p className="text-gray-900 dark:text-gray-300 mb-6">
                Find the information related to pictures and videos used in this website.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="aspect-video bg-white/80 dark:bg-gray-800 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.youtube.com/embed/Gbr19NqGt-A"
                    title="LIQUIDMIND Video"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="aspect-video bg-white/80 dark:bg-gray-800 rounded-lg overflow-hidden">
                  <img 
                    src="/lovable-uploads/ip_conference_2_720.png" 
                    alt="IP Conference" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-video bg-white/80 dark:bg-gray-800 rounded-lg overflow-hidden">
                  <img 
                    src="/lovable-uploads/NCSTC.jpeg" 
                    alt="NCSTC" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* News Section */}
            <div className="bg-white/60 dark:bg-black/40 backdrop-blur-sm rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-semibold mb-6 text-blue-900 dark:text-brand-blue">News</h2>
              <div className="text-center py-12">
                <h3 className="text-3xl font-bold text-blue-900 dark:text-brand-blue">COMING SOON</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PressAndMedia; 