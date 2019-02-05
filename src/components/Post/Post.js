import React from 'react';
// import { withRouter } from 'react-router-dom';
// fro accessing props from HOC of Router
import classes from'./Post.module.css';
// import classes from '*.module.sass';

const post = (props) => 
{
//    console.log(props);
    return(
        <article className={classes.Post} onClick={props.clicked}>
        <h1>{props.title}</h1>
        <p className={classes.Body}>{props.body}</p>
        <div className="Info">
            <div className={classes.Author}>{props.author}</div>
        </div>
    </article>
    )
    

}
 


export default post;
// export default withRouter(post);