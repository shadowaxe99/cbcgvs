```javascript
import React from 'react';
import styled from 'styled-components';

const InteractiveElementContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  background-color: #f0f0f0;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const InteractiveElementLabel = styled.p`
  font-size: 16px;
  color: #333;
  text-align: center;
`;

const InteractiveElement = ({ label, onClick }) => {
  return (
    <InteractiveElementContainer onClick={onClick}>
      <InteractiveElementLabel>{label}</InteractiveElementLabel>
    </InteractiveElementContainer>
  );
};

export default InteractiveElement;
```