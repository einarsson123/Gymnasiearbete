var queennumber = 0;
var queenred = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []];
var onecheck = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []];
var numbercheck = [];
var parentav = [];
var last_queen = [];
var fastarray = [];
var rowclash = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var diagonalclash = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var totalclash = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var fitness = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var parentcheck = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var cellcheck = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var j = [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var z = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var cell = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [] , [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [] , [], [], [], [], [], [], [], [], [], [] , [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []];
var cell1 = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [] , [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [] , [], [], [], [], [], [], [], [], [], [] , [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []];
var d = 1;
var parents = 0;
var gtime = 3;
var m = 3;
var antalq = 0;
var redcheck = 1;
var n;
var fitnessgoal;
var fitvalue;
var gts;
var gt0;
var gt1;
var gt2;
var gt3;
var t2;
var t3;
var genanswer;
var getid;
var parlength;
var popcount;
var r;
var r1;
var child;
var par1;
var par2;
var bestfit = 0;
var bestchild;
var slicevärde;
var queen_z = [];
var queen_j = [];
var queen_place;
var mod1;
var mod2;
var onek;
var reminder = [];
var fastq;
var qc = 0;
var ft1;
var ft2;
var ft3;
var ft4;
var poscheck = 0;
var radred = 0;
var queenbort = 0;
var lapscheck = 0;
function generera_shackbräde(){
	n = document.getElementById("n").value;
	for(x = 0; x < n; x++){
		var tr = document.createElement("tr");
		tr.id = x;
		document.getElementById("table").appendChild(tr); //fixar rader i tablet
		for(y = 0; y < n; y++){
			var td = document.createElement("td");
			td.id = (y+(x+1)*n);
			if(((y+x)% 2) == 1){
				td.className = "black";
			}else{
				td.className = "white";
			}
			document.getElementById(x).appendChild(td); //sätter till rutorna till tablet.
			document.getElementById(y+(x+1)*n).addEventListener("click", place_queen); // gör så att om man clickar på en ruta aktiveras en funktion som sätter ut en dam på rutan
		}
	}
	for(x = 0; x < n; x++){
		for( y = n; y < ((parseFloat(n)+1)*(n)); y++){
			queenred[x][y] = 0;
		}
	} // skapar en array för vilka rutor som ska vara röda
	for(x = 0; x <100; x++){
		for(y = 0; y < n; y++){
			var r = Math.floor((Math.random() * n) + 1)
			cell[x][y] = r;
		}
	} // funktionen skapar 100 start individer för genetiska algoritmen
	fitnessgoal = 10;
	for(x = 4; x < n; x++){
		fitnessgoal = fitnessgoal + (x-1);
		//console.log(fitnessgoal);
	} //räknar ut fitnessgoalet för brädet
	/*if(n == 4){
		fitnessgoal = 10;
	}
	if(n == 5){
		fitnessgoal = 13;
	}
	if(n == 6){
		fitnessgoal = 17;
	}
	if(n == 7){
		fitnessgoal = 22;
	}
	if(n == 8){
		fitnessgoal = 28;
	}
	if(n == 9){
		fitnessgoal = 35;
	}*/
	fitvalue = fitnessgoal - parseInt(parseFloat(n)/2); //fitvalue bestämmer vilket värde indviderna måste ha för att kunna bli föräldrar
	console.log(fitnessgoal);
	slicevärde = parseInt(parseFloat(n)/4); //slicevärdet används för att bestämma hur stor del av arrayen för varje individ ska ändras
	console.log(slicevärde);
}
function place_queen(){
	var rd = parseFloat(n) + 1 ;
	var ld = parseFloat(n) - 1;
	var ru = -ld;
	var lu = -rd;
	var rightcheck = 0;
	var leftcheck = 0;
	if(event.currentTarget.style.backgroundColor == "red"){
		console.log("rödruta" + event.currentTarget.id); // om man klickar på en röd ruta
	}else{
		if((numbercheck[queennumber] == 1) || (queennumber == n)){
			for(c = 0; c < n; c++){
				if(numbercheck[c] != 1){
					queennumber = c;
					c = n;
				}
			}
		} //hittar så att om man tar bort två damer på rad så får den nya damen rätt siffra.
		if(event.currentTarget.childElementCount == 0){
			var queen = document.createElement("img");
			queen.alt = "Q";
			queen.src = "blackqueen.png";
			queen.id = queennumber + "queen";
			event.currentTarget.appendChild(queen); //gör så att damen visuellt sätts ut på brädet
			if((parseFloat(event.currentTarget.id)%(parseFloat(n))) == (parseFloat(n) - 1)){
				rightcheck = 1;
			} // kollar om den nått änden på brädet till höger
			if((parseFloat(event.currentTarget.id)%(parseFloat(n))) == 0){
				leftcheck = 1;
			} // kollar om den nått änden på brädet till vänster
			for(x = 1; x < n; x++){
				if((parseFloat(rd) * x + parseFloat(event.currentTarget.id)) < (parseFloat(n) * (parseFloat(n) + 1)) && ((parseFloat(n) -(parseFloat(event.currentTarget.id)%n)) > x)){
					queenred[queennumber][(parseFloat(rd) * x + parseFloat(event.currentTarget.id))] = 1;
				} // sätter rutorna snett ner till höger till röda
				if(((parseFloat(ld) * x + parseFloat(event.currentTarget.id)) < (parseFloat(n) * (parseFloat(n) + 1))) && (parseFloat(event.currentTarget.id)%n >= x)){
					queenred[queennumber][(parseFloat(ld) * x + parseFloat(event.currentTarget.id))] = 1;
				} // sätter rutorna snett ner till vänster till röda
				if(((parseFloat(ru) * x + parseFloat(event.currentTarget.id)) > (parseFloat(n) -1)) && ((parseFloat(n) -(parseFloat(event.currentTarget.id)%n)) > x)){
					queenred[queennumber][(parseFloat(ru) * x + parseFloat(event.currentTarget.id))] = 1;
				} // sätter rutorna snett höger upp till röda
				if((parseFloat(lu) * x + parseFloat(event.currentTarget.id)) > (parseFloat(n) - 1)  && (parseFloat(event.currentTarget.id)%n >= x)){
					queenred[queennumber][(parseFloat(lu) * x + parseFloat(event.currentTarget.id))] = 1;
				} // sätter rutorna snett vänster upp till röda
				if((parseFloat(n) * x + parseFloat(event.currentTarget.id)) < (parseFloat(n) * (parseFloat(n) + 1))){
					queenred[queennumber][(parseFloat(n) * x + parseFloat(event.currentTarget.id))] = 1;
				} // sätter rutorna under damen till röda
				if((parseFloat(event.currentTarget.id) - parseFloat(n) * x) > (parseFloat(n) -1)){
					queenred[queennumber][(parseFloat(event.currentTarget.id) - parseFloat(n) * x)] = 1;
				} //sätter rutorna över direkt över damen till röda
				if(rightcheck == 0){
					queenred[queennumber][(parseFloat(event.currentTarget.id) + 1 * x)] = 1;
				} //sätter rutorna till höger om damen till röda
				if(leftcheck == 0){
					queenred[queennumber][(parseFloat(event.currentTarget.id) - 1 * x)] = 1;
				} // sätter rutorna till vänster om damen till röda
				if(((parseFloat(event.currentTarget.id) + 1 * x)%(parseFloat(n))) == (parseFloat(n) - 1)){
					rightcheck = 1;
				} //kollar om den nått gränsen till höger
				if(((parseFloat(event.currentTarget.id) - 1 * x)%(parseFloat(n))) == 0){
					leftcheck = 1;
				} // kollar om den nått gränsen til vänster
			} // bestämmer vilka rutor som ska vara röda och sätter dess värde till ett i arrayen.
			
			numbercheck[queennumber] = 1; // visar vilka damer som är upptagna
			queennumber++; // ökar värdet till nästa dam
		}else{
			queennumber = parseFloat(event.currentTarget.firstChild.id); // om det redan står en dam på rutan
			numbercheck[queennumber] = 0; // gör så att den dam värdet blir ledigt
			for(a = n; a < ((parseFloat(n) + 1) * parseFloat(n)); a++){
				queenred[parseFloat(event.currentTarget.firstChild.id)][a] = 0; // tar bort vilka rutor den damen ockuperade
			}
			event.currentTarget.removeChild(event.currentTarget.firstChild);  // tar bort damen från brädet
		}
		for(a = n; a < (parseFloat(n) + 1) * parseFloat(n); a++){
			redcheck = 1;
			for(b = 0; b <= n; b++){
				if(queenred[b][a] > 0){
					document.getElementById(a).style.backgroundColor = "red"; // går igenom alla arrayen för varje dam och sätter de rutor som ska vara röda till röda
					redcheck = 0;
				}
			}
			if(redcheck == 1){
				if(parseFloat(n)%2 == 0){ // om shackbrädet har jämnt antal så färgas rutorna på ett visst sätt
					if((parseFloat(a/parseFloat(n))%2) < 1){
						if(parseFloat(a)%2 == 0){ //beror vilken rad rutan är på
							document.getElementById(a).style.backgroundColor = "Peru";
						}else{
							document.getElementById(a).style.backgroundColor = "SaddleBrown";
						}
					}else{
						if(parseFloat(a)%2 == 0){
							document.getElementById(a).style.backgroundColor = "SaddleBrown";
						}else{
							document.getElementById(a).style.backgroundColor = "Peru";
						}
					}
				}else{ // om det är ojämnt n färgas rutan på det här sättet
					if(parseFloat(a)%2 == 0){ //beror inte på rad
					document.getElementById(a).style.backgroundColor = "Peru";
					}else{
					document.getElementById(a).style.backgroundColor = "SaddleBrown";
					}
				}
			}
		}
	}
}
function backtracking_start(){
	var timerb = setInterval(backtracking, 7);
	console.log(timerb);
	m = timerb;
	t2 = performance.now();
}
function backtracking_stop(){
	clearInterval(m);
}
function backtracking(){
	var t0 = performance.now();
	//var n = document.getElementById("n").value;
	//console.log(d * parseFloat(n) + z[d] + j[d]);
	if(/*(document.getElementById(d * parseFloat(n) + z[d] + j[d]).style.backgroundColor == "red") && */((z[d] + j[d]) == (parseFloat(n)))){
		//Om en rad har endast röda rutor tas damen på ovanstående rad bort.
		//console.log(parseFloat(last_queen[d-1]) + "bort");
		document.getElementById(parseFloat(last_queen[d-1])).click();
		j[(d-1)]++; //damen på ovanstående rad ska placeras ett snäpp åt höger
		z[(d-1)] = 0; //resetar så att den sätter ut damen ovanför på rätt ställe.
		j[d] = 0; // resetar variablen så att den nya damens placering checkar alla rutor nedanför.
		z[d] = 0; // -11-
		d=d-2; // eftersom i slutet av programmet görs d++ så måste man ta minus 2 för att den ska gå till ovanstående dam
		//console.log(d+1);
		//console.log(j[d+1]);
		//console.log(z[d+1]);
		//console.log("red2");
	}else if((document.getElementById(d * parseFloat(n) + z[d] + j[d]).style.backgroundColor == "red") && ((z[d] + j[d]) < (parseFloat(n)))){
		z[d]++; //om rutan är röd kollar den om rutan till höger är röd tills den nått radens ände
		//console.log("red1");
		//console.log(z[d] + j[d]);
		d--; // eftersom jag tar d++ 
	}else{
		//alert(x * parseFloat(n) + j[x]);
		//console.log(d*parseFloat(n)+z[d]+j[d]);
		//console.log(z[d] + j[d]);
		document.getElementById(d * parseFloat(n) + z[d] + j[d]).click();
		last_queen[d] = document.getElementById(d * parseFloat(n) + z[d] + j[d]).id;
		if(j[d] < (z[d] + j[d])){
		j[d] = z[d] + j[d]; // gör så att samma position inte testas igen. Gör så att när en ny dam sätts ut att det bara kan placeras nya damer till höger om den på den raden.
		}
	}
	if(d == n){ // om det har placerats n damer på schackbrädet slutar algoritmen
		clearInterval(m);
		t3 = performance.now();
		console.log((t3-t2));
	}
	var t1 = performance.now();
	//console.log((t1 - t0));
	d++;
}
function genetisk_start(){
	var timerg = setInterval(genetisk, 20);
	//console.log(timerg);
	gt0 = performance.now();
	gts = performance.now();
	gtime = timerg;
}
function genetisk_stop(){
	clearInterval(gtime);
}
function genetisk(){
	gt2 = performance.now();
	parents = 0;
	for(x = 0; x < 100; x++){
		for(y = 0; y < n; y++){
			for(z = 1; z <= n; z++){
				if((cell[x][y] == z) && (cellcheck[z] == 1)){
					rowclash[x]++; //bestämmer hur många damer det finns som delar kolumn
				}
				if((cell[x][y] == z) && (cellcheck[z] == 0)){
					cellcheck[z] = 1; // gör så att den raden är upptagen
				}
			}
		}
		cellcheck = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	}
	for(x = 0; x < 100; x++){
		for(y = 0; y < n; y++){
			for(a = (y-1); a > 0; a--){ //kollar raden ovanför om det finns några clashes på diagonalen
				if((cell[x][(y-(y-a))] == ((cell[x][y]) - (y-a))) || (cell[x][(y-(y-a))] == ((cell[x][y]) + (y-a)))){
					diagonalclash[x]++;
				}
			}
			for(b = (y+1); b < n; b++){ //kollar raden nedanför om det finns några clashes på diagonalen
				if((cell[x][b] == ((cell[x][y]) - (b - y))) || (cell[x][b] == ((cell[x][y]) + (b -y)))){
					diagonalclash[x]++;
				}
			}
		}
		totalclash[x] = diagonalclash[x] + rowclash[x];
		fitness[x] = fitnessgoal - totalclash[x]; // bestämmer fitness värdet för individen
	}
	console.log(fitness[0]);
	//hitta de bästa
	for(x = 0; x < 100; x++){
		if(fitness[x] == fitnessgoal){ // om den hittar en lösning 
			clearInterval(gtime); // algoritmen pausas
			console.log(cell[x]); // skriver ut lösningen i consolen
			console.log(x); // vilken plats den hittade lösningen i arrayen
			genanswer = cell[x];
			console.log(gt3-gts); // hur lång tid innan lösningen hittades
			x = 100; // functionen stoppas
			var timergq = setInterval(genetisk_queens, 20); // startar en ny funktion som sätter ut damernas position visuellt på brädet
			//console.log(timergq);
			return;
		}
		if(fitness[x] > bestfit){
			bestfit = fitness[x];
			bestchild = x;
		}
		if(fitness[x] > fitvalue){
			parentav.push(x); // läger till individen i föräldra gruppen
		}else{
			parents++;
			if(parents > 79){ // om det finns för få föräldrar minskar den kraven och gör om processen
				x = 0;
				fitvalue--;
				parents = 0;
				parentav = [];
			}
		}
	}
	parentav.unshift(bestchild); // gör så att den bästa individen placeras längst fram i arrayn
	parlength = parentav.length;
	cell1[0] = cell[bestchild]; // Den individen med högst fitness värde placeras först i array och blir inte utsatt för mutation
	popcount = 0;
	for(x = 0; x < parlength ; x++){
		r1 = Math.floor(Math.random() * (parseFloat(parlength)))
		par1 = cell[parentav[r1]].slice(0,(parseFloat(n)-slicevärde)); // tar bort en del av arrayen
		//hur många barn varje förälder får
		for(y = 0; y < 5; y++){
			if(popcount < 99){
				r = Math.floor(Math.random() * (parseFloat(parlength)))
				while(r == r1){ // gör så att ingen förälder kan para sig med sig själv
					r = Math.floor(Math.random() * (parseFloat(parlength)))
				}
				par2 = cell[parentav[r]].slice(parseFloat(n)-slicevärde); // gör en del som matchar delen som togs bort
				child = par1.concat(par2); //sätter ihop delarna till en hel lösningsförslag
				cell1[(y + ( x * 5) + 1)] = child; //lägger till den i arrayen
				popcount++; // gör så att det bara skapas 99 nya individer
			}
		}
	}
	//Mutation bland individerna
	for(x = 1; x < 100; x++){
		r = Math.floor(Math.random() * 10);
		if(r < 8){
			// 80% chans till mutation
			r = Math.floor((Math.random() * n));
			//console.log(x + " " + r + " " + cell1[0]);
			cell1[x][r] = Math.floor((Math.random() * n) + 1);
			//console.log(x + " " + r + " " + cell1[0]);
			//console.log(x);
		}
	}
	cell = cell1; //uppdaterar arrayn
	for(x = 0; x < 100; x++){ // resetar alla värden till nästa genomgång av funktionen
		rowclash[x] = 0;
		diagonalclash[x] = 0;
		totalclash[x] = 0;
		fitness[x] = 0;
		parentcheck[x] = 0;
	}
	//resetar alla värden till nästa genomgång av funktionen
	bestfit = 0;
	parentav = [];
	cellcheck = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	cell1 = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [] , [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [] , [], [], [], [], [], [], [], [], [], [] , [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []];
	fitvalue++;
	gt3 = performance.now();
	//console.log((gt3 - gt2));
	//console.log(gt3-gt0);
	if((gt3-gt0) > (1000 + (5 *(parseFloat(n))**2))){
		for(x = 0; x <100; x++){
			for(y = 0; y < n; y++){
				var r = Math.floor((Math.random() * n) + 1)
				cell[x][y] = r;
			}
		}
		gt0 = performance.now();
	} // gör så att en ny första generation skapas eftersom processen förädlar den första generation och om den då är "dålig" hittas ingen lösning
}
function genetisk_queens(){
	getid = (((antalq+1) * parseFloat(n)) + genanswer[antalq] - 1); //hittar rätt id på rutan som damen ska placeras på
	console.log(getid);
	document.getElementById(getid).click(); // sätter ut damen genom att simulera ett click
	antalq++;
	if(antalq == n){
		clearInterval(5);
		gt1 = performance.now();
		//console.log((gt1 - gt0));
		var z = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	}
}
function fastbacktrack(){
	ft1 = performance.now();
	ft4 = performance.now();
	for(x = 0; x < (parseFloat(n) * parseFloat(n)); x++){
		fastarray[x] = 0;
		queen_z[x] = 0;
		queen_j[x] = 0;
	}//skapar tomma arrayer
	queen_z[0] = 1; //gör så att den första damen altid placeras ett snäpp åt höger
	for(x = 0; x < (parseFloat(n)); x++){
		queenbort = 0;
		if( parseFloat(n) > 20){
			for(b = 0; b < (parseFloat(n) * parseFloat(n)); b++){
				if(fastarray[b] == 1){
					radred++;
				}
				if(radred == parseFloat(n)){
					queenbort = 1;
				}
				if((b%(parseFloat(n)) == 0) || (fastarray[b] == 0)){
					radred = 0;
				}
			}//funktion som kollar om det finns en rad som har inga lediga rutor
		}
		queen_place = (x * parseFloat(n)) + queen_z[x] + queen_j[x];
		//console.log(queen_place);
		//if(poscheck == 1){
			//console.log("poscheck");
		//}
		mod1 = queen_place%parseFloat(n);
		if((fastarray[queen_place] == 0) && (poscheck == 0)){	//kollar så att platsen är ledig och inte har precis testats
			//console.log("place");
			fastarray[queen_place] = 8; // en åtta representerar en dam i arrayn
			reminder[x] = queen_place; // gör så att damernas position sparas i array om de ska tas bort
			queen_z[x] = queen_j[x] + queen_z[x]; // gör så att ingen positon testas igen
			for(y = 1; y <= mod1; y++){
				onecheck[x][(queen_place - y)] = 1;
			}
			mod2 = parseFloat(n) - mod1;
			for(y = 1; y < mod2; y++){
				onecheck[x][(queen_place + y)] = 1;
			}
			for(y = 0; y < x; y++){
				onecheck[x][(y * parseFloat(n) + mod1)] = 1;
				if(y < mod1){
				onecheck[x][(queen_place - (y + 1)*(parseFloat(n) + 1))] = 1;
				}
				if((y + mod1) < (parseFloat(n) - 1)){
				onecheck[x][(queen_place - (y + 1)*(parseFloat(n) - 1))] = 1;
				}
			}
			for(y = (parseFloat(n) - 1); y > x; y--){
				onecheck[x][(y * parseFloat(n) + mod1)] = 1;
				if((parseFloat(n) - y) <= mod1){
				onecheck[x][(queen_place + (parseFloat(n) - y) *(parseFloat(n) - 1))] = 1;
				}
				if((parseFloat(n) - y + mod1) <= (parseFloat(n) - 1)){
				onecheck[x][(queen_place + (parseFloat(n) - y) *(parseFloat(n) + 1))] = 1;
				}
			} //funktioner som sätter ettor i arrayn på de rutorn damen ockuperar.
		}else if((mod1 == parseFloat(n) - 1) || (queenbort == 1)){
			poscheck = 0;
			//console.log("bort " + reminder[x-1]);
			for(y= 0; y < (parseFloat(n) * parseFloat(n)); y++){
				if(onecheck[x-1][y] == 1){
					fastarray[y] = 0;
				}
			} //tar bort de rutorn just den damen ockuperar
			onecheck[x-1] = []; // resetar arrayn som visar vilka rutor damen ockuperade
			fastarray[reminder[x-1]]= 0; // tar bort åttan alltså damen i arrayn
			if(queen_z[x-1] < (parseFloat(n) - 1)){
				queen_z[x-1]++;
			}else{
				poscheck = 1; //om damen stog längst till höger på brädet gör det så att den position inte testas igen utan också damen över tas bort
			}
			queen_j[x-1] = 0; // resetar värden
			queen_z[x] = 0; // resetar värden
			queen_j[x] = 0; // resetar värden
			x = x - 2; // gör så att den går till raden ovanför
		}else if(fastarray[queen_place] == 1){
			poscheck = 0;
			queen_j[x]++; //går ett snäpp åt höger
			x--; // stannar kvar på samma rad
		}
		for(y = 0; y < (parseFloat(n) * parseFloat(n)); y++){
			onek = 1;
			for(f = 0; f < parseFloat(n); f++){
				if(onecheck[f][y] == 1){
					onek = 0;
					f = parseFloat(n);
				}
			}
			if((onek == 0) && (fastarray[y] != 8)){
				fastarray[y] = 1;
			}
		}//checkar arrayn för alla damern och vilka rutor de ockuperar och gör så att dom rutorna ockuperas på arrayn
		//console.log(fastarray);
		/*ft2 = performance.now();
		if((ft2 - ft1) > 10000){
			x = parseFloat(n);
		}
		*/
		lapscheck++;
		ft3 = performance.now();
		if((ft3-ft4) > 5000){
			console.log(lapscheck);
			lapscheck = 0;
			ft4 = performance.now();
		}
		
	}
	//console.log(fastarray);
	ft2 = performance.now();
	console.log((ft2 - ft1)); // skriver ut hur lång tid det tog
	var fastq = setInterval(fastqueen, 7); // anropar en funktion som sätter ut damerna
}
function fastqueen(){
	if(fastarray[qc] == 8){ //kollar om det är en dam
		getid = qc + parseFloat(n); // kollar vilken ruta damen ska stå på
		document.getElementById(getid).click(); // sätter ut damen på brädet
	}
	if(qc == ((parseFloat(n) * parseFloat(n)) - 1)){
		clearInterval(fastq); // stannar funktion om alla damer har placerats
	}
	qc++;
}
