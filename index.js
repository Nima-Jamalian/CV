document.querySelector(".southBankLogo").addEventListener("click", () =>{
    var southBankTitle = document.querySelector(".southBankTitle");
    var southBankList = document.querySelector(".southBankList");
if(southBankList.classList.contains("hideItem")){
    southBankList.classList.remove("hideItem");
    southBankTitle.classList.add("boldText");
} else{
    southBankList.classList.add("hideItem");
    southBankTitle.classList.remove("boldText");
}
});

document.querySelector(".NokiaLogo").addEventListener("click", () =>{
    var NokiaTitle = document.querySelector(".NokiaTitle");
    var NokiaList = document.querySelector(".NokiaList");
if(NokiaList.classList.contains("hideItem")){
    NokiaList.classList.remove("hideItem");
    NokiaTitle.classList.add("boldText");
} else{
    NokiaList.classList.add("hideItem");
    NokiaTitle.classList.remove("boldText");
}
});

document.querySelector(".UoLLogo").addEventListener("click", () =>{
    var UoLTitle = document.querySelector(".UoLTitle");
    var UoLList = document.querySelector(".UoLList");
if(UoLList.classList.contains("hideItem")){
    UoLList.classList.remove("hideItem");
    UoLTitle.classList.add("boldText");
} else{
    UoLList.classList.add("hideItem");
    UoLTitle.classList.remove("boldText");
}
});