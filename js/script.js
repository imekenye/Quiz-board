var quizResults = function(numOne, numTwo ,numThree, numFour, numFive){
    return numOne + numTwo + numThree + numFour + numFive;


};


$(document).ready(function(){

$("form#quest").submit(function(event){
  var questOne = parseInt($("input:radio[name=quest1]:checked").val());
   if($("input:radio[name=quest1]:checked").length == 0){
     $('#err1').text("Please select one");
             return false;
   }
  var questTwo = parseInt($("input:radio[name=quest2]:checked").val());
    if($("input:radio[name=quest2]:checked").length == 0){
      $('#err2').text("Please select one");
            return false;
  }
  var questThree = parseInt($("input:radio[name=quest3]:checked").val());
    if($("input:radio[name=quest3]:checked").length == 0){
      $('#err3').text("Please select one");
            return false;
  }
  var questFour = parseInt($("input:radio[name=quest4]:checked").val());
    if($("input:radio[name=quest4]:checked").length == 0){
      $('#err4').text("Please select one");
            return false;
  }
  var questFive = parseInt($("input:radio[name=quest5]:checked").val());
    if($("input:radio[name=quest5]:checked").length == 0){
      $('#err5').text("Please select one");
            return false;
  }
  var finalResult = quizResults(questOne, questTwo, questThree, questFour, questFive);

  $("#display").text("Your score is: " + finalResult + " /25");

  event.preventDefault();
  $("#quest").fadeOut();
  $(".board-description").hide();
  $(".displayResult").show();
  $("form").trigger("reset");
});
});