```javascript
import { combineReducers } from 'redux';

const USER_ONBOARDING = 'USER_ONBOARDING';
const AGENT_MARKETPLACE = 'AGENT_MARKETPLACE';
const TASK_MANAGEMENT = 'TASK_MANAGEMENT';
const PERSONA_CUSTOMIZATION = 'PERSONA_CUSTOMIZATION';
const SOCIAL_INTERACTION = 'SOCIAL_INTERACTION';

const initialState = {
  userOnboarding: {},
  agentMarketplace: {},
  taskManagement: {},
  personaCustomization: {},
  socialInteraction: {},
};

function userOnboardingReducer(state = initialState.userOnboarding, action) {
  switch (action.type) {
    case USER_ONBOARDING:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

function agentMarketplaceReducer(state = initialState.agentMarketplace, action) {
  switch (action.type) {
    case AGENT_MARKETPLACE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

function taskManagementReducer(state = initialState.taskManagement, action) {
  switch (action.type) {
    case TASK_MANAGEMENT:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

function personaCustomizationReducer(state = initialState.personaCustomization, action) {
  switch (action.type) {
    case PERSONA_CUSTOMIZATION:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

function socialInteractionReducer(state = initialState.socialInteraction, action) {
  switch (action.type) {
    case SOCIAL_INTERACTION:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  userOnboarding: userOnboardingReducer,
  agentMarketplace: agentMarketplaceReducer,
  taskManagement: taskManagementReducer,
  personaCustomization: personaCustomizationReducer,
  socialInteraction: socialInteractionReducer,
});

export default rootReducer;
```