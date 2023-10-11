var text = new Array();
// var btn = document.getElementById("save");
function save_data(){
    var x = document.getElementsByClassName("info");
    
    for(var i = 0; i < x.length; i++){
        text[i] = x[i].value;
    }
    if(!text[0]) {
        alert("닉네임을 입력 해 주세요.")
    }
    else if(!text[1]){
        alert("서버명을 입력 해 주세요.")
    }
    else if(!text[2]){
        alert("블랙리스트 추가 이유를 입력 해 주세요.")
    }
    else{
        alert("게시물이 추가됩니다.");
        window.location.href="idex.html";
    }
}


// module.exports = { text };