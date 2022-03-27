function mudaStyles (bnt3){
    bnt3.classList.toggle("bntNewStyles");
    return
};
let bnt8=document.getElementById("bnt8");
bnt8.addEventListener("click",mudaBorder)
function mudaBorder(){
    bnt8.classList.add("bnt8Animation")
    bnt8.innerHTML="clicado com sucesso";
    bnt8.style.color = "pink"
}