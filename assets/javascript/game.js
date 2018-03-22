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
            image: ["assets/images/goku.png", "assets/images/goku_2.png", "assets/images/goku_3.png"],
            attack: 8,
            counter: 25,
            health: 110,
            chosen: 1
        },
        vegeta = {
            name: "Vegeta",
            image: ["assets/images/vegeta.png", "assets/images/vegeta_2.png", "assets/images/vegeta_3.png"],
            attack: 8,
            counter: 25,
            health: 120,
            chosen: 2
        },
        frieza = {
            name: "Frieza",
            image: ["assets/images/frieza.png", "assets/images/frieza_2.png", "assets/images/frieza_3.png"],
            attack: 8,
            counter: 25,
            health: 150,
            chosen: 3
        },
        cell = {
            name: "Cell",
            image: ["assets/images/Cell.png", "assets/images/cell_2.png", "assets/images/cell_3.png"],
            attack: 8,
            counter: 25,
            health: 180,
            chosen: 4
        }
    ]
    var audio_transform = document.getElementById("transform");
    var audio_teleport = document.getElementById("teleport");
    var audio_punch = document.getElementById("punch");
    var audio_loose = document.getElementById("loose");
    var audio_battle = document.getElementById("battle");
    var audio_welcome = document.getElementById("welcome");
    audio_welcome.play();
    audio_battle.play();

    function create() {

        for (var i = 0; i < characters.length; i++) {
            var newButton = $("<button>")
            newButton.addClass("character_choose");
            newButton.val(characters[i].health);
            var newDiv = $("<div>");
            newDiv.text(characters[i].name);
            var newImg = $("<img height = 200px width = 170px>");
            newImg.attr("src", characters[i].image[0]);
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

    }
    create();

    function restart() {
        $("#container_choose").empty();
        $("#container_oponent").empty();
        $("#container_char").empty();
        create();
    }
    $(".restart").on("click", function(){
        restart();
    })
    function gameover() {
        audio_loose.play();
        alert("YOU LOOSE!!");
    }
    function next() {
        isOponentChosen = false;
        $("#container_oponent").empty();
        wins++;
        var char_chosen = $(".character_chosen").val();
        audio_transform.play();

        if (wins == 1) {

            if (char_chosen == 110) {
                $(".character_chosen").find("img").attr("src", characters[0].image[wins]);//make for every character
            }
            if (char_chosen == 120) {
                $(".character_chosen").find("img").attr("src", characters[1].image[wins]);//make for every character
            }
            if (char_chosen == 150) {
                $(".character_chosen").find("img").attr("src", characters[2].image[wins]);//make for every character
            }
            if (char_chosen == 180) {
                $(".character_chosen").find("img").attr("src", characters[3].image[wins]);//make for every character
            }
        }
        if (wins == 2) {

            if (char_chosen == 110) {
                $(".character_chosen").find("img").attr("src", characters[0].image[wins]);//make for every character
            }
            if (char_chosen == 120) {
                $(".character_chosen").find("img").attr("src", characters[1].image[wins]);//make for every character
            }
            if (char_chosen == 150) {
                $(".character_chosen").find("img").attr("src", characters[2].image[wins]);//make for every character
            }
            if (char_chosen == 180) {
                $(".character_chosen").find("img").attr("src", characters[3].image[wins]);//make for every character
            }
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
        audio_teleport.play();
        console.log($(this).data("health"));
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
        audio_punch.play();
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
        counter = 10;
        console.log("health chosen:" + health_chosen);
        health_chosen = health_chosen - counter;
        console.log("health after counter:" + health_chosen);
        $(".Chosen").text(health_chosen);
        $(".Oponent").text(health_oponent);

        if (health_oponent <= 0) {
            alert("NEXT CHARACTER");
            next();
        } else if (health_chosen <= 0) {
            gameover();
        }
        if (wins == 3) {
            alert("YOU WON!!");
        }
    }
    $(".attack").on("click", function () {
        if (isOponentChosen === true) {
            count++;
            attack();
        }
    })


}