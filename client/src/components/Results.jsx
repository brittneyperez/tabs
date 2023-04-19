import React from 'react'

const Results = ( { allTabs, currentTabIndex } ) => {
    return (
        <div className="results">
            { allTabs[currentTabIndex].content }
        </div>
    )
}

export default Results