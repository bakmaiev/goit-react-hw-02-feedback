import React from 'react';

export const Section = ({ title, children }) => {
  return (
    <section className="section">
      <h2 className="title">{title}</h2>
      {children}
    </section>
  );
};
