import React from 'react';





const Portfolio = () => {
  return (
    <div className="min-h-screen bg-black text-white">

{/* Hero Section */}


<section
        className="relative h-screen bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: `url(https://i.ibb.co/rFQdntB/dramatic-orange-sunset-city-skyline-digital-art-illustration-783299-1687.jpg)` }}>

  <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
    <div className="relative h-[50vh] lg:h-full"> {/* Modificata questa riga */}
      <img 
        src="https://i.ibb.co/2Mdd5TJ/ka1-hero.png" 
        alt="Hero Section" 
        className="h-full w-full object-cover"
      />
      {/* Overlay scuro per il testo su mobile */}
      <div className="absolute inset-0 lg:hidden"></div>
    </div>
    <div className="flex flex-col justify-center p-8 lg:p-16 bg-cover bg-center">
      <h1 className="text-4xl lg:text-6xl font-light mb-4">Ka1</h1>
      <p className="text-lg text-gray-400 mb-8 max-w-xl">
        Digital Marketing Specialist & Collab Manager
      </p>
      <button className="bg-amber-900 text-white px-8 py-3 w-fit hover:bg-amber-800 transition-colors">
        View Portfolio
      </button>
    </div>
  </div>
</section>

      {/* Collection Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h2 className="text-3xl font-light">LATEST WORKS</h2>
              <p className="text-gray-400 max-w-xl">
                A collection of my most recent marketing campaigns and brand development projects,
                showcasing strategic approach and creative execution.
              </p>
              <button  href="https://paa.ge/ka1sol" className="text-amber-900 hover:text-amber-800 transition-colors">
                EXPLORE MORE
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://i.ibb.co/26nsYCG/C1r9-Ueo3-400x400-removebg-preview.png"
                alt="Hero" 
                className="w-full object-cover"
              />
              <img 
                src="https://i.ibb.co/0Zp0rkn/j-G55-Wg-OE-400x400-removebg-preview.png" 
                alt="Work 2" 
                className="w-full object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-light">FEATURED PROJECTS</h3>
              <p className="text-gray-400">
                Discover a selection of my most impactful marketing campaigns
                and brand development initiatives.
              </p>
            </div>
            {[1, ].map((item) => (
              <div key={item} className="group cursor-pointer">
                <div className="relative overflow-hidden">
                  <img 
                    src={`https://i.ibb.co/ZBLwk21/h-QTN-Gs-C-400x400-removebg-preview.png`} 
                    alt={`Project ${item}`}
                    className="w-full transition-transform duration-500 group-hover:scale-105"
                  />
                    <span className="text-white text-lg"></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-light mb-8">ABOUT ME</h2>
              <div className="space-y-6 text-gray-400">
                <p>
                  Marketing professional specializing in digital campaign management
                  and brand development. With a focus on creating impactful
                  strategies that drive engagement and deliver measurable results.
                </p>
                <p>
                  Expert in developing and executing comprehensive marketing
                  campaigns across multiple channels, with a proven track record
                  of success in various industries.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://i.ibb.co/2sK3Fvs/Nib-Bc-Pc-Z-400x400-removebg-preview.png" 
                alt="About 1" 
                className="w-full object-cover"
              />
              <img 
                src="https://i.ibb.co/B4QkzkS/7a-u-NQYt-400x400-removebg-preview.png" 
                alt="About 2" 
                className="w-full object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-zinc-900">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <p className="text-gray-400">© 2025 Ka1</p>
            <div className="space-x-6">
              <a href="https://x.com/Ka1_SOL" className="text-gray-400 hover:text-white">𝕏</a>
              <a href="https://t.me/Ka1_CM" className="text-gray-400 hover:text-white">Telegram</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;