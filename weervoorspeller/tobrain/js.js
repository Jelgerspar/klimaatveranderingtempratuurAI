//{ input: { d: 0.5161290322580645, m: 0.08333333333333333,j:0.01905}, output: { gemTemp: 0, maxTemp:0, minTemp:0, zonUur:0.15, zonduur:0.46, luchtVocht:0.65} },
// 260,19010101,     ,     ,     ,     ,     ,     ,     ,     ,     ,  -49,  -65,     ,  -24,     ,     ,     ,   28,   36,     ,     ,     ,     ,     ,     ,     ,     ,     ,     ,     ,     ,     ,     ,     ,   66,     ,     ,     ,     ,     
// 260,19010102,     ,     ,     ,     ,     ,     ,     ,     ,     ,  -18,  -33,     ,  -14,     ,     ,     ,    0,    0,     ,     ,     ,     ,     ,     ,     ,     ,     ,     ,     ,     ,     ,     ,     ,   86,     ,     ,     ,     ,     
function start(){
	starting=prompt("input?");
	starting=starting.replace(/ /g,'')
	starting = starting.split(',')
	month = prompt("welke maand? (in getal)")
	jaar = prompt("welk jaar? in getal.")
	jaar=jaar/100000
	month=month/12;



	for (a = 11; a < starting.length; a+=40) {
		gemTempArray.push(starting[a])
	}
	for (ak = 0; ak < gemTempArray.length; ak++) {
		var hoor=gemTempArray[ak]
		if(hoor.charAt(0)=="-"){
			gemTempArray2.push(0)
		}
		else{
			 gemTempArray2.push(hoor/1000)
		}
	}

	for (b = 14; b < starting.length; b+=40) {
		maxTempArray.push(starting[b])
	}
	for (bk = 0; bk < maxTempArray.length; bk++) {
		var hoor=maxTempArray[bk]
		if(hoor.charAt(0)=="-"){
			maxTempArray2.push(0)
		}
		else{
			 maxTempArray2.push(hoor/1000)
		}
	}


	for (ew = 12; ew < starting.length; ew+=40) {
		minTempArray.push(starting[ew])
	}
	for (bke = 0; bke < minTempArray.length; bke++) {
		var hoor=minTempArray[bke]
		if(hoor.charAt(0)=="-"){
			minTempArray2.push(0)
		}
		else{
			 minTempArray2.push(hoor/1000)
		}
	}






	for (i = 1; i < starting.length; i+=40) {
		dateArray.push(starting[i])
	}for (ik = 0; ik < dateArray.length; ik++) {
		dateArray2.push(dateArray[ik].slice(6, 8))
	}if(ik==dateArray2.length){
	for (ikk = 0; ikk < dateArray2.length; ikk++) {
		dateArray3.push(dateArray2[ikk]/31)
	}}


	var ewk;
	var ewke;
	for (ewk = 18; ewk < starting.length; ewk+=40) {
		zonUurArray.push(starting[ewk])
	}
	for (ewke = 0; ewke < zonUurArray.length; ewke++) {
		var hoor=zonUurArray[ewke]
		if(hoor.charAt(0)==0){
			zonUurArray2.push(0)
		}
		else{
			 zonUurArray2.push((hoor/10)/24)
		}
	}




	for (o=0; o < dateArray3.length; o++) {
	result= result+"input:{d:"+dateArray3[o]+",m:"+month+",j:"+jaar+"}, output:{gemTemp:"+gemTempArray2[o]+",maxTemp:"+maxTempArray2[o]+",minTemp:"+minTempArray2[o]+",zonUur:"+zonUurArray2[o]+"},";
	document.getElementById("result").innerHTML = result;
	}

console.log(starting)

}