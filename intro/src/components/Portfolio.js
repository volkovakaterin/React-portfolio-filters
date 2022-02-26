import React from 'react';
import Toolbar from './Toolbar';
import ProjectList from './ProjectList';

class Portfolio extends React.Component { 
    constructor(props) {
        super(props);
        this.projects = [
          {
           img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg",
           category: "Business Cards"
         },
         {
           img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
           category: "Websites"
         }, 
         {
           img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
           category: "Websites"
         }, 
          {
           img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg",
           category: "Websites"
         }, 
          {
           img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg",
           category: "Business Cards"
         }, 
          {
           img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png",
           category: "Websites"
         },
          {
           img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
           category: "Websites"
         }, 
          {
           img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
           category: "Business Cards"
         },
          {
           img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png",
           category: "Websites"
         },
          {
           img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png",
           category: "Flayers"
         },
          {
           img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg",
           category: "Websites"
         },
         {
           img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg",
           category: "Business Cards"
         },
          {
           img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg",
           category: "Websites"
         },
          {
           img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
           category: "Websites"
         },
          {
           img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
           category: "Business Cards"
         },
          {
           img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg",
           category: "Websites"
         },
          {
           img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png",
           category: "Flayers"
         }
      ];
        this.state = {
          filters: ['All', 'Websites', 'Flayers', 'Business Cards'],
          selected: 0,
          onSelectFilter: this.onSelectFilter.bind(this),
          projectsSelect: this.projects
        };
      }
      onSelectFilter(fltr,filter) {
        filter.preventDefault();
        console.log(filter);
        console.log(fltr);
      this.setState(prevState => ({
          selected: fltr,
          projectsSelect: (fltr === 'All') ? this.projects : this.projects.filter(f => f.category === fltr)
        })
        )
        console.log(this.state.selected);
        console.log(this.state);
        
        
      } ;
    
    render() {     
       
        return(
            <>
            <div>
              <Toolbar
            filters= {this.state.filters}
            selected={this.state.selected}
            onSelectFilter={this.state.onSelectFilter}/>
            </div>
            <div>
             <ProjectList projects = {this.state.projectsSelect}/> 
            </div>
            </>

        )
    }}

    export default Portfolio;
