import React, { createContext, useMemo, useState } from "react";

export const MusicContext = createContext();

function MusicProvider({ children }) {
  const [playlist] = useState([
    "Believer",
    "Perfect",
    "Shape of You",
    "Faded",
  ]);

  // Unrelated state
  const [count, setCount] = useState(0);

  // Memoize context value
  const value = useMemo(() => {
    return { playlist };
  }, [playlist]);

  return (
    <MusicContext.Provider value={value}>
      <button onClick={() => setCount(count + 1)}>
        Counter : {count}
      </button>

      {children}
    </MusicContext.Provider>
  );
}

export default MusicProvider;