// SessionRewindContext.jsx
import React, { createContext, useContext, useState } from 'react';

export const SessionRewindContext = createContext();

export const useSessionRewind = () => {
  const context = useContext(SessionRewindContext);
  if (!context) {
    throw new Error('useSessionRewind must be used within a SessionRewindProvider');
  }
  return context;
};

export default function SessionRewind(props) {
  const [scripts, setScripts] = useState({});

  return (
    <SessionRewindContext.Provider value={{ scripts, setScripts }}>
      {props.children}
    </SessionRewindContext.Provider>
  );
}