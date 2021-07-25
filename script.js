var inp=["X","O"]
var i=0
var j=0
var arr=[1,2,3,4,5,6,7,8,9]
var ctr=1

function fillData (val){

    ctr++;
    arr[val]=inp[(j++)%2];
    console.log(arr)

    var ne = document.createElement("h1")
    ne.innerText=inp[(i++)%2]
    ne.style.fontSize="100px";
    document.getElementById(val).appendChild(ne)
    
    var element = document.getElementById(val);
    element.onclick = ""
    
    if(checkwin()){

        console.log("win")
        win(val)
    }

    if(ctr===10){
        console.log("draw")
        draw()
    }

}

 function checkwin(){
    if( (arr[0]===arr[1] && arr[0]===arr[2]) ||
        (arr[0]===arr[3] && arr[0]===arr[6]) ||
        (arr[0]===arr[4] && arr[0]===arr[8]) ||
        (arr[1]===arr[4] && arr[1]===arr[7]) ||
        (arr[2]===arr[5] && arr[2]===arr[8]) ||
        (arr[2]===arr[4] && arr[2]===arr[6]) ||
        (arr[3]===arr[4] && arr[3]===arr[5]) ||
        (arr[2]===arr[5] && arr[2]===arr[8]) || 
        (arr[6]===arr[7] && arr[6]===arr[8])
        )
        {
        return true;
        }
    else    
        return false;

 }


 function win(val){
    var winner=val
    document.getElementById("decider").innerHTML=""
    var ep= document.createElement("h1")
    ep.innerText=" PLAYER   "+arr[winner]+" WON"
    document.getElementById("decider").appendChild(ep)


    var bp=document.createElement("button")
    bp.innerText="PLAY AGAIN"
    ep.innerText.fontSize="50px";
    bp.id="resetbt"
    bp.onclick= refresh
    document.getElementById("decider").appendChild(bp)

    
 }

 function draw()
 {
    document.getElementById("decider").innerHTML=""
    var ep= document.createElement("h1")
    ep.innerText=" ITS A DRAW "
    ep.innerText.fontSize="50px";
    document.getElementById("decider").appendChild(ep)


    var bp=document.createElement("button")
    bp.innerText="PLAY AGAIN"
    bp.id="resetbt"
    bp.onclick= refresh
    document.getElementById("decider").appendChild(bp)

 }


 function refresh(){
     location.reload()
 }