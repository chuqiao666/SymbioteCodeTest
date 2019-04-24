import React from 'react';
import { connect } from 'react-redux';

import { NavLink } from "react-router-dom";
import './menu.css'
import {store} from '../_helpers/store';

const selectedStyle = {
    background: "#444",
    color: '#fff'
  }
//  const pagesArray = store.getState().createPageReducer;



  class Menu extends React.Component{

 

    componentDidMount(){
      this.unsubscribe = store.subscribe(()=>this.setState({}));
  }
  componentWillUnmount(){
      this.unsubscribe();
  }


    render(){

      const {createPageReducer} = this.props;
      const pageData = JSON.parse(sessionStorage.getItem('pageData') );
        return(
            <nav className='main-menu col-md-4 col-md-offset-0'>
             
           

      { ( pageData != null )? ( 
        pageData.map((item,key) => (
          <NavLink key={key}  activeStyle = {selectedStyle} to={"/pages/"+ item.title +","+ item.message}> {item.title} </NavLink>
        ))):( "" )}
             

           

            <NavLink to='/createPage' activeStyle = {selectedStyle}>create page</NavLink>
          </nav>


        )
    }
  }

  const mapStateToProps = (state) => {
    return {
        posts: state
    }
}
// export default connect(mapStateToProps)(Menu);

  export {Menu};

  export default connect()( Menu );
