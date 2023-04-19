import React from 'react'
import { StyledResults } from './styles/Results.styles'

const Results = ( { allTabs, currentTabIndex } ) => {
    return (
        <StyledResults className="results">
            { allTabs[currentTabIndex].content }
        </StyledResults>
    )
}

export default Results