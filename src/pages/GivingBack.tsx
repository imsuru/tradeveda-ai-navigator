import Layout from '../components/Layout';

const GivingBack = () => {
  return (
    <Layout>
      <section className="py-16 bg-black text-white min-h-screen relative">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url("/giving back/Desktop - 11_edited.jpg")',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed'
          }}
        ></div>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30 dark:bg-black/50"></div>
        
        {/* Content */}
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          {/* Main Title */}
          <h1 className="text-5xl font-bold text-left text-blue-400 mb-10">
            Giving Back to the Educational Community
          </h1>

          {/* Founder Intro Section - Two Column Layout */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-16">
            {/* Content Column - Left side */}
            <div className="md:w-[55%] space-y-7 text-left flex-shrink-0">
              <p className="text-lg text-gray-100 dark:text-white">
                Our founder, Naveen Athresh, has a lifelong vision of sharing his early successes and product/platform-building learnings with scale companies. Naveen has a rock-solid product career and has been there, done that a/c all types of corporations across myriad verticals.
              </p>
              <p className="text-lg text-gray-100 dark:text-white">
                He strives to improve the quality of products folks churned out of Indian B-schools and work with the corporations that need this niche skill. In this endeavor, he regularly (for the past decade) takes time mentoring youngsters (purely non-profit) graduating from technology/business schools to take up product platform building as a profession.
              </p>
              <p className="text-lg text-gray-100 dark:text-white">
                Naveen has been involved in getting mentored by the best of the best since his early days in B2B/B2C (business to business/consumer) product management back in 2010 from Marty Cagan of the Silicon Valley product group. Marty is recognized as one of the top hands-on product management coaches worldwide.
              </p>
              <p className="text-lg text-gray-100 dark:text-white">
                Over the years, Naveen has set audacious goals for himself. He easily surpassed the goal of training 20000 students on product management by end of 2022. As he exited 2023, he had excelled in training over 155000+ participants/viewers of his product talks.
              </p>
            </div>
            {/* Image Column - Right side */}
            <div className="md:w-[40%] flex justify-end items-center">
              <div className="relative w-full max-w-lg p-0 bg-transparent rounded-2xl shadow-lg flex items-center justify-center">
                <img 
                  src="/giving back/43db47_5824786e73dd4b7fad94523d8a791b07mv2 (1).png"
                  alt="Naveen Athresh"
                  className="w-full h-auto object-cover rounded-2xl"
                  style={{ maxHeight: '520px', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>

          {/* Volunteering Section Title in Blue Box */}
          <div className="flex justify-center mb-10 relative" id="volunteering-box">
            <div className="relative inline-block">
              <div className="absolute -right-2 -bottom-2 bg-blue-600/50 w-full h-full transform rotate-3"></div>
              <div className="absolute -right-1 -bottom-1 bg-blue-500/70 w-full h-full transform rotate-2"></div>
              <h2 className="text-4xl md:text-6xl font-bold bg-blue-500 text-white px-8 py-2 relative z-10">Volunteering</h2>
            </div>
            </div>

          {/* Vertical Line for Timeline (starts exactly at bottom of Volunteering and ends at timeline's end) */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-blue-400 z-10" style={{ top: 'calc(700px + 3.5rem)', height: 'calc(100% - (800px + 3.5rem))' }} />
              
          {/* May 2025 - Left */}
          <div className="relative flex flex-col md:flex-row items-center mb-24">
            <div className="w-full md:w-1/2 pr-0 md:pr-16 flex flex-col items-end">
              <div className="max-w-md">
                <div className="flex items-center gap-4 mb-2">
                  <h3 className="text-2xl font-semibold text-blue-400">May 2025</h3>
                </div>
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="bg-blue-900 text-white px-4 py-1 rounded-full text-sm font-medium">IIFT Kakinada</span>
                  <span className="bg-blue-900 text-white px-4 py-1 rounded-full text-sm font-medium">TEDx Speaker</span>
                </div>
                <div className="bg-white dark:bg-white p-6 rounded-xl">
                  <p className="text-gray-900 dark:text-gray-900 text-lg mb-4">
                    Naveen Athresh delivered a keynote session at TEDxIIFT Kakinada on the theme "Tech, AI & Entrepreneurship: Giving Perspective to Young Future Business Leaders" on May 4, 2025. He highlighted how rising AI tools are reshaping business models and unlocking new opportunities for young entrepreneurs. The session, organized by the TEDxIIFT Kakinada team, was met with excellent coordination and execution.
                  </p>
                </div>
              </div>
            </div>
            <div className="hidden md:block w-0 md:w-1/12 relative">
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-blue-400 rounded-full border-4 border-white z-20"></div>
            </div>
            <div className="w-full md:w-1/2 pl-0 md:pl-16 flex justify-start mt-8 md:mt-0">
              <div className="relative h-80 w-full max-w-2xl rounded-2xl overflow-hidden bg-black flex items-center justify-center mb-4">
                <img
                  src="/giving back/Naveen.png"
                  alt="TEDxIIFT Kakinada May 2025"
                  className="w-full h-full object-contain rounded-2xl"
                />
                  </div>
                </div>
              </div>

          {/* January 2025 - Right */}
          <div className="relative flex flex-col md:flex-row items-center mb-24">
            <div className="w-full md:w-1/2 pr-0 md:pr-16 flex justify-end order-2 md:order-1 mt-8 md:mt-0">
              <div className="relative h-60 w-full max-w-2xl rounded-2xl overflow-hidden bg-black flex items-center justify-center mb-4">
                <img
                  src="/giving back/image (6).png"
                  alt="IIT Madras Jan 2025"
                  className="w-full h-full object-contain rounded-2xl"
                />
              </div>
            </div>
            <div className="hidden md:block w-0 md:w-1/12 relative order-1 md:order-2">
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-blue-400 rounded-full border-4 border-white z-20"></div>
            </div>
            <div className="w-full md:w-1/2 pl-0 md:pl-16 flex flex-col items-start order-1 md:order-3">
              <div className="max-w-md">
                <div className="flex items-center gap-4 mb-2">
                  <h3 className="text-2xl font-semibold text-blue-400">January 2025</h3>
                </div>
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="bg-blue-900 text-white px-4 py-1 rounded-full text-sm font-medium">IIT Madras</span>
                  <span className="bg-blue-900 text-white px-4 py-1 rounded-full text-sm font-medium">Keynote Speaker</span>
                  <span className="bg-blue-900 text-white px-4 py-1 rounded-full text-sm font-medium">Design, Product, Platform Thinking</span>
                </div>
                <div className="bg-white dark:bg-white p-6 rounded-xl">
                  <p className="text-gray-900 dark:text-gray-900 text-lg mb-4">
                    Naveen Athresh recently delivered an engaging 2-hour session to ~40 startup founders from IIT Madras and IITM Research Park on "Design Thinking, Product, and Platform Thinking." The talk emphasized collaborative, bi-directional dialogue—encouraging active participation over passive listening. Grateful to Amay Mahajan and team for the opportunity.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 2024 Timeline Bar */}
          <div className="flex justify-center mb-10 relative">
            <div className="relative inline-block">
              <div className="absolute -right-2 -bottom-2 bg-blue-600/50 w-full h-full transform rotate-3"></div>
              <div className="absolute -right-1 -bottom-1 bg-blue-500/70 w-full h-full transform rotate-2"></div>
              <h2 className="text-4xl md:text-6xl font-bold bg-blue-500 text-white px-8 py-2 relative z-10">2024</h2>
            </div>
          </div>

          {/* December 2024 - Left */}
          <div className="relative flex flex-col md:flex-row items-center mb-24">
            <div className="w-full md:w-1/2 pr-0 md:pr-16 flex flex-col items-end">
              <div className="max-w-md">
                <div className="flex items-center gap-4 mb-2">
                  <h3 className="text-2xl font-semibold text-blue-400">December 2024</h3>
                </div>
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="bg-blue-900 text-white px-4 py-1 rounded-full text-sm font-medium">Keynote Speaker</span>
                  <span className="bg-blue-900 text-white px-4 py-1 rounded-full text-sm font-medium">IIMV</span>
                </div>
                <div className="bg-white dark:bg-white p-6 rounded-xl">
                  <p className="text-gray-900 dark:text-gray-900 text-lg mb-4">
                    Delivered a keynote session on "Future of Digital Trust: The New Business Imperative" at IIM Visakhapatnam on 7th December 2024. He emphasized digital trust as a critical foundation for AI- and quantum-first futures. The session, organized by IIMV Vridhi, was met with excellent coordination and engagement.
                  </p>
                </div>
              </div>
            </div>
            <div className="hidden md:block w-0 md:w-1/12 relative">
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-blue-400 rounded-full border-4 border-white z-20"></div>
            </div>
            <div className="w-full md:w-1/2 pl-0 md:pl-16 flex justify-start mt-8 md:mt-0">
              <div className="relative h-80 w-full max-w-2xl rounded-2xl overflow-hidden bg-black flex items-center justify-center mb-4">
                <img
                  src="/giving back/IIMV (1).jpeg"
                  alt="IIM Visakhapatnam Session"
                  className="w-full h-full object-contain rounded-2xl"
                />
                  </div>
                </div>
              </div>

          {/* November 2024 - Right */}
          <div className="relative flex flex-col md:flex-row items-center mb-24">
            <div className="w-full md:w-1/2 pr-0 md:pr-16 flex justify-end order-2 md:order-1 mt-8 md:mt-0">
              <div className="relative h-80 w-full max-w-2xl rounded-2xl overflow-hidden bg-black flex items-center justify-center mb-4">
                <img
                  src="/giving back/nmit (1).jpeg"
                  alt="NVIDIA Inception Program"
                  className="w-full h-full object-contain rounded-2xl"
                />
              </div>
            </div>
            <div className="hidden md:block w-0 md:w-1/12 relative order-1 md:order-2">
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-blue-400 rounded-full border-4 border-white z-20"></div>
            </div>
            <div className="w-full md:w-1/2 pl-0 md:pl-16 flex flex-col items-start order-1 md:order-3">
              <div className="max-w-md">
                <div className="flex items-center gap-4 mb-2">
                  <h3 className="text-2xl font-semibold text-blue-400">November 2024</h3>
                </div>
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="bg-blue-900 text-white px-4 py-1 rounded-full text-sm font-medium">NMIT</span>
                  <span className="bg-blue-900 text-white px-4 py-1 rounded-full text-sm font-medium">GenAI Judge</span>
                </div>
                <div className="bg-white dark:bg-white p-6 rounded-xl">
                  <p className="text-gray-900 dark:text-gray-900 text-lg mb-4">
                    Liquidmind® AI was proud to be both a silver sponsor and our Founder & CEO, <span className="underline">Naveen Athresh</span>, the GenAI judge along with the finale judge across all the tracks including GenAI, Quantum computing, EV/sustainable energy, Web 3.0 amongst other innovative tracks.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Aug 2024 - Left (First) */}
          <div className="relative flex flex-col md:flex-row items-center mb-24">
            <div className="w-full md:w-1/2 pr-0 md:pr-16 flex flex-col items-end">
              <div className="max-w-md">
                <div className="flex items-center gap-4 mb-2">
                  <h3 className="text-2xl font-semibold text-blue-400">August 2024</h3>
                </div>
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="bg-blue-900 text-white px-4 py-1 rounded-full text-sm font-medium">AI</span>
                  <span className="bg-blue-900 text-white px-4 py-1 rounded-full text-sm font-medium">ML</span>
                  <span className="bg-blue-900 text-white px-4 py-1 rounded-full text-sm font-medium">Deep Learning</span>
                </div>
                <div className="bg-white dark:bg-white p-6 rounded-xl">
                  <p className="text-gray-900 dark:text-gray-900 text-lg mb-4">
                    Naveen participated in this AI / ML and Deep learning conference for AI applied to solving societal problems across different industries and verticals including Deep Tech at the Indian Institute of science Bengaluru.<br/>
                    Was also a co-panelist with Prof Ramesh Raskar from MIT Media Labs Boston MA, USA.
                  </p>
                </div>
              </div>
            </div>
            <div className="hidden md:block w-0 md:w-1/12 relative">
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-blue-400 rounded-full border-4 border-white z-20"></div>
            </div>
            <div className="w-full md:w-1/2 pl-0 md:pl-16 flex justify-start mt-8 md:mt-0">
              <div className="relative h-80 w-full max-w-2xl rounded-2xl overflow-hidden bg-black flex items-center justify-center mb-4">
                <img
                  src="/giving back/1724381174774.jpg"
                  alt="August 2024 Session 1"
                  className="w-full h-full object-contain rounded-2xl"
                />
              </div>
            </div>
          </div>

          {/* August 2024 - Right (Second) */}
          <div className="relative flex flex-col md:flex-row items-center mb-24">
            <div className="w-full md:w-1/2 pr-0 md:pr-16 flex justify-end order-2 md:order-1 mt-8 md:mt-0">
              <div className="relative h-80 w-full max-w-2xl rounded-2xl overflow-hidden bg-black flex items-center justify-center mb-4">
                <img
                  src="/giving back/1723514746786.jpg"
                  alt="August 2024 Session 2"
                  className="w-full h-full object-contain rounded-2xl"
                />
              </div>
            </div>
            <div className="hidden md:block w-0 md:w-1/12 relative order-1 md:order-2">
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-blue-400 rounded-full border-4 border-white z-20"></div>
            </div>
            <div className="w-full md:w-1/2 pl-0 md:pl-16 flex flex-col items-start order-1 md:order-3">
              <div className="max-w-md">
                <div className="flex items-center gap-4 mb-2">
                  <h3 className="text-2xl font-semibold text-blue-400">August 2024</h3>
                </div>
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="bg-blue-900 text-white px-4 py-1 rounded-full text-sm font-medium">User Research</span>
                  <span className="bg-blue-900 text-white px-4 py-1 rounded-full text-sm font-medium">Design Thinking</span>
                  <span className="bg-blue-900 text-white px-4 py-1 rounded-full text-sm font-medium">Product Thinking</span>
                </div>
                <div className="bg-white dark:bg-white p-6 rounded-xl">
                  <p className="text-gray-900 dark:text-gray-900 text-lg mb-4">
                    Naveen was at IIT Madras to give a talk to their BTech students on user research and design thinking product thinking. Loved it. Got a detailed tour of the great deep tech work they are doing around hyper loop and electric autonomous vehicles and solar powered vehicles.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* March 2024 - Left */}
          <div className="relative flex flex-col md:flex-row items-center mb-24">
            <div className="w-full md:w-1/2 pr-0 md:pr-16 flex flex-col items-end">
              <div className="max-w-md">
                <div className="flex items-center gap-4 mb-2">
                  <h3 className="text-2xl font-semibold text-blue-400">March 2024</h3>
                </div>
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="bg-blue-900 text-white px-4 py-1 rounded-full text-sm font-medium">Product Management</span>
                </div>
                <div className="bg-white dark:bg-white p-6 rounded-xl">
                  <p className="text-gray-900 dark:text-gray-900 text-lg mb-4">
                    Product leadership Institute is a great institute that brings together leading industry practitioners in this niche area of Product Management to help shape their curriculum and mentor their students with effective / generic best practices with a goal to create 10000 product/platform thinkers from the ground up.
                  </p>
                </div>
              </div>
            </div>
            <div className="hidden md:block w-0 md:w-1/12 relative">
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-blue-400 rounded-full border-4 border-white z-20"></div>
            </div>
            <div className="w-full md:w-1/2 pl-0 md:pl-16 flex justify-start mt-8 md:mt-0">
              <div className="relative h-80 w-full max-w-2xl rounded-2xl overflow-hidden bg-black flex items-center justify-center mb-4">
                <img
                  src="/giving back/download (2).jpeg"
                  alt="Institute of Product Leadership"
                  className="w-full h-full object-contain rounded-2xl"
                />
              </div>
            </div>
          </div>

          {/* Jan 2024 - Right */}
          <div className="relative flex flex-col md:flex-row items-center mb-24">
            <div className="w-full md:w-1/2 pr-0 md:pr-16 flex justify-end order-2 md:order-1 mt-8 md:mt-0">
              <div className="relative h-80 w-full max-w-2xl rounded-2xl overflow-hidden bg-black flex items-center justify-center mb-4">
                <img
                  src="/giving back/Image from iOS (12).jpg"
                  alt="IIFT"
                  className="w-full h-full object-contain rounded-2xl"
                />
              </div>
            </div>
            <div className="hidden md:block w-0 md:w-1/12 relative order-1 md:order-2">
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-blue-400 rounded-full border-4 border-white z-20"></div>
            </div>
            <div className="w-full md:w-1/2 pl-0 md:pl-16 flex flex-col items-start order-1 md:order-3">
              <div className="max-w-md">
                <div className="flex items-center gap-4 mb-2">
                  <h3 className="text-2xl font-semibold text-blue-400">January 2024</h3>
                </div>
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="bg-blue-900 text-white px-4 py-1 rounded-full text-sm font-medium">IIFT</span>
                </div>
                <div className="bg-white dark:bg-white p-6 rounded-xl">
                  <p className="text-gray-900 dark:text-gray-900 text-lg mb-4">
                    Indian Institute of Foreign Trade (IIFT) - Official<br/>
                    Gave a talk on the current state of the economy, impact of AI/ML on the various industries, the ability to amalgamate / ingrain AI into product/platform thinking and the way forward to a bright bunch of Indian Institute of Foreign Trade, Kakinada IPM students. They have unique programs like the Integrated program in management (IPM) combining the best of MBA-Analytics and MBA(International business) offered by parent IIFT, Delhi/Kolkata. Naveen's talk was well received and Naveen was honored to be speaking to this acclaimed cohort.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Aug 2023 - Left */}
          <div className="relative flex flex-col md:flex-row items-center mb-24">
            <div className="w-full md:w-1/2 pr-0 md:pr-16 flex flex-col items-end">
              <div className="max-w-md">
                <div className="flex items-center gap-4 mb-2">
                  <h3 className="text-2xl font-semibold text-blue-400">Aug 2023</h3>
                </div>
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="bg-blue-900 text-white px-4 py-1 rounded-full text-sm font-medium">Speaker</span>
                  <span className="bg-blue-900 text-white px-4 py-1 rounded-full text-sm font-medium">Entrepreneurship Cell, VGSoM, IIT Kharagpur</span>
                  <span className="bg-blue-900 text-white px-4 py-1 rounded-full text-sm font-medium">Science & Technology</span>
                </div>
                <div className="bg-white dark:bg-white p-6 rounded-xl">
                  <p className="text-gray-900 dark:text-gray-900 text-lg mb-4">
                    Naveen gave a talk on Product / Platform thinking for 2 hours to a 200 member / student cohort of MBA students of IIT-KGP (VgSOM). Great conversation with the cohort.
                  </p>
                </div>
              </div>
            </div>
            <div className="hidden md:block w-0 md:w-1/12 relative">
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-blue-400 rounded-full border-4 border-white z-20"></div>
            </div>
            <div className="w-full md:w-1/2 pl-0 md:pl-16 flex justify-start mt-8 md:mt-0">
              <div className="relative w-full h-80 max-w-2xl rounded-2xl overflow-hidden bg-black flex items-center justify-center mb-4">
                <iframe
                  src="https://www.youtube.com/embed/sKw0mD9j5mc"
                  title="Vivaan 2019 Video"
                  className="w-full h-full rounded-2xl"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          {/* Feb 2023 - Right */}
          <div className="relative flex flex-col md:flex-row items-center mb-24">
            <div className="w-full md:w-1/2 pr-0 md:pr-16 flex justify-end order-2 md:order-1 mt-8 md:mt-0">
              <div className="relative h-80 w-full max-w-2xl rounded-2xl overflow-hidden bg-black flex items-center justify-center mb-4">
                <img
                  src="/giving back/naveen_uvce_tedx_feb_2023.jpeg"
                  alt="TEDx UVCE Feb 2023"
                  className="w-full h-full object-contain rounded-2xl"
                />
              </div>
            </div>
            <div className="hidden md:block w-0 md:w-1/12 relative order-1 md:order-2">
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-blue-400 rounded-full border-4 border-white z-20"></div>
            </div>
            <div className="w-full md:w-1/2 pl-0 md:pl-16 flex flex-col items-start order-1 md:order-3">
              <div className="max-w-md">
                <div className="flex items-center gap-4 mb-2">
                  <h3 className="text-2xl font-semibold text-blue-400">Feb 2023</h3>
                </div>
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="bg-blue-900 text-white px-4 py-1 rounded-full text-sm font-medium">TEDx speaker</span>
                  <span className="bg-blue-900 text-white px-4 py-1 rounded-full text-sm font-medium">University Visvesvaraya College of Engineering (UVCE)</span>
                </div>
                <div className="bg-white dark:bg-white p-6 rounded-xl">
                  <p className="text-gray-900 dark:text-gray-900 text-lg mb-4">
                    Naveen was a TEDx speaker at this UVCE TEDx event speaking on innovation, my life journey and the choices we need to make to be successful as we meander the maze called life and realism. His talk has seen over 150000 views and counting in &lt;2 months. It went viral a few days after it was released by the TEDx committee on their YouTube channel. With his goal of reaching 20000 audience by 2022 (he has personally given talks in person traveling all over India to top B-schools/IIT/IIMs to reach 9000 students in last 6+ years as of 2023) interested in Product Platform building from India for greater good since 2017/18, this is a satisfying metric but a job only 1% done (Sept 2023).
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 2024 Timeline Bar */}
          <div className="flex justify-center mb-10 relative">
            <div className="relative inline-block">
              <div className="absolute -right-2 -bottom-2 bg-blue-600/50 w-full h-full transform rotate-3"></div>
              <div className="absolute -right-1 -bottom-1 bg-blue-500/70 w-full h-full transform rotate-2"></div>
              <h2 className="text-4xl md:text-6xl font-bold bg-blue-500 text-white px-8 py-2 relative z-10">2024</h2>
            </div>
          </div>

          {/* Aug 2022 - Left */}
          <div className="relative flex flex-col md:flex-row items-center mb-24">
            <div className="w-full md:w-1/2 pr-0 md:pr-16 flex flex-col items-end">
              <div className="max-w-md">
                <div className="flex items-center gap-4 mb-2">
                  <h3 className="text-2xl font-semibold text-blue-400">August 2022</h3>
                </div>
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="bg-blue-900 text-white px-4 py-1 rounded-full text-sm font-medium">AI</span>
                  <span className="bg-blue-900 text-white px-4 py-1 rounded-full text-sm font-medium">ML</span>
                  <span className="bg-blue-900 text-white px-4 py-1 rounded-full text-sm font-medium">Digital Transformation</span>
                </div>
                <div className="bg-white dark:bg-white p-6 rounded-xl">
                  <p className="text-gray-900 dark:text-gray-900 text-lg mb-4">
                    Panel Member - AI / ML Digital Transformation at XLRI Jamshedpur. Naveen delivered thoughts to 200+ participants on the future of digital transformation through AI ML deep learning constructs with acclaimed CXOs of peer companies across verticals.
                  </p>
                </div>
              </div>
            </div>
            <div className="hidden md:block w-0 md:w-1/12 relative">
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-blue-400 rounded-full border-4 border-white z-20"></div>
            </div>
            <div className="w-full md:w-1/2 pl-0 md:pl-16 flex justify-start mt-8 md:mt-0">
              <div className="relative h-80 w-full max-w-2xl rounded-2xl overflow-hidden bg-black flex items-center justify-center mb-4">
                <img
                  src="/giving back/download (5).jpeg"
                  alt="August 2022 Session"
                  className="w-full h-full object-contain rounded-2xl"
                />
              </div>
            </div>
          </div>

          {/* Mar 2022 - Right */}
          <div className="relative flex flex-col md:flex-row items-center mb-24">
            <div className="w-full md:w-1/2 pr-0 md:pr-16 flex justify-end order-2 md:order-1 mt-8 md:mt-0">
              <div className="relative h-80 w-full max-w-2xl rounded-2xl overflow-hidden bg-black flex items-center justify-center mb-4">
                <img
                  src="/giving back/download (6).jpeg"
                  alt="March 2022 Session"
                  className="w-full h-full object-contain rounded-2xl"
                />
              </div>
            </div>
            <div className="hidden md:block w-0 md:w-1/12 relative order-1 md:order-2">
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-blue-400 rounded-full border-4 border-white z-20"></div>
            </div>
            <div className="w-full md:w-1/2 pl-0 md:pl-16 flex flex-col items-start order-1 md:order-3">
              <div className="max-w-md">
                <div className="flex items-center gap-4 mb-2">
                  <h3 className="text-2xl font-semibold text-blue-400">March 2022</h3>
                </div>
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="bg-blue-900 text-white px-4 py-1 rounded-full text-sm font-medium">AI</span>
                  <span className="bg-blue-900 text-white px-4 py-1 rounded-full text-sm font-medium">ML</span>
                  <span className="bg-blue-900 text-white px-4 py-1 rounded-full text-sm font-medium">Digital Transformation</span>
                </div>
                <div className="bg-white dark:bg-white p-6 rounded-xl">
                  <p className="text-gray-900 dark:text-gray-900 text-lg mb-4">
                    Speaker - AI / ML and Digital transformation at IIT Bombay - Shailesh J. Mehta School of Management. Spoke to over 200 students on revolutionizing business landscape with AI and digital transformation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 2023 Timeline Bar */}
          <div className="flex justify-center mb-10 relative">
            <div className="relative inline-block">
              <div className="absolute -right-2 -bottom-2 bg-blue-600/50 w-full h-full transform rotate-3"></div>
              <div className="absolute -right-1 -bottom-1 bg-blue-500/70 w-full h-full transform rotate-2"></div>
              <h2 className="text-4xl md:text-6xl font-bold bg-blue-500 text-white px-8 py-2 relative z-10">2021</h2>
            </div>
          </div>

          {/* Aug 2021 - Left */}
          <div className="relative flex flex-col md:flex-row items-center mb-24">
            <div className="w-full md:w-1/2 pr-0 md:pr-16 flex flex-col items-end">
              <div className="max-w-md">
                <div className="flex items-center gap-4 mb-2">
                  <h3 className="text-2xl font-semibold text-blue-400">August 2021</h3>
                </div>
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="bg-blue-900 text-white px-4 py-1 rounded-full text-sm font-medium">Product Management</span>
                  <span className="bg-blue-900 text-white px-4 py-1 rounded-full text-sm font-medium">Innovation</span>
                </div>
                <div className="bg-white dark:bg-white p-6 rounded-xl">
                  <p className="text-gray-900 dark:text-gray-900 text-lg mb-4">
                    Panel Member at SIBM, Bengaluru. Participated as a panel member and speaker on product management and innovation.
                  </p>
                </div>
              </div>
            </div>
            <div className="hidden md:block w-0 md:w-1/12 relative">
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-blue-400 rounded-full border-4 border-white z-20"></div>
            </div>
            <div className="w-full md:w-1/2 pl-0 md:pl-16 flex justify-start mt-8 md:mt-0">
              <div className="relative h-80 w-full max-w-2xl rounded-2xl overflow-hidden bg-black flex items-center justify-center mb-4">
                <img
                  src="/giving back/CIT-Annual-Report-2021-2022_removed_page-0001_edited.jpg"
                  alt="August 2021 Session"
                  className="w-full h-full object-contain rounded-2xl"
                />
              </div>
            </div>
          </div>

          {/* Jul 2021 - Right */}
          <div className="relative flex flex-col md:flex-row items-center mb-24">
            <div className="w-full md:w-1/2 pr-0 md:pr-16 flex justify-end order-2 md:order-1 mt-8 md:mt-0">
              <div className="relative h-80 w-full max-w-2xl rounded-2xl overflow-hidden bg-black flex items-center justify-center mb-4">
                <img
                  src="/giving back/download (5).png"
                  alt="July 2021 Session"
                  className="w-full h-full object-contain rounded-2xl"
                />
              </div>
            </div>
            <div className="hidden md:block w-0 md:w-1/12 relative order-1 md:order-2">
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-blue-400 rounded-full border-4 border-white z-20"></div>
            </div>
            <div className="w-full md:w-1/2 pl-0 md:pl-16 flex flex-col items-start order-1 md:order-3">
              <div className="max-w-md">
                <div className="flex items-center gap-4 mb-2">
                  <h3 className="text-2xl font-semibold text-blue-400">Jul 2021</h3>
                </div>
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="bg-blue-900 text-white px-4 py-1 rounded-full text-sm font-medium">Speaker - Product Management</span>
                  <span className="bg-blue-900 text-white px-4 py-1 rounded-full text-sm font-medium">Science & Technology</span>
                </div>
                <div className="bg-white dark:bg-white p-6 rounded-xl">
                  <p className="text-gray-900 dark:text-gray-900 text-lg mb-4">
                    Spoke to over 200 students of IIM 2022 graduating MBA batch on why a career in product management is rewarding and fulfilling and one they should pursue. Interestingly when Naveen was there in 2019, 2 hands went up on knowledge of Product (2%). This time it was more like 50 or 25%. Shows our foray into evangelizing Product across Indian B-School campuses is working!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 2022 Timeline Bar */}
          <div className="flex justify-center mb-10 relative">
            <div className="relative inline-block">
              <div className="absolute -right-2 -bottom-2 bg-blue-600/50 w-full h-full transform rotate-3"></div>
              <div className="absolute -right-1 -bottom-1 bg-blue-500/70 w-full h-full transform rotate-2"></div>
              <h2 className="text-4xl md:text-6xl font-bold bg-blue-500 text-white px-8 py-2 relative z-10">2024</h2>
            </div>
          </div>

          {/* Jun 2020 - Left */}
          <div className="relative flex flex-col md:flex-row items-center mb-24">
            <div className="w-full md:w-1/2 pr-0 md:pr-16 flex flex-col items-end">
              <div className="max-w-md">
                <div className="flex items-center gap-4 mb-2">
                  <h3 className="text-2xl font-semibold text-blue-400">June 2020</h3>
                </div>
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="bg-blue-900 text-white px-4 py-1 rounded-full text-sm font-medium">Startup panelist / mentor</span>
                  <span className="bg-blue-900 text-white px-4 py-1 rounded-full text-sm font-medium">Conquest BITS Pilani</span>
                </div>
                <div className="bg-white dark:bg-white p-6 rounded-xl">
                  <p className="text-gray-900 dark:text-gray-900 text-lg mb-4">
                    Conquest, an initiative by the Center for Entrepreneurial Leadership, BITS Pilani, is India's First Student-Run Startup Accelerator. We help the best founders build great businesses and raise money. Our program includes online mentoring to the 10 most exciting startups from across the country over 6 weeks, connecting them with field experts. Following this, the startups undergo a 10 day mentorship program in Bangalore. The program ends with the Grand Finale where these startups pitch before India's biggest investment firms and media houses.
                  </p>
                </div>
              </div>
            </div>
            <div className="hidden md:block w-0 md:w-1/12 relative">
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-blue-400 rounded-full border-4 border-white z-20"></div>
            </div>
            <div className="w-full md:w-1/2 pl-0 md:pl-16 flex justify-start mt-8 md:mt-0">
              <div className="relative h-80 w-full max-w-2xl rounded-2xl overflow-hidden bg-black flex items-center justify-center mb-4">
                <img
                  src="/giving back/Image from iOS (5).jpg"
                  alt="June 2020 Session"
                  className="w-full h-full object-contain rounded-2xl"
                />
              </div>
            </div>
          </div>

          {/* October 2020 */}
          <div className="relative flex flex-col md:flex-row items-center mb-24">
            {/* Left side: image only */}
            <div className="w-full md:w-1/2 pr-0 md:pr-16 flex flex-col items-end">
              <div className="relative h-80 w-full max-w-2xl rounded-2xl overflow-hidden bg-black flex items-center justify-center mb-4">
                <img
                  src="/giving back/download (6).png"
                  alt="October 2020 Session"
                  className="w-full h-full object-contain rounded-2xl"
                />
              </div>
            </div>
            {/* Timeline dot */}
            <div className="hidden md:block w-0 md:w-1/12 relative">
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-blue-400 rounded-full border-4 border-white z-20"></div>
            </div>
            {/* Right side: all content */}
            <div className="w-full md:w-1/2 pl-0 md:pl-16 flex flex-col items-start">
              <div className="max-w-md">
                <div className="flex items-center gap-4 mb-2">
                  <h3 className="text-2xl font-semibold text-blue-400">Oct 2020</h3>
                </div>
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="bg-blue-900 text-white px-4 py-1 rounded-full text-sm font-medium">Business Mentor</span>
                  <span className="bg-blue-900 text-white px-4 py-1 rounded-full text-sm font-medium">Systemix: The Systems Consulting, E-commerce and SMAC Club, IIFT</span>
                </div>
                <div className="bg-white dark:bg-white p-6 rounded-xl">
                  <p className="text-gray-900 dark:text-gray-900 text-lg mb-4">
                    Goal is to work with the Systemix club of my alma mater (Indian Institute of Foreign Trade) to mentor their students. Delivered a talk to the 200+ participants of the MBA (IB) class of 2021/2022 in October 2020. It was an engaging discussion with the participants on World Statistics day on 20th October 2020. The world has come a long way in recognising data as a central pivot and theme around everything we do. With data comes a lot of interesting challenges. Management of data, the usage of data, the difference between ethical usage, usage by ads where we are the "product", personalisation, Data privacy acts, trust, transparency, quality of data, closing this trust gap, partnering IT and Analytics to drive transformation, laying out a Chief data officer role for organisations, data as an enabler in International business.
                  </p>
                </div>
              </div>
                </div>
              </div>

          {/* Feb 2020 - Left */}
          <div className="relative flex flex-col md:flex-row items-center mb-24">
            {/* Left side: all content */}
            <div className="w-full md:w-1/2 pr-0 md:pr-16 flex flex-col items-end">
              <div className="max-w-md">
                <div className="flex items-center gap-4 mb-2">
                  <h3 className="text-2xl font-semibold text-blue-400">Feb 2020</h3>
                </div>
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="bg-blue-900 text-white px-4 py-1 rounded-full text-sm font-medium">Speaker/Mentor - Product/Platform thinking</span>
                  <span className="bg-blue-900 text-white px-4 py-1 rounded-full text-sm font-medium">Indian Institute of Foreign Trade</span>
                </div>
                <div className="bg-white dark:bg-white p-6 rounded-xl">
                  <p className="text-gray-900 dark:text-gray-900 text-lg mb-4">
                    Gave a talk to the 2019-2021 MBA (International business) batch of Indian Institute of Foreign Trade (IIFT), New Delhi. Attended by ~200 students. Mentor on the IIFT, Delhi, Systemix network for Product Management from Feb 2020.
                  </p>
                </div>
              </div>
            </div>
            {/* Timeline dot */}
            <div className="hidden md:block w-0 md:w-1/12 relative">
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-blue-400 rounded-full border-4 border-white z-20"></div>
            </div>
            {/* Right side: image only, larger */}
            <div className="w-full md:w-1/2 pl-0 md:pl-16 flex justify-start mt-8 md:mt-0">
              <div className="relative h-48 w-48 rounded-2xl overflow-hidden bg-white flex items-center justify-center mx-auto">
                <img
                  src="/giving back/Indian_Institute_of_Foreign_Trade_logo.png"
                  alt="IIFT Logo"
                  className="w-full h-full object-contain rounded-2xl"
                />
              </div>
            </div>
                </div>

          {/* Sep 2019 - Right */}
          <div className="relative flex flex-col md:flex-row items-center mb-24">
            <div className="w-full md:w-1/2 pr-0 md:pr-16 flex flex-col items-end">
              <div className="relative h-80 w-full max-w-2xl rounded-2xl overflow-hidden bg-black flex items-center justify-center mb-4">
                <img
                  src="/giving back/Image from iOS (10)_edited.jpg"
                  alt="Sep 2019 Left"
                  className="w-full h-full object-contain rounded-2xl"
                />
              </div>
            </div>
            <div className="hidden md:block w-0 md:w-1/12 relative">
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-blue-400 rounded-full border-4 border-white z-20"></div>
            </div>
            <div className="w-full md:w-1/2 pl-0 md:pl-16 flex flex-col items-start">
              <div className="max-w-md">
                <div className="flex items-center gap-4 mb-2">
                  <h3 className="text-2xl font-semibold text-blue-400">Sep 2019</h3>
                </div>
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="bg-blue-900 text-white px-4 py-1 rounded-full text-sm font-medium">Speaker - Product thinking / Panelist - Udgam / Brand Engagement and Customer Loyalty/Insights</span>
                  <span className="bg-blue-900 text-white px-4 py-1 rounded-full text-sm font-medium">Indian Institute of Management, Sirmaur</span>
                </div>
                <div className="bg-white dark:bg-white p-6 rounded-xl">
                  <p className="text-gray-900 dark:text-gray-900 text-lg mb-4">
                    From the Panel-1 of UDGAM, IIM Sirmaur is proud to present the first speaker Mr. Naveen Athresh (Group Product Manager, Rakuten). Discussing the topic "Brand Engagement and Customer Loyalty - How far can it be sustained using Data Insights?" Mr. Naveen Athresh addressed the students that we are sitting on a mountain of data that can be monetized to deliver better services to the customer and to be able to reach various touchpoints in their lives. #Udgam2019 #business2030 #marketing #operations #businessconclave #IIM #IIMSirmaur #thehimalayanim
                    Loyalty is the bread and butter of any company.
                    Mr. Naveen Athresh, Group Product Manager, Rakuten at Udgam'19 Business 2030
                  </p>
                </div>
              </div>
            </div>
                </div>

          {/* Jul 2019 - Left (no video, more details) */}
          <div className="relative flex flex-col md:flex-row items-center mb-24">
            <div className="w-full md:w-1/2 pr-0 md:pr-16 flex flex-col items-end">
              <div className="max-w-md">
                <div className="flex items-center gap-4 mb-2">
                  <h3 className="text-2xl font-semibold text-blue-400">Jul 2019</h3>
                </div>
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="bg-blue-900 text-white px-4 py-1 rounded-full text-sm font-medium">Speaker-Product Thinking, Panelist, Vivaan 2019 - Strategy & Analytics Summit / value of data</span>
                  <span className="bg-blue-900 text-white px-4 py-1 rounded-full text-sm font-medium">Indian Institute of Foreign Trade</span>
                </div>
                <div className="bg-white dark:bg-white p-6 rounded-xl">
                  <p className="text-gray-900 dark:text-gray-900 text-lg mb-4">
                    Delivered a session on Product/Platform thinking at Vivaan 2019, focusing on the value of data in modern business strategy.<br />
                    Discussed the importance of customer-centric product development.<br />
                    Shared insights on analytics-driven decision making.<br />
                    Engaged with students and professionals on real-world product challenges.<br />
                    Highlighted the evolving landscape of product management in India.<br />
                  </p>
                </div>
              </div>
            </div>
            <div className="hidden md:block w-0 md:w-1/12 relative">
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-blue-400 rounded-full border-4 border-white z-20"></div>
            </div>
            <div className="w-full md:w-1/2 pl-0 md:pl-16 flex justify-start mt-8 md:mt-0">
              {/* No video here */}
            </div>
                </div>

          {/* Jan 2019 - Right */}
          <div className="relative flex flex-col md:flex-row items-center mb-24">
            <div className="w-full md:w-1/2 pr-0 md:pr-16 flex flex-col items-end">
              <div className="relative h-64 w-96 rounded-2xl overflow-hidden bg-black flex items-center justify-center mb-4">
                <img
                  src="/giving back/Image from iOS.jpg"
                  alt="ISPMA Jan 2019"
                  className="w-full h-full object-contain rounded-2xl"
                />
              </div>
            </div>
            <div className="hidden md:block w-0 md:w-1/12 relative">
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-blue-400 rounded-full border-4 border-white z-20"></div>
            </div>
            <div className="w-full md:w-1/2 pl-0 md:pl-16 flex flex-col items-start">
              <div className="max-w-md">
                <div className="flex items-center gap-4 mb-2">
                  <h3 className="text-2xl font-semibold text-blue-400">Jan 2019</h3>
                </div>
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="bg-blue-900 text-white px-4 py-1 rounded-full text-sm font-medium">Product Management Specialist</span>
                  <span className="bg-blue-900 text-white px-4 py-1 rounded-full text-sm font-medium">ISPMA e.V.</span>
                </div>
                <div className="bg-white dark:bg-white p-6 rounded-xl">
                  <p className="text-gray-900 dark:text-gray-900 text-lg mb-4">
                    Delivered a talk on Product Platform thinking at IIM Bengaluru to 150+ executives, focusing on the importance of software product management. ISPMA is a non-profit association dedicated to advancing software product management excellence in both academia and industry worldwide.
                  </p>
                </div>
              </div>
            </div>
                </div>

          {/* Nov 2018 - Jan 2020 (new section) */}
          <div className="relative flex flex-col md:flex-row items-center mb-24">
            {/* Left side: content */}
            <div className="w-full md:w-1/2 pr-0 md:pr-16 flex flex-col items-end">
              <div className="max-w-md">
                <div className="flex items-center gap-4 mb-2">
                  <h3 className="text-2xl font-semibold text-blue-400">Nov 2018 - Jan 2020</h3>
                </div>
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="bg-blue-900 text-white px-4 py-1 rounded-full text-sm font-medium">Mentor/Panelist</span>
                  <span className="bg-blue-900 text-white px-4 py-1 rounded-full text-sm font-medium">University Visvesvaraya College of Engineering (UVCE)</span>
                </div>
                <div className="bg-white dark:bg-white p-6 rounded-xl">
                  <p className="text-gray-900 dark:text-gray-900 text-lg mb-4">
                    Volunteer as a speaker, mentor and panlist on various panels across Inspiron 19, Inspiron 20 and Impetus 19, 20. Also, participating in the renovation activities of UVCE, Bengaluru to restore its heritage. Proud to support my alma mater.
                  </p>
                </div>
              </div>
            </div>
            {/* Timeline dot */}
            <div className="hidden md:block w-0 md:w-1/12 relative">
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-blue-400 rounded-full border-4 border-white z-20"></div>
            </div>
            {/* Right side: image */}
            <div className="w-full md:w-1/2 pl-0 md:pl-16 flex justify-start mt-8 md:mt-0">
              <div className="relative h-80 w-full max-w-2xl rounded-2xl overflow-hidden bg-black flex items-center justify-center mb-4">
                <img
                  src="/giving back/download (9).png"
                  alt="UVCE Nov 2018 - Jan 2020"
                  className="w-full h-full object-contain rounded-2xl"
                />
              </div>
            </div>
                </div>

          {/* May 2018 (new section) */}
          <div className="relative flex flex-col md:flex-row items-center mb-24">
            <div className="w-full md:w-1/2 pr-0 md:pr-16 flex flex-col items-end">
              <div className="relative h-80 w-full max-w-2xl rounded-2xl overflow-hidden bg-black flex items-center justify-center mb-4">
                <img
                  src="/giving back/download (9).jpeg"
                  alt="Mobile10X May 2018"
                  className="w-full h-full object-contain rounded-2xl"
                />
              </div>
            </div>
            <div className="hidden md:block w-0 md:w-1/12 relative">
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-blue-400 rounded-full border-4 border-white z-20"></div>
            </div>
            <div className="w-full md:w-1/2 pl-0 md:pl-16 flex flex-col items-start">
              <div className="max-w-md">
                <div className="flex items-center gap-4 mb-2">
                  <h3 className="text-2xl font-semibold text-blue-400">May 2018</h3>
                </div>
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="bg-blue-900 text-white px-4 py-1 rounded-full text-sm font-medium">Startup / Product Management mentor</span>
                  <span className="bg-blue-900 text-white px-4 py-1 rounded-full text-sm font-medium">IAMAI-Mobile10X</span>
                </div>
                <div className="bg-white dark:bg-white p-6 rounded-xl">
                  <p className="text-gray-900 dark:text-gray-900 text-lg mb-4">
                    The Mobile10X hub at Bangalore - GoK Mobile10X startup hub is supported by Government of Karnataka, it has a Testing Lab, Design Lab, Capability Building and Co-working Space. They also provide:<br/>
                    • Mentorship by industry experts and domain specialists<br/>
                    • Advanced tools for testing and implementation<br/>
                    • Specific zones for design, development, testing and monetization<br/>
                    #MakeinIndia<br/>
                    • Regular interactions, seminars and workshops with peers and industry leaders<br/>
                    • Dedicated researchers and advice on monetization
                  </p>
                </div>
              </div>
            </div>
                </div>

          {/* April 2018 - Left (content), Right (image) */}
          <div className="relative flex flex-col md:flex-row items-center mb-24">
            {/* Left side: heading, badges, content */}
            <div className="w-full md:w-1/2 pr-0 md:pr-16 flex flex-col items-end">
              <div className="max-w-md">
                <div className="flex items-center gap-4 mb-2">
                  <h3 className="text-2xl font-semibold text-blue-400">April 2018</h3>
                </div>
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="bg-blue-900 text-white px-4 py-1 rounded-full text-sm font-medium">Member</span>
                  <span className="bg-blue-900 text-white px-4 py-1 rounded-full text-sm font-medium">INDIAGLOCAL</span>
                </div>
                <div className="bg-white dark:bg-white p-6 rounded-xl">
                  <p className="text-gray-900 dark:text-gray-900 text-lg mb-4">
                    INDIAGLOCAL is a collaborative not for profit think tank initiative to enable Indian entrepreneurs and ecosystem to grow globally. As a first step to that end, we have set out to build a global community of Indian entrepreneurs and enablers in form of a network of local Indian entrepreneurial communities across the world.
                  </p>
                </div>
              </div>
            </div>
            {/* Timeline dot */}
            <div className="hidden md:block w-0 md:w-1/12 relative">
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-blue-400 rounded-full border-4 border-white z-20"></div>
            </div>
            {/* Right side: image only */}
            <div className="w-full md:w-1/2 pl-0 md:pl-16 flex justify-start mt-8 md:mt-0">
              <div className="relative w-full max-w-xs flex items-center justify-center mb-4">
                <img
                  src="/giving back/download (10).png"
                  alt="IndiaGlocal Logo"
                  className="w-full h-24 object-contain"
                />
                </div>
              </div>
            </div>

          {/* Oct 2016 - May 2017 - Right */}
          <div className="relative flex flex-col md:flex-row items-center mb-24">
            <div className="w-full md:w-1/2 pr-0 md:pr-16 flex justify-end order-2 md:order-1 mt-8 md:mt-0">
              <div className="relative h-48 w-80 rounded-2xl overflow-hidden bg-white flex items-center justify-center mb-4">
                <img
                  src="/giving back/download (8).jpeg"
                  alt="upGrad Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="hidden md:block w-0 md:w-1/12 relative order-1 md:order-2">
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-blue-400 rounded-full border-4 border-white z-20"></div>
            </div>
            <div className="w-full md:w-1/2 pl-0 md:pl-16 flex flex-col items-start order-1 md:order-3">
              <div className="max-w-md">
                <div className="flex items-center gap-4 mb-2">
                  <h3 className="text-2xl font-semibold text-blue-400">Oct 2016 - May 2017</h3>
                </div>
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="bg-blue-900 text-white px-4 py-1 rounded-full text-sm font-medium">Industry mentor - Product Management</span>
                  <span className="bg-blue-900 text-white px-4 py-1 rounded-full text-sm font-medium">UpGrad.com</span>
                </div>
                <div className="bg-white dark:bg-white p-6 rounded-xl">
                  <p className="text-gray-900 dark:text-gray-900 text-lg mb-4">
                    Upgrad is shaping the way Product Management evolves in the coming years to build budding product managers. They are looking to industry experts to raise the bar and collaborate to bring the next stream of Product Talent to the fore by grooming them right with effective mentoring.<br />
                    - Gave a speech @ Bangalore to aspirants on what good Product first thinking is all about<br />
                    - Mentored select students of their institute in Product Management #MakeinIndia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Felicitations Section */}
        <div className="max-w-4xl mx-auto z-20 relative">
          <h2 className="text-5xl font-bold text-blue-500 text-center mb-12 drop-shadow-lg">Felicitations</h2>
          <div className="bg-gray-900 rounded-2xl p-8 flex items-center justify-center mt-6 shadow-lg">
            <span className="text-2xl font-extrabold text-white">Recognized at the Elevate 2019 - Ministry of IT/BT Karnataka</span>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GivingBack; 