import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Search, MessageSquare } from 'lucide-react';
import { FAQS, DOCTOR_INFO } from '../data/doctorData';

export default function FaqSection({ onOpenAppointment }) {
  const [openIndex, setOpenIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = FAQS.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faqs" className="section-padding" style={{ background: 'var(--bg-light)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3.5rem auto' }}>
          <div className="badge badge-cyan" style={{ marginBottom: '1rem' }}>
            <HelpCircle size={16} /> Patient Frequently Asked Questions
          </div>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>
            Common Orthopedic & Surgery Questions
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)' }}>
            Get clear, medically accurate answers about knee replacement recovery, keyhole surgery, non-surgical spine protocols, and insurance.
          </p>
        </div>

        {/* Search Input Box */}
        <div style={{
          maxWidth: '550px',
          margin: '0 auto 3rem auto',
          position: 'relative'
        }}>
          <Search size={20} color="var(--text-light)" style={{ position: 'absolute', left: '1.2rem', top: '50%', transform: 'translateY(-50%)' }} />
          <input 
            type="text"
            placeholder="Type your question e.g. recovery time, insurance, walking after TKR..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '0.9rem 1.25rem 0.9rem 3.2rem',
              borderRadius: 'var(--radius-full)',
              border: '1px solid var(--border-light)',
              outline: 'none',
              fontSize: '1rem',
              boxShadow: 'var(--shadow-sm)',
              background: '#ffffff'
            }}
          />
        </div>

        {/* Accordion FAQ List */}
        <div style={{ maxWidth: '850px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {filteredFaqs.map((faq, index) => (
            <div 
              key={index}
              style={{
                borderRadius: '16px',
                background: '#ffffff',
                border: '1px solid var(--border-light)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              {/* Question Bar */}
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                style={{
                  width: '100%',
                  padding: '1.25rem 1.5rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  background: 'none',
                  border: 'none',
                  textAlign: 'left',
                  cursor: 'pointer',
                  fontSize: '1.1rem',
                  fontWeight: '700',
                  color: 'var(--primary-navy)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <span className="badge badge-cyan" style={{ fontSize: '0.75rem' }}>
                    {faq.category}
                  </span>
                  <span>{faq.question}</span>
                </div>
                {openIndex === index ? <ChevronUp size={22} color="#0284c7" /> : <ChevronDown size={22} color="var(--text-light)" />}
              </button>

              {/* Answer Content */}
              {openIndex === index && (
                <div style={{
                  padding: '0 1.5rem 1.5rem 1.5rem',
                  fontSize: '1rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.7,
                  borderTop: '1px solid #f1f5f9',
                  paddingTop: '1rem'
                }}>
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still Have Questions Box */}
        <div style={{
          maxWidth: '700px',
          margin: '3.5rem auto 0 auto',
          textAlign: 'center',
          padding: '2rem',
          background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)',
          color: '#ffffff',
          borderRadius: '24px'
        }}>
          <MessageSquare size={36} color="#38bdf8" style={{ marginBottom: '0.75rem' }} />
          <h3 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#ffffff', marginBottom: '0.5rem' }}>
            Have a Specific Medical Question?
          </h3>
          <p style={{ color: '#cbd5e1', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
            Send your medical reports or symptoms directly to Dr Prashantkumar's team for a prompt consultation.
          </p>

          <button onClick={onOpenAppointment} className="btn btn-primary" style={{ padding: '0.8rem 1.75rem' }}>
            Ask Dr Prashantkumar Directly
          </button>
        </div>

      </div>
    </section>
  );
}
