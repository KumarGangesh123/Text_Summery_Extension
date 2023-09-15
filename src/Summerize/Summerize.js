import React, { Component } from 'react';
import "./Style.css";

class Summerize extends Component {
    constructor(props){
        super(props);
    }  

    showAlert(event){
        event.preventDefault();
        console.log("summerized text button clicked");
        const text1Data = event.target.text1.value;
        console.log("\nData in TextArea1 is :\t"+text1Data);
        event.target.text2.value=text1Data;
    }

    render() {
        return (
            <div>
                <form id="container" onSubmit={this.showAlert.bind(this)}>
                    <textarea name="text1" id="textarea1" placeholder="Enter the text to summerize"></textarea>
                    <button id="b1" type="submit">Summerize Text</button>
                    <textarea name="text2" id="textarea2" placeholder="Summerized text......"></textarea>
                    <button id="b2" type="submit">Copy Summerized Text</button>
                </form>
            </div>
        )   
    }
}

export default Summerize;




