// src/App.js
import React from 'react';
import FeatureToggle from './FeatureToggle';

function App() {
    return (
        <div>
            <h1>Feature Toggle Demo</h1>
            <FeatureToggle isEnabled={true} featureName="Dark Mode" />
            <FeatureToggle isEnabled={false} featureName="Live Chat" />
            <FeatureToggle isEnabled={true} featureName="Beta Dashboard" />
        </div>
    );
}

export default App;
