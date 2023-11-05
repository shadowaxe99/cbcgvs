```javascript
import React from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../redux/actions';

const Onboarding = () => {
    const dispatch = useDispatch();

    const startTour = () => {
        dispatch(actions.startOnboarding());
    };

    return (
        <div id="onboarding">
            <h1>Welcome to Elysium Innovations' Interactive Pitch Deck</h1>
            <p>Experience the future of AI Agent Marketplace. Get a hands-on experience of agent selection, task delegation, persona customization, and marketplace transactions.</p>
            <button onClick={startTour}>Start Tour</button>
        </div>
    );
};

export default Onboarding;
```