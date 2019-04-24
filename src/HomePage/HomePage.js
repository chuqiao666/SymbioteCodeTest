import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


import { Menu} from '../Menu';
import { CreatePages} from '../CreatePage';
import { Template } from '../Template';

import { userActions } from '../_actions';

class HomePage extends React.Component {
    componentDidMount() {
        this.props.dispatch(userActions.getAll());
    }



    render() {
        const { user, users } = this.props;
        return (

            <Template >
                <div className={" col-md-6 col-md-offset-3  "}>
                    
                    <Link to="/login">Logout</Link>
                   
                </div>
               

               

            </Template>

          
               
         
        );
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

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };