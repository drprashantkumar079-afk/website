import { useEffect } from 'react';

export default function useSchemaData(schemaObj) {
  useEffect(() => {
    if (!schemaObj) return;
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schemaObj);
    script.id = 'page-specific-schema';
    
    const existing = document.getElementById('page-specific-schema');
    if (existing) {
      document.head.removeChild(existing);
    }
    
    document.head.appendChild(script);
    
    return () => {
      const el = document.getElementById('page-specific-schema');
      if (el) {
        document.head.removeChild(el);
      }
    };
  }, [schemaObj]);
}
