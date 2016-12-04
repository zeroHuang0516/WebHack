import React, { Component } from 'react';
import Emotion from './emotion.js';
import Avatar from 'react-avatar';
import ImageZoom from 'react-medium-image-zoom';
var randomColor = require('random-color');
var color = randomColor(0.99,0.99);
let responseGoogleId;


const initState = {
    InputMessage:'',
    chats: [
        {
            info:{
                name: 'TestUser',
            },
            messages: 
                {text: 'hello', time:'24:00am'},
        },
    ],
    total: 0,
    index: 0,
    open:"none",
    userNameErr: undefined,
    userName:'',
    recordUserName: '',
    finishSetName: false,
    avatar:'',
    recordAvatar:'',
    file: '',
    imageViewUrl: ''
};
// const responseGoogleId = require('./LoginPage.js').responseGoogleId;
// const responseFacebookId = require('./LoginPage.js').responseFacebookId;

class ChatRoomPage extends Component {
	constructor(props) {
		super(props);
		this.state = initState;
	}

	onInputMessageChange = (eve) =>{
		this.setState({InputMessage: eve.target.value});
	}

	onInputUserNameChange = (eve) => {
		this.setState({userName: eve.target.value });
	}

	submitMessage = (eve)=>{
		const input = this.state.InputMessage;
        const time = new Date().toDateString();
        const newChat = {
        	info:{
                name: this.state.recordUserName,
                Avatar: 'http://lorempixel.com/50/50/people/1'
            },
            messages: 
                {text: input, time:time},
        };
		if((eve.which ===13 || eve.keyCode ===13) && input.trim()!== '') {
			const { chats,index } =this.state;
            chats.push(newChat);
			this.setState({
				chats: chats,
				InputMessage: "",
                index: this.state.index+1,
			});
            console.log(this.state.index);
            console.log(chats[index].messages.text);
		}
		
	}

	handleSubmit=(eve)=>{
        if((eve.which ===13 || eve.keyCode ===13)) {
			if(this.state.userName.length+1>2 && this.state.userName.length+1 < 15){
				this.setState({
					recordUserName:this.state.userName,
					finishSetName: true,
				});
			}
		console.log(this.state.recordUserName);
		}
	}
	

	handleEmoBtn() {
		if(this.state.open == "flex") {
			this.setState({open:"none"});
		}
		else{
			this.setState({open:"flex"});
		}
	}

	addEmo(myClick){
		this.setState({
			InputMessage: this.state.InputMessage+myClick,
		});
		console.log(myClick);
	}

    

  handleImageLoad(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    const time = new Date().toDateString();
        const newChat = {
            info:{
                name: this.state.recordUserName,
            },
            messages: 
                {text: '', time:time},
        };
        
            const { chats,index } =this.state;
            chats.push(newChat);
            this.setState({
                chats: chats,
                InputMessage: "",
                index: this.state.index+1,
            });


    reader.onloadend = () => {
      this.setState({
        file: file,
        imageViewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
    console.log(this.state.imageViewUrl);

    }



	render(){
        const {chats, total,index } = this.state;
        if(!this.state.finishSetName){
        return(
<div className="row bootstrap snippets">
	<div className="col-sm-6 col-md-4 col-md-offset-4">
    <legend className="legend">Enter User Name</legend>
	<div className="account-wall">
                <img className="profile-img" src="https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=120"
                    alt=""/>
                <form className="form-signin">
                <input type="text" className="form-control" placeholder="Please Enter User Name" onChange={this.onInputUserNameChange} value={this.state.userName} onKeyDown={this.handleSubmit.bind(this)} required autoFocus/>
                </form>
    </div>
    </div>
</div>
            );}
            else{
                
                    return(
<div style={{backgroundColor:"#FBE565"}}>
<div className="row bootstrap snippets">
    <div className="col-sm-2 col-md-8 col-md-offset-2">
      <div className="box box-primary direct-chat direct-chat-primary" >
        <legend className="legend">User {this.state.userName}</legend>
        <div className="account-wall_1">
        <div className="box-body">
        {chats.map((chat,id) => {
            if(this.state.imageViewUrl!==''&& chat.messages.text===''){
                return (
            <div className="direct-chat-messages" key={id} style={{height:'200px'}}>
            
            <div className="direct-chat-msg">
              <div className="direct-chat-info clearfix">
                <span className="direct-chat-name pull-left">{chat.info.name}</span>
                <span className="direct-chat-timestamp pull-right">
                    {chat.messages.time}
                </span>
              </div>
              <div className="direct-chat-img" style= {{background: color.hexString(), border:"none"}}>
                     <span className="initials">{chat.info.name.charAt(0).toUpperCase()}</span>
                </div>
              
              
              <ImageZoom id="imgView" className="direct-chat-text"
        image={{
          src: this.state.imageViewUrl,
          alt: '',
          style: { width: '50%' , height:'50%' }
        }}
        zoomImage={{
          src: this.state.imageViewUrl,
          alt: ''
        }}
      />
              
            </div>
            
          </div>

            );
            }
            else{
                return (
                                <div className="direct-chat-messages" key={id}>
            
            <div className="direct-chat-msg">
              <div className="direct-chat-info clearfix">
                <span className="direct-chat-name pull-left">{chat.info.name}</span>
                <span className="direct-chat-timestamp pull-right">
                    {chat.messages.time}
                </span>
              </div>
                <div className="direct-chat-img" style= {{background: color.hexString(), border:"none"}}>
                     <span className="initials">{chat.info.name.charAt(0).toUpperCase()}</span>
                </div>
                <div className="direct-chat-text">
                                    <span>{chat.messages.text}</span>
        
              </div>
              
              
            </div>
            
          </div>

            );
            }
                        
        }
                
                    )}
          
          
        </div>
        </div>
        <div className="col-md-12">
        <div className="box-footer">
            <div className="input-group">
                <span className="input-group-btn" style= {{fontSize: "1.5rem", background: "white", border:"none"}}>

                <button onClick={ this.handleEmoBtn.bind(this) } style= {{fontSize: "1.5rem", background: "white", border:"none"}}>😀</button>
                
                <label htmlFor="files" className="btn" style= {{textAlign:"left", width:"45px"}}><img style={{width:"100%", height:"100%"}} src="http://library.gmu.edu/sites/default/files/users/cferranc/CommonTerms/Picture_icon_BLACK.svg_.png"/></label>
                <input id="files" type='file' style={{visibility:"hidden",width:"5px", height:"5px"}} onChange={(e)=>this.handleImageLoad(e)}/>
                
                </span>
                <Emotion  open = {this.state.open} handleClick = { this.addEmo.bind(this) } >
                </Emotion>
              <input type="text" name="message" value={this.state.InputMessage} onChange={this.onInputMessageChange.bind(this)} onKeyDown={this.submitMessage.bind(this)} placeholder="Type Message ..." className="form-control" />
                  <span className="input-group-btn">
                    <button type="submit" className="btn btn-primary btn-flat"  >Send</button>
                  </span>
            </div>
        
        </div>
        </div>
      </div>
      </div>
    </div>
    
    
    
    
</div>
            );
                    this.setState({
                        imageViewUrl:'',
                    });
                
                

            }
    }

	
}
	
export default ChatRoomPage;
