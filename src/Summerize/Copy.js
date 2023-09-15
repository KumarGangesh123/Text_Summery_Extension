import React,{Component} from 'react';
import "./Style.css";

class Copy extends Component{
	constructor(props){
		super(props);
		this.data=props.summerizeData;
	}

	handleCopyClick(){
		if(this.props.summerizeData==""){
			alert("Please enter the text to copy");
		}else{
			console.log(this.props.summerizeData);
    		const tempTextArea = document.createElement('textarea');
    		tempTextArea.value = this.props.summerizeData;
    		document.body.appendChild(tempTextArea);

    		// Select the text inside the textarea
    		tempTextArea.select();

    		// Execute the copy command
    		document.execCommand('copy');

    		// Remove the temporary textarea
    		document.body.removeChild(tempTextArea);
    	}
  	};

	render(){
		return(
			<div>
				<button id="copyButton" onClick={this.handleCopyClick.bind(this)}>Copy Text</button>
			</div>
		);
	}
}

export default Copy;

