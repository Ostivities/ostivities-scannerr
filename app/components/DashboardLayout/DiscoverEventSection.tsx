import { ForwardOutlined } from '@ant-design/icons';
import Link from 'next/link';
import React from 'react';

interface PropsI {
  title: string;
  uri?: string;
  children: React.ReactNode;
  titleClass?: string;  // Add the optional titleClass prop
  style?: React.CSSProperties; 
}

const EventSection: React.FC<PropsI> = ({ title, uri, children, titleClass = 'font-bricolage-grotesque font-semibold text-2xl mb-6', style }) => {
  const childrenArray = React.Children.toArray(children);
  const limitedChildren = childrenArray.slice(0, 1); // Get the first 6 children

  return (
    <section>
      <div className="flex-center justify-between">
      <h2 className={`${titleClass} text-xl md:text-2xl md:mb-8 mb-3`} style={style}>{title}</h2>
        
      </div>
      <div className="flex gap-4 overflow-x-auto">{limitedChildren}</div>
    </section>
  );
};

export default EventSection;
