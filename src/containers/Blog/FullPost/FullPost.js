import React, { Component } from 'react';
import axios from 'axios';
import  './FullPost.css';

class FullPost extends Component {

    state={
        loadedPost: null,
       
    }
    componentDidMount(){
        this.loadData()    
    }


componentDidUpdate(){
    this.loadData()
}

loadData(){
console.log("FULL POST DID UPdaTE INSIDE LOAD DATA Params" , this.props);

        if (this.props.match.params.id){//IF WE GET ID BY CLICKING- RECEIVING PROPS
            if (!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== +this.props.match.params.id)){
                //W can use != comparator or use +this.props.match.params.id to check only number
        //     CHECK IF WE HAVE NULL STATE_
        // THAN CHECK IF ID OF OBJECT IN STATE IS THE SAME AS WE WANT TO GET
        //AVOIDING INFINITE LOOP
                axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.match.params.id)
                .then(response=>{
                    this.setState({loadedPost: response.data});

                    console.log(response);
                });  
                // axios.post('https://jsonplaceholder.typicode.com/posts/', this.state.loadedPost)
                // .then(response=>{   
                //     console.log(response);
                // });  
            }
          
        
        }
}
deletePostHandler=()=>{
    axios.delete('/posts/' + this.props.match.params.id)
        .then(response=>(console.log(response ))).catch(error=>{this.setState({error: error})});
}

    render () {

        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;
        if (this.props.match.params.id){post = <p style={{textAlign: 'center'}}>Loading...</p>;}
        
        if (this.state.loadedPost){
        post = (
            <div className="FullPost">
                <h1>{this.state.loadedPost.title}</h1>
                <p>{this.state.loadedPost.body}</p>
                <div className="Edit">
                    <button onClick={this.deletePostHandler} className="Delete"> Delete </button>
                </div>
            </div>

        );}
        return post;
    }
}

export default FullPost;