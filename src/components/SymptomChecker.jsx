import React, { useState } from 'react';
import { Activity, AlertCircle, Calendar } from 'lucide-react';
import { useOutletContext } from 'react-router-dom';

export default function SymptomChecker({ title, symptoms }) {
  const [selected, setSelected] = useState(null);
  // Safely get context, just in case this is used outside an Outlet context
  const context = useOutletContext() || {};
  const openAppointment = context.openAppointment || (() => console.log('Appointment modal triggered'));

  return (
    <div className="symptom-checker service-card" style={{ background: 'linear-gradient(to bottom right, #f8fafc, #f1f5f9)', border: '1px solid #cbd5e1' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: '#0369a1' }}>
        <Activity size={20} />
        <h4 style={{ margin: 0 }}>{title || 'Quick Symptom Checker'}</h4>
      </div>
      
      {!selected ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Are you experiencing any of the following?</p>
          {symptoms.map((s, i) => (
            <button 
              key={i} 
              className="btn btn-secondary" 
              style={{ textAlign: 'left', justifyContent: 'flex-start', padding: '0.75rem', height: 'auto', lineHeight: 1.4 }}
              onClick={() => setSelected(s)}
            >
              {s.label}
            </button>
          ))}
          <button 
            className="btn" 
            style={{ textAlign: 'left', justifyContent: 'flex-start', padding: '0.75rem', background: '#fff', border: '1px solid #e2e8f0', color: 'var(--text-muted)' }}
            onClick={() => setSelected({ isUrgent: false, message: 'Regular checkups are a great way to maintain joint health even without symptoms.' })}
          >
            None of the above
          </button>
        </div>
      ) : (
        <div style={{ background: '#fff', padding: '1rem', borderRadius: '8px', border: `1px solid ${selected.isUrgent ? '#fecaca' : '#bae6fd'}`, boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '1rem' }}>
            <AlertCircle size={20} color={selected.isUrgent ? '#dc2626' : '#0284c7'} style={{ flexShrink: 0, marginTop: '2px' }} />
            <p style={{ fontSize: '0.9rem', margin: 0, color: 'var(--primary-navy)', lineHeight: 1.5 }}>
              {selected.message}
            </p>
          </div>
          <button type="button" className="btn btn-primary" style={{ width: '100%' }} onClick={openAppointment}>
            <Calendar size={16} /> Schedule Evaluation
          </button>
          <button 
            type="button"
            onClick={() => setSelected(null)} 
            style={{ background: 'none', border: 'none', color: '#64748b', fontSize: '0.8rem', marginTop: '0.75rem', width: '100%', cursor: 'pointer', textDecoration: 'underline' }}
          >
            Check another symptom
          </button>
        </div>
      )}
    </div>
  );
}
