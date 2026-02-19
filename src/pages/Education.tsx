import { useState } from "react";

type Question = {
  q: string;
  options: string[];
  answer: number;
};

export default function Education() {

const questionBank: Question[] = [
{q:"Ideal pH range?",options:["5-6","8.5-10.5","3-4","12+"],answer:1},
{q:"Spirulina is?",options:["Algae","Fungus","Plant","Mineral"],answer:0},
{q:"Best temperature?",options:["10°C","30-35°C","50°C","5°C"],answer:1}
];

const [step,setStep] = useState(0);
const [selected,setSelected] = useState<number | null>(null);
const [score,setScore] = useState(0);
const [finished,setFinished] = useState(false);

const handleNext = () => {

let newScore = score;

if(selected === questionBank[step].answer){
newScore++;
}

setScore(newScore);
setSelected(null);

if(step + 1 < questionBank.length){
setStep(step + 1);
}else{
setFinished(true);
}
};

return (
<div className="min-h-screen flex flex-col items-center justify-center p-6">

<h1 className="text-2xl font-bold mb-6">
Spirulina Quiz
</h1>

{!finished ? (

<div className="w-full max-w-md bg-white p-6 rounded shadow">

<p className="mb-4 font-semibold">
{questionBank[step].q}
</p>

{questionBank[step].options.map((opt,index)=>(
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
Next
</button>

</div>

) : (

<div className="text-center">
<h2 className="text-xl font-semibold">
Your Score: {score} / {questionBank.length}
</h2>
</div>

)}

</div>
);
}
