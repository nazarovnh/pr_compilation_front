import React from 'react';
import './ExampleCard.scss';
export enum ExampleCardType {
  INPUT = 'INPUT',
  OUTPUT = 'OUTPUT',
}

interface ExampleCardProps {
  example: string | undefined;
  type: ExampleCardType;
}

const ExampleCard: React.FC<ExampleCardProps> = ({ example, type }) => {
  return (
    <div className="example-card">
      <strong>{`${type}: `}</strong>
      {example}
    </div>
  );
};

export default ExampleCard;
