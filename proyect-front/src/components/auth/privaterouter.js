import React from 'react';
import{Navigate,Outlet} from 'react-router-dom';
import {getSession} from '../helper';

const checkAuth=()=>{
    console.log("checkAuth");
    return getSession()?true:false;
}

export default class PrivateRoute extends React.Component{
    constructor(props){
        super(props);
        this.state={
            auth:checkAuth()
        };

    }
    render(){

        console.log("state auth: "+this.state.auth)
        return (
            this.state.auth?<Outlet></Outlet>:<Navigate to="/login"></Navigate>
            );
    }
}