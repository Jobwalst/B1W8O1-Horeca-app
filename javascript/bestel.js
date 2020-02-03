const bierPrijs = 4.30;
const frisPrijs = 1.40;
const wijnPrijs = 3.60;		//These are constants, they cannot change further in the code.
const bitterPrijs8 = 2.40;
const bitterPrijs16 = 4.80; 
var subTotal = 0;

var hvlBier = 0;
var hvlFris = 0;
var hvlWijn = 0;		//all the variables that are needed in the whole code are declared here, variables declared in functions cannot be used in the whole code.
var hvlBitter8 = 0;
var hvlBitter16 = 0;
var hvlSchalen = 0;
function toevoegen(){  //creates a function named 'toevoegen'. This block of code makes the orders.
	var drankRep = true; //creates a while loop.
	while(drankRep == true){ //actually the while loop is made here :P
		 	drank = prompt("Welke bestelling wilt u toevoegen? Kies 1 voor bier, 2 voor fris, 3 voor wijn, 4 voor snacks of 'stop' om de bestelling af te ronden.");
		if(drank == 1){
			hvlBier += Number(prompt("Hoeveel bier wilt u toevoegen aan uw bestelling?"));
		}
		else if(drank == 2){
		 	hvlFris += Number(prompt("Hoeveel fris wilt u toevoegen aan uw bestelling?"));
		}
		else if(drank == 3){
			hvlWijn += Number(prompt("Hoeveel wijn wilt u toevoegen aan uw bestelling?"));
		}
		else if(drank == 4){
			var hvlBitter = Number(prompt("Hoeveel bitterballen wilt u toevoegen. Kies uit 8 of 16."));
			if(hvlBitter == 8){
				hvlBitter8 += parseInt(prompt("hoeveel bitterbalschalen van 8 stuks wilt u bestellen?")); //a parseInt is used to switch a string to a integer.
			}
			else if(hvlBitter == 16){
				hvlBitter16 += parseInt(prompt("hoeveel bitterbalschalen van 16 stuks wilt u bestellen?"));
			}
			else{
				alert("U heeft een ongeldige invoer gedaan. Uw bestelling kan niet worden toegevoegd.");
			}
		}
		else if(drank == "stop"){
			drankRep = false;
			calculate(); //calls the function 'calculate'.
			showBill();
		}
		else{
			alert("U heeft een ongeldige invoer gedaan. Uw bestelling kan niet worden toegevoegd.");
		}
	}
}
toevoegen(); //runs the function 'toevoegen'.

function calculate(){ //creates the function 'calculate', as this block of code makes all the calculations for the price of the orders.
	bierTotal = Number(hvlBier)*Number(bierPrijs);
	frisTotal = Number(hvlFris)*Number(frisPrijs);
	wijnTotal = Number(hvlWijn)*Number(wijnPrijs);
	bitter8Total = Number(hvlBitter8)*Number(bitterPrijs8);
	bitter16Total = Number(hvlBitter16)*Number(bitterPrijs16);
	subTotal = bierTotal+frisTotal+wijnTotal+bitter8Total+bitter16Total;
	subTotal = subTotal.toFixed(2) //toFixed is used to round a integer to a certain number of decimals. The integer will switch back to a string in the process.
}

function showBill(){ //creates the function 'showBill', as this block of code makes the bill of the orders you have made.
	document.write(hvlBier + " x " + "bier<br>" + "prijs = € " + bierTotal + "<br><br>");
	document.write(hvlFris + " x " + "fris<br>" + "prijs = € " + frisTotal + "<br><br>");
	document.write(hvlWijn + " x " + "wijn<br>" + "prijs = € " + wijnTotal + "<br><br>");
	document.write(hvlBitter8 + " x " + "8 bitterballen<br>" + "prijs = € " + bitter8Total + "<br><br>");
	document.write(hvlBitter16 + " x " + "16 bitterballen<br>" + "prijs = € " + bitter16Total + "<br><br>");
	document.write("subtotaal = € " + subTotal + "<br>");
}