```javascript
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavigationPanel = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #f5f5f5;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #333;
  margin: 0 10px;
`;

const Navigation = () => {
  return (
    <NavigationPanel>
      <NavLink to="/onboarding">Onboarding</NavLink>
      <NavLink to="/agentMarketplace">Agent Marketplace</NavLink>
      <NavLink to="/taskManagement">Task Management</NavLink>
      <NavLink to="/personaCustomization">Persona Customization</NavLink>
      <NavLink to="/socialInteraction">Social Interaction</NavLink>
    </NavigationPanel>
  );
};

export default Navigation;
```