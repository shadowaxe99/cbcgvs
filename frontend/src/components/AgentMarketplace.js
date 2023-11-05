```javascript
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../redux/actions';
import { api } from '../utils/api';
import AgentCard from './UI/AgentCard';

const AgentMarketplace = () => {
  const dispatch = useDispatch();
  const agents = useSelector(state => state.agentMarketplace.agents);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const response = await api.get('/agents');
        dispatch(actions.setAgents(response.data));
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAgents();
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div id="agentMarketplace">
      <h2>Agent Marketplace</h2>
      <div className="agent-list">
        {agents.map(agent => (
          <AgentCard key={agent.id} agent={agent} />
        ))}
      </div>
    </div>
  );
};

export default AgentMarketplace;
```