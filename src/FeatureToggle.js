// src/FeatureToggle.js
import React from 'react';
import './FeatureToggle.css';

const FeatureToggle = ({ isEnabled, featureName }) => {
    return (
        <div className={`feature-toggle ${isEnabled ? 'enabled' : 'disabled'}`}>
            {isEnabled ? (
                <p>{featureName} is enabled</p>
            ) : (
                <p>Feature {featureName} is disabled</p>
            )}
        </div>
    );
};

export default FeatureToggle;
