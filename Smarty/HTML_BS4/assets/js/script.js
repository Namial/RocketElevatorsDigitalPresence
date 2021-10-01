document.getElementById("list_residential").style.display = "none";
document.getElementById("list_commercial").style.display = "none";
document.getElementById("list_hybrid").style.display = "none";
document.getElementById("list_corporate").style.display = "none";

function select_building(list) {
    document.getElementById("total-elevator").value = "";
    document.getElementById("unitPrice").value = "";
    document.getElementById("totalElevPrice").value = "";
    document.getElementById("totalFees").value = "";
    document.getElementById("totalPrice").value = "";
    document.getElementById("list_residential").style.display = "none";
    document.getElementById("list_commercial").style.display = "none";
    document.getElementById("list_hybrid").style.display = "none";
    document.getElementById("list_corporate").style.display = "none";
    var radioStand = document.getElementById("standard");
    var radioPremi = document.getElementById("premium");
    var radioExcel = document.getElementById("excelium");
    radioStand.checked = false;
    radioPremi.checked = false;
    radioExcel.checked = false;
    switch(list){
        case "residential" :
            document.getElementById("list_residential").style.display = "block";
            break;
        case "commercial" :
            document.getElementById("list_commercial").style.display = "block";
            break;
        case "corporate" :
            document.getElementById("list_corporate").style.display = "block";
            break;
        case "hybrid":
            document.getElementById("list_hybrid").style.display = "block";
            break;
        default :
            console.log(list + " is selected. Chose an option.");
            break;
    }
}
function calculateResidentialPrice() {
    let nbAppR = document.getElementById("number-app").value;
    let nbFloorR = document.getElementById("number-floor").value;
    let moyenneFloorR = nbAppR/nbFloorR;
    let nbElevR = Math.ceil(moyenneFloorR/6);
        console.log(nbElevR);
    let nbColumnR = Math.ceil((nbFloorR/20));
    console.log("nbcolumn"+" " + nbColumnR)
    if(nbColumnR == 2 ) {
        nbElevR *= 2;
    }else if(nbColumnR == 3){
        nbElevR *= 3;
    }else if(nbColumnR == 4){
        nbElevR *= 4;
    }else if(nbColumnR == 5){
        nbElevR *= 5;
    }else if(nbColumnR == 6){
        nbElevR *= 6;
    }else if(nbColumnR == 7){
        nbElevR *=7;
    }else if(nbColumnR == 8){
        nbElevR *=8;
    }
    document.getElementById("total-elevator").value = nbElevR;
    
    }
function calculateComercialPrice() { 
    let nbElevC = document.getElementById("nbElevatorCommercial").value;
    let totalElevatorC = nbElevC;
    document.getElementById("total-elevator").value = totalElevatorC;
}
function calculateCorporatePrice() {
    let maxOccupancy = document.getElementById("maxOccupC").value;
    let nbFloorC = document.getElementById("nbFloorC").value;
    let nbBasementC = document.getElementById("nbBasementC").value;
    let totalPeople = (parseFloat(nbFloorC) + parseFloat(nbBasementC)) * parseFloat(maxOccupancy);
    let totalElevator = Math.ceil(totalPeople/1000);
    document.getElementById("total-elevator").value = totalElevator;
    let nbColumn = (parseFloat(nbFloorC) + parseFloat(nbBasementC))/20;
    console.log("nombrecolumn" +" " + nbColumn);
    let nbMoyElevCol = totalElevator / nbColumn;
    console.log("nombreEleCol" + " " + nbMoyElevCol);
    totalElevator = nbColumn * nbMoyElevCol;
    console.log("totalElev" + " " +totalElevator);
}
function calculateHybridPrice() {
    let maxOccupancyH = document.getElementById("maxOccupH").value;
    let nbFloorH = document.getElementById("nbFloorH").value;
    let nbBasementH = document.getElementById("nbBasementH").value;
    let totalPeopleH = (parseFloat(nbFloorH) + parseFloat(nbBasementH)) * parseFloat(maxOccupancyH);
    let totalElevatorH = Math.ceil(totalPeopleH/1000);
    document.getElementById("total-elevator").value = totalElevatorH;
    let nbColumnH = (parseFloat(nbFloorH) + parseFloat(nbBasementH))/20;
    console.log("nombrecolumn" +" " + nbColumnH);
    let nbMoyElevColH = totalElevatorH / nbColumnH;
    console.log("nombreEleCol" + " " + nbMoyElevColH);
    totalElevatorH = nbColumnH * nbMoyElevColH;
    console.log("totalElev" + " " +totalElevatorH);
}
function priceSelector() {
    let price = 0;
    let fees = 0;
    let feesPerElev = 0;
    let radioStand = document.getElementById("standard");
    let radioPremi = document.getElementById("premium");
    let radioExcel = document.getElementById("excelium");
    if(radioStand.checked == true){
        price = 7565; 
        fees = parseFloat(price) * 0.10;
        feesPerElev = parseFloat(fees) * parseFloat(document.getElementById("total-elevator").value);
    }else if(radioPremi.checked == true){
        price = 12345;
        fees = price * 0.13;
        feesPerElev = parseFloat(fees) * parseFloat(document.getElementById("total-elevator").value);
    }else if(radioExcel.checked == true){
        price = 15400;
        fees = parseFloat(price) * 0.16;
        feesPerElev = parseFloat(fees) * parseFloat(document.getElementById("total-elevator").value);
    }
    console.log("feesPerElevator"+" "+ feesPerElev)
    console.log("fees"+" "+fees)
    document.getElementById("unitPrice").value = parseFloat(price);
    document.getElementById("totalElevPrice").value = parseFloat(price) * parseFloat(document.getElementById("total-elevator").value);
    document.getElementById("totalFees").value = feesPerElev 
    console.log("feesperElev2"+" "+feesPerElev)
    document.getElementById("totalPrice").value = parseFloat(document.getElementById("totalFees").value) + parseFloat(document.getElementById("totalElevPrice").value);
    console.log("feesperElev3"+" "+feesPerElev)
}




/*--commercial--
number-of-elevators = total-

--residential--
number-of-apartments/number-of-floors = moyenne app par etage
one elevator each 6 app
if +20app = 2 column

--corporate/hybrid--
maximum-occupancy*number-of-floors+basement = total-number-of-people
total-number-of-people/1000 = number-of-elevator
number-of-floor/20 = number-of-culomn
number-of-elevator/number-of-culomn = moyenne-elevator-per-culomn
number-of-elevator=moyenne-elevator-per-culomn*number-of-culomn

--price--
standard = 7565 + 10% fees
premium = 12345 + 13% fees
excelius = 15400 + 16% fees*/
