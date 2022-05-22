var quizButton = $('#startQuiz')
var q1 = "What programming language is most commonly used to dynamically change HTML and CSS?"
var timer = $('.timer');
var quizCountDown = timer.text()

var q2 = "In HTML, what is the name of this: &lt;p&gt;?"
var answersq2 = "<br><button class='btn btn-primary' value='a parcel tag' type='submit'>a parcel tag</button>\
<button class='btn btn-primary' value='HTML tagname' type='submit'>HTML tagname</button>\
<button class='btn btn-primary' value='a selector' type='submit'>a selector</button>\
<button class='btn btn-primary' value='an operator' type='submit'>an operator</button>\
"
var q3 = "What is the name of the logical test in Javascript that allows you to test if something is true or false?"

var answersq3 = "<br><button class='btn btn-primary' value='If/Else' type='submit'>If/Else</button>\
<button class='btn btn-primary' value='A logical statement' type='submit'>A logical statement</button>\
<button class='btn btn-primary' value='a for loop' type='submit'>a for loop</button>\
<button class='btn btn-primary' value='a ternary operator' type='submit'>a ternary operator</button>"

var q4 = "What does HTML stand for?"
var answersq4 = "<br><button class='btn btn-primary' value='Hot Textual Maximized language' type='submit'>Hot Textual Maximized language</button>\
<button class='btn btn-primary' value='Highly Technical Magnificent language' type='submit'>Highly Technical Magnificent language</button>\
<button class='btn btn-primary' value='Hypertext Markup language' type='submit'>Hypertext Markup language</button>\
<button class='btn btn-primary' value='Hyperbolic Tactical Markup Language' type='submit'>Hyperbolic Tactical Markup Language</button>"
var score = 0;

quizButton.on("click", function() {
    $('#objective').hide()
    $('#startQuiz').remove()
    timer.text(300);
    startCountDown();
    displayQ1();
    displaybutton1();
    
})
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
  if($(e.target).val() == 'Hypertext Markup Language') {
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


function displayQ1() {
  $('#questionOne').append(q1)

}
