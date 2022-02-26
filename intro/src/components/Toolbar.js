import React from 'react';

class Toolbar extends React.Component {
    render() {
        const filters = this.props.filters;
        const selected = this.props.selected;
        const onSelectFilter = this.props.onSelectFilter;
        const toolbar = filters.map((fltr) =>
        
            <button key={fltr} className= {(fltr === selected) ? 'btn select' : 'btn'} onClick={(e)=>onSelectFilter(fltr, e)}>{fltr}</button>
            );
        return(
            <>
            {console.log(filters)}
            {toolbar}
            </>
            
        )
    }}

export default Toolbar;