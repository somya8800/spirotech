import { useState, useEffect } from "react";
import jsPDF from "jspdf";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Education = () => {

/* ================= ARTICLES ================= */
const articles = [
{
title:"What is Spirulina?",
img:"/what.png",
short:"Protein rich blue-green algae used as a future superfood.",
link:"https://www.medicalnewstoday.com/articles/324681"
},
{
title:"Health Benefits",
img:"/health.png",
short:"Boosts immunity, improves energy and supports heart health.",
link:"https://www.healthline.com/nutrition/10-proven-benefits-of-spirulina"
},
{
title:"Environmental Impact",
img:"/environment.png",
short:"Eco-friendly cultivation using very little water.",
link:"https://www.fao.org/fao-stories/article/en/c/1630331/"
}
];

/* ================= PIE DATA ================= */
const usageData=[
{name:"India",value:30},
{name:"USA",value:20},
{name:"Japan",value:18},
{name:"Europe",value:17},
{name:"Others",value:15}
];

const COLORS=["#059669","#10b981","#34d399","#6ee7b7","#a7f3d0"];

/* ================= QUIZ ================= */
const questionBank=[
{q:"Ideal pH range?",options:["5-6","8.5-10.5","3-4","12+"],answer:1},
{q:"Spirulina is?",options:["Algae","Fungus","Plant","Mineral"],answer:0},
{q:"Best temperature?",options:["10°C","30-35°C","50°C","5°C"],answer:1},
{q:"Main benefit?",options:["Protein","Sugar","Fat","Salt"],answer:0}
];

const [questions,setQuestions]=useState([]);
const [step,setStep]=useState(0);
const [selected,setSelected]=useState(null);
const [score,setScore]=useState(0);
const [level,setLevel]=useState("");
const [progress,setProgress]=useState(0);
const [showCertificate,setShowCertificate]=useState(false);
const [verifyID,setVerifyID]=useState("");

useEffect(()=>{
const shuffled=[...questionBank].sort(()=>Math.random()-0.5).slice(0,3);
setQuestions(shuffled);
},[]);

if(!questions.length) return null;

/* ================= NEXT ================= */
const handleNext=()=>{
let newScore=score;
if(selected===questions[step].answer) newScore++;

setScore(newScore);
setSelected(null);
setProgress(((step+1)/questions.length)*100);

if(step+1<questions.length){
setStep(step+1);
}else{

let lvl="Beginner 🌱";
if(newScore===2) lvl="Advanced Grower 🌿";
if(newScore===3) lvl="Spirulina Expert 🧪";

setLevel(lvl);
setVerifyID("SPIRO-"+Math.floor(Math.random()*999999));
setShowCertificate(true);
}
};

/* ================= CERTIFICATE ================= */
const downloadCertificate=()=>{

const doc=new jsPDF("landscape");

/* background */
doc.setFillColor(8,70,60);
doc.rect(0,0,297,210,"F");

/* white card */
doc.setFillColor(255,255,255);
doc.roundedRect(12,12,273,186,4,4,"F");

/* gold corners */
doc.setFillColor(212,175,55);
doc.triangle(12,12,110,12,12,65,"F");
doc.triangle(285,198,185,198,285,140,"F");

/* border */
doc.setDrawColor(212,175,55);
doc.setLineWidth(1.5);
doc.rect(18,18,261,174);

/* title */
doc.setFont("times","bold");
doc.setFontSize(36);
doc.setTextColor(20,90,70);
doc.text("CERTIFICATE",148,55,{align:"center"});
doc.setFontSize(18);
doc.text("OF APPRECIATION",148,70,{align:"center"});

/* name */
doc.setFont("courier","bold");
doc.setFontSize(30);
doc.setTextColor(0,130,100);
doc.text("Spirulina Learner",148,100,{align:"center"});

/* level */
doc.setFontSize(18);
doc.text(`Level Achieved: ${level}`,148,120,{align:"center"});

/* description */
doc.setFont("helvetica","normal");
doc.setFontSize(14);
doc.setTextColor(80,80,80);
doc.text(
"Successfully completed Spirotech Spirulina Education Program.",
148,138,
{align:"center",maxWidth:220}
);

/* verification */
doc.setTextColor(0,120,90);
doc.text(`Verification ID : ${verifyID}`,148,185,{align:"center"});

doc.save("Spirotech_Certificate.pdf");
};

/* ================= UI ================= */
return(
<div className="bg-gradient-to-br from-emerald-50 via-white to-teal-50 min-h-screen">

{/* ===== ARTICLES ===== */}
<section className="max-w-7xl mx-auto px-6 md:px-20 py-20">
<h2 className="text-3xl font-bold text-center text-emerald-800 mb-12">
📚 Spirulina Articles
</h2>

<div className="grid md:grid-cols-3 gap-8">
{articles.map((a,i)=>(
<div key={i}
className="bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 transition">

<img src={a.img} className="h-48 w-full object-cover"/>

<div className="p-6">
<h3 className="font-bold text-lg mb-2">{a.title}</h3>
<p className="text-gray-600">{a.short}</p>

<a
href={a.link}
target="_blank"
rel="noopener noreferrer"
className="inline-block text-emerald-600 mt-3 font-semibold hover:underline">
Read More →
</a>

</div>
</div>
))}
</div>
</section>

{/* ===== PIE CHART ===== */}
<section className="text-center pb-20">
<h2 className="text-3xl font-bold text-emerald-800 mb-6">
🌍 Global Spirulina Usage
</h2>

<div className="h-80">
<ResponsiveContainer>
<PieChart>
<Pie data={usageData} dataKey="value" outerRadius={110}>
{usageData.map((_,i)=>(
<Cell key={i} fill={COLORS[i]}/>
))}
</Pie>
<Tooltip/>
<Legend/>
</PieChart>
</ResponsiveContainer>
</div>
</section>

{/* ===== QUIZ ===== */}
<section className="text-center pb-24 px-6">

<h2 className="text-4xl font-bold text-emerald-800 mb-6">
🧠 Spirulina Quiz
</h2>

<div className="max-w-xl mx-auto bg-gray-200 rounded-full h-3 mb-8">
<div style={{width:`${progress}%`}}
className="bg-emerald-500 h-3 rounded-full"/>
</div>

<div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-xl">
<h3 className="text-xl font-semibold mb-6">
{questions[step].q}
</h3>

{questions[step].options.map((opt,i)=>(
<button key={i}
onClick={()=>setSelected(i)}
className={`block w-full mb-3 p-3 rounded-lg border
${selected===i?"bg-emerald-500 text-white":"hover:bg-emerald-50"}`}>
{opt}
</button>
))}

<button
onClick={handleNext}
disabled={selected===null}
className="mt-6 bg-emerald-600 text-white px-8 py-3 rounded-xl">
Next
</button>
</div>
</section>

{/* ===== CERTIFICATE POPUP ===== */}
{showCertificate&&(
<div className="fixed inset-0 bg-black/60 flex items-center justify-center">
<div className="bg-white p-10 rounded-2xl text-center relative max-w-lg">

<button onClick={()=>window.location.reload()}
className="absolute top-3 right-3">✕</button>

<h2 className="text-3xl font-bold text-emerald-700">
🎉 Congratulations
</h2>

<p className="mt-4">{level}</p>

<div className="bg-emerald-50 p-4 mt-4 rounded">
NFT Verification ID:<br/>
<b>{verifyID}</b>
</div>

<button
onClick={downloadCertificate}
className="mt-6 bg-emerald-600 text-white px-8 py-3 rounded-xl">
Download Certificate
</button>

</div>
</div>
)}

</div>
);
};

export default Education;
