window.onload = function () {//window loads

    var health_chosen; //health of all characters
    var health_oponent;
    var attack_power;
    var counter;
    var count;
    var isCharacterChosen = false;
    var isOponentChosen = false;

    function restart() {

    }

    $(".Character_1").on("click", function () {
        isCharacterChosen = true;
        $(".Character_2").appendTo(".container_choose"), $(".Character_3").appendTo(".container_choose"), $(".Character_4").appendTo(".container_choose");
        if(isCharacterChosen == true){
            $(".Character_2").on("click", function () {
                $(".Character_3").appendTo(".container_oponent"), $(".Character_4").appendTo(".container_oponent");
            }), $(".Character_3").on("click", function () {
                $(".Character_2").appendTo(".container_oponent"), $(".Character_4").appendTo(".container_oponent");
            }),$(".Character_4").on("click", function () {
                $(".Character_2").appendTo(".container_oponent"), $(".Character_3").appendTo(".container_oponent");
            });
        }
    });
    function attack(){
        attack_power = 8*count;
        counter = 25;
        health_chosen = $("Character_1").val();
        health_chosen = health_chosen - counter;
        console.log(health_chosen);
        $(".health_1").innerHTML(health_chosen);
        health_oponent = $("Character_2").val();
        health_oponent = health_oponent - attack_power;
        console.log(health_oponent);
    }
    $(".attack").on("click", function(){
        count = 0;
        count++;
        attack();
    })


}