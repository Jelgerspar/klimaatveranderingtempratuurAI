function dagGet(){
 var day = document.getElementById("dagg").value;
  dagje = day/31;
 document.getElementById("dagNum").innerHTML = "dag "+dagje;

}

function maandGet(){
   var maandjes = document.getElementById("maandd").value;
   maandje = maandjes/12;

    document.getElementById("maandNum").innerHTML = "maand "+maandje;
}


function go(){
  startTraining(dagje,maandje,jaartje)
}

function jaarGet(){
     var jaartjes = document.getElementById("jaarr").value;
   jaartje = jaartjes/100000;

    document.getElementById("jaarNum").innerHTML = "jaar "+jaartje;
}


