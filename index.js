var readlineSync = require('readline-sync');
 
// Wait for user's response.
var userName = readlineSync.question('May I have your name? ');
console.log("Welcome "+userName);
console.log("Lets Play How well do you Know me");
//question set
var questionSet=[
  {
    q:"Where Do I LIVE?? ",
    a:"Lucknow"
  },
  {
    q:"What is my favourite dish?? ",
    a:"Biryani"
  },
  {
    q:"Have I watched Friends?? ",
    a:"NO"
  },
  {
    q:"Who is my favourite football Player?? ",
    a:"Ronaldo"
  },
  {
    q:"Which football club do I support?? ",
    a:"Real Madrid"
  }
];



//Game Function
var score=0;
function game(question,answer)
{
  var userAnswer=readlineSync.question(question);
  if(answer==userAnswer)
  {
    console.log("Correct answer");
    score=score+1;
    
  }
  else
  {
    console.log("wrong answer");
    
  }
  console.log("current score "+score);
    console.log("*******************");
}
for(var i=0;i<questionSet.length;i++)
{
  game(questionSet[i].q,questionSet[i].a);
}
console.log("YOUR FINAL SCORE "+score);
var highScores=[
  {
    user:"Nischal",
    score:0
  },
  {
    user:"Shubham",
    score:1
  }
];
var flag=true;
for(var i=0;i<highScores.length;i++)
{
  if(score<highScores[i].score)
  {
    flag=false;
  }
}
if(flag==true)
{
  console.log("******************");
  console.log("You have made a high Score");
  highScores.push({
    user:userName,
    score:score
  });
  
}
else
{
  console.log("You have not made a high score");
}
console.log("Checkout top scorers")
for(var i=0;i<highScores.length;i++)
{
    console.log(highScores[i].user+" "+highScores[i].score);
}
