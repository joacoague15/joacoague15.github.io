import focusedPaladin from "./assets/images/focused_paladin.png";
import angryPaladin from "./assets/images/angry_paladin.png";
import happyPaladin from "./assets/images/happy_paladin.png";

import angry1 from "./assets/audios/angry/angry1.mp3";
import angry2 from "./assets/audios/angry/angry2.mp3";
import angry3 from "./assets/audios/angry/angry3.mp3";
import angry4 from "./assets/audios/angry/angry5.mp3";
import angry5 from "./assets/audios/angry/angry5.mp3";
import angry6 from "./assets/audios/angry/angry6.mp3";
import angry7 from "./assets/audios/angry/angry7.mp3";
import angry8 from "./assets/audios/angry/angry8.mp3";
import angry9 from "./assets/audios/angry/angry9.mp3";
import angry10 from "./assets/audios/angry/angry10.mp3";

import happy1 from "./assets/audios/happy/happy1.mp3";
import happy2 from "./assets/audios/happy/happy2.mp3";
import happy3 from "./assets/audios/happy/happy3.mp3";
import happy4 from "./assets/audios/happy/happy5.mp3";
import happy5 from "./assets/audios/happy/happy5.mp3";
import happy6 from "./assets/audios/happy/happy6.mp3";
import happy7 from "./assets/audios/happy/happy7.mp3";
import happy8 from "./assets/audios/happy/happy8.mp3";
import happy9 from "./assets/audios/happy/happy9.mp3";
import happy10 from "./assets/audios/happy/happy10.mp3";

import focused1 from "./assets/audios/focus/focus1.mp3";
import focused2 from "./assets/audios/focus/focus2.mp3";
import focused3 from "./assets/audios/focus/focus3.mp3";
import focused4 from "./assets/audios/focus/focus4.mp3";
import focused5 from "./assets/audios/focus/focus5.mp3";
import focused6 from "./assets/audios/focus/focus6.mp3";
import focused7 from "./assets/audios/focus/focus7.mp3";
import focused8 from "./assets/audios/focus/focus8.mp3";
import focused9 from "./assets/audios/focus/focus9.mp3";
import focused10 from "./assets/audios/focus/focus10.mp3";

import {useState} from "react";
import { Howl } from 'howler';

function App() {
    const [paladinImage, setPaladinImage] = useState(focusedPaladin);
    const [paladinText, setPaladinText] = useState("");

    const texts = {
        angry: [
            "I shall smite you down in the name of justice!",
            "Taste the fury of the Light, demon!",
            "How dare you defy the Light?!",
            "Feel the wrath of the righteous!",
            "May the heavens bear witness to your destruction!",
            "Your foul presence will no longer sully this realm!",
            "You will pay for your vile deeds!",
            "I will purge this land of your taint!",
            "Your wickedness shall be your undoing!",
            "Your corruption ends here, fiend!"
        ],
        focused: [
            "There is no rest until evil is vanquished.",
            "Let justice be done, for the good of all.",
            "Together, we will cleanse this land.",
            "Hold the line, and the Light will prevail.",
            "We must protect the innocent at all costs.",
            "The Light shall guide our blades.",
            "The path of righteousness is our guiding light.",
            "Our conviction will never waver in the face of darkness.",
            "Our mission is clear; there is no room for failure.",
            "In the name of the Light, I stand resolute."
        ],
        happy: [
            "The Light brings hope and joy to all.",
            "Our triumph is a testament to the power of righteousness.",
            "In unity, we find strength and happiness.",
            "A new dawn has come, and with it, a brighter future.",
            "In the Light's embrace, we find solace.",
            "The warmth of the Light fills our hearts.",
            "Together, we have restored peace to this land.",
            "Rejoice, for the Light is with us!",
            "Let us celebrate the victory of the Light!",
            "Today, we stand as a beacon of hope for all."
        ],
    };

    const angryVoices = [angry1, angry2, angry3, angry4, angry5, angry6, angry7, angry8, angry9, angry10];
    const happyVoices = [happy1, happy2, happy3, happy4, happy5, happy6, happy7, happy8, happy9, happy10];
    const focusedVoices = [focused1, focused2, focused3, focused4, focused5, focused6, focused7, focused8, focused9, focused10];

    const handleVoiceSpeak = (voiceProperty) => {
        let speech = "";
        let randomIndex = 0;

        switch (voiceProperty) {
            case "angry":
                randomIndex = Math.floor(Math.random() * texts.angry.length);
                speech = angryVoices[randomIndex];
                setPaladinText(texts.angry[randomIndex]);
                break;
            case "focused":
                randomIndex = Math.floor(Math.random() * texts.focused.length);
                speech = focusedVoices[randomIndex];
                setPaladinText(texts.focused[randomIndex]);
                break;
            case "happy":
                randomIndex = Math.floor(Math.random() * texts.happy.length);
                speech = happyVoices[randomIndex];
                setPaladinText(texts.happy[randomIndex]);
                break;
            default:
                break;
        }

        const voice = new Howl({
            src: [speech],
            html5: true,
            loop: false,
            volume: 1,
        })

        voice.play();
    }

    const handleClick = (image, voiceProperty) => {
        handleVoiceSpeak(voiceProperty);
        setPaladinImage(image);
    }

  return (
    <div className="App" style={{ width: "100%" }}>
      <div style={{ display: "flex" }}>
        <img style={{ width: 512, margin: "auto", marginTop: 20, borderRadius: 2, border: "0.5px solid white" }} src={paladinImage} alt="paladin-img" />
      </div>
      <div style={{ display: "flex", width: "40%", margin: "40px auto" }}>
        <p style={{ fontSize: 32, color: "white", textAlign: "center", width: "100%" }}>{paladinText}</p>
      </div>
      <div style={{ display: "flex", width: "40%", margin: "40px auto" }}>
          <button onClick={() => handleClick(angryPaladin, "angry")} style={{ display: "flex", margin: "auto", border: "4px solid grey", fontSize: 48, padding: 10, borderRadius: 2, cursor: "pointer" }}>Angry</button>
          <button onClick={() => handleClick(focusedPaladin, "focused")} style={{ display: "flex", margin: "auto", border: "4px solid grey", fontSize: 48, padding: 10, borderRadius: 2, cursor: "pointer" }}>Focused</button>
          <button onClick={() => handleClick(happyPaladin, "happy")} style={{ display: "flex", margin: "auto", border: "4px solid grey", fontSize: 48, padding: 10, borderRadius: 2, cursor: "pointer" }}>Happy</button>
      </div>
    </div>
  );
}

export default App;
