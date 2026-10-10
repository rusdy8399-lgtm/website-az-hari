import React from 'react';

/**
 * Spacer component — memberi ruang untuk Pilar cards
 * yang melayang overlap dari Hero section.
 */
export const QuickAccessStrip: React.FC = () => {
  return (
    <div className="bg-[#FAF9F5]" style={{ paddingTop: '80px' }} aria-hidden="true" />
  );
};
