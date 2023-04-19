import './App.css';
import React, { useState } from 'react';
import Tabs from './components/Tabs';
import Results from './components/Results';

function App() {
  // create an array of items that will have a label and a content property
  const tabsArray = [
    { label: "Tab 1", content: "Tab 1 content is showing here" },
    { label: "Tab 2", content: "Tab 2 content is showing here" },
    { label: "Tab 3", content: "Tab 3 content is showing here" },
    { label: "Tab 4", content: "Tab 4 content is showing here" }
  ];
  
  /*
    create state that can hold our array of items technically
    we will never use setAllTabs since it is set when we
    initialize it and we do not need to ever change it
  */
  const [ allTabs, setAllTabs ] = useState(tabsArray);
  const [ currentTabIndex, setCurrentTabIndex ] = useState(0);
  
  return (
    <div className="App">
      <Tabs 
        allTabs={ allTabs }
        currentTabIndex={ currentTabIndex }
        setCurrentTabIndex={ setCurrentTabIndex }
      />
      <Results 
        allTabs={ allTabs }
        currentTabIndex={ currentTabIndex }
      />
    </div>
  );
}

export default App;
