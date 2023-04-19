import React from 'react'
import { TabFlex, StyledTab } from './styles/Tabs.styled';

const Tabs = ( { allTabs, currentTabIndex, setCurrentTabIndex } ) => {
    const tabStyle = (index) => {
        if(index === currentTabIndex) {
            return "selectedTab";
        } else {
            return "nonSelectedTab";
        }
    }
    
    // ! HOW TO HIGHLIGHT SELECTED TAB WITH CSS
    const setSelectedTab = (index) => {
        setCurrentTabIndex(index);
    }
    
    return (
        <TabFlex>
            {
                allTabs.map((item, index) => (
                    <StyledTab className={`tab ${ tabStyle(index) }`}
                        onClick={ (e) => setSelectedTab(index) }>
                        { item.label }
                    </StyledTab>
                ))
            }
        </TabFlex>
    )
}

export default Tabs;