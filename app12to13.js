document.write(`<h1>Question of class of Array topic</h1> <br><br><br>`)
var studentnames=['arshyan','fabiha','sarim']
var scoreofarshyan=+prompt('enter the score of arshyan')
var scoreoffabiha=+prompt('enter the score of fabiha')
var scoreofsarim=+prompt('enter the score of sarim')
var scoreofstudents=[]
var totalscore=500
scoreofstudents[0]=scoreofarshyan
scoreofstudents[1]=scoreoffabiha
scoreofstudents[2]=scoreofsarim
var perofarshyan=(scoreofarshyan/totalscore)*100
var peroffabiha=(scoreoffabiha/totalscore)*100
var perofsarim=(scoreofsarim/totalscore)*100
document.write(`
score of ${studentnames[0]} is ${scoreofstudents[0]} and Percentage is ${perofarshyan}% <br>
score of ${studentnames[1]} is ${scoreofstudents[1]} and Percentage is ${peroffabiha}% <br>
score of ${studentnames[2]} is ${scoreofstudents[2]} and Percentage is ${perofsarim}% <br>`)

//Q=1

document.write(`<h1>Q=1</h1><br>`);
var char=prompt('please enter any character like number or alphabet')
var char1=char.charCodeAt() //for conversion into ascii code//
if(char1>=65 && char1<=90){document.write(`"${char}": its upper case letter`)}
else if(char1>=97 && char1<=122){document.write(`"${char}": its lower case letter`)}
else if(char1>=48 && char1<=57){document.write(`"${char}": its a number`)}
else{alert('its not a number or alphabet')}

//Q=2
document.write(`<h1>Q=2</h1><br>`);
var firstinteger=+prompt('enter 1st integer')
var secondinteger=+prompt('enter 2nd integer')
if(firstinteger>secondinteger){document.write(`the larger intiger is 1st one : ${firstinteger}.<br>`)}
else if(firstinteger<secondinteger){document.write(`the larger intiger is 2nd one : ${secondinteger}.<br>`)}
else if(firstinteger===secondinteger){document.write(`Both integers are equal.<br>`)}

//Q=3
document.write(`<h1>Q=3</h1><br>`);
var num=+prompt('enter any number')
if(num===0){document.write(`its a zero`)}
else if(num>0){document.write(`"${num}": its a positive number`)}
else if(num<0){document.write(`"${num}":  its a negative number`)}
else{document.write(`"${num}":  its not a number`)}

//Q=4
document.write(`<h1>Q=4</h1><br>`);
var singleletter = prompt('enter any single alphabetic letter')
if (singleletter === 'a' || singleletter === 'A' || singleletter === 'e' ||
     singleletter === 'E' || singleletter === 'i' || singleletter === 'I' ||
      singleletter === 'o' || singleletter === 'O' || singleletter === 'u' || 
      singleletter === 'U') { document.write(`"${singleletter}" is a vowel.<br>`) }
else { document.write(`"${singleletter}" is not a vowel.<br>`) }

//Q=5
document.write(`<h1>Q=5</h1><br>"Q5 is working on alert massage".`);
var password=prompt('please enter a password')
var passlogin=prompt('enter password for login')
if(passlogin===""){alert('please enter your password for login')}
else if(passlogin===password){alert('correct! the password you enter matches the original password')}
else{alert('incorrect password')}

//Q=6
document.write(`<h1>Q=6</h1><br>var greeting;<br>
var hour = 13;<br>
if (hour < 18){greeting = "Good day"}<br>
else {greeting = "Good evening"};`);
var greeting;
var hour = 13;
if (hour < 18){greeting = "Good day"}
else {greeting = "Good evening"};

//Q=7
document.write(`<h1>Q=7</h1><br>`);
var time=+prompt('enter the time in 24 hours format')
if(time>=0 && time<12){document.write(`"GOOD MORNING"`)}
else if(time>=12 && time<17){document.write(`"GOOD AFTERNOON"`)}
else if(time>=17 && time<21){document.write(`"GOOD EVENING"`)}
else if(time>=21 && time<=23.59){document.write(`"GOOD NIGHT"`)}