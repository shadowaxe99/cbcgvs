```javascript
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../redux/actions';
import { api } from '../utils/api';

const SocialInteraction = () => {
    const dispatch = useDispatch();
    const { aiAgent } = useSelector(state => state.aiAgent);
    const [game, setGame] = useState(null);

    useEffect(() => {
        if(aiAgent) {
            fetchGame(aiAgent);
        }
    }, [aiAgent]);

    const fetchGame = async (aiAgent) => {
        try {
            const response = await api.get(`/games/${aiAgent.id}`);
            if(response.status === 200) {
                setGame(response.data);
            }
        } catch (error) {
            console.error('Error fetching game: ', error);
        }
    };

    const handlePlayGame = () => {
        dispatch(actions.playGame(game));
    };

    return (
        <div id="socialInteraction">
            <h2>Social Interaction</h2>
            {game && (
                <div>
                    <h3>{game.name}</h3>
                    <button onClick={handlePlayGame}>Play Game</button>
                </div>
            )}
        </div>
    );
};

export default SocialInteraction;
```