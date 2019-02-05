import React, {Component} from 'react';
import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import  './Posts.css';
import { Route } from 'react-router-dom';
// import { withRouter } from 'react-router-dom';
import FullPost from '../FullPost/FullPost';


class Posts extends Component {

    state = {
        posts:[],
        // selectedPostId: null,
        error: false,
    
        addedPost: null,
        postChange: 0,
    };




componentDidMount(){
    console.log(this.props);
    axios.get('https://jsonplaceholder.typicode.com/posts').then(response=>{
    const posts = response.data.slice(0 , 4);  
    console.log("COMPONENT DID MOUNT POSTS" , posts);
    
    const updatedPosts = posts.map(post=>{
        return {...post, author: 'max'}
    });

    this.setState({posts: updatedPosts});
}
).catch(error=>{
    console.log(error);
    // this.setState({error: error})
});}

postSelectedHandler=(id)=>{
    // this.setState({selectedPostId: id});
    // this.props.history.push({pathname: '/' + id})
    this.props.history.push("/posts/" + id);
//     let counter = this.state.postChange;
//     counter= counter+1;
//     this.setState({postChange: counter});
//     console.log(counter);
}

render(){

    let posts = <p style={{textAlign: 'center'}}>Something went wrong</p>;
        if (!this.state.error){
            posts = this.state.posts.map(post=>{
                    return (
                    // <Link to={'/' + post.id} key = {post.id}>
                        <Post 
                        key = {post.id} 
                        title={post.title} 
                        author={post.author}  
                        body={post.body}
                        // {...this.props}
                        clicked={()=>this.postSelectedHandler(post.id)}/>
                    //  </Link>
                    )
                });}

return(

    <div>
        <section className="Posts">
                    {posts}
                </section>
        <Route path= 
            // this.props.match.url + NESTED DYNAMICAL ROUTES
            '/posts/:id' 
             exact component={FullPost} />
    </div>


)}
};

export default Posts;

