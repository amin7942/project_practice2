var text = new Array();
// var btn = document.getElementById("save");
function save_data(){
    var x = document.getElementsByClassName("info");
    
    for(var i = 0; i < x.length; i++){
        text[i] = x[i].value;
        console.log(text);
    }
    alert("게시물이 추가됩니다.")
}


// module.exports = { text };