//Initialize speech synthesis
const synthesis = window.speechSynthesis;

//Grab DOM elements
const form = document.querySelector('form');
const textInput = document.querySelector('#text-input');
const selectVoice = document.querySelector('#voice-select');
const rate = document.querySelector('#rate');
const rateValue = document.querySelector('#rate-value');
const pitch = document.querySelector('#pitch');
const pitchValue = document.querySelector('#pitch-value');

//Initialize the voices array

let voices = [];

const getVoices = () =>{
    voices = synthesis.getVoices();
    
    //loop through voices and create option for each voice
    voices.forEach(voice =>{
        //create an option element
        const option = document.createElement('option');

        //fill option with the voice and the language
        option.textContent = voice.name + '(' + voice.lang + ')';

        //set needed option attributes
        option.setAttribute('data-lang', voice.lang);
        option.setAttribute('data-name', voice.name);
        selectVoice.appendChild(option);
    }) ;
};

getVoices();
if (synthesis.onvoiceschanged !== undefined){
    synthesis.onvoiceschanged = getVoices;
}



const speak = ()=>{

    //check if speaking
    if(synthesis.speaking){
        console.error('Speaking...');
        return;
    }
    if(textInput.value !== ''){
        //Get speak text
        const speakText = new SpeechSynthesisUtterance(textInput.value);

        //speak end
        speakText.onend = e => {
            console.log('Done speaking...')
        }

        //If speak error
        speakText.onerror = e =>{
            console.error('Something went wrong');
        }

        //selected voice
    }
}