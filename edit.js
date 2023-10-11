
function edit(){
   confirm("게시물을 수정 할까요?")
}

function valid(){
    const input = document.getElementById("edit_input");
    if(!input.value){
        alert("수정할 내용을 입력하세요.")
    }else{
        window.location.href="index.html";
    }
}