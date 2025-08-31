import React, { useEffect, useState } from 'react';

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  element?.scrollIntoView({ behavior: 'smooth' });
};

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-effect">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-white font-bold text-xl">Sparsh Jain</div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-white hover:text-purple-200 transition-colors">About</button>
              <button onClick={() => scrollToSection('experience')} className="text-white hover:text-purple-200 transition-colors">Experience</button>
              <button onClick={() => scrollToSection('projects')} className="text-white hover:text-purple-200 transition-colors">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="text-white hover:text-purple-200 transition-colors">Contact</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen hero-gradient relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white opacity-10 rounded-full animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white opacity-5 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-white opacity-5 rounded-full animate-pulse-slow"></div>
        </div>
        
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
          <div className="text-center max-w-5xl mx-auto">
            <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'} mb-8`}>
              <div className="relative inline-block">
                <img 
                  src={`${process.env.PUBLIC_URL}/profile.jpeg`}
                  alt="Sparsh Jain - AI Thought Leader" 
                  className="w-36 h-36 rounded-full mx-auto mb-8 border-4 border-white shadow-2xl animate-pulse-slow object-cover"
                />
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center border-4 border-white">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
            </div>
            
            <h1 className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'} text-5xl md:text-8xl font-black text-white mb-6 tracking-tight`} style={{animationDelay: '0.2s'}}>
              Sparsh <span className="text-purple-200">Jain</span>
            </h1>
            
            <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'} mb-8`} style={{animationDelay: '0.4s'}}>
              <div className="inline-block glass-effect px-6 py-3 rounded-full mb-4">
                <span className="text-white font-semibold">🚀 AI Thought Leader</span>
              </div>
            </div>
            
            <p className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'} text-xl md:text-2xl text-white mb-12 max-w-4xl mx-auto leading-relaxed font-medium`} style={{animationDelay: '0.6s'}}>
              Gen AI AVP at <span className="text-purple-200 font-bold">Wells Fargo</span> • AI Researcher • Machine Learning Specialist • Builder of Tomorrow
            </p>
            
            <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'} flex flex-col sm:flex-row gap-4 justify-center`} style={{animationDelay: '0.8s'}}>
              <button
                onClick={() => scrollToSection('projects')}
                className="group bg-white text-purple-700 px-8 py-4 rounded-full text-lg font-bold hover:bg-purple-100 transition-all duration-300 shadow-2xl hover:shadow-xl hover:scale-105 flex items-center justify-center"
              >
                <span>View My Work</span>
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              
              <button
                onClick={() => scrollToSection('contact')}
                className="group glass-effect text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white hover:text-purple-700 transition-all duration-300 shadow-2xl hover:shadow-xl hover:scale-105 flex items-center justify-center"
              >
                <span>Let's Connect</span>
                <svg className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-32 px-4 section-gradient relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block glass-effect px-6 py-3 rounded-full mb-6">
              <span className="gradient-text font-bold">About Me</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
              Transforming Ideas into 
              <span className="gradient-text"> Reality</span>
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="animate-fade-in-left">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 hero-gradient rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Innovation Leader</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      As AVP of Gen AI at Wells Fargo, I lead cutting-edge initiatives that transform how financial institutions leverage artificial intelligence to serve millions of customers.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 hero-gradient rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Research Pioneer</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Passionate about pushing the boundaries of machine learning and AI research, with a focus on practical applications that solve real-world problems.
                    </p>
                  </div>
                </div>
                
                <div className="glass-effect p-8 rounded-2xl">
                  <div className="flex items-center mb-4">
                    <svg className="w-8 h-8 text-purple-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                    </svg>
                    <span className="text-purple-600 font-bold text-lg">Philosophy</span>
                  </div>
                  <p className="text-xl text-gray-700 italic font-medium leading-relaxed">
                    "I believe in building authentic, high-impact solutions that blend AI and finance to create meaningful value for people and organizations worldwide."
                  </p>
                </div>
              </div>
            </div>
            
            <div className="animate-fade-in-right relative">
              <div className="relative">
                <div className="absolute -inset-1 hero-gradient rounded-3xl blur opacity-25"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                  <img 
                    src={`${process.env.PUBLIC_URL}/ai_conference.jpg`}
                    alt="Sparsh Jain - AI Days 2025 Speaker" 
                    className="w-full h-80 object-cover rounded-2xl mb-6"
                  />
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-xl mb-6">
                    <h4 className="font-bold text-gray-800 mb-2">🎯 Featured Speaker at AI Days 2025</h4>
                    <p className="text-sm text-gray-600">India's largest AI conference • 6 workshops • 25+ CXOs • 2000+ professionals</p>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="p-4">
                      <div className="text-3xl font-black gradient-text">5+</div>
                      <div className="text-sm text-gray-600 font-medium">Years Experience</div>
                    </div>
                    <div className="p-4">
                      <div className="text-3xl font-black gradient-text">50+</div>
                      <div className="text-sm text-gray-600 font-medium">Projects Delivered</div>
                    </div>
                    <div className="p-4">
                      <div className="text-3xl font-black gradient-text">1000s of</div>
                      <div className="text-sm text-gray-600 font-medium">Users Impacted</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block glass-effect px-6 py-3 rounded-full mb-6">
              <span className="gradient-text font-bold">Experience</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
              Professional
              <span className="gradient-text"> Journey</span>
            </h2>
          </div>
          
          <div className="space-y-12">
            {/* Key.AI Experience - Current */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative bg-white rounded-3xl p-12 shadow-2xl hover:shadow-3xl transition-all duration-300">
                <div className="flex items-center mb-8">
                  <img 
                    src={`${process.env.PUBLIC_URL}/keyai.webp`}
                    alt="Key.AI Logo" 
                    className="w-20 h-20 rounded-2xl object-contain mr-6 bg-white p-2 border-2 border-gray-200"
                  />
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900">Founding Lead Engineer</h3>
                    <p className="text-xl text-purple-600 font-semibold">Key.AI • June 2025 - Present</p>
                    <div className="flex items-center mt-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                      <span className="text-sm text-gray-600 font-medium">Currently Building AI Security Infrastructure</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-6 mb-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-cyan-600 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      <strong>Agentic AI Security:</strong> Leading product development for security infrastructure in the emerging Agentic AI ecosystem, building scalable and resilient AI systems from ground up.
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-cyan-600 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      <strong>Full-Stack Technical Leadership:</strong> Driving complete spectrum of technical initiatives—from architecture and design to execution—as founding lead engineer.
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-cyan-600 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      <strong>Foundation Building:</strong> Establishing the foundational architecture for secure, scalable AI systems in the rapidly evolving agentic AI landscape.
                    </p>
                  </div>
                </div>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center p-6 bg-gradient-to-br from-emerald-50 to-cyan-50 rounded-2xl">
                    <div className="text-2xl font-black text-emerald-600 mb-2">Founding</div>
                    <div className="text-sm text-gray-600 font-medium">Lead Engineer</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl">
                    <div className="text-2xl font-black text-cyan-600 mb-2">AI Security</div>
                    <div className="text-sm text-gray-600 font-medium">Infrastructure</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl">
                    <div className="text-2xl font-black text-blue-600 mb-2">Full-Stack</div>
                    <div className="text-sm text-gray-600 font-medium">Architecture</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
                    <div className="text-2xl font-black text-purple-600 mb-2">Agentic</div>
                    <div className="text-sm text-gray-600 font-medium">AI Systems</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Wells Fargo Experience */}
            <div className="group relative">
              <div className="absolute -inset-1 hero-gradient rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative bg-white rounded-3xl p-12 shadow-2xl hover:shadow-3xl transition-all duration-300">
                <div className="flex items-center mb-8">
                  <img 
                    src={`${process.env.PUBLIC_URL}/wells_fargo.png`}
                    alt="Wells Fargo Logo" 
                    className="w-20 h-20 rounded-2xl object-contain mr-6 bg-white p-2 border-2 border-gray-200"
                  />
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900">AVP - Gen AI (Quant)</h3>
                    <p className="text-xl text-purple-600 font-semibold">Wells Fargo • Jul 2022 - Jun 2025 • 3 years</p>
                    <div className="flex items-center mt-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                      <span className="text-sm text-gray-600 font-medium">Completed - AI Innovation Leadership</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-6 mb-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 hero-gradient rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      <strong>GenAI Data Augmentation Pipeline:</strong> Engineered LLM-based workflows with LoRA and knowledge distillation, working with Meta's LLaMA 3, Microsoft's Phi, and OpenAI's GPT models to build scalable domain-specific data augmentation pipelines.
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 hero-gradient rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      <strong>AI Payment System Leadership:</strong> Led R&D of advanced AI-based payment system as Project Lead, with achievements highly recognized by CTO, Directors & Principal engineers.
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 hero-gradient rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      <strong>Model Validation:</strong> Conducted comprehensive validation of financial models for $1 Trillion+ Home Lending division, including risk models, ML models, and statistical models for regulatory compliance.
                    </p>
                  </div>
                </div>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl">
                    <div className="text-2xl font-black gradient-text mb-2">$1T+</div>
                    <div className="text-sm text-gray-600 font-medium">Portfolio Validated</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-100 rounded-2xl">
                    <div className="text-2xl font-black gradient-text mb-2">LLaMA</div>
                    <div className="text-sm text-gray-600 font-medium">& GPT Models</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl">
                    <div className="text-2xl font-black gradient-text mb-2">R&D</div>
                    <div className="text-sm text-gray-600 font-medium">Project Lead</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-100 rounded-2xl">
                    <div className="text-2xl font-black gradient-text mb-2">LoRA</div>
                    <div className="text-sm text-gray-600 font-medium">Fine-tuning</div>
                  </div>
                </div>
              </div>
            </div>

            {/* NTU Singapore Experience */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative bg-white rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <img 
                    src={`${process.env.PUBLIC_URL}/NTU.png`}
                    alt="NTU Singapore Logo" 
                    className="w-14 h-14 rounded-2xl object-contain mr-6 bg-white p-2 border-2 border-gray-200"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">AI Researcher</h3>
                    <p className="text-lg text-purple-600 font-semibold">Nanyang Technological University Singapore • Jan 2022 - Oct 2022 • 10 mos</p>
                  </div>
                </div>
                <div className="space-y-4 mb-6">
                  <p className="text-gray-600 leading-relaxed">
                    Worked in cutting-edge AI R&D at NTU Singapore Lab, ranked <strong>world #2 in AI & ML</strong>.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    <strong>Published work:</strong> MedBERT - recognized in Harvard N2C2 Challenge, presented at APSIPA 2022
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Natural Language Processing</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Generative AI</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Medical AI</span>
                </div>
              </div>
            </div>

            {/* Confetto Experience */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-rose-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative bg-white rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-pink-600 rounded-2xl flex items-center justify-center mr-6">
                    <span className="text-white font-bold text-lg">C</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">AI Researcher (R&D)</h3>
                    <p className="text-lg text-purple-600 font-semibold">Confetto • May 2021 - Oct 2022 • 1 yr 6 mos</p>
                  </div>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600 leading-relaxed">
                      Led development of automated image content generation pipeline using novel ML techniques and hybrid models
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600 leading-relaxed">
                      Achieved <strong>900% reduction</strong> in production timings, from 3 minutes to under 20 seconds
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600 leading-relaxed">
                      Built caption generation service automating brand text to social media content transformation
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="p-4 bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl">
                    <div className="text-xl font-black text-pink-600 mb-1">900%</div>
                    <div className="text-xs text-gray-600 font-medium">Performance Boost</div>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl">
                    <div className="text-xl font-black text-pink-600 mb-1">20s</div>
                    <div className="text-xs text-gray-600 font-medium">Processing Time</div>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl">
                    <div className="text-xl font-black text-pink-600 mb-1">Auto</div>
                    <div className="text-xs text-gray-600 font-medium">Content Gen</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Upwork Experience */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative bg-white rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-green-600 rounded-2xl flex items-center justify-center mr-6">
                    <span className="text-white font-bold text-lg">UP</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Machine Learning Engineer</h3>
                    <p className="text-lg text-purple-600 font-semibold">Upwork (Freelance) • May 2020 - Oct 2022 • 2 yrs 6 mos</p>
                    <p className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full inline-block mt-2 font-medium">
                      Top 1% Rated (out of 16M+ freelancers)
                    </p>
                  </div>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600">Created GPT-3/Transformer based products for Ads Copy Generation</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600">Developed NLP models for intents, sentiments, similarity, Entity recognition</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600">Built Natural Language Generation products using fine-tuned GPT-3 models</p>
                  </div>
                </div>
                <div className="bg-green-50 p-4 rounded-xl">
                  <h4 className="font-semibold text-green-800 mb-2">Key Projects:</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Email Course Open Rate Optimization with NLP & ML</li>
                    <li>• Social listening via Twitter feed analysis using NLP</li>
                    <li>• Retail sales forecasting using ARIMAX with social sentiment data</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* SlayerAI Experience */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative bg-white rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mr-6">
                    <span className="text-white font-bold text-lg">SA</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">AI Lead</h3>
                    <p className="text-lg text-purple-600 font-semibold">SlayerAI • Jan 2021 - Aug 2021 • 8 mos</p>
                    <p className="text-sm text-gray-500">Toronto, Ontario, Canada</p>
                  </div>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600 leading-relaxed">
                      Led development of state-of-the-art Natural Language Paraphrasing and post-engagement conversion product
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600 leading-relaxed">
                      Built end-to-end SOTA Transformer models pipeline for headline engagement prediction customized to unique audiences
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600 leading-relaxed">
                      Achieved <strong>1800% reduction</strong> in production timings, from 1.5 minutes to under 5 seconds
                    </p>
                  </div>
                </div>
                <div className="bg-indigo-50 p-4 rounded-xl mb-4">
                  <h4 className="font-semibold text-indigo-800 mb-2">Tech Stack:</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm text-indigo-700">
                    <div>
                      <p><strong>ML:</strong> BERT, T5, GPT-2, GPT-3, RoBERTa, LSTM</p>
                      <p><strong>Optimization:</strong> ONNX, Knowledge Distillation</p>
                    </div>
                    <div>
                      <p><strong>Backend:</strong> Flask, FastAPI, nginx</p>
                      <p><strong>Cloud:</strong> GCP, AWS</p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="p-4 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl">
                    <div className="text-xl font-black text-indigo-600 mb-1">1800%</div>
                    <div className="text-xs text-gray-600 font-medium">Speed Improvement</div>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl">
                    <div className="text-xl font-black text-indigo-600 mb-1">5s</div>
                    <div className="text-xs text-gray-600 font-medium">Final Processing</div>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl">
                    <div className="text-xl font-black text-indigo-600 mb-1">SOTA</div>
                    <div className="text-xs text-gray-600 font-medium">NLP Models</div>
                  </div>
                </div>
              </div>
            </div>

            {/* CryptoPool Experience */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-gray-700 to-gray-900 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative bg-white rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <img 
                    src={`${process.env.PUBLIC_URL}/crypto_pool.jpeg`}
                    alt="CryptoPool Logo" 
                    className="w-14 h-14 rounded-2xl object-cover mr-6 border-2 border-gray-200"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Co-founder & CTO</h3>
                    <p className="text-lg text-purple-600 font-semibold">CryptoPool • Nov 2021 - Jun 2022 • 8 mos</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-600 leading-relaxed">
                    Built <strong>CryptoPool</strong> - one-click gateway for the Crypto ecosystem (cryptopool.money)
                  </p>
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <p className="text-gray-700 italic">
                      "Worked with Billionaires, CEOs, and industry leaders. The pace of learning was incredible - reading between the lines, understanding market dynamics at the highest level."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Founder Institute Experience */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-red-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative bg-white rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <img 
                    src={`${process.env.PUBLIC_URL}/founder_institute.png`}
                    alt="Founder Institute Logo" 
                    className="w-14 h-14 rounded-2xl object-contain mr-6 bg-white p-2 border-2 border-gray-200"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Founder</h3>
                    <p className="text-lg text-purple-600 font-semibold">Founder Institute • Dec 2021 - Feb 2022 • 3 mos</p>
                    <p className="text-sm text-gray-500">Mumbai, Maharashtra, India</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-600 leading-relaxed">
                    Founder in the Mumbai chapter of <strong>Silicon Valley's premier pre-seed startup accelerator</strong>. Participated in the world's largest entrepreneur training and startup launch program.
                  </p>
                  <div className="bg-orange-50 p-4 rounded-xl">
                    <p className="text-orange-800 font-medium">
                      🚀 Part of elite founder cohort in India's startup ecosystem
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Entrepreneur First Experience */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative bg-white rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <img 
                    src={`${process.env.PUBLIC_URL}/entrepreneur_first.jpeg`}
                    alt="Entrepreneur First Logo" 
                    className="w-14 h-14 rounded-2xl object-contain mr-6 bg-white p-2 border-2 border-gray-200"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Entrepreneur</h3>
                    <p className="text-lg text-purple-600 font-semibold">Entrepreneur First • Apr 2022 • 1 mo</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-600 leading-relaxed">
                    Selected for BA7 Cohort of Entrepreneur First - the world's leading talent investor that backs individuals pre-team and pre-idea.
                  </p>
                  <div className="bg-purple-50 p-4 rounded-xl">
                    <p className="text-purple-800 font-medium italic">
                      💡 "Dropout from BA7 Cohort - Was busy building something bigger"
                    </p>
                  </div>
                  <div className="text-sm text-gray-500">
                    <strong>Note:</strong> Left the program to focus on larger entrepreneurial opportunities
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-xl">
                  <div className="w-16 h-16 hero-gradient rounded-2xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">AI & Machine Learning</h4>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center"><span className="w-2 h-2 hero-gradient rounded-full mr-3"></span>Generative AI</li>
                    <li className="flex items-center"><span className="w-2 h-2 hero-gradient rounded-full mr-3"></span>Deep Learning</li>
                    <li className="flex items-center"><span className="w-2 h-2 hero-gradient rounded-full mr-3"></span>Neural Networks</li>
                    <li className="flex items-center"><span className="w-2 h-2 hero-gradient rounded-full mr-3"></span>Computer Vision</li>
                  </ul>
                </div>
              </div>
              
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-xl">
                  <div className="w-16 h-16 hero-gradient rounded-2xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Programming</h4>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center"><span className="w-2 h-2 hero-gradient rounded-full mr-3"></span>C++</li>
                    <li className="flex items-center"><span className="w-2 h-2 hero-gradient rounded-full mr-3"></span>Python</li>
                    <li className="flex items-center"><span className="w-2 h-2 hero-gradient rounded-full mr-3"></span>PySpark</li>
                    <li className="flex items-center"><span className="w-2 h-2 hero-gradient rounded-full mr-3"></span>TensorFlow</li>
                  </ul>
                </div>
              </div>
              
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-xl">
                  <div className="w-16 h-16 hero-gradient rounded-2xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Analytics</h4>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center"><span className="w-2 h-2 hero-gradient rounded-full mr-3"></span>Quantitative Modeling</li>
                    <li className="flex items-center"><span className="w-2 h-2 hero-gradient rounded-full mr-3"></span>Data Science</li>
                    <li className="flex items-center"><span className="w-2 h-2 hero-gradient rounded-full mr-3"></span>Statistical Analysis</li>
                    <li className="flex items-center"><span className="w-2 h-2 hero-gradient rounded-full mr-3"></span>Risk Management</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-4 section-gradient">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block glass-effect px-6 py-3 rounded-full mb-6">
              <span className="gradient-text font-bold">Featured Work</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
              Innovation in
              <span className="gradient-text"> Action</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Showcasing cutting-edge AI solutions that drive real-world impact
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
                    alt="Fund Suggestor App" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 hero-gradient opacity-20"></div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-2">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Fund Suggestor App</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">AI-powered investment recommendation system using advanced machine learning algorithms to analyze market trends and suggest optimal fund allocations.</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Machine Learning</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Finance</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Python</span>
                  </div>
                  <button className="group/btn flex items-center text-purple-600 hover:text-purple-700 font-bold transition-colors">
                    <span>Explore Project</span>
                    <svg className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-blue-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
                    alt="Regression Model Framework" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-600 opacity-20"></div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-2">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Regression Model Framework</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">Advanced statistical modeling framework for financial risk assessment, featuring automated model selection and real-time performance monitoring.</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Statistics</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Risk Analysis</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">C++</span>
                  </div>
                  <button className="group/btn flex items-center text-purple-600 hover:text-purple-700 font-bold transition-colors">
                    <span>Explore Project</span>
                    <svg className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
                    alt="AI Research Portfolio" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-600 opacity-20"></div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-2">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Research Portfolio</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">Comprehensive collection of research papers and implementations in generative AI, focusing on practical applications in financial services.</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Research</span>
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Gen AI</span>
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Deep Learning</span>
                  </div>
                  <button className="group/btn flex items-center text-purple-600 hover:text-purple-700 font-bold transition-colors">
                    <span>View Research</span>
                    <svg className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Speaking & Leadership Section */}
      <section id="speaking" className="py-32 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block glass-effect px-6 py-3 rounded-full mb-6">
              <span className="gradient-text font-bold">Leadership</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
              Thought
              <span className="gradient-text"> Leadership</span>
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="animate-fade-in-left space-y-8">
              <div className="group relative">
                <div className="absolute -inset-1 hero-gradient rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-xl">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 hero-gradient rounded-2xl flex items-center justify-center mr-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Speaking Excellence</h3>
                  </div>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center">
                      <span className="w-2 h-2 hero-gradient rounded-full mr-3"></span>
                      25+ keynote speeches delivered
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 hero-gradient rounded-full mr-3"></span>
                      10K+ audience members reached
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 hero-gradient rounded-full mr-3"></span>
                      5+ countries speaking tours
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-xl">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Media Presence</h3>
                  </div>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-600 rounded-full mr-3"></span>
                      Featured on 15+ AI podcasts
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-600 rounded-full mr-3"></span>
                      Industry conference speaker
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-600 rounded-full mr-3"></span>
                      AI meetup organizer (500+ members)
                    </li>
                  </ul>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-xl">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mr-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Leadership</h3>
                  </div>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-600 rounded-full mr-3"></span>
                      Toastmasters Area Director G1
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-600 rounded-full mr-3"></span>
                      Mentoring 50+ speakers
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-600 rounded-full mr-3"></span>
                      Workshop facilitator
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="animate-fade-in-right lg:col-span-2 grid md:grid-cols-2 gap-8">
              {/* Speaking Engagement Image */}
              <div className="relative">
                <div className="absolute -inset-1 hero-gradient rounded-3xl blur opacity-25"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                  <img 
                    src={`${process.env.PUBLIC_URL}/speaker.jpeg`}
                    alt="Sparsh Jain Speaking at Conference" 
                    className="w-full h-64 object-cover rounded-2xl mb-6"
                  />
                  <div className="text-center">
                    <h4 className="text-2xl font-bold text-gray-900 mb-4">Live Speaking Engagements</h4>
                    <p className="text-gray-600 mb-4">Captivating audiences with AI insights and innovation strategies</p>
                  </div>
                </div>
              </div>

              {/* Toastmasters Area Director */}
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-teal-600 rounded-3xl blur opacity-25"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                  <img 
                    src={`${process.env.PUBLIC_URL}/area_director.jpeg`}
                    alt="Sparsh Jain - Toastmasters Area Director" 
                    className="w-full h-64 object-cover rounded-2xl mb-6"
                  />
                  <div className="text-center">
                    <h4 className="text-2xl font-bold text-gray-900 mb-4">Toastmasters Leadership</h4>
                    <p className="text-gray-600 mb-4">Area Director G1 - Leading multiple clubs and mentoring speakers</p>
                  </div>
                </div>
              </div>

              {/* Podcast Appearance */}
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-600 rounded-3xl blur opacity-25"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                  <img 
                    src={`${process.env.PUBLIC_URL}/podcast.jpg`}
                    alt="Sparsh Jain - The Innovator's Path Podcast" 
                    className="w-full h-64 object-cover rounded-2xl mb-6"
                  />
                  <div className="text-center">
                    <h4 className="text-2xl font-bold text-gray-900 mb-4">Podcast Appearances</h4>
                    <p className="text-gray-600 mb-4">Featured on "The Innovator's Path" discussing AI trends and innovation</p>
                  </div>
                </div>
              </div>

              {/* Statistics Grid */}
              <div className="relative">
                <div className="absolute -inset-1 hero-gradient rounded-3xl blur opacity-25"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                  <div className="text-center mb-6">
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">Impact & Reach</h4>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl">
                      <div className="text-2xl font-black gradient-text mb-1">25+</div>
                      <div className="text-sm text-gray-600 font-medium">Keynotes</div>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
                      <div className="text-2xl font-black gradient-text mb-1">15+</div>
                      <div className="text-sm text-gray-600 font-medium">Podcasts</div>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-green-50 to-blue-50 rounded-xl">
                      <div className="text-2xl font-black gradient-text mb-1">10K+</div>
                      <div className="text-sm text-gray-600 font-medium">Audience Reached</div>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl">
                      <div className="text-2xl font-black gradient-text mb-1">5+</div>
                      <div className="text-sm text-gray-600 font-medium">Countries</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-4 hero-gradient relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white opacity-5 rounded-full animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white opacity-5 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block glass-effect px-6 py-3 rounded-full mb-6">
              <span className="text-white font-bold">Let's Connect</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-8">
              Ready to Build the
              <span className="text-purple-200"> Future?</span>
            </h2>
            <p className="text-xl md:text-2xl text-white mb-16 max-w-4xl mx-auto leading-relaxed">
              Whether you're interested in AI innovation, collaboration opportunities, or just want to discuss the future of technology, I'd love to connect.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <a
              href="https://www.linkedin.com/in/jainn-sparsh/"
              target="_blank"
              rel="noopener noreferrer"
              className="group glass-effect hover:bg-white hover:bg-opacity-20 p-8 rounded-3xl transition-all duration-300 hover:scale-105 hover:shadow-2xl text-center"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">LinkedIn</h3>
              <p className="text-purple-200">Professional network & career updates</p>
            </a>
            
            <a
              href="https://github.com/dudesparsh"
              target="_blank"
              rel="noopener noreferrer"
              className="group glass-effect hover:bg-white hover:bg-opacity-20 p-8 rounded-3xl transition-all duration-300 hover:scale-105 hover:shadow-2xl text-center"
            >
              <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">GitHub</h3>
              <p className="text-purple-200">Open source projects & code</p>
            </a>
            
            <a
              href="mailto:sparshjainallen@gmail.com"
              className="group glass-effect hover:bg-white hover:bg-opacity-20 p-8 rounded-3xl transition-all duration-300 hover:scale-105 hover:shadow-2xl text-center"
            >
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Email</h3>
              <p className="text-purple-200">Direct communication</p>
            </a>
          </div>
          
          <div className="text-center">
            <div className="flex justify-center items-center space-x-8 mb-8">
              <div className="flex items-center space-x-2 text-white">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-lg font-medium">Available for collaborations</span>
              </div>
            </div>
            
            <div className="glass-effect p-6 rounded-2xl inline-block">
              <p className="text-white text-lg font-medium">
                © 2025 Sparsh Jain • Built with React & Tailwind CSS • Powered by AI Innovation
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
