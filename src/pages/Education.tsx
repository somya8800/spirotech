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

/* ================= TYPES ================= */

type Question = {
  q: string;
  options: string[];
  answer: number;
};

const Education = () => {

/* ================= ARTICLES ================= */
const articles = [
{
title:"What is Spirulina?",
img:"/what.png",
short:"Protein rich blue-green algae used as a future superfood.",
link:"https://pmc.ncbi.nlm.nih.gov/articles/PMC3136577/"
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
link:"https://www.sciencedirect.com/topics/agricultural-and-biological-sciences/spirulina"
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
const questionBank: Question[]=[
{q:"Ideal pH range?",options:["5-6","8.5-10.5","3-4","12+"],answer:1},
{q:"Spirulina is?",options:["Algae","Fungus","Plant","Mineral"],answer:0},
{q:"Best temperature?",options:["10°C","30-35°C","50°C","5°C"],answer:1},
{q:"Main benefit?",options:["Protein","Sugar","Fat","Salt"],answer:0}
];

/* ✅ FIXED TYPE HERE */
const [questions,setQuestions]=useState<Question[]>([]);
const [step,setStep]=useState<number>(0);
const [selected,setSelected]=useState<number | null>(null);
const [score,setScore]=useState<number>(0);
const [level,setLevel]=useState<string>("");
const [progress,setProgress]=useState<number>(0);
const [showCertificate,setShowCertificate]=useState<boolean>(false);
const [verifyID,setVerifyID]=useState<string>("");

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

doc.setFillColor(8,70,60);
doc.rect(0,0,297,210,"F");

doc.setFillColor(255,255,255);
doc.roundedRect(12,12,273,186,4,4,"F");

doc.setFillColor(212,175,55);
doc.triangle(12,12,110,12,12,65,"F");
doc.triangle(285,198,185,198,285,140,"F");

doc.setDrawColor(212,175,55);
doc.setLineWidth(1.5);
doc.rect(18,18,261,174);

doc.setFont("times","bold");
doc.setFontSize(36);
doc.setTextColor(20,90,70);
doc.text("CERTIFICATE",148,55,{align:"center"});
doc.setFontSize(18);
doc.text("OF APPRECIATION",148,70,{align:"center"});

doc.setFont("courier","bold");
doc.setFontSize(30);
doc.setTextColor(0,130,100);
doc.text("Spirulina Learner",148,100,{align:"center"});

doc.setFontSize(18);
doc.text(`Level Achieved: ${level}`,148,120,{align:"center"});

doc.setFont("helvetica","normal");
doc.setFontSize(14);
doc.setTextColor(80,80,80);
doc.text(
"Successfully completed Spirotech Spirulina Education Program.",
148,138,
{align:"center",maxWidth:220}
);

doc.setTextColor(0,120,90);
doc.text(`Verification ID : ${verifyID}`,148,185,{align:"center"});

doc.save("Spirotech_Certificate.pdf");
};

/* ================= UI ================= */
return(
<div className="bg-gradient-to-br from-emerald-50 via-white to-teal-50 min-h-screen">

{/* Rest of your UI SAME as before — no changes needed */}

</div>
);
};

export default Education;
