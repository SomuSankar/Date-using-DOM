
var dateelement=document.createElement('input');
dateelement.setAttribute('type','date');
dateelement.setAttribute('id','date');
document.body.append(dateelement);

var button=document.createElement('button');
button.innerHTML="Display data";
button.className="btn btn-primary"
button.setAttribute('type','button');
button.addEventListener('click',displaydata);




document.body.append(button);
function displaydata(){
    let input = document.getElementById("date").value;
   //* console.log(typeof(input));
   // console.log(Date.parse(input));//
if(Date.parse(input)){
    var inputdate=new Date(input);
    var currentdate=new Date();
    console.log(inputdate,currentdate);
   // console.log(Date.parse(input));
    var milliseconddiff=currentdate.getTime()-inputdate.getTime();
    console.log(milliseconddiff);
    var seconddiff=Math.floor(milliseconddiff/1000);
    console.log(seconddiff);
    var minutediff=Math.floor(seconddiff/60);
    console.log(minutediff);
    var hourdiff=Math.floor(minutediff/60);
    console.log(hourdiff);

    var daydiff=Math.floor(hourdiff/24);
    console.log(daydiff);

    var yeardiff=currentdate.getFullYear()-inputdate.getFullYear();
    console.log(yeardiff);

    var monthdiff=(yeardiff*12)+(currentdate.getMonth()-inputdate.getMonth());
    console.log(monthdiff);

}else{
    console.log("give properdate")
}
    var division1=document.createElement('div');
    division1.innerHTML=`
        currentdate:${currentdate}<br>
        inputdate:${inputdate}<br>
        milliseconddiff:${milliseconddiff}<br>
        seconddiff:${seconddiff}<br>
        minutediff:${minutediff}<br>
        hourdiff:${hourdiff}<br>
        daydiff:${daydiff}<br>
        yeardiff:${yeardiff}<br>
        monthdiff:${monthdiff}`;
        document.body.append(division1);
}



