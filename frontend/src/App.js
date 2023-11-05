```javascript
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Onboarding from './components/Onboarding';
import AgentMarketplace from './components/AgentMarketplace';
import TaskManagement from './components/TaskManagement';
import PersonaCustomization from './components/PersonaCustomization';
import SocialInteraction from './components/SocialInteraction';
import NavigationPanel from './components/UI/NavigationPanel';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <NavigationPanel />
        <Onboarding />
        <AgentMarketplace />
        <TaskManagement />
        <PersonaCustomization />
        <SocialInteraction />
      </div>
    </Provider>
  );
}

export default App;
```