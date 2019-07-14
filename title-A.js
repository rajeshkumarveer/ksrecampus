
$(document).ready(function(){
    function toggleAnswer1() {$('#answer1').fadeToggle();}
    function toggleAnswer2() {$('#answer2').fadeToggle();}
    function toggleAnswer3() {$('#answer3').fadeToggle();}
    function toggleAnswer4() {$('#answer4').fadeToggle();}
    $('#answer1').hide();
    $('#answer2').hide();
    $('#answer3').hide();
    $('#answer4').hide();
    $('#question1').click(toggleAnswer1);
    $('#question2').click(toggleAnswer2);
    $('#question3').click(toggleAnswer3);
    $('#question4').click(toggleAnswer4);
  });
  
    
    