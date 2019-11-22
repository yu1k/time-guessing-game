var startTime = null;
var displayArea = document.getElementById("display-area");
function start(){
    startTime = Date.now();
    document.body.onkeypress = stop;
}
function stop(){
    var currentTime = Date.now();
    var seconds = (currentTime - startTime) / 1000;
    if(9.5 <= seconds && seconds <= 10.5){
        displayArea.innerText = seconds + "秒でした。すごい。";

        document.body.onkeypress = block;
    }
    else{
        displayArea.innerText = seconds + "秒でした。残念。";

        document.body.onkeypress = block;
    }
}
function block(){
    //document.write("一回プレイしたのでもうできません。ページをリロードしてもう一回プレイしてください。");
    displayArea.innerText = "一回プレイしたのでもうできません。ページをリロードしてもう一回プレイしてください。";
}
if(confirm("Okを押して10秒だと思ったら何かキーを押してください")){
    start();
}
