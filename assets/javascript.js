var quizButton = $('#startQuiz')
var q1 = "What programming language is most commonly used to dynamically change HTML and CSS?"
var timer = $('.timer');
var quizCountDown = timer.text()
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

  } else {
    console.log("that's the wrong answer, please try again.")
  };

});



function displayQ1() {
  $('#questionOne').append(q1)

}
