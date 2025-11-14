'use client';

import { useState, useEffect } from 'react';
import Footer from '../../components/footer';

export default function CookiePolicyPage() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

  // Generar partículas suaves
  useEffect(() => {
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="min-h-screen text-white relative overflow-hidden -mt-16 pt-16" style={{ backgroundColor: '#36454F' }}>
      {/* Fondo animado sutil */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Partículas suaves flotantes */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-white rounded-full opacity-25 animate-float"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          />
        ))}
        
        {/* Líneas de flujo sutiles */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-400/30 to-transparent animate-flow" />
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-400/30 to-transparent animate-flow" style={{ animationDelay: '2s' }} />
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-400/30 to-transparent animate-flow" style={{ animationDelay: '4s' }} />
        </div>
      </div>

      {/* Content Section */}
      <section className="relative z-10 container mx-auto px-4 sm:px-6 pt-0 pb-12 sm:pb-16 md:pb-24">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white font-sans mx-auto">
              ZENTRAIS COOKIE POLICY
            </h1>
            <p className="text-base sm:text-lg text-gray-400 font-sans">
              Ver. 11/15/2025
            </p>
          </div>

          {/* Introduction */}
          <div className="mb-12">
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-sans mb-6">
              Zentrais uses minimal cookies to operate the platform securely.
            </p>
          </div>

          {/* Section 1 */}
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-sans">
              1. WHAT COOKIES WE USE
            </h2>

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 font-sans">
              Essential Cookies
            </h3>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-sans mb-4">
              Required for:
            </p>
            <ul className="list-disc list-inside text-base sm:text-lg text-gray-300 leading-relaxed font-sans mb-6 space-y-2 ml-4">
              <li>Login</li>
              <li>Security</li>
              <li>Preferences</li>
              <li>Session continuity</li>
            </ul>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-sans mb-6 font-bold">
              Cannot be disabled.
            </p>

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 font-sans">
              Functional Cookies
            </h3>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-sans mb-4">
              Used for:
            </p>
            <ul className="list-disc list-inside text-base sm:text-lg text-gray-300 leading-relaxed font-sans mb-6 space-y-2 ml-4">
              <li>Performance improvements</li>
              <li>Error tracking</li>
              <li>Language preferences</li>
            </ul>

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 font-sans">
              Analytics Cookies (Optional)
            </h3>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-sans mb-4">
              Used only with consent:
            </p>
            <ul className="list-disc list-inside text-base sm:text-lg text-gray-300 leading-relaxed font-sans mb-6 space-y-2 ml-4">
              <li>Anonymous traffic measurement</li>
              <li>Platform performance insights</li>
            </ul>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-sans mb-4">
              Zentrais does not use:
            </p>
            <ul className="list-disc list-inside text-base sm:text-lg text-gray-300 leading-relaxed font-sans space-y-2 ml-4">
              <li>Advertising cookies</li>
              <li>Cross-site tracking</li>
              <li>Behavioral profiling tools</li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-sans">
              2. THIRD-PARTY COOKIES
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-sans">
              If used, they follow strict agreements ensuring no data sale or profiling.
            </p>
          </div>

          {/* Section 3 */}
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-sans">
              3. HOW TO MANAGE COOKIES
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-sans mb-4">
              You can:
            </p>
            <ul className="list-disc list-inside text-base sm:text-lg text-gray-300 leading-relaxed font-sans mb-6 space-y-2 ml-4">
              <li>Accept all</li>
              <li>Reject non-essential</li>
              <li>Customize settings</li>
            </ul>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-sans">
              You can also manage cookies through browser settings.
            </p>
          </div>

          {/* Contact Section */}
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-sans">
              4. CONTACT US
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-sans mb-4">
              For cookie policy questions or concerns:
            </p>
            <p className="text-base sm:text-lg text-white leading-relaxed font-sans mb-2">
              Zentrais Privacy Office
            </p>
            <p className="text-base sm:text-lg text-white leading-relaxed font-sans mb-2">
              Email: privacy@zentrais.com
            </p>
            <p className="text-base sm:text-lg text-gray-400 leading-relaxed font-sans">
              5185 NW 75th Ave,<br />
              Lauderhill, FL 33319<br />
              USA.
            </p>
          </div>

          {/* Final Note */}
          <div className="mb-12">
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-sans mb-4">
              Zentrais is built on <strong className="text-white">Truth. Trust. Transparency.</strong>
            </p>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-sans">
              Our cookie policy honors that commitment. We use only what is necessary to operate securely and protect your privacy.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

