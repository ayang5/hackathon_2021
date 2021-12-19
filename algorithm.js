function Protein1(choice,serving){
    console.log("hey");
    if(choice == "Chicken"){
        return 300*serving;
    } else if(choice == "Lamb"){
        return 250*serving;
    } else if(choice == "Steak"){
        return 679*serving;
    } else if(choice == "Beef"){
        return 213*serving;
    } else if(choice == "Salmon"){
        return 769*serving; 
    } else if(choice == "Pork"){
        return 206*serving;
    } else if(choice == "Egg"){
        return 78*serving;
    } else {
        return 94*serving
    }
} 
function Dairy1(choice,serving){
    console.log("hey there"); 
    if(choice == "Milk"){
        return 103*serving;
    } else {
        return 100*serving;
    }
}
function Veggies1(choice,serving){
    console.log("hey there again");
    if(choice == "Brussel Sprouts"){
        return 38*serving;
    } else if(choice == "Chinese Cabbage"){
        return 8*serving;
    } else if(choice == "Lettuce"){
        return 5*serving; 
    } else if(choice == "Carrots"){
        return 25*serving;
    } else if(choice == "Celery"){
        return 10*serving;
    } else if(choice == "Potatoes"){
        return 163*serving;
    } else if(choice == "Broccoli"){
        return 45*serving;
    } else {
        return 42*serving;
    }
}
function Fruits1(choice,serving){
    console.log("here there again again");
    if(choice == "Apples"){
        return 95*serving;
    } else if(choice == "Oranges"){
        return 46*serving; 
    } else if(choice == "Bananas"){
        return 105*serving;
    } else if(choice == "Kiwi"){
        return 42*serving;
    } else if(choice == "Strawberries"){
        return 4*serving;
    } else if(choice == "Tomatoes"){
        return 22*serving;
    } else if(choice == "Blueberries"){
        return 30*serving;
    } else {
        return 62*serving;
    }
}
function Grains1(choice,serving){
    console.log("here there again again again");
    if(choice == "White Rice"){
        return 206*serving;
    } else if(choice == "Brown Rice"){
        return 216*serving;
    } else if(choice == "Bread"){
        return 79*serving;
    } else if(choice == "Pasta"){
        return 75*serving;
    } else {
        return 222*serving;
    }
}