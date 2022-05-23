function clk(val){

    document.getElementById("screen").value=document.getElementById("screen").value+val;
}

function eql(){
    var text=document.getElementById("screen").value;
    var result=eval(text);
    document.getElementById("screen").value=result

}

function clrdisp(){
    document.getElementById("screen").value=""
}