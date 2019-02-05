import React, { Component } from 'react';
import axios from 'axios';
import './NewPost.css';
import {Redirect} from 'react-router-dom';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Max',
        tag: 'local',
        submitted: false,
    }
componentDidMount(){  
    //if unauth this.props.history.replace('/posts') alternative for guards 
    console.log(this.props);}

postDataHandler = () => {
        
        
        
        let data = {
            title: this.state.title ,
            body: this.state.content,
            author: this.state.author,
            id: this.state.title + this.state.content
        };
        axios.post('/posts',data)
        .then(response=>{console.log(response);
            this.props.history.push("/posts");//PUSHES ON TOP OF STACK
            this.props.history.replace("/posts");//REPLACEs LAST ON STOCK
            // this.setState({submitted: true})
            console.log("POST DATA HANDLER" , this.state);
        });
        
        console.log(data);
        // this.props.addItem(data); JUST WITH PUSHING TO SERVER 
        
    }

    render () {

        let redirect= null;
        if(this.state.submitted){
            redirect =   <Redirect to = "/posts"/>
        }
        return (
            <div className="NewPost">
            {redirect}
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="Max">Max</option>
                    <option value="Manu">Manu</option>
                </select>
                <button onClick={this.postDataHandler}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;