import React, { Component } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

class Menu extends Component {

constructor(props){
 super(props);

 this.updateMobile = this.updateMobile.bind(this);

}

updateMobile() {
 if (!this.props.mobile) return;
 this.props.mobile();
}

render(){
  const sections = [
   {
    name: 'About',
    id: 'about'
   },
   {
    name: 'Work',
    id: 'jobs'
   },
   {
    name: 'Projects',
    id: 'projects'
   },
  ];
 return(
   <ul className={"menu"}>
    {sections.map(item => (<li><AnchorLink href={`#${item.id}`} onClick={this.updateMobile}>{item.name}</AnchorLink></li>))}
   </ul>
 )
}
}

export default Menu;