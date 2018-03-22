window.onload = function () {//window loads

    var health_chosen; //health of all characters
    var health_oponent;
    var attack_power;
    var counter;
    var count=0;
    var isCharacterChosen = false;
    var isOponentChosen = false;
    var characters = [
        goku = {
            health : 100,
            counter : 10,
            img :  "assets/images/goku.png",
        },
        vegeta = {
            health : 120,
            counter : 15,
            img :  src = "assets/images/vegeta.png",
        },
        frieza = {
            health : 150,
            counter : 20,
            img :  src = "assets/images/frieza.png",
        },
        cell = {
            health : 180,
            counter : 25,
            img :  src = "assets/images/cell.png",
        }
    ]

    function restart() {

    }

    $(".Character").on("click", function(){
        console.log("Length of object characters :" + characters.length);
        console.log(characters.goku);
        for(var i = 0 ; i < characters.length ; i ++){

        }

    })

    function attack(){
        attack_power = 8*count;
        console.log("attack power :" + attack_power)
        counter = 25;
        health_chosen = $(".Character_1").val();
        var number = parseInt(health_chosen);
        console.log(number);
        health_chosen = number - counter;
        console.log(health_chosen);
        $(".health_1").text(health_chosen);
        health_oponent = $("Character_2").val();
        health_oponent = health_oponent - attack_power;
        console.log(health_oponent);
    }
    $(".attack").on("click", function(){
        count++;
        console.log(count);
        attack();
    })


}