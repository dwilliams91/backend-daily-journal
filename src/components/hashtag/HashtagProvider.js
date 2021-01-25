
import React, { useState } from "react";

/*
    The context is imported and used by individual components
    that need data
*/
export const HashtagContext = React.createContext();

/*
 This component establishes what data can be used.
 */
export const HashTagProvider = props => {
  const [hashtags, sethashtags] = useState([]);

  const getHashtags = () => {
    return fetch("http://localhost:8088/hashtags")
      .then(res => res.json())
      .then(sethashtags)
  };
  return (
    <HashtagContext.Provider
      value={{
        hashtags,
        sethashtags,
        getHashtags
      }}
    >
      {props.children}
    </HashtagContext.Provider>
  );
};
