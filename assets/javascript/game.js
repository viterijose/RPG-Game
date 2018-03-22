window.onload = function () {//window loads

    var health_chosen; //health of all characters
    var health_oponent;
    var attack_power = 8;
    var current_attack_power;
    var counter_attack;
    var count = 0;

    var isCharacterChosen = false;
    var clicks = 0;
    var isOponentChosen = false;
    var wins = 0;
    var characters = [
        goku = {
            name: "Goku",
            image: "assets/images/goku.png",
            attack: 8,
            counter: 25,
            health: 100,
            chosen: "1"
        },
        vegeta = {
            name: "Vegeta",
            image: "assets/images/vegeta.png",
            attack: 8,
            counter: 25,
            health: 120,
            chosen: "2"
        },
        frieza = {
            name: "Frieza",
            image: "assets/images/frieza.png",
            attack: 8,
            counter: 25,
            health: 150,
            chosen: "3"
        },
        cell = {
            name: "Cell",
            image: "assets/images/Cell.png",
            attack: 8,
            counter: 25,
            health: 180,
            chosen: "4"
        }
    ]

    for (var i = 0; i < characters.length; i++) {
        var newButton = $("<button>")
        newButton.addClass("character_choose");
        newButton.val(characters[i].health);
        var newDiv = $("<div>");
        newDiv.text(characters[i].name);
        var newImg = $("<img height = 200px width = 170px>");
        newImg.attr("src", characters[i].image);
        var newFooter = $("<footer>");
        newFooter.text("Health :");
        var newSpan = $("<span>");
        newSpan.addClass(characters[i].chosen);
        newSpan.text(characters[i].health);

        $(newButton).appendTo("#container_char");
        $(newDiv).appendTo(newButton);
        $(newImg).appendTo(newButton);
        $(newSpan).appendTo(newFooter);
        $(newFooter).appendTo(newButton);
    }


    function restart() {
    }
    function gameover() {
        alert("YOU LOOSE!!");
    }
    function next() {
        isOponentChosen = false;
        $("#container_oponent").empty();
        wins++;
        if(wins == 1){ //get character image, erase src, put new src for transformation
            $(".character_chosen").find("img").attr("src", "https://pre00.deviantart.net/502c/th/pre/f/2017/039/7/9/super_saiyan_goku_2_by_brusselthesaiyan-daydfdy.png");//make for every character
        }
        if(wins == 2){
            $(".character_chosen").find("img").attr("src", "https://vignette.wikia.nocookie.net/vsbattles/images/4/48/Goku_ssj2_by_spongeboss-d3np2hm.png/revision/latest?cb=20150428060108");
        }
        if (wins <= 1) {
            current_attack_power = 8 * count;
        } else {
            current_attack_power = attack_power
        }
        console.log("current attack power:" + attack_power)
        count = 0;
    }

    $(".character_choose").on("click", function () {
        if (isCharacterChosen === false) {
            $(".character_choose").appendTo("#container_choose");
            $(".character_choose").addClass("character_enemy");
            $(".character_choose").removeClass("character_choose");

            $(this).appendTo("#container_char");
            $(this).removeClass();
            $(this).addClass("character_chosen");
            $(this).find("span").removeClass();
            $(this).find("span").addClass("Chosen");
            health_chosen = $(".character_chosen").val();
            isCharacterChosen = true;
        }
        $(".character_enemy").on("click", function () {
            if (isOponentChosen === false) {
                $(this).appendTo("#container_oponent");
                $(this).removeClass();
                $(this).addClass("character_oponent");
                $(this).find("span").removeClass();
                $(this).find("span").addClass("Oponent");
                
                isOponentChosen = true;
            }
        })
    })

    function attack() {
        console.log("counter :" + count);
        health_oponent = $(".character_oponent").val();

        for (var k = 1; k <= count; k++) {
            if (wins == 0) {
                attack_power = 8 * k; 
                health_oponent = health_oponent - attack_power;
            } else {
                attack_power = current_attack_power + 8 * k;
                health_oponent = health_oponent - attack_power;
            }
        }
        console.log("current health of oponent:" + health_oponent);
        counter = 10 ;
        console.log("health chosen:" + health_chosen);
        health_chosen = health_chosen - counter;
        console.log("health after counter:" + health_chosen);
        $(".Chosen").text(health_chosen);
        $(".Oponent").text(health_oponent);

        if (health_chosen <= 0) {
            gameover();
        } else if (health_oponent <= 0) {
            alert("NEXT CHARACTER");
            next();
        }
        if (wins == 3){
            alert("YOU WON!!");
        }
    }
    $(".attack").on("click", function () {
        if(isOponentChosen===true){

        count++;
        console.log(count);
        attack();
        }
    })


}