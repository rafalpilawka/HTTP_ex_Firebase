import React , {Component} from 'react';
import  './Upload.css';
import axios from 'axios';

class Upload extends Component{

componentDidMount(){

    console.log('COMPONENT DID MOUNT' , this.props.data);
}

postToFirebase=()=> {
       let  transfer = this.props.data
        axios.post('https://hhtpreq.firebaseio.com/posts.json' ,transfer)
        .then(response=>{console.log(response)});
        
        console.log(transfer);
        
    
}
render(){
    return(
        
        <div className="Edit">
                    <button onClick={this.postToFirebase} className="Upload"> Upload to firebase</button>
         </div>)
     
}
              

}

export default Upload;