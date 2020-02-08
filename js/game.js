const numDivs = 30;
const maxHits = 14;
const pobeda  = "НИ ОДНОГО ПРОМАХА! ПРИЗ уже почти ваш!"

let hits = 0;
let firstHitTime = 0;
let Promah=0;
let Promah2=" промахов((";
let Promah3="Вы сделали ";
let Promah4="ПРОМАХИ НЕДОПУСТИМЫ!";
function round() {


$('.target').removeClass('target');


 
  
  let divSelector = randomDivId();
  console.log(divSelector);
  $(divSelector).addClass("target");
   $(divSelector).text(hits + 1);
   

  if (hits===1) 
  { 
    firstHitTime = getTimestamp(); 
  }
  
  if (hits === maxHits) {
    endGame();
  }
}

function endGame() {
  
  $('.game-field').hide();

  let totalPlayedMillis = getTimestamp() - firstHitTime;
   console.log(totalPlayedMillis);
  let totalPlayedSeconds = Number(totalPlayedMillis/1000).toPrecision(3);

if (Promah===0) 
  { 
  // $("#promah-played-non").text(pobeda);
   $("#promah-played-non").html('НИ ОДНОГО ПРОМАХА!<br>ПРИЗ ПОЧТИ ВАШ!<br>');
$("#win-message2").removeClass("d-none");
   
  }
  else {

   $("#promah-played3").text(Promah3);
   $("#promah-played").text(Promah);
  // $("#promah-played2").text(Promah2);
   $("#promah-played2").html('промахов<br>');
   $("#promah-played4").text(Promah4);
 }

  

  $("#total-time-played").text(totalPlayedSeconds);

  

  $("#win-message").removeClass("d-none");
}

function handleClick(event) {
 
  if ($(event.target).hasClass("target")) { 
    hits = hits + 1;
      $('.target').text('');
    round();
  }
  else { $(event.target).addClass('miss'); Promah=Promah+1;$('.target').text('');round();}

}

function init() {

  round();

  $(".game-field").click(handleClick);
  $("#button-reload").click(function() {
    location.reload();
  });
}

$(document).ready(init);
