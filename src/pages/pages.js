import React, { Component } from 'react';
import { Template } from '../Template';



export const Pages = (props)=>{

    console.log(props.match.params);

    return(
         <Template > 
         <div className="col-md-6 col-md-offset-3 ">
            <h1> {props.match.params.title}</h1>
            <h2> {props.match.params.content}</h2>
    </div>
         </Template>
    )

   

}