import React from 'react';
import { useOutletContext } from 'react-router-dom';
import ArticlesSection from '../components/ArticlesSection';
import useDocumentTitle from '../hooks/useDocumentTitle';

export default function ArticlesPage() {
  useDocumentTitle('Patient Articles - Orthopedic Health Guides');
  const { setSelectedArticle } = useOutletContext();
  return (
    <main>
      <ArticlesSection onSelectArticle={(a) => setSelectedArticle(a)} />
    </main>
  );
}
