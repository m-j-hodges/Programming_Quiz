var quizButton = $('#startQuiz')
var q1 = "<p>What programming language is most commonly used to dynamically change HTML and CSS?<p>"
var timer = $('.timer');
var quizCountDown = timer.text()

var q2 = "<p>In HTML, what is the name of this: &lt;p&gt;?<p>"
var answersq2 = "<br><button class='btn btn-primary' value='a parcel tag' type='submit'>a parcel tag</button>\
<button class='btn btn-primary' value='HTML tagname' type='submit'>HTML tagname</button>\
<button class='btn btn-primary' value='a selector' type='submit'>a selector</button>\
<button class='btn btn-primary' value='an operator' type='submit'>an operator</button>\
"
var q3 = "<p>What is the name of the logical test in Javascript that allows you to test if something is true or false?<p>"

var answersq3 = "<br><button class='btn btn-primary' value='If/Else' type='submit'>If/Else</button>\
<button class='btn btn-primary' value='A logical statement' type='submit'>A logical statement</button>\
<button class='btn btn-primary' value='a for loop' type='submit'>a for loop</button>\
<button class='btn btn-primary' value='a ternary operator' type='submit'>a ternary operator</button>"

var q4 = "<p>What does HTML stand for?<p>"
var answersq4 = "<br><button class='btn btn-primary' value='Hot Textual Maximized language' type='submit'>Hot Textual Maximized language</button>\
<button class='btn btn-primary' value='Highly Technical Magnificent language' type='submit'>Highly Technical Magnificent language</button>\
<button class='btn btn-primary' value='Hypertext Markup language' type='submit'>Hypertext Markup language</button>\
<button class='btn btn-primary' value='Hyperbolic Tactical Markup Language' type='submit'>Hyperbolic Tactical Markup Language</button>"
var q5 = "<p>What are the three ways to declare a variable in Javascript?<p>"
var answersq5 = "<br><button class='btn btn-primary' value='let, const, var' type='submit'>let, const, var</button>\
<button class='btn btn-primary' value='this, that, set' type='submit'>this, that, set</button>\
<button class='btn btn-primary' value='fix, const, let' type='submit'>fix, const, let</button>\
<button class='btn btn-primary' value='set, var, const' type='submit'>set, var, const</button>"
var q6 = "<p>What does !== mean in Javascript?<p>"
var answersq6 = "<br><button class='btn btn-primary' value='really important' type='submit'>really important</button>\
<button class='btn btn-primary' value='not equal to' type='submit'>not equal to</button>\
<button class='btn btn-primary' value='set equal to' type='submit'>set equal to</button>\
<button class='btn btn-primary' value='force equal to' type='submit'>force equal to</button>"
var q7 = "<p>What method in Javascript is used to iterate over many items in an array?<p>"
var answersq7 = "<br><button class='btn btn-primary' value='for loop' type='submit'>for loop</button>\
<button class='btn btn-primary' value='simple loops' type='submit'>simple loops</button>\
<button class='btn btn-primary' value='ring loops' type='submit'>ring loops</button>\
<button class='btn btn-primary' value='if/else' type='submit'>if/else</button>"
var q8 = "<p>What tag is used in HTML to create a horizontal rule?<p>"
var answersq8 = "<br><button class='btn btn-primary' value='<hr>' type='submit'>&lt;hr&gt;</button>\
<button class='btn btn-primary' value='<horizontal rule>' type='submit'>&lt;horizontal rule&gt;</button>\
<button class='btn btn-primary' value='<rule>' type='submit'>&lt;rule&gt;</button>\
<button class='btn btn-primary' value='<break>' type='submit'>&lt;break&gt;</button>"
var q9 = "<p>What is the parent element to the html tag in Javascript?<p>"
var answersq9 = "<br><button class='btn btn-primary' value='window' type='submit'>window</button>\
<button class='btn btn-primary' value='body' type='submit'>body</button>\
<button class='btn btn-primary' value='document' type='submit'>document</button>\
<button class='btn btn-primary' value='root' type='submit'>root</button>"
var q10 = "<p>_____ is used to style webpages written in HTML.<p>"
var answersq10 = "<br><button class='btn btn-primary' value='Python' type='submit'>Python</button>\
<button class='btn btn-primary' value='HTML' type='submit'>HTML</button>\
<button class='btn btn-primary' value='Cascading Style Sheets' type='submit'>Cascading Style Sheets</button>\
<button class='btn btn-primary' value='Javascript' type='submit'>Javascript</button>"
var score = 0;
var finalScore = 0;


function displayQ1() {
  $('#questionOne').append(q1)
};
quizButton.on("click", function() {
    $('#objective').hide()
    $('#startQuiz').remove()
    timer.text(300);
    startCountDown();
    displayQ1();
    displaybutton1();
    timerTest();
})

function timerTest() {
  if (timer.text() == 0) {
    alert("Sorry, you ran out of time. Please try again.")
  location.reload();
  } else {}; 
};
setInterval(timerTest, 1000)

function startCountDown() {
if (timer !== "timer" || timer !== 0) {
  countDown = $(".timer").text() - 1;
  timer.text(countDown);
}};
setInterval(startCountDown, 1000);

function displaybutton1() {
  var questionOneAnswers = "<br><button class='btn btn-primary' value='CSS' type='submit'>CSS</button>\
  <button class='btn btn-primary' value='HTML' type='submit'>HTML</button>\
  <button class='btn btn-primary' value='Ruby' type='submit'>Ruby</button>\
  <button class='btn btn-primary' value='Javascript' type='submit'>Javascript</button>";
  $('#questionOne').append(questionOneAnswers)
  $('#questionOne').append("<br><button class='btn btn-primary btn-lg btn-block' id='button1'>Next Question</button>");
};

$('#questionOne').on('click', '.btn-primary', function(e) {
  e.preventDefault();
  if($(e.target).text() == 'Javascript') {
    $('#questionOne').remove();
    alert("That's correct, keep up the good work.")
    $('#questionTwo').append(q2);
    $('#questionTwo').append(answersq2);
    score++
  } else {
    alert("oops, that is the wrong answer.")
    $('#questionOne').remove()
    $('#questionTwo').append(q2);
    $('#questionTwo').append(answersq2);

  };

});

$('#questionTwo').on('click', '.btn-primary', function(e) {
  e.preventDefault();
  if($(e.target).text() == 'HTML tagname') {
    $('#questionTwo').remove();
    alert("That's correct, keep up the good work.")
    $('#questionThree').append(q3);
    $('#questionThree').append(answersq3);
    score++
  } else {
    alert("oops, that is the wrong answer.")
    $('#questionTwo').remove()
    $('#questionThree').append(q3);
    $('#questionThree').append(answersq3);
  };

});

$('#questionThree').on('click', '.btn-primary', function(e) {
  e.preventDefault();
  if($(e.target).val() == 'If/Else') {
    $('#questionThree').remove();
    alert("That's correct, keep up the good work.")
    $('#questionFour').append(q4);
    $('#questionFour').append(answersq4);
    score++
  } else {
    alert("oops, that is the wrong answer.")
    $('#questionThree').remove()
    $('#questionFour').append(q4);
    $('#questionFour').append(answersq4);
  };

});

$('#questionFour').on('click', '.btn-primary', function(e) {
  e.preventDefault();
  if($(e.target).val() == 'Hypertext Markup language') {
    $('#questionFour').remove();
    alert("That's correct, keep up the good work.")
    $('#questionFive').append(q5);
    $('#questionFive').append(answersq5);
    score++
  } else {
    alert("oops, that is the wrong answer.")
    $('#questionFour').remove()
    $('#questionFive').append(q5);
    $('#questionFive').append(answersq5);
  };

});

$('#questionFive').on('click', '.btn-primary', function(e) {
  e.preventDefault();
  if($(e.target).val() == 'let, const, var') {
    $('#questionFive').remove();
    alert("That's correct, keep up the good work.")
    $('#questionSix').append(q6);
    $('#questionSix').append(answersq6);
    score++
  } else {
    alert("oops, that is the wrong answer.")
    $('#questionFive').remove();
    $('#questionSix').append(q6);
    $('#questionSix').append(answersq6);
  };

});

$('#questionSix').on('click', '.btn-primary', function(e) {
  e.preventDefault();
  if($(e.target).val() == 'not equal to') {
    $('#questionSix').remove();
    alert("That's correct, keep up the good work.")
    $('#questionSeven').append(q7);
    $('#questionSeven').append(answersq7);
    score++
  } else {
    alert("oops, that is the wrong answer.")
    $('#questionSix').remove();
    $('#questionSeven').append(q7);
    $('#questionSeven').append(answersq7);
  };

});

$('#questionSeven').on('click', '.btn-primary', function(e) {
  e.preventDefault();
  if($(e.target).val() == 'for loop') {
    $('#questionSeven').remove();
    alert("That's correct, keep up the good work.")
    $('#questionEight').append(q8);
    $('#questionEight').append(answersq8);
    score++
  } else {
    alert("oops, that is the wrong answer.")
    $('#questionSeven').remove();
    $('#questionEight').append(q8);
    $('#questionEight').append(answersq8);
  };

});

$('#questionEight').on('click', '.btn-primary', function(e) {
  e.preventDefault();
  if($(e.target).val() == '<hr>') {
    $('#questionEight').remove();
    alert("That's correct, keep up the good work.")
    $('#questionNine').append(q9);
    $('#questionNine').append(answersq9);
    score++
  } else {
    alert("oops, that is the wrong answer.")
    $('#questionEight').remove();
    $('#questionNine').append(q9);
    $('#questionNine').append(answersq9);
  };

});

$('#questionNine').on('click', '.btn-primary', function(e) {
  e.preventDefault();
  if($(e.target).val() == 'document') {
    $('#questionNine').remove();
    alert("That's correct, keep up the good work.")
    $('#questionTen').append(q10);
    $('#questionTen').append(answersq10);
    score++
  } else {
    alert("oops, that is the wrong answer.")
    $('#questionNine').remove();
    $('#questionNine').append(q10);
    $('#questionNine').append(answersq10);
  };

});
$('#questionTen').on('click', '.btn-primary', function(e) {
  e.preventDefault();
  if($(e.target).val() == 'Cascading Style Sheets') {
    
    $('#questionTen').hide();
    alert("That's correct, keep up the good work.")
    score++
    var finalScore = score/10*100
    $('#quiz').append(`<h2>Great job on the quiz. Your final score is ${score}/10 or ${finalScore}%</h2>`);
    $('#quiz').append("<input id='userName' name='userName' type='text'></input><br><br><button class='btn btn-primary' id='saveScore'>Save your score</button>");
  
  } else {
    $('#questionTen').hide();
    alert("Great job on the quiz. Your final score is shown.")
    var finalScore = score/10*100
    $('#quiz').append(`<h2>Great job on the quiz. Your final score is ${score}/10 or ${finalScore}%</h2>`);
    $('#quiz').append("<input id='userName' name='userName' type='text'></input><br><br><button class='btn btn-primary' id='saveScore'>Save your score</button>");
  };

});

$('#quiz').on('click', '#saveScore', function(event) {
  event.preventDefault();
  userName = $('#userName').val();
  localStorage.setItem(userName , score)

});

function allStorage() {
    var archive = [];
    for (var i = 0; i<localStorage.length; i++) {
        archive[i] = localStorage.getItem(localStorage.key(i));
    }
};

function showHighScore() {
  
  $('#mainSection').empty();
  $('#mainSection').append("<h2 id='listHighScores'>Here is a List of saved High scores.</h2><br>\
  <button value='reset' id='resetScores'>Reset Scores</button>");
  var user = []
  var userScore = []
  user1 = localStorage.key(0)
  user2 = localStorage.key(1)
  for (let i = 0; i < localStorage.length; i++) {
    $('#mainSection').append(`<p id='scoresSection'>${localStorage.key(i)}: ${localStorage.getItem(localStorage.key(i))}<p>`)
    
  };
    
    
  
};
$('#mainSection').on('click', '#resetScores', function(e) {
  e.preventDefault();
  if($(e.target).val() == 'reset') {
    localStorage.clear();
    console.log("localstorage was cleared...")
    $('#scoresSection').empty();
      
  } else {};

});


$(".high-score").on('click', function(m) {
  m.preventDefault();
  showHighScore();
  

});
