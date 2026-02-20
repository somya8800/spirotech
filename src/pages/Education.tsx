import { useState, useEffect } from "react";

type Question = {
  q: string;
  options: string[];
  answer: number;
};

export default function Education() {

const [language,setLanguage] = useState<"en" | "hi">("en");

/* ---------------- QUESTION BANKS ---------------- */

const questionBankEN: Question[] = [
{q:"Ideal pH range for Spirulina growth?",options:["5-6","8.5-10.5","3-4","12+"],answer:1},
{q:"Spirulina is scientifically classified as?",options:["Algae","Fungus","Plant","Mineral"],answer:0},
{q:"Best temperature for cultivation?",options:["10°C","30-35°C","50°C","5°C"],answer:1},
{q:"Spirulina contains highest amount of?",options:["Protein","Sugar","Fat","Starch"],answer:0},
{q:"Spirulina grows best in?",options:["Acidic water","Salt water","Alkaline water","Fresh cold water"],answer:2},
];

const questionBankHI: Question[] = [
{q:"स्पिरुलिना के विकास के लिए आदर्श pH रेंज क्या है?",options:["5-6","8.5-10.5","3-4","12+"],answer:1},
{q:"स्पिरुलिना वैज्ञानिक रूप से क्या है?",options:["शैवाल","फंगस","पौधा","खनिज"],answer:0},
{q:"खेती के लिए सबसे अच्छा तापमान?",options:["10°C","30-35°C","50°C","5°C"],answer:1},
{q:"स्पिरुलिना में सबसे अधिक क्या होता है?",options:["प्रोटीन","शुगर","वसा","स्टार्च"],answer:0},
{q:"स्पिरुलिना सबसे अच्छे से कहाँ बढ़ता है?",options:["अम्लीय पानी","नमकीन पानी","क्षारीय पानी","ठंडा पानी"],answer:2},
];

const questionBank = language === "hi" ? questionBankHI : questionBankEN;

/* ---------------- STATES ---------------- */

const [questions,setQuestions] = useState<Question[]>([]);
const [step,setStep] = useState(0);
const [selected,setSelected] = useState<number | null>(null);
const [score,setScore] = useState(0);
const [finished,setFinished] = useState(false);
const [showPopup,setShowPopup] = useState(false);
const [streak,setStreak] = useState(0);
const [quizAvailable,setQuizAvailable] = useState(true);

/* ---------------- SHUFFLE ---------------- */

const shuffleQuestions = () => {
return [...questionBank].sort(() => Math.random() - 0.5).slice(0,3);
};

/* ---------------- USE EFFECT ---------------- */

useEffect(()=>{
const lastPlayed = localStorage.getItem("lastPlayed");
const savedStreak = localStorage.getItem("streak");

if(savedStreak){
setStreak(parseInt(savedStreak));
}

const now = new Date().getTime();

if(lastPlayed){
const diff = now - parseInt(lastPlayed);
const hours = diff / (1000 * 60 * 60);
if(hours < 24){
setQuizAvailable(false);
}
}

setQuestions(shuffleQuestions());
},[language]);

/* ---------------- HANDLE NEXT ---------------- */

const handleNext = () => {

let newScore = score;

if(selected === questions[step].answer){
newScore++;
}

setScore(newScore);
setSelected(null);

if(step + 1 < questions.length){
setStep(step + 1);
}else{
setFinished(true);
setShowPopup(true);

const now = new Date().getTime();
localStorage.setItem("lastPlayed", now.toString());

if(quizAvailable){
const newStreak = streak + 1;
setStreak(newStreak);
localStorage.setItem("streak", newStreak.toString());
}
}
};

/* ---------------- UI ---------------- */

return (
<div className="min-h-screen flex flex-col items-center justify-center p-6 space-y-8">

{/* LANGUAGE BUTTONS */}
<div className="flex gap-4">
<button
onClick={()=>setLanguage("en")}
className={`px-4 py-2 rounded ${language==="en"?"bg-green-600 text-white":"bg-gray-200"}`}
>
English
</button>
<button
onClick={()=>setLanguage("hi")}
className={`px-4 py-2 rounded ${language==="hi"?"bg-green-600 text-white":"bg-gray-200"}`}
>
हिंदी
</button>
</div>

{/* SPIRULINA DETAILS */}

<div className="max-w-3xl bg-green-50 p-6 rounded shadow space-y-4">
<h1 className="text-3xl font-bold text-green-700">
{language==="hi"?"स्पिरुलिना के बारे में जानकारी":"Quick Knowing About Spirulina"}
</h1>

<p>
{language==="hi"
?"स्पिरुलिना एक नीला-हरा सूक्ष्म शैवाल है जिसमें 60-70% प्रोटीन, विटामिन, आयरन और एंटीऑक्सीडेंट होते हैं। यह एक सुपरफूड सप्लीमेंट के रूप में उपयोग किया जाता है।"
:"Spirulina is a blue-green microalgae rich in protein (60-70%), vitamins, iron and antioxidants. It is widely used as a superfood supplement."}
</p>

<h2 className="font-semibold text-lg">
{language==="hi"?"उगाने की प्रक्रिया":"Growing Procedure"}
</h2>

<ul className="list-disc ml-6">
<li>{language==="hi"?"pH 8.5-10.5 के बीच क्षारीय पानी":"Maintain alkaline water (pH 8.5-10.5)"}</li>
<li>{language==="hi"?"तापमान 30-35°C रखें":"Temperature between 30-35°C"}</li>
<li>{language==="hi"?"पर्याप्त धूप":"Proper sunlight exposure"}</li>
<li>{language==="hi"?"लगातार पानी की गति":"Continuous water movement"}</li>
<li>{language==="hi"?"3-5 दिन में कटाई करें":"Harvest every 3-5 days"}</li>
</ul>

<h2 className="font-semibold text-lg">
{language==="hi"?"मुख्य कठिनाइयाँ":"Difficulties"}
</h2>

<ul className="list-disc ml-6">
<li>{language==="hi"?"अनचाहे शैवाल से प्रदूषण":"Contamination from unwanted algae"}</li>
<li>{language==="hi"?"pH संतुलन बनाए रखना":"Maintaining proper pH balance"}</li>
<li>{language==="hi"?"तापमान में बदलाव":"Temperature fluctuations"}</li>
<li>{language==="hi"?"पानी के वाष्पीकरण को नियंत्रित करना":"Water evaporation control"}</li>
</ul>
</div>

{/* SURPRISE BANNER */}

{quizAvailable && (
<div className="bg-yellow-200 p-4 rounded shadow text-center font-semibold animate-pulse">
🎁 {language==="hi"?"यह क्विज़ हल करें — सरप्राइज आपका इंतज़ार कर रहा है!":"Solve This Quiz — We Have A Surprise For You!"}
</div>
)}

{/* STREAK BOX */}

<div className="bg-blue-100 p-4 rounded shadow text-center">
<h2 className="font-bold text-lg">🔥 {language==="hi"?"डेली स्ट्रीक":"Daily Streak"}</h2>
<p className="text-2xl font-semibold">{streak} {language==="hi"?"दिन":"Days"}</p>
</div>

{/* QUIZ */}

{quizAvailable ? (

!finished ? (

<div className="w-full max-w-md bg-white p-6 rounded shadow">

<h1 className="text-2xl font-bold mb-6 text-center">
{language==="hi"?"स्पिरुलिना क्विज़":"Spirulina Quiz"}
</h1>

<p className="mb-4 font-semibold">
{questions[step]?.q}
</p>

{questions[step]?.options.map((opt,index)=>(
<button
key={index}
onClick={()=>setSelected(index)}
className={`block w-full mb-2 p-2 border rounded ${
selected===index ? "bg-green-200" : "bg-gray-100"
}`}
>
{opt}
</button>
))}

<button
onClick={handleNext}
disabled={selected===null}
className="mt-4 bg-green-600 text-white px-4 py-2 rounded w-full"
>
{language==="hi"?"अगला":"Next"}
</button>

</div>

) : (

<div className="text-center">
<h2 className="text-xl font-semibold">
{language==="hi"?"आपका स्कोर":"Your Score"}: {score} / {questions.length}
</h2>
</div>

)

) : (

<div className="bg-gray-200 p-6 rounded shadow text-center">
<h2 className="text-xl font-bold">
{language==="hi"?"आज का क्विज़ पूरा हो गया":"Quiz Completed Today"}
</h2>
<p>{language==="hi"?"कल फिर आएं और अपनी स्ट्रीक बढ़ाएं":"Come back tomorrow to continue your streak!"}</p>
</div>

)}

{/* POPUP */}

{showPopup && (
<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
<div className="bg-white p-6 rounded shadow-lg max-w-md text-center relative">

<button
onClick={()=>setShowPopup(false)}
className="absolute top-2 right-2 text-red-500 font-bold"
>
✖
</button>

<h2 className="text-2xl font-bold text-green-600 mb-4">
🎉 {language==="hi"?"बधाई हो!":"Congratulations!"}
</h2>

<p className="mb-4">
{language==="hi"
?"6 महीने की लगातार स्ट्रीक पर आपको कॉइन्स मिलेंगे और 10% सर्विसिंग डिस्काउंट मिलेगा।"
:"Maintain a 6-month streak and earn coins with 10% servicing discount."}
</p>

<p>
{language==="hi"
?"दोस्त को रेफर करें और यदि वह खरीदारी करता है तो आपको 1 महीने का डैशबोर्ड सब्सक्रिप्शन और एक बार की फ्री सर्विसिंग मिलेगी।"
:"Refer a friend and get 1 Month Dashboard Subscription + One Time Servicing FREE."}
</p>

</div>
</div>
)}

</div>
);
}