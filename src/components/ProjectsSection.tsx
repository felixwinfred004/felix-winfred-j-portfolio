import React from 'react';
import { motion } from 'framer-motion';
import ScrollStack, { ScrollStackItem } from './ScrollStack';

interface Project {
  number: string;
  title: string;
  category: string;
  description: string;
  githubUrl: string;
  tech: string[];
  metrics: { label: string; value: string }[];
}

const projects: Project[] = [
  {
    number: '01',
    title: 'Customer Experience Lead Initiatives',
    category: 'LEADERSHIP / TRANSFORMATION',
    description:
      'Led AI Agent Assist implementation for True Corporation, Thailand. Managing cross-functional teams driving transformation across digital experience and customer service operations. Spearheading innovation in service delivery and operational excellence.',
    githubUrl: '/jfw-intelligence.html',
    tech: ['Leadership', 'AI Implementation', 'Cross-functional Coordination', 'Digital Transformation', 'Team Management'],
    metrics: [
      { label: 'ROLE', value: 'Customer Experience Lead' },
      { label: 'LOCATION', value: 'Bangkok, TCS' },
      { label: 'PERIOD', value: 'Oct 2024 - Present' },
    ],
  },
  {
    number: '02',
    title: 'Agent Assist',
    category: 'AI / CUSTOMER EXPERIENCE',
    description:
      'Pioneering AI Agent Assist implementation for True Corporation, Thailand. Transforming customer service operations through intelligent automation, reducing response times, improving first-contact resolution, and enabling seamless agent-AI collaboration. Strategic initiative driving digital experience excellence.',
    githubUrl: '/jfw-intelligence.html',
    tech: ['AI/ML', 'Natural Language Processing', 'Agent Orchestration', 'Customer Service', 'Analytics', 'Real-time Processing'],
    metrics: [
      { label: 'IMPACT', value: 'Customer Experience' },
      { label: 'REGION', value: 'Thailand' },
      { label: 'STATUS', value: 'Live' },
    ],
  },
  {
    number: '03',
    title: 'Capacity Improvement Plan',
    category: 'OPERATIONS / TRANSFORMATION',
    description:
      'Strategic initiative to optimize resource allocation and operational capacity across delivery teams. Implemented intelligent capacity forecasting, demand balancing, and automation to maximize team utilization. Delivered significant cost savings while improving service delivery and team satisfaction metrics.',
    githubUrl: '/jfw-intelligence.html',
    tech: ['Resource Planning', 'Analytics', 'Automation', 'Process Optimization', 'Forecasting'],
    metrics: [
      { label: 'REGION', value: 'Thailand' },
      { label: 'FOCUS', value: 'Operational Excellence' },
      { label: 'TYPE', value: 'Strategic Program' },
    ],
  },
  {
    number: '04',
    title: 'Travel & Hospitality Transformation',
    category: 'ACCOUNT MANAGEMENT',
    description:
      'Managed $5.6MM travel and hospitality account as Delivery Partner. Spearheaded cloud migration, infrastructure stabilization, and achieved 100% SLA compliance with consistently high customer satisfaction. Drove operational excellence and service reliability.',
    githubUrl: '/jfw-intelligence.html',
    tech: ['Cloud Migration', 'Infrastructure', 'SLA Management', 'Account Management', 'Operations'],
    metrics: [
      { label: 'ACCOUNT VALUE', value: '$5.6MM' },
      { label: 'SLA COMPLIANCE', value: '100%' },
      { label: 'PERIOD', value: 'Mar 2021 - Aug 2022' },
    ],
  },
  {
    number: '05',
    title: 'EMEA Financial Services Excellence',
    category: 'STRATEGIC OPERATIONS',
    description:
      'Managed $4.4MM EMEA financial data services engagement as Strategic Delivery Partner. Elevated productivity from 60% to 82% through innovation, automation, and queue management optimization, achieving $22.5K monthly savings and operational efficiency gains.',
    githubUrl: '/jfw-intelligence.html',
    tech: ['Automation', 'Process Optimization', 'Queue Management', 'RPA', 'Cost Optimization'],
    metrics: [
      { label: 'ACCOUNT VALUE', value: '$4.4MM' },
      { label: 'PRODUCTIVITY GAIN', value: '60% → 82%' },
      { label: 'MONTHLY SAVINGS', value: '$22.5K' },
    ],
  },
  {
    number: '06',
    title: 'Telecom Vertical Transformation',
    category: 'TRANSFORMATION LEADERSHIP',
    description:
      'Led 150 crore telecom business vertical with transformational impact. Elevated NPS from -44 to +17 within 6 months through customer-centric initiatives. Deployed RPA platform delivering $25.87MM cumulative cost savings and setting new operational excellence standards.',
    githubUrl: '/jfw-intelligence.html',
    tech: ['RPA Platform', 'Customer Experience', 'Process Automation', 'NPS Improvement', 'Team Leadership'],
    metrics: [
      { label: 'NPS IMPROVEMENT', value: '-44 → +17' },
      { label: 'RPA SAVINGS', value: '$25.87MM' },
      { label: 'PERIOD', value: 'May 2014 - Oct 2018' },
    ],
  },
  {
    number: '07',
    title: 'ResetRefresh60',
    category: 'MOBILE / WELLNESS APP',
    description:
      'Privacy-first Flutter wellness application delivering 60-second guided micro-interventions, adaptive Reset Check screening, ambient sounds, heart rate integration via Bluetooth LE, and cloud-synced insights. Features secure local storage, email authentication, Supabase RLS, and optional motion/health data sources.',
    githubUrl: '/jfw-intelligence.html',
    tech: [
      'Flutter',
      'Dart',
      'Supabase',
      'Flutter Secure Storage',
      'Heart Rate API',
      'Firebase',
      'PostgreSQL',
      'RLS',
      'Deep Linking',
      'Local Notifications',
    ],
    metrics: [
      { label: 'PLATFORMS', value: 'iOS & Android' },
      { label: 'DATA', value: 'Privacy-First / On-Device' },
      { label: 'BACKEND', value: 'Supabase RLS' },
    ],
  },
  {
    number: '08',
    title: 'NeighborDrop POC',
    category: 'COMMUNITY / MOBILE POC',
    description:
      'Community-driven platform proof-of-concept enabling neighbors to share, donate, and exchange items within local neighborhoods. Real-time location services, item categorization, user trust ratings, and seamless item discovery. Designed to foster neighborhood connectivity and resource sharing.',
    githubUrl: 'https://neigbordrop-ai-control-tower-jfw.vercel.app/',
    tech: [
      'Flutter',
      'Dart',
      'Firebase Realtime DB',
      'Google Maps API',
      'Firebase Authentication',
      'Cloud Storage',
      'Geolocation',
      'Push Notifications',
    ],
    metrics: [
      { label: 'TYPE', value: 'Community Platform' },
      { label: 'SCOPE', value: 'Neighborhood-Based' },
      { label: 'REAL-TIME', value: 'Live Updates' },
    ],
  },
];

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="work"
      className="relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-20 pb-32 px-6 sm:px-12 lg:px-20"
    >
      {/* Studio Ambient Glows */}
      <div className="absolute top-1/4 left-1/3 w-[36rem] h-[36rem] bg-[#D4AF37]/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-[#8C6D4F]/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Eyebrow Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-4 mb-5"
        >
          <span
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            02 / FEATURED WORK
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
        </motion.div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              SELECTED WORKS.
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
              ENGINEERED VALUE.
            </span>
          </h2>

          <p
            className="text-xs sm:text-sm font-light text-[#A8988B] max-w-sm mt-4 md:mt-0 leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Scroll down to unfold the system architecture cards. Each platform was built to solve complex operational challenges.
          </p>
        </motion.div>

        {/* React Bits Stacking Deck */}
        {/* React Bits Stacking Deck */}
<ScrollStack
  itemDistance={window.innerWidth < 768 ? 40 : 20}
  itemScale={window.innerWidth < 768 ? 0.01 : 0.035}
  itemStackDistance={window.innerWidth < 768 ? 12 : 28}
  stackPosition={window.innerWidth < 768 ? "20%" : "15%"}
  scaleEndPosition={window.innerWidth < 768 ? "10%" : "6%"}
  baseScale={window.innerWidth < 768 ? 0.95 : 0.88}
  useWindowScroll={true}
>
          {projects.map((project) => (
            <ScrollStackItem key={project.title}>
              <div className="relative w-full rounded-2xl border border-[#8C6D4F]/50 bg-[#0E0C0A] p-6 sm:p-8 md:p-12 shadow-[0_25px_70px_rgba(0,0,0,0.98)] group overflow-hidden transition-colors duration-500 hover:border-[#D4AF37]">
                
                {/* Top Gold Border Light Flare */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/80 to-transparent" />

                {/* Corner Minimal L-Brackets */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />

                {/* Big Background Watermark Number */}
                <span
                  className="absolute -bottom-8 -right-8 text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-[#EAD8C7]/5 select-none pointer-events-none leading-none hidden sm:block"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {project.number}
                </span>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start relative z-10">
                  
                  {/* Left Column (7 Cols) */}
                  <div className="lg:col-span-7 flex flex-col justify-between min-w-0">
                    <div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-4">
                        <span className="text-[10px] sm:text-xs font-mono font-bold text-[#D4AF37]">
                          {project.number} //
                        </span>
                        <span className="text-[9px] sm:text-[10.5px] font-mono tracking-[0.25em] uppercase text-[#A8988B]">
                          {project.category}
                        </span>
                      </div>

                      <h3
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-normal tracking-tight text-white mb-4 group-hover:text-[#F7E7C4] transition-colors uppercase leading-[0.9]"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                      >
                        {project.title}
                      </h3>

                      <p
                        className="text-xs sm:text-sm md:text-[14px] font-light text-[#BDB0A4] leading-[1.85] tracking-wide mb-8 break-words overflow-wrap-break-word"
                        style={{ fontFamily: "'Montserrat', sans-serif", overflowWrap: 'break-word', wordBreak: 'break-word' }}
                      >
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-6 border-t border-[#8C6D4F]/25">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 sm:px-3 py-1 text-[8px] sm:text-[10px] font-medium tracking-[0.16em] uppercase rounded-sm border border-[#8C6D4F]/40 bg-[#16120E] text-[#E8D7C5] group-hover:border-[#D4AF37]/50 transition-all duration-300 break-words"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column (5 Cols) */}
                  <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-4 sm:space-y-6 pt-4 sm:pt-0 border-t sm:border-t-0 border-[#8C6D4F]/25 lg:pl-6 lg:border-l lg:border-t-0">
                    <div className="space-y-3">
                      <span className="text-[9.5px] font-mono tracking-[0.25em] uppercase text-[#8C6D4F] block mb-2">
                        // ARCHITECTURE METRICS
                      </span>
                      {project.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="p-3 sm:p-3.5 rounded-sm border border-[#8C6D4F]/25 bg-[#050403] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0"
                        >
                          <span className="text-[9px] sm:text-[10px] font-mono text-[#A8988B]">
                            {m.label}
                          </span>
                          <span className="text-[10px] sm:text-[11px] font-mono font-medium text-[#F7E7C4]">
                            {m.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    {(project.title === 'ResetRefresh60' || project.title === 'NeighborDrop POC') && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center space-x-2 sm:space-x-3 px-4 sm:px-6 py-2.5 sm:py-3.5 border border-[#8C6D4F] bg-[#16120E] hover:border-[#D4AF37] hover:bg-[#D4AF37] text-[#EAD8C7] hover:text-black text-[10px] sm:text-[11px] font-medium tracking-[0.24em] uppercase transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.1)] w-full sm:w-auto text-center"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        <span>EXPLORE PROJECT</span>
                        <span className="text-xs">↗</span>
                      </a>
                    )}
                  </div>

                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>

      </div>
    </section>
  );
};

export default ProjectsSection;