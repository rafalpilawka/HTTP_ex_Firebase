import React, { Component } from 'react';
// import axios from 'axios';
import axios from '../../axios';
import Posts from './Posts/Posts';
import { Route , NavLink , Switch ,Redirect} from 'react-router-dom';
import './Blog.css';
import  asyncComponent from '../../hoc/asyncComponent';
// import NewPost from './NewPost/NewPost';
// import Upload from '../../components/Upload/Upload';
// import FullPost from './FullPost/FullPost';

const AsyncNewPost = asyncComponent(()=>{
    return import('./NewPost/NewPost')
    // dynymic import function
});

class Blog extends Component {

state={
    auth: true,
}

  

    componentDidCatch(){
        console.log('INSIDE DID CATCH');
    }
    componentWillReceiveProps(){console.log('INSIDE WILL RECEIVE PROPS');}

    componentWillUpdate(){console.log('INSIDE WILL UPDATE');}


    deletePostHandler=()=>{console.log('CLICkED DELETE BUTTON');

        axios.delete('/posts/'+ this.state.selectedPostId)
            .then(response=>(console.log(response , "nacisnales przycisk"))).catch(error=>{this.setState({error: error})});

            console.log(this.state.selectedPostId);
    }
   
    // addPostLocallyHandler=(data)=>{
    //     this.setState({addedPost: data});

        
    //     console.log('BLOG JS STATE' , this.state.addedPost);
    //     // let oldState = {...this.state.posts};
    //     this.state.posts.push(data);
     
    //     console.log('STATE POSTS' , this.state.posts);

    // }
  
    
    render(){

        

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/posts" 
                            exact 
                            activeClassName="my_active"
                            activeStyle={{
                                color: 'orange',
                                textDecoration: 'underline'
                            }}
                            //if we want to set our name 
                            >Posts</NavLink></li>
                            {/* Links- METHODS FROM REACT ROUTER */}
                            <li><NavLink to= 
                              {{ pathname: '/new-post',
                                    hash: '#submit',
                                    search: '?quick-submit=true', }}
                                >New Post</NavLink></li>
                         
                            {/* LINKS WITH PARAMS */}
                            {/* <li><a href="/down">down</a></li> */}
                        </ul>
                    </nav>
                </header>
                {/* <Upload data={this.state.posts}/> */}
        {/* <Route path = "/" exact render={()=><h1>Home</h1>} /> */}
                 {/* <Posts></Posts> */}
                 
                 
                 <Switch>  
                    {this.state.auth ?  <Route path="/new-post" component={AsyncNewPost} />: null}
                    <Route path="/posts" component={Posts} />
                    <Route render={()=><h1>You are not authenticated</h1>}/>
                    {/* <Redirect from="/" to="/posts"/> */}
                    {/* <Route path="/" component={Posts} /> REDIRECTING*/} 
                </Switch>
                


                {/* <section>
                    <FullPost id={this.state.selectedPostId} deleteButton={this.deletePostHandler}/>
                </section>
                <section>
                    <NewPost addItem={this.addPostLocallyHandler}/>
                </section> */}
            </div>
        );
    }
    componentDidUpdate(){
        

};
}




export default Blog;


// class Blog extends Component {
//     render () {
//         return (
//             <div className="Blog">
//                 <header>
//                     <nav>
//                         <ul>
//                             <li><NavLink
//                                 to="/posts/"
//                                 exact
//                                 activeClassName="my-active"
//                                 activeStyle={{
//                                     color: '#fa923f',
//                                     textDecoration: 'underline'
//                                 }}>Posts</NavLink></li>
//                             <li><NavLink to={{
//                                 pathname: '/new-post',
//                                 hash: '#submit',
//                                 search: '?quick-submit=true'
//                             }}>New Post</NavLink></li>
//                         </ul>
//                     </nav>
//                 </header>
//                 {/* <Route path="/" exact render={() => <h1>Home</h1>} />
//                 <Route path="/" render={() => <h1>Home 2</h1>} /> */}
//                 <Switch>
//                     <Route path="/new-post" component={NewPost} />
//                     <Route path="/posts" component={Posts} />
//                 </Switch>
//             </div>
//         );
//     }
// }

// export default Blog;