'use client';

import { useState, useEffect } from 'react';
import Footer from '../../components/footer';

export default function SecurityPolicyPage() {
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
              ZENTRAIS SECURITY POLICY
            </h1>
            <p className="text-base sm:text-lg text-gray-400 font-sans">
              Ver. 11/15/2025
            </p>
          </div>

          {/* Introduction */}
          <div className="mb-12">
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-sans mb-6">
              Zentrais is built on zero-compromise security.<br />
              Below are the protections we enforce across all systems.
            </p>
          </div>

          {/* Section 1 */}
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-sans">
              1. SECURITY PRINCIPLES
            </h2>
            <ul className="list-disc list-inside text-base sm:text-lg text-gray-300 leading-relaxed font-sans space-y-2 ml-4">
              <li>Privacy-by-design</li>
              <li>Zero Trust architecture</li>
              <li>Principle of least privilege</li>
              <li>Continuous monitoring</li>
              <li>Data minimization</li>
              <li>End-to-end encryption</li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-sans">
              2. TECHNICAL CONTROLS
            </h2>
            <ul className="list-disc list-inside text-base sm:text-lg text-gray-300 leading-relaxed font-sans space-y-2 ml-4">
              <li>AES-256 encryption at rest</li>
              <li>TLS 1.3 encryption in transit</li>
              <li>Multi-factor authentication (internal systems)</li>
              <li>Network firewalls</li>
              <li>DDoS protection</li>
              <li>API rate limiting</li>
              <li>Real-time threat detection</li>
              <li>Secure sandboxing for AI models</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-sans">
              3. OPERATIONAL CONTROLS
            </h2>
            <ul className="list-disc list-inside text-base sm:text-lg text-gray-300 leading-relaxed font-sans space-y-2 ml-4">
              <li>Background checks for key personnel</li>
              <li>Role-based access controls</li>
              <li>Secure development lifecycle (SDLC)</li>
              <li>Regular code and security audits</li>
              <li>Penetration testing</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-sans">
              4. INCIDENT RESPONSE
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-sans mb-4">
              We maintain a formal incident response plan including:
            </p>
            <ul className="list-disc list-inside text-base sm:text-lg text-gray-300 leading-relaxed font-sans space-y-2 ml-4">
              <li>24/7 monitoring</li>
              <li>Rapid containment</li>
              <li>Data integrity validation</li>
              <li>User notification within 72 hours (if required)</li>
            </ul>
          </div>

          {/* Section 5 */}
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-sans">
              5. DATA BACKUP & RECOVERY
            </h2>
            <ul className="list-disc list-inside text-base sm:text-lg text-gray-300 leading-relaxed font-sans space-y-2 ml-4">
              <li>Encrypted backups</li>
              <li>Geo-redundancy</li>
              <li>Regular restoration tests</li>
            </ul>
          </div>

          {/* Section 6 */}
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-sans">
              6. COMPLIANCE
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-sans mb-4">
              Aligned with:
            </p>
            <ul className="list-disc list-inside text-base sm:text-lg text-gray-300 leading-relaxed font-sans space-y-2 ml-4">
              <li>ISO 27001 principles</li>
              <li>NIST cybersecurity framework</li>
              <li>GDPR security requirements</li>
              <li>SOC 2 readiness standards</li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-sans">
              7. CONTACT US
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-sans mb-4">
              For security questions or concerns:
            </p>
            <p className="text-base sm:text-lg text-white leading-relaxed font-sans mb-2">
              Zentrais Security Office
            </p>
            <p className="text-base sm:text-lg text-white leading-relaxed font-sans mb-2">
              Email: security@zentrais.com
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
              Our security policy honors that commitment. We protect your data with zero-compromise security measures and continuous vigilance.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

