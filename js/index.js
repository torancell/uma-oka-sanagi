var bgm;
bgm = new Audio();
bgm.src = "../music/bgm.mp3"
var bgm_katou;
bgm_katou = new Audio();
bgm_katou.src = "../music/っざけんなよおおおお！！！.wav"


function ButtonClick(){

    var one = document.getElementById("one");
    var two = document.getElementById("two");
    var three = document.getElementById("three");
    var four = document.getElementById("four");
    var uma = document.getElementById("uma");

    var one_value = Number(one.value);
    var two_value = Number(two.value);
    var three_value = Number(three.value);
    var four_value = Number(four.value);
    var uma_value = Number(uma.value);

    var sum_value = one_value+two_value+three_value+four_value;

    var uma14;
    var uma23;
    if(uma_value == 13){
        uma14 = 30000;
        uma23 = 10000;
    }else if(uma_value == 12){
        uma14 = 20000;
        uma23 = 10000;
    }else if(uma_value == 510){
        uma14 = 10000;
        uma23 = 5000;
    }

    if(four_value>three_value || four_value>two_value || four_value>one_value || three_value>two_value || three_value>one_value || two_value>one_value || sum_value!=100000){
        bgm_katou.play();
    }else{
        var one_score = (one_value+20000+uma14-30000)/1000;
        var two_score = (two_value+uma23-30000)/1000;
        var three_score = (three_value-uma23-30000)/1000;
        var four_score = (four_value-uma14-30000)/1000;

        bgm.play();
        alert("1位：["+one_score+"]\n2位：["+two_score+"]\n3位：["+three_score+"]\n4位：["+four_score+"]");
    }



    
}