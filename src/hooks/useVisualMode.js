import React from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]); 

  function transition(mode, replace = false) { { /* ... */ }
  function back() { /* ... */ }

  return { mode, transition, back };
};