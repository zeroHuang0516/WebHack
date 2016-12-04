import React, { Component } from 'react';
var emotions = {"emotions": [
        "😀",
        "😁",
        "😃",
        "😄",
        "😅",
        "😆",
        "😇",
        "😍",
        "😘",
        "😗",
        "😙",
        "😚",
        "😜",
        "😎",
        "😶",
        "😳",
        "😞",
        "😟",
        "😠",
        "😮",
        "😱",
        "😨",
        "😭",
        "😵",
        "😲",
        "😷",
        "😴"
    ]};
class Emotion extends Component {
	constructor() {
        super();
    }


	
	render() {
		let {open, handleClick} = this.props;
		let style = {
		emotion: {
                display: open,
                flexWrap: "wrap",
                width: 220,
                height: 120,
                overflow: "auto",
                marginLeft: 0,
                marginTop: -120,
                background: "white"
            },
            emotions: {
                width: 40,
                height: 40,
                background: "white",
                fontSize: "1.5rem",
                border: "none"
            }
	}
		return(
			<div className = "emotions" style = { style.emotion }>
                {
                    emotions.emotions.map(function (e, index) {
                        return <button key = {index} style = { style.emotions } onClick = { 
                            () => handleClick(`${e}`) }
                        > {e} </button>
                    })
                }    
            </div>
			);
	}
}

export default Emotion;