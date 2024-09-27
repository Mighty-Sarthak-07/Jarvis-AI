let btn = document.querySelector("#btn")
let content = document.querySelector('#cont')
let voice = document.querySelector('#ai')


function speak(text){
let text_speak = new SpeechSynthesisUtterance(text)
text_speak.rate =1
text_speak.pitch =1
text_speak.volume =1
window.speechSynthesis.speak(text_speak)
}


function wishMe(){
    let day = new Date()
    let hours = day.getHours()
    if(hours>=0 && hours<12){
        speak("Good Morning Sir");
    }
    else if(hours>=12 && hours<16){
        speak("Good afternoon Sir");
    }
    
else {
    speak("Good evening sir");
}
}
window.addEventListener('load',()=>{
    wishMe()
})

let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
let recognition = new speechRecognition()

recognition.onresult=(event)=>{
   let currentIndex = event.resultIndex;
   let transcript = event.results[currentIndex][0].transcript
   content.innerText = transcript
   takeCommand(transcript.toLowerCase())
}

btn.addEventListener("click",()=>{
    recognition.start() 
    btn.style.display = "none"
    voice.style.display = "block"
})

function takeCommand(message) {
     btn.style.display = "flex"
       voice.style.display = "none"
    if(message.includes("hello") || message.includes("hey")){
        speak("hello sir,what can i help you?")
    }
    else if(message.includes("how are you")){
        speak("I am fine and you sir?")
    }
    else if(message.includes("you know who i am")){
        speak("yes sir you are very good person")
    }
    else if(message.includes("who are you")){
        speak("I am virtual assistant, created by Sarthak Sir!")
    }

    else if(message.includes("open youtube")){
        speak("opening Youtube")
        window.open("https://www.youtube.com")
    }
    else if(message.includes("open facebook")){
        speak("opening Facebook")
        window.open("https://www.facebook.com")
    }
    else if(message.includes("open instagram")){
        speak("opening instagram")
        window.open("https://www.instagram.com")
    }
    else if(message.includes("open linkedin")){
        speak("opening linkedin")
        window.open("https://www.Linkedin.com")
    }
    else if(message.includes("play a song")){
        speak("yo yo honey singh")
        window.open("https://youtu.be/XO8wew38VM8?si=kEW2V2Wq5nGKuHp-")
    }
    else if(message.includes("are you mad")){
        speak("No i am not a human")
    }
    else if(message.includes("are you motherfucker")){
        speak("no i am not but you are motherfucker")
        window.open("https://png.pngtree.com/png-clipart/20230822/original/pngtree-skeleton-shows-middle-finger-picture-image_8157767.png")
    }
    else{
        speak(`this is what i found on internet regarding ${message.replace("jarvis","")}`)
        window.open(`https://www.google.com/search?q=${message.replace("jarvis","")}`)
    }
}