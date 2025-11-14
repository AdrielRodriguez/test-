'use client';

import { useState, useEffect } from 'react';
import Footer from '../../components/footer';

export default function DPAPage() {
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
              ZENTRAIS DATA PROCESSING AGREEMENT (DPA)
            </h1>
            <p className="text-base sm:text-lg text-gray-400 font-sans">
              Ver. 11/15/2025
            </p>
          </div>

          {/* Introduction */}
          <div className="mb-12">
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-sans mb-4">
              For GDPR, CPRA, LGPD, and global compliance
            </p>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-sans mb-4">
              Effective Date: 11/15/2025
            </p>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-sans mb-6">
              This Data Processing Agreement (&quot;DPA&quot;) forms part of the Terms of Service between:
            </p>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-sans mb-2">
              <strong className="text-white">Controller:</strong> Zentrais users
            </p>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-sans mb-6">
              <strong className="text-white">Processor:</strong> Zentrais, Inc.
            </p>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-sans">
              When you use the platform, Zentrais processes personal data under the following terms:
            </p>
          </div>

          {/* Section 1 */}
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-sans">
              1. PURPOSE OF PROCESSING
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-sans mb-4">
              Zentrais processes personal data to:
            </p>
            <ul className="list-disc list-inside text-base sm:text-lg text-gray-300 leading-relaxed font-sans space-y-2 ml-4">
              <li>Deliver platform functionality</li>
              <li>Maintain security</li>
              <li>Support user communication</li>
              <li>Improve performance</li>
              <li>Ensure lawful and ethical use</li>
            </ul>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-sans mt-4">
              No processing occurs outside these purposes.
            </p>
          </div>

          {/* Section 2 */}
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-sans">
              2. DATA COLLECTED
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-sans mb-4">
              As defined in the Privacy Policy:
            </p>
            <ul className="list-disc list-inside text-base sm:text-lg text-gray-300 leading-relaxed font-sans space-y-2 ml-4">
              <li>Account data</li>
              <li>Device data</li>
              <li>Usage logs</li>
              <li>Content you create</li>
              <li>Optional identity verification tokens</li>
            </ul>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-sans mt-4">
              No unnecessary or excessive data is collected.
            </p>
          </div>

          {/* Section 3 */}
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-sans">
              3. SECURITY MEASURES
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-sans mb-4">
              We implement:
            </p>
            <ul className="list-disc list-inside text-base sm:text-lg text-gray-300 leading-relaxed font-sans space-y-2 ml-4">
              <li>Encryption at rest and transit</li>
              <li>Access controls</li>
              <li>Zero Trust architecture</li>
              <li>Regular penetration testing</li>
              <li>Data minimization practices</li>
            </ul>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-sans mt-4">
              Details are included in the Security Policy.
            </p>
          </div>

          {/* Section 4 */}
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-sans">
              4. SUB-PROCESSORS
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-sans mb-4">
              Zentrais may use sub-processors for:
            </p>
            <ul className="list-disc list-inside text-base sm:text-lg text-gray-300 leading-relaxed font-sans space-y-2 ml-4">
              <li>Hosting</li>
              <li>Identity verification</li>
              <li>Security monitoring</li>
              <li>Analytics</li>
              <li>Email delivery</li>
            </ul>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-sans mt-4">
              We perform strict privacy due diligence and maintain written agreements requiring GDPR-level protections.
            </p>
          </div>

          {/* Section 5 */}
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-sans">
              5. INTERNATIONAL TRANSFERS
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-sans mb-4">
              Transfers follow:
            </p>
            <ul className="list-disc list-inside text-base sm:text-lg text-gray-300 leading-relaxed font-sans space-y-2 ml-4">
              <li>Standard Contractual Clauses (SCCs)</li>
              <li>Adequacy decisions</li>
              <li>Additional safeguards</li>
            </ul>
          </div>

          {/* Section 6 */}
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-sans">
              6. DATA SUBJECT RIGHTS
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-sans mb-4">
              Users may request:
            </p>
            <ul className="list-disc list-inside text-base sm:text-lg text-gray-300 leading-relaxed font-sans space-y-2 ml-4">
              <li>Access</li>
              <li>Erasure</li>
              <li>Rectification</li>
              <li>Portability</li>
              <li>Restriction</li>
              <li>Objection</li>
            </ul>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-sans mt-4 mb-2">
              Requests:
            </p>
            <p className="text-base sm:text-lg text-white leading-relaxed font-sans">
              privacy@zentrais.com
            </p>
          </div>

          {/* Section 7 */}
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-sans">
              7. BREACH NOTIFICATION
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-sans">
              Zentrais will notify affected users within 72 hours after discovering a data breach, as required by GDPR and global laws.
            </p>
          </div>

          {/* Section 8 */}
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-sans">
              8. TERMINATION
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-sans mb-4">
              Upon termination:
            </p>
            <ul className="list-disc list-inside text-base sm:text-lg text-gray-300 leading-relaxed font-sans space-y-2 ml-4">
              <li>All personal data is deleted or anonymized, unless retention is legally required</li>
            </ul>
          </div>

          {/* Section 9 */}
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-sans">
              9. LIABILITY
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-sans">
              Liability is shared based on the role (Controller vs Processor) under GDPR standards.
            </p>
          </div>

          {/* Final Note */}
          <div className="mb-12">
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-sans mb-4">
              Zentrais is built on <strong className="text-white">Truth. Trust. Transparency.</strong>
            </p>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-sans">
              This Data Processing Agreement reflects our commitment to protecting your data and complying with global privacy standards.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

