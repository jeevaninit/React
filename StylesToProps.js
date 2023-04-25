import React from 'react'
import StylesToPropsItems from './StylesToPropsItems';

const StylesToProps = () => {
    const tabsItems=['SrimanIT'];
    const namesList="Welcome to React";
  return (
    <div>
        <StylesToPropsItems
        tabs={<span style={{color:'yellow',background:'gray',padding:'5px',margin:'5px'}}>{tabsItems}</span>}
        names={<span style={{color:'yellow',background:'lightblue',padding:'5px'}}>{namesList}</span>}
        />
    </div>
  )
}

export default StylesToProps