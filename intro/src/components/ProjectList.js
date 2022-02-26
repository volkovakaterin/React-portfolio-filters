import React from 'react';
import PropTypes from'prop-types';


class ProjectList extends React.Component { 
    render() {
        const {projects} = this.props;
        const projectList = projects.map((fltr) => 
            <img key={projects.indexOf(fltr)} className= {`image ${fltr.category}`} src={fltr.img} alt='filter'/>
            );
        return(
            <>   
            {console.log(projectList)}
            {projectList}
            </>
        )
    }}

export default ProjectList;