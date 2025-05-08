import React from 'react';

interface BlogTemplateProps {
  title: string;
  metaDescription: string;
  children: React.ReactNode;
}

const BlogTemplate: React.FC<BlogTemplateProps> = ({ title, metaDescription, children }) => {
  React.useEffect(() => {
    document.title = title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', metaDescription);
    else {
      const metaTag = document.createElement('meta');
      metaTag.name = 'description';
      metaTag.content = metaDescription;
      document.head.appendChild(metaTag);
    }
  }, [title, metaDescription]);

  return (
    <article className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">{title}</h1>
      {children}
      <div className="mt-8">
        <a href="/" className="text-primary-500 underline mr-4">Play Wordle</a>
        <a href="/faq" className="text-primary-500 underline mr-4">FAQ</a>
        <a href="/how-to-play" className="text-primary-500 underline">How to Play</a>
      </div>
    </article>
  );
};

export default BlogTemplate;
