import React from 'react'
import {connect} from 'react-redux';
import { Link, Route, Redirect } from "react-router-dom";
import {createPageReducer} from '../_reducers/createPageReducer';


import {Template} from '../Template';
import { Menu } from '../Menu';
import {store} from '../_helpers/store'
import { userActions } from '../_actions';
import { history } from '../_helpers';



class CreatePage extends React.Component{ 

    constructor() {
        super();
       
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(userActions.getAll());
    }

    handleSubmit(e){
        e.preventDefault();
        const title = this.getTitle.value;
        const message =  this.getMessage.value;
        const data = {
          id: new Date(),
          title,
          message
        }

    
        store.dispatch({
            type:'CREATE_PAGE',
            data});
          this.getTitle.value = '';
          this.getMessage.value = '';

          const oldData = JSON.parse( sessionStorage.getItem('pageData') ) || [];
          oldData.push(data);

          const titleArray = oldData.map((item)=> (item.title) );
          const isDuplicate = titleArray.some((item,key)=> ( titleArray.indexOf(item) != key));

          if( !isDuplicate ){
              ;
          }else{
              alert("This page title exists");
              oldData.pop();
          }


         

        
          sessionStorage.setItem("pageData",JSON.stringify( oldData) );

        




        //   console.log(store.getState().createPageReducer)
        

    }
  

    

    render() {
        const { user, users } = this.props;

        return (
            (  user   )?( 
            <Template>

          
            <div className={"createPage col-md-6 col-lg-6 col-sm-6 col-md-offset-3  "}>
            <div >
                <h2>Create Page</h2>
                <form name="createPageForm" onSubmit={this.handleSubmit} >
        
                    <label for="title" >Title</label>
                    <input ref={(input)=>this.getTitle = input} name="title" type= "text" className="form-control" required/>
                    <br></br>
                    <label for="content" >Content</label>
                    
                    <textarea name="content"   ref={(input)=>this.getMessage = input}   className="form-control" type="textarea"/>
                    <br></br>
        
                    <button className="btn btn-primary">submit</button>
        
                </form>
        
            </div>
            </div>

    
            </Template>


            
        ):(
            // history.push('/login');
            <Redirect to="/login" />
        )

        
        )
    }


  
}

function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users
    };
}

const connectedCreatePage = connect(mapStateToProps)(CreatePage);
export { connectedCreatePage as CreatePage };
// export {CreatePage};
// export default connect()(CreatePage);
