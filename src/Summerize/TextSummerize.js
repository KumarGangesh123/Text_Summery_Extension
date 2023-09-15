import React, {useState} from "react";
import axios from 'axios';
import "./Style.css";
import Copy from "./Copy";

const TextSummarizer = () => {
  const [inputText, setInputText] = useState('');
  const [summary, setSummary] = useState('');
  const [title, setTitle] = useState('');

  const handleSummarize1 = async () => {
    if(inputText==""){
      alert("Please enter the text to summerize");
    }else{
    try {
      const apiKey = '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';
      const response = await axios.post(
        'https://api.openai.com/v1/engines/davinci/completions',
        {
          prompt: `Summarize: ${inputText}`,
          max_tokens: 200, // Adjust the max_tokens for your desired summary length
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
          },
        }
      );
      setTitle("Summary");
      setSummary(response.data.choices[0].text);
      console.log(response.data.choices[0].text);
    } catch (error) {
      alert("Error :\t"+error.message);
    }
  }
  };

  const handleSummarize2 = async () => {
    if(inputText==""){
      alert("Please enter the text for Major Points");
    }else{
    try {
      const apiKey = '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';
      const response = await axios.post(
        'https://api.openai.com/v1/engines/davinci/completions',
        {
          prompt: `Give Major Points of this paragraph : ${inputText}`,
          max_tokens: 50, // Adjust the max_tokens for your desired summary length
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
          },
        }
      );
      setTitle("Major Point");
      setSummary(response.data.choices[0].text);
      console.log(response);
    } catch (error) {
      alert("Error :\t"+error.message);
    }
  }
  };

  return (
    <div id="container">
      <h1>Text Summerization</h1>
      <textarea
        id="textarea1"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter text to summarize..."
      />
      <button id="b1" onClick={handleSummarize1}>Summarize Text</button>
      <button id="b2" onClick={handleSummarize2}>Major Point</button>
      {/* <textarea id="textarea2" placeholder="Summerized Text........">{summary}</textarea> */}
      <h2>{title}</h2>
      <p>{summary}</p>
      <Copy summerizeData={summary}/>
    </div>
  );
};


export default TextSummarizer;
