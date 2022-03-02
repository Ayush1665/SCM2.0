Const quizDB=[
    {
        question:"Q1: From the late 19th century a dust coloured light weight cotton fabric called———————was used by the Indian Army during the British Raj.",
        a:"Silk",
        b:"Poplin",
        c:"Polyster",
        d:"Khaki",
        ans:"ans4"
    
    },
    {
      question:"Q2:Who is Present CEO of Apple?",
      a:"Steve Jobs",
      b:"Tim Cook",
      c:"Tony Chen",
      d:"Pete Lau",
      ans:"ans2"
    },
    {
    question:Q3:"which is the oldest brand of laptop in the world",
    a:"Dell",
    b:"HP",
    c:"Toshiba",
    d:"Apple",
    ans:"ans3"
    },
    {  
    question:Q4:"which is the oldest brand of laptop in the world",
    a:"Dell",
    b:"HP",
    c:"Toshiba",
    d:"Apple",
    ans:"ans3"
    }
    {
    question:Q5:"which is the oldest brand of laptop in the world",
    a:"Dell",
    b:"HP",
    c:"Toshiba",
    d:"Apple",
    ans:"ans3"
    }
];
const question=document.querySelector('.question');
const option1=document.querySelector('#option1');
const option2=document.querySelector('#option2');
const option3=document.querySelector('#option3');
const option4=document.querySelector('#option4');
const submit=document.querySelector('#submit');

let questionCount = 0;
const loadQuestion = ()  => {

    const questionList= quizDB[questionCount];

    question.innerText = questionList.question; 

    option1.innerText= questionList.a;
    option2.innerText= questionList.b;
    option3.innerText= questionList.c;
    option4.innerText= questionList.d;
}