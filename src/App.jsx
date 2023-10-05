import React from "react";

import Album from './components/Album.jsx';
import Index from './components/Index.jsx';

import albums from './data.js';


export default function App() {
  const defaultIndex = 0;

  const [selectedIndex, setSelectedIndex] = React.useState(defaultIndex);

  const updateSelection = (index) => {
    setSelectedIndex(index);
  };

  return (
    <>
      <Index albums={albums} selected={selectedIndex} updateSelection={updateSelection} />
      <Album album={albums[selectedIndex]} />
    </>
  );
}
