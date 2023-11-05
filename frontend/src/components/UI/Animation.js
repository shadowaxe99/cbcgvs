```javascript
import React from 'react';
import { motion } from 'framer-motion';

const Animation = ({ children, variants, initial, animate, exit }) => {
    return (
        <motion.div
            variants={variants}
            initial={initial}
            animate={animate}
            exit={exit}
        >
            {children}
        </motion.div>
    );
};

export default Animation;
```