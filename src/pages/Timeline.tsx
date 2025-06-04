import React from "react";
import Layout from "@/components/Layout";

const Timeline = () => {
  return (
    <Layout>
      <section className="py-16 relative bg-background text-foreground dark:text-white" 
        style={{ 
          backgroundImage: 'url("/timeline/Desktop - 11_edited.jpg")',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center'
        }}>
        <div className="absolute inset-0 bg-black/30 dark:bg-black/50"></div>
        <div className="relative z-10">
          <div className="container mx-auto px-4 md:px-6 mb-32">
            <h1 className="text-5xl font-bold text-center text-white drop-shadow-sm">Key Activities/Company Timeline</h1>
          </div>

          <div 
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-800 dark:bg-white shadow-lg" 
            style={{ 
              top: '200px',
              height: 'calc(100% - 250px)'
            }} 
          />
          
          <div className="container mx-auto px-4 md:px-6">
            <div className="relative">
              <div className="text-center mb-24">
                <div className="relative inline-block">
                  <div className="absolute -right-3 -bottom-3 bg-blue-600/50 w-full h-full transform rotate-3"></div>
                  <div className="absolute -right-1.5 -bottom-1.5 bg-blue-500/70 w-full h-full transform rotate-2"></div>
                  <h2 className="text-8xl font-bold bg-blue-500 text-white px-12 py-4 relative">2025</h2>
                </div>
              </div>

              <div className="timeline-item mb-24 relative">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                  <div className="md:text-right pr-16">
                    <h3 className="text-2xl font-bold text-blue-400 mb-4">May 2025</h3>
                    <div className="bg-white dark:bg-white p-6 rounded-xl">
                      <p className="text-gray-900 dark:text-gray-900 text-lg mb-6">
                        Our Founder delivered a keynote session at TEDxIIFT Kakinada on the theme "Tech, AI & Entrepreneurship: Giving Perspective to Young Future Business Leaders" on May 4, 2025. He highlighted how rising AI tools are reshaping business models and unlocking new opportunities for young entrepreneurs.
                      </p>
                      <div className="relative h-64 w-full rounded-2xl overflow-hidden">
                        <img 
                          src="/timeline/Naveen.png"
                          alt="TEDxIIFT Kakinada Keynote"
                          className="w-full h-full object-cover rounded-2xl"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block" />
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 dark:bg-blue-400 ring-4 ring-white dark:ring-black rounded-full shadow-lg" style={{ top: '50%' }} />
              </div>

              <div className="timeline-item mb-24 relative">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                  <div className="hidden md:block" />
                  <div className="pl-16">
                    <h3 className="text-2xl font-bold text-blue-400 mb-4">February 2025</h3>
                    <div className="bg-white dark:bg-white p-6 rounded-xl">
                      <p className="text-gray-900 dark:text-gray-900 text-lg mb-6">
                        Liquidmind AI participated on the Bharat Fintech Summit 2025.
                      </p>
                      <div className="relative h-64 w-full rounded-2xl overflow-hidden">
                        <img 
                          src="/timeline/1738767167752.jpg"
                          alt="Bharat Fintech Summit 2025"
                          className="w-full h-full object-cover rounded-2xl"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 dark:bg-blue-400 ring-4 ring-white dark:ring-black rounded-full shadow-lg" style={{ top: '50%' }} />
              </div>

              <div className="timeline-item mb-24 relative">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                  <div className="md:text-right pr-16">
                    <h3 className="text-2xl font-bold text-blue-400 mb-4">January 2025</h3>
                    <div className="bg-white dark:bg-white p-6 rounded-xl space-y-8">
                      <div>
                        <p className="text-gray-900 dark:text-gray-900 text-lg mb-6">
                          Our founder participated on an invite only conclave of Economic Times SME regional summit to promote Make in India to empower MSME's and driving financial inclusion.
                        </p>
                        <div className="relative h-64 w-full rounded-2xl overflow-hidden">
                          <img 
                            src="/timeline/MSMEsummit.jpeg"
                            alt="MSME Summit"
                            className="w-full h-full object-cover rounded-2xl"
                          />
                        </div>
                      </div>
                      <div>
                        <p className="text-gray-900 dark:text-gray-900 text-lg mb-6">
                          Our founder participated on a two day workshop at the National conference on strategic trade controls (NCSTC) - 16/17 January 2025.
                        </p>
                        <div className="relative h-64 w-full rounded-2xl overflow-hidden">
                          <img 
                            src="/timeline/NCSTC.jpeg"
                            alt="NCSTC Conference"
                            className="w-full h-full object-cover rounded-2xl"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block" />
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 dark:bg-blue-400 ring-4 ring-white dark:ring-black rounded-full shadow-lg" style={{ top: '30%' }} />
              </div>

              <div className="timeline-item mb-24 relative">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                  <div className="hidden md:block" />
                  <div className="pl-16">
                    <h3 className="text-2xl font-bold text-blue-400 mb-4">January 2025</h3>
                    <div className="bg-white dark:bg-white p-6 rounded-xl">
                      <p className="text-gray-900 dark:text-gray-900 text-lg mb-6">
                        Liquidmind AI joined MIT Media Lab's B79 Hub workshop, celebrating innovation rooted in India's heritage. Named for "Bharat" and the 79° East longitude, B79 blends deep tech with cultural identity. Day 1 featured inspiring sessions with Prof. Ramesh Raskar and the B79 team, fostering groundbreaking, culturally connected ventures.
                      </p>
                      <div className="relative h-64 w-full rounded-2xl overflow-hidden">
                        <img 
                          src="/timeline/B79Hub.jpeg"
                          alt="MIT Media Lab B79 Hub Workshop"
                          className="w-full h-full object-cover rounded-2xl"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 dark:bg-blue-400 ring-4 ring-white dark:ring-black rounded-full shadow-lg" style={{ top: '50%' }} />
              </div>

              <div className="text-center mb-24">
                <div className="relative inline-block">
                  <div className="absolute -right-3 -bottom-3 bg-blue-600/50 w-full h-full transform rotate-3"></div>
                  <div className="absolute -right-1.5 -bottom-1.5 bg-blue-500/70 w-full h-full transform rotate-2"></div>
                  <h2 className="text-8xl font-bold bg-blue-500 text-white px-12 py-4 relative">2024</h2>
                </div>
              </div>

              <div className="timeline-item mb-24 relative">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                  <div className="hidden md:block" />
                  <div className="pl-16">
                    <h3 className="text-2xl font-bold text-blue-400 mb-4">December 2024</h3>
                    <div className="bg-white dark:bg-white p-6 rounded-xl">
                      <p className="text-gray-900 dark:text-gray-900 text-lg mb-6">
                        Our founder, Naveen Athresh, delivered a session on "Future of Digital Trust: The New Business Imperative" at IIM Vizag's Vriddhi 6.0 event on 8th December 2024.
                      </p>
                      <div className="relative h-64 w-full rounded-2xl overflow-hidden">
                        <img 
                          src="/timeline/IIMV.jpeg"
                          alt="IIM Vizag Session"
                          className="w-full h-full object-cover rounded-2xl"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 dark:bg-blue-400 ring-4 ring-white dark:ring-black rounded-full shadow-lg" style={{ top: '50%' }} />
              </div>

              <div className="timeline-item mb-24 relative">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                  <div className="hidden md:block" />
                  <div className="pl-16">
                    <h3 className="text-2xl font-bold text-blue-400 mb-4">December 2024</h3>
                    <div className="bg-white dark:bg-white p-6 rounded-xl">
                      <p className="text-gray-900 dark:text-gray-900 text-lg mb-6">
                        An in-house hackathon from 7th to 12th December, boosting team morale and tackling MSME challenges with innovative solutions. A celebration of creativity and high energy!
                      </p>
                      <div className="relative h-64 w-full rounded-2xl overflow-hidden">
                        <img 
                          src="/timeline/1724381119401.jpg"
                          alt="AI Based Fintech Hackathon"
                          className="w-full h-full object-cover rounded-2xl"
                        />
                      </div>
                      <p className="text-blue-800 dark:text-blue-400 text-sm mt-4 italic">
                        100% participation of Liquidmind.AI's current engineers from IIT Madras, UVCE, and NMIT.
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:block" />
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 dark:bg-blue-400 ring-4 ring-white dark:ring-black rounded-full shadow-lg" style={{ top: '50%' }} />
              </div>

              <div className="timeline-item mb-24 relative">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                  <div className="hidden md:block" />
                  <div className="pl-16">
                    <h3 className="text-2xl font-bold text-blue-400 mb-4">November 2024</h3>
                    <div className="bg-white dark:bg-white p-6 rounded-xl">
                      <p className="text-gray-900 dark:text-gray-900 text-lg mb-6">
                        Liquidmind® AI was proud to be both a silver sponsor and our Founder & CEO, <span className="underline">Naveen Athresh</span>, the GenAI judge alongside the finale judge across all tracks including GenAI, Quantum computing, EV/sustainable energy, Web 3.0 amongst other innovative tracks.
                      </p>
                      <div className="relative h-64 w-full rounded-2xl overflow-hidden">
                        <img 
                          src="/timeline/nmit.jpeg"
                          alt="NMIT Event"
                          className="w-full h-full object-cover rounded-2xl"
                        />
                      </div>
                      <p className="text-gray-900 dark:text-gray-900 text-lg mt-6">
                        By becoming part of the NVIDIA Inception Program, we aim to accelerate our development efforts and achieve significant milestones in optimizing our products. The program will provide us with essential go-to-market support, training, and access to cutting-edge technology resources from NVIDIA, enabling us to refine our innovative solutions for MSMEs.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 dark:bg-blue-400 ring-4 ring-white dark:ring-black rounded-full shadow-lg" style={{ top: '50%' }} />
              </div>

              <div className="timeline-item mb-24 relative">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <h3 className="text-2xl font-bold text-blue-400 mb-4">August 2024</h3>
                    </div>
                    <div className="bg-white dark:bg-white p-6 rounded-xl">
                      <p className="text-gray-900 dark:text-gray-900 text-lg">
                        Our founder participated in AI/ML and Deep learning conference at IIT Madras, focusing on AI applications and toured their hyperloop and autonomous vehicle projects.
                      </p>
                    </div>
                    <div className="relative h-80 rounded-2xl overflow-hidden">
                      <img
                        src="/timeline/IIT_Madras_Logo.svg"
                        alt="IIT Madras Session"
                        className="w-full h-full object-contain rounded-2xl"
                      />
                    </div>
                  </div>
                  <div className="relative h-80 rounded-2xl overflow-hidden">
                    <img
                      src="/timeline/IIT_Madras_Logo.svg"
                      alt="IIT Madras Session"
                      className="w-full h-full object-contain rounded-2xl"
                    />
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 dark:bg-blue-400 ring-4 ring-white dark:ring-black rounded-full shadow-lg" style={{ top: '50%' }} />
              </div>

              <div className="timeline-item mb-24 relative">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                  <div className="md:text-right pr-16">
                    <h3 className="text-2xl font-bold text-blue-400 mb-4">March 2024</h3>
                    <div className="bg-white dark:bg-white p-6 rounded-xl">
                      <p className="text-gray-900 dark:text-gray-900 text-lg mb-6">
                        In March 2024, our founder's insightful article was featured on USAWire, a prominent news platform. The article, titled "Thought Leaders Making An Impact In The World," provided valuable insights and strategies for success in today's rapidly evolving business landscape.
                      </p>
                      <div className="relative h-64 w-full rounded-2xl overflow-hidden">
                        <img 
                          src="/timeline/wire.png"
                          alt="USAWire Article"
                          className="w-full h-full object-cover rounded-2xl"
                        />
                      </div>
                      <p className="text-blue-800 dark:text-blue-400 mt-4 cursor-pointer hover:underline">
                        Click here to read the article
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:block" />
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 dark:bg-blue-400 ring-4 ring-white dark:ring-black rounded-full shadow-lg" style={{ top: '50%' }} />
              </div>

              <div className="timeline-item mb-24 relative">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                  <div className="md:text-right pr-16">
                    <div className="space-y-6">
                      <div className="flex flex-col">
                        <h3 className="text-2xl font-bold text-blue-400 mb-4">January 2024</h3>
                        <div className="bg-white dark:bg-white p-6 rounded-xl">
                          <p className="text-gray-900 dark:text-gray-900 text-lg leading-relaxed">
                            Our founder Naveen Athresh got featured with an elite list of business people globally (mostly USA) on a Global business magazine (Business Today) in an article called "Thought leaders making an impact in the world". The feature covered mostly USA and some global executives. It was insightful to see the cohort ranging from highly accomplished US Navy officials, Co-founders and CEO&apos;s of large USA energy companies/early stage Venture Capital firms/pension funds of state of Pennsylvania, banks like First USA and Juniper bank, Dr&apos;s in field of medicine spanning Immunology, oncology, leading eye surgeons and some leading leadership coaches.
                          </p>
                          <p className="text-blue-800 dark:text-blue-400 italic cursor-pointer hover:underline text-lg mt-4">
                            Click here to read the article
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pl-16">
                    <div className="relative h-[500px] w-full rounded-2xl overflow-hidden bg-black">
                      <img 
                        src="/timeline/Desktop - 4.png"
                        alt="Business Today Article"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 dark:bg-blue-400 ring-4 ring-white dark:ring-black rounded-full shadow-lg border-2 border-white dark:border-black" style={{ top: '50%' }} />
              </div>

              <div className="text-center mb-24">
                <div className="relative inline-block">
                  <div className="absolute -right-3 -bottom-3 bg-blue-600/50 w-full h-full transform rotate-3"></div>
                  <div className="absolute -right-1.5 -bottom-1.5 bg-blue-500/70 w-full h-full transform rotate-2"></div>
                  <h2 className="text-8xl font-bold bg-blue-500 text-white px-12 py-4 relative">2023</h2>
                </div>
              </div>

              <div className="timeline-item mb-24 relative">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                  <div className="md:text-right pr-16">
                    <h3 className="text-2xl font-bold text-blue-400 mb-4">October 2023</h3>
                    <div className="bg-white dark:bg-white p-6 rounded-xl">
                      <p className="text-gray-900 dark:text-gray-900 text-lg mb-6">
                        Our founder, Naveen Athresh, attended the AI-ML Systems Workshop held from October 23-28, 2023, in Bengaluru, India.
                      </p>
                      <div className="relative h-64 w-full rounded-2xl overflow-hidden">
                        <img 
                          src="/timeline/AI-ML-workshop-october.jpeg"
                          alt="AI-ML Systems Workshop"
                          className="w-full h-full object-cover rounded-2xl"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block" />
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 dark:bg-blue-400 ring-4 ring-white dark:ring-black rounded-full shadow-lg" style={{ top: '50%' }} />
              </div>

              <div className="timeline-item mb-24 relative">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                  <div className="hidden md:block" />
                  <div className="pl-16">
                    <h3 className="text-2xl font-bold text-blue-400 mb-4">July 2023</h3>
                    <div className="bg-white dark:bg-white p-6 rounded-xl">
                      <p className="text-gray-900 dark:text-gray-900 text-lg mb-6">
                        Our founder&apos;s TEDx talk witnessed 155000+ views in &lt;2 months
                      </p>
                      <div className="relative w-full aspect-video rounded-2xl overflow-hidden">
                        <iframe
                          src="https://www.youtube.com/embed/Gbr19NqGt-A"
                          title="TEDx Talk"
                          className="absolute inset-0 w-full h-full"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 dark:bg-blue-400 ring-4 ring-white dark:ring-black rounded-full shadow-lg" style={{ top: '50%' }} />
              </div>

              <div className="timeline-item mb-24 relative">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                  <div className="md:text-right pr-16">
                    <h3 className="text-2xl font-bold text-blue-400 mb-4">June 2023</h3>
                    <div className="bg-white dark:bg-white p-6 rounded-xl">
                      <p className="text-gray-900 dark:text-gray-900 text-lg mb-6">
                        LIQUIDMIND® Product takes a significant pivot towards solving pain points in the world of Fintech/Digital Commerce/Export/import Trade Finance for businesses at the intersection of Artificial intelligence/machine learning applied to above verticals.
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:block" />
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 dark:bg-blue-400 ring-4 ring-white dark:ring-black rounded-full shadow-lg" style={{ top: '50%' }} />
              </div>

              <div className="text-center mb-24">
                <div className="relative inline-block">
                  <div className="absolute -right-3 -bottom-3 bg-blue-600/50 w-full h-full transform rotate-3"></div>
                  <div className="absolute -right-1.5 -bottom-1.5 bg-blue-500/70 w-full h-full transform rotate-2"></div>
                  <h2 className="text-8xl font-bold bg-blue-500 text-white px-12 py-4 relative">2018</h2>
                </div>
              </div>

              <div className="timeline-item mb-24 relative">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                  <div className="md:text-right pr-16">
                    <h3 className="text-2xl font-bold text-blue-400 mb-4">August 2018</h3>
                    <div className="bg-white dark:bg-white p-6 rounded-xl">
                      <p className="text-gray-900 dark:text-gray-900 text-lg mb-6">
                        LIQUIDMIND® Product formally gets registered as a startup by the DIPP (Department of industrial policy and promotion) under Startup India
                      </p>
                      <div className="relative h-64 w-full rounded-2xl overflow-hidden">
                        <img 
                          src="/timeline/latest.png"
                          alt="DIPP Registration Certificate"
                          className="w-full h-full object-cover rounded-2xl"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block" />
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 dark:bg-blue-400 ring-4 ring-white dark:ring-black rounded-full shadow-lg" style={{ top: '50%' }} />
              </div>

              <div className="timeline-item mb-24 relative">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                  <div className="md:text-right pr-16">
                    <div className="space-y-6">
                      <div className="flex flex-col">
                        <h3 className="text-2xl font-bold text-blue-400 mb-4">2017, 2018 - till date</h3>
                        <div className="bg-white dark:bg-white p-6 rounded-xl">
                          <p className="text-gray-900 dark:text-gray-900 text-lg leading-relaxed">
                            LIQUIDMIND® Product has maintained an unwavering commitment towards preserving Intellectual property rights (IPR) - across filing patents, trademarks, copyrights and geographical indication. We are regulars at conferences like the World IP Forum globally over the last few decades and FICCI.
                          </p>
                          <div className="relative h-[400px] w-full rounded-2xl overflow-hidden mt-6">
                            <img 
                              src="/timeline/ip_conference_2_720.png"
                              alt="World IP Forum Conference"
                              className="w-full h-full object-cover rounded-2xl"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pl-16">
                    <div className="space-y-6">
                      <div className="flex flex-col">
                        <h3 className="text-2xl font-bold text-blue-400 mb-4">January 2018</h3>
                        <div className="bg-white dark:bg-white p-6 rounded-xl">
                          <p className="text-gray-900 dark:text-gray-900 text-lg leading-relaxed mb-6">
                            LIQUIDMIND® Product is an Indian Institute of Foreign Trade (IIFT), Delhi KITTES incubated startup. KITTES stands for Knowledge for innovation in Trade and technology for entrepreneurial startups) part of the e-cell, IIFT, Delhi (a division of Ministry of Commerce, Government of India)
                          </p>
                          <div className="relative h-[400px] w-full rounded-2xl overflow-hidden">
                            <img 
                              src="/timeline/Naveen_Sir_kittes.png"
                              alt="KITTES IIFT Delhi"
                              className="w-full h-full object-contain object-top"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 dark:bg-blue-400 ring-4 ring-white dark:ring-black rounded-full shadow-lg" style={{ top: '50%' }} />
              </div>

              <div className="text-center mb-24">
                <div className="relative inline-block">
                  <div className="absolute -right-3 -bottom-3 bg-blue-600/50 w-full h-full transform rotate-3"></div>
                  <div className="absolute -right-1.5 -bottom-1.5 bg-blue-500/70 w-full h-full transform rotate-2"></div>
                  <h2 className="text-8xl font-bold bg-blue-500 text-white px-12 py-4 relative">2017</h2>
                </div>
              </div>

              <div className="timeline-item mb-24 relative">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                  <div className="md:text-right pr-16">
                    <div className="space-y-6">
                      <div className="flex flex-col">
                        <h3 className="text-2xl font-bold text-blue-400 mb-4">May 2017</h3>
                        <div className="bg-white dark:bg-white p-6 rounded-xl">
                          <p className="text-gray-900 dark:text-gray-900 text-lg leading-relaxed mb-6">
                            TechCrunch Disrupt, New York - Demoed our conversational commerce product for fast fashion during this 2 day event.
                          </p>
                          <div className="relative h-[400px] w-full rounded-2xl overflow-hidden bg-black">
                            <img 
                              src="/timeline/ai_pavilion_techcrunch_2017.png"
                              alt="TechCrunch Disrupt NY"
                              className="w-full h-[300px] object-contain mx-auto"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block" />
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 dark:bg-blue-400 ring-4 ring-white dark:ring-black rounded-full shadow-lg" style={{ top: '50%' }} />
              </div>

              <div className="timeline-item mb-24 relative">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                  <div className="md:text-right pr-16">
                    <div className="space-y-6">
                      <div className="flex flex-col">
                        <h3 className="text-2xl font-bold text-blue-400 mb-4">6th May 2017</h3>
                        <div className="bg-white dark:bg-white p-6 rounded-xl">
                          <p className="text-gray-900 dark:text-gray-900 text-lg leading-relaxed mb-6">
                            HBX Connext - LIQUIDMIND Founders participate on Entrepreneurship/Design thinking sessions and workshops at Harvard business school, Boston, Massachusetts, USA to sow the seeds for LIQUIDMIND AI
                          </p>
                          <div className="relative h-[300px] w-full rounded-2xl overflow-hidden bg-[#A41034]">
                            <img 
                              src="/timeline/images (1).png"
                              alt="Harvard Business School"
                              className="w-full h-full object-contain"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block" />
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 dark:bg-blue-400 ring-4 ring-white dark:ring-black rounded-full shadow-lg" style={{ top: '50%' }} />
              </div>

              <div className="timeline-item mb-24 relative">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                  <div className="hidden md:block" />
                  <div className="pl-16">
                    <div className="bg-white dark:bg-white p-6 rounded-xl">
                      <p className="text-gray-900 dark:text-gray-900 text-lg leading-relaxed mb-6">
                        Sowed the seeds for LIQUIDMIND design thinking with the guidance of the top leaders at IDEO LABS, Cambridge Massachusetts, USA
                      </p>
                      <div className="relative h-[400px] w-full rounded-2xl overflow-hidden bg-black">
                        <img 
                          src="/timeline/Naveen_Sir_ideo_cambridge_ma_edited.jpg"
                          alt="IDEO Labs Cambridge"
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 dark:bg-blue-400 ring-4 ring-white dark:ring-black rounded-full shadow-lg" style={{ top: '50%' }} />
              </div>

              <div className="timeline-item mb-24 relative">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                  <div className="md:text-right pr-16">
                    <div className="bg-white dark:bg-white p-6 rounded-xl">
                      <p className="text-gray-900 dark:text-gray-900 text-lg leading-relaxed mb-6">
                        With Professor Bharat Anand, Current Vice Provost, Harvard Business school (he was one of the early pioneers of the HBX)
                      </p>
                      <div className="relative h-[400px] w-full rounded-2xl overflow-hidden">
                        <img 
                          src="/timeline/proff_HSB.png"
                          alt="With Professor Bharat Anand"
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block" />
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 dark:bg-blue-400 ring-4 ring-white dark:ring-black rounded-full shadow-lg" style={{ top: '50%' }} />
              </div>

              <div className="timeline-item mb-24 relative">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                  <div className="hidden md:block" />
                  <div className="pl-16">
                    <div className="space-y-6">
                      <div className="flex flex-col">
                        <h3 className="text-2xl font-bold text-blue-400 mb-4">3 March 2017 - till date</h3>
                        <div className="bg-white dark:bg-white p-6 rounded-xl">
                          <p className="text-gray-900 dark:text-gray-900 text-lg leading-relaxed mb-6">
                            LIQUIDMIND® and LIQUID MIND® are formally registered Trademarks of LIQUIDMIND Product Consulting Private Limited
                          </p>
                          <div className="relative h-[300px] w-full rounded-2xl overflow-hidden">
                            <img 
                              src="/timeline/trademark.png"
                              alt="Trademark Registration"
                              className="w-full h-full object-contain"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 dark:bg-blue-400 ring-4 ring-white dark:ring-black rounded-full shadow-lg" style={{ top: '50%' }} />
              </div>

              <div className="timeline-item mb-24 relative">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                  <div className="hidden md:block" />
                  <div className="pl-16">
                    <div className="space-y-6">
                      <div className="flex flex-col">
                        <h3 className="text-2xl font-bold text-blue-400 mb-4">23 February 2017</h3>
                        <div className="bg-white dark:bg-white p-6 rounded-xl">
                          <p className="text-gray-900 dark:text-gray-900 text-lg leading-relaxed mb-6">
                            LIQUIDMIND is formally incorporated as a Private Limited company.
                          </p>
                          <div className="bg-blue-600 text-white text-3xl font-bold p-8 rounded-xl shadow-lg hover:bg-blue-700 transition-colors">
                            Stay tuned for updates
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 dark:bg-blue-400 ring-4 ring-white dark:ring-black rounded-full shadow-lg" style={{ top: '50%' }} />
              </div>

            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Timeline;