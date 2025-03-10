import React from 'react';
import './experienceTimeline.css';


const ExperienceTimeline = () => {
  const experiences = [
    {
      title: 'Quidi Vidi - Bartender',
      dateRange: 'June 2023 - Present',
      description: 'Served customers in a bustling brewery environment while honing strong interpersonal skills.',
    },
    {
      title: 'ERCO Homes Inc. - Property Management',
      dateRange: 'March 2020 - Jan 2024',
      description: 'Handled tenant requests, responded to deficiencies across 60+ properties, and streamlined processes.',
    },
    {
      title: 'Enactus UBC Okanagan - VP Finance & Outreach Director',
      dateRange: 'Sep 2018 – Sep 2019',
      description: 'Managed a $27,000 budget for social entrepreneurship projects and improved community communications.',
    },
    {
      title: 'Riviera Australia – Fiberglass Technician',
      dateRange: 'May 2018 – Dec 2018',
      description: 'Assembled luxury yachts; recognized for attention to detail and hands-on collaboration.',
    },
    {
      title: 'Engineers Without Borders (EWB) - President',
      dateRange: 'Mar 2016 – Mar 2017',
      description: 'Organized fundraisers, sent a member to Africa, and raised ~$24,000 for EWB’s community initiatives.',
    },
    // Add more experiences if desired...
  ];

  return (
    <section id="experience" className="relative py-16 overflow-hidden bg-gray-50">
      {/* Wavy Background */}
      <div className="wave-bg absolute inset-0 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Experience Timeline
        </h2>

        <div className="timeline-container relative">
          {/* Vertical line down the center */}
          <div className="timeline-line hidden md:block absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 bg-blue-200" />

          {/* Timeline Items */}
          {experiences.map((exp, idx) => {
            const isLeftSide = idx % 2 === 0; // even items on left, odd on right
            return (
              <div
                key={idx}
                className={`timeline-item md:w-1/2 p-4 mb-8 
                ${isLeftSide ? 'md:pr-12 md:pl-0' : 'md:pl-12 md:pr-0'} 
                animate-fadeInUp
                `}
                style={{ animationDelay: `${0.2 * idx}s` }} // slight stagger
              >
                <div
                  className={`bg-white shadow-lg rounded p-6 relative 
                  ${isLeftSide ? 'float-right text-right' : 'float-left text-left'} 
                  timeline-card
                  `}
                >
                  {/* Connector Dot */}
                  <span
                    className={`
                      w-6 h-6 rounded-full absolute top-4 md:top-1/2 transform -translate-y-1/2 
                      border-4 border-blue-500 bg-white timeline-dot
                      ${isLeftSide ? '-right-3' : '-left-3'}
                    `}
                  />

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-1 text-gray-800">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2 italic">
                    {exp.dateRange}
                  </p>
                  <p className="text-gray-700">{exp.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
