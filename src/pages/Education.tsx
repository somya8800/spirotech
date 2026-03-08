import { useState, useEffect } from "react";

type Question = {
q: string;
options: string[];
answer: number;
};

export default function Education(){

const [language,setLanguage] = useState<"en"|"hi">("en");

const questionBankEN: Question[] = [
{q:"Ideal pH range for Spirulina growth?",options:["5-6","8.5-10.5","3-4","12+"],answer:1},
{q:"Spirulina is scientifically classified as?",options:["Algae","Fungus","Plant","Mineral"],answer:0},
{q:"Best temperature for cultivation?",options:["10°C","30-35°C","50°C","5°C"],answer:1},
];

const questionBankHI: Question[] = [
{q:"स्पिरुलिना के विकास के लिए आदर्श pH रेंज क्या है?",options:["5-6","8.5-10.5","3-4","12+"],answer:1},
{q:"स्पिरुलिना वैज्ञानिक रूप से क्या है?",options:["शैवाल","फंगस","पौधा","खनिज"],answer:0},
{q:"खेती के लिए सबसे अच्छा तापमान?",options:["10°C","30-35°C","50°C","5°C"],answer:1},
];

const questionBank = language==="hi"?questionBankHI:questionBankEN;

const [questions,setQuestions] = useState<Question[]>([]);
const [step,setStep] = useState(0);
const [selected,setSelected] = useState<number|null>(null);
const [score,setScore] = useState(0);
const [finished,setFinished] = useState(false);

useEffect(()=>{
setQuestions([...questionBank].sort(()=>Math.random()-0.5).slice(0,3));
},[language]);

const handleNext=()=>{

if(selected===questions[step].answer){
setScore(score+1);
}

setSelected(null);

if(step+1<questions.length){
setStep(step+1);
}else{
setFinished(true);
}

};

/* UI */

return(

<div className="min-h-screen bg-gray-50 flex flex-col items-center gap-16 p-10">


{/* LANGUAGE */}

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



{/* HERO SECTION */}

{/* HERO SECTION */}

<div className="relative max-w-6xl grid md:grid-cols-2 gap-12 items-center">

{/* LEFT CONTENT */}

<div className="space-y-6">

{/* BADGE */}

<div className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-semibold">
🌿 Future Superfood
</div>

{/* HEADING */}

<h1 className="text-5xl font-bold leading-tight">

{language==="hi"
? <>स्पिरुलिना <span className="text-green-600">पोषण का भविष्य</span></>
: <>Spirulina <span className="text-green-600">Nutrition of the Future</span></>
}

</h1>

{/* DESCRIPTION */}

<p className="text-gray-600 text-lg">

{language==="hi"
?"स्पिरुलिना एक शक्तिशाली माइक्रोएल्गी है जिसमें 60-70% प्रोटीन, विटामिन और एंटीऑक्सीडेंट होते हैं। यह आने वाले समय का सुपरफूड माना जाता है।"
:"Spirulina is a powerful microalgae packed with protein, vitamins and antioxidants. It is considered one of the most sustainable superfoods."}

</p>

{/* MINI STATS */}

<div className="flex gap-6">

<div className="bg-white shadow-md px-4 py-3 rounded-lg text-center">
<p className="text-green-600 font-bold text-xl">70%</p>
<p className="text-xs text-gray-500">Protein</p>
</div>

<div className="bg-white shadow-md px-4 py-3 rounded-lg text-center">
<p className="text-green-600 font-bold text-xl">3-5</p>
<p className="text-xs text-gray-500">Day Harvest</p>
</div>

<div className="bg-white shadow-md px-4 py-3 rounded-lg text-center">
<p className="text-green-600 font-bold text-xl">Low</p>
<p className="text-xs text-gray-500">Water Use</p>
</div>

</div>

</div>


{/* RIGHT IMAGE */}

{/* RIGHT IMAGE */}

<div className="relative w-full">

<div className="absolute -top-10 -left-10 w-72 h-72 bg-green-200 rounded-full blur-3xl opacity-40"></div>

<img
src="public\img1.jpg"
className="w-full max-w-[520px] aspect-[4/3] object-cover rounded-3xl shadow-xl hover:scale-105 transition"
/>

</div>

</div>



{/* FEATURE CARDS */}

<div className="grid md:grid-cols-3 gap-8 max-w-6xl">

<div className="bg-white p-6 rounded-xl shadow hover:-translate-y-2 transition">

<img src="public\img2.jpg" className="rounded mb-4"/>

<h3 className="font-bold text-green-700 text-lg">
High Protein
</h3>

<p className="text-gray-600">
70% protein rich superfood
</p>

</div>


<div className="bg-white p-6 rounded-xl shadow hover:-translate-y-2 transition">

<img src="public\img5.jpg" className="rounded mb-4"/>

<h3 className="font-bold text-green-700 text-lg">
Sustainable
</h3>

<p className="text-gray-600">
Needs very little water and land
</p>

</div>


<div className="bg-white p-6 rounded-xl shadow hover:-translate-y-2 transition">

<img src="public\img4.jpg" className="rounded mb-4"/>

<h3 className="font-bold text-green-700 text-lg">
Health Benefits
</h3>

<p className="text-gray-600">
Rich in antioxidants and vitamins
</p>

</div>

</div>



{/* ZIG ZAG SECTION */}

<div className="max-w-6xl space-y-16">

<div className="grid md:grid-cols-2 gap-10 items-center">

<img src="public\img6.jpg" className="rounded-xl shadow"/>

<div>

<h2 className="text-2xl font-bold text-green-700 mb-3">
Growing Process
</h2>

<p className="text-gray-600">
Maintain alkaline water, good sunlight and proper temperature for cultivation.
</p>

</div>

</div>


<div className="grid md:grid-cols-2 gap-10 items-center">

<div>

<h2 className="text-2xl font-bold text-green-700 mb-3">
Harvesting
</h2>

<p className="text-gray-600">
Spirulina can be harvested every 3-5 days.
</p>

</div>

<img src="public\img7.jpg" className="rounded-xl shadow"/>

</div>

</div>



{/* IMAGE GALLERY */}

<div className="max-w-6xl">

<h2 className="text-3xl font-bold text-center text-green-700 mb-8">
Spirulina Gallery
</h2>

<div className="grid md:grid-cols-4 gap-4">

<img src="public\img8.jpg" className="rounded hover:scale-105 transition"/>

<img src="public\img9.jpg" className="rounded hover:scale-105 transition"/>

<img src="public\img10.jpg" className="rounded hover:scale-105 transition"/>

<img src="public\img11.jpg" className="rounded hover:scale-105 transition"/>

</div>

</div>



{/* QUIZ */}

{/* QUIZ */}

<div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 space-y-6">

{/* HEADER */}

<div className="text-center">

<h2 className="text-2xl font-bold text-green-700">
🌿 Spirulina Quiz
</h2>

<p className="text-gray-500 text-sm">
Question {step+1} / {questions.length}
</p>

</div>


{/* PROGRESS BAR */}

<div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">

<div
className="bg-green-500 h-2 transition-all duration-500"
style={{width:`${((step+1)/questions.length)*100}%`}}
/>

</div>


{/* QUESTION */}

{!finished ? (

<>

<p className="font-semibold text-gray-700 text-lg">
{questions[step]?.q}
</p>


{/* OPTIONS */}

<div className="space-y-3">

{questions[step]?.options.map((opt,index)=>(

<button
key={index}
onClick={()=>setSelected(index)}
className={`w-full text-left p-3 rounded-lg transition-all duration-200 border

${selected===index
?"bg-green-100 border-green-400 scale-[1.02]"
:"bg-gray-50 border-gray-200 hover:bg-green-50 hover:border-green-300"
}

`}
>

{opt}

</button>

))}

</div>


{/* NEXT BUTTON */}

<button
onClick={handleNext}
disabled={selected===null}
className="w-full mt-2 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition"
>

Next →

</button>

</>

) : (

<div className="text-center space-y-3">

<h2 className="text-2xl font-bold text-green-700">
🎉 Quiz Complete
</h2>

<p className="text-xl">
Score {score} / {questions.length}
</p>

</div>

)}

</div>


</div>

);

}