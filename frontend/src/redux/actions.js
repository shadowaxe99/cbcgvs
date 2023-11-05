```javascript
// Action Types
export const USER_ONBOARDING = 'USER_ONBOARDING';
export const AGENT_MARKETPLACE = 'AGENT_MARKETPLACE';
export const TASK_MANAGEMENT = 'TASK_MANAGEMENT';
export const PERSONA_CUSTOMIZATION = 'PERSONA_CUSTOMIZATION';
export const SOCIAL_INTERACTION = 'SOCIAL_INTERACTION';

// Action Creators
export const userOnboarding = (data) => ({
  type: USER_ONBOARDING,
  payload: data,
});

export const agentMarketplace = (data) => ({
  type: AGENT_MARKETPLACE,
  payload: data,
});

export const taskManagement = (data) => ({
  type: TASK_MANAGEMENT,
  payload: data,
});

export const personaCustomization = (data) => ({
  type: PERSONA_CUSTOMIZATION,
  payload: data,
});

export const socialInteraction = (data) => ({
  type: SOCIAL_INTERACTION,
  payload: data,
});
```