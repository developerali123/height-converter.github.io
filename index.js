document.getElementById("submit").addEventListener("click",function(){
    var feet=parseInt(document.getElementById("feets").value*12);
    var inches=parseInt(document.getElementById("inches").value);
    var cm=(feet+inches)*2.54;
    var n=cm.toFixed(0);
    document.getElementById("result").value=n;
})