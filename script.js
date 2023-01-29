var index = 0;

function changeColor(){
    var data = ["red","green","blue","orange","yellow","#f234aa"]
    document.getElementsByTagName("body")[0].style.background = data[index++];

    if(index > data.length -  1)
    index=0;

}