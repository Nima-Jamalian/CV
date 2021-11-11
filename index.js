document.querySelector("#profilePic").addEventListener("mouseenter",()=>{
    document.querySelector("#profilePic").src = "images/NimaEmojiPhotoRound.png";
    document.querySelector(".helloText").innerHTML = "Hello! 😁";

});
document.querySelector("#profilePic").addEventListener("mouseleave",()=>{
    document.querySelector("#profilePic").src = "images/Nima Profile Pciture.png";
    document.querySelector(".helloText").innerHTML = "Hello.";
});

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

document.querySelector(".GoldsmithsLogo").addEventListener("click", () =>{
    var GoldsmithsTitle = document.querySelector(".GoldsmithsTitle");
    var GoldsmithsList = document.querySelector(".GoldsmithsList");
if(GoldsmithsList.classList.contains("hideItem")){
    GoldsmithsList.classList.remove("hideItem");
    GoldsmithsTitle.classList.add("boldText");
} else{
    GoldsmithsList.classList.add("hideItem");
    GoldsmithsTitle.classList.remove("boldText");
}
});

document.querySelector(".PhDLogo").addEventListener("click", () =>{
    var PhDTitle = document.querySelector(".PhDTitle");
    var PhDList = document.querySelector(".PhDList");
if(PhDList.classList.contains("hideItem")){
    PhDList.classList.remove("hideItem");
    PhDTitle.classList.add("boldText");
} else{
    PhDList.classList.add("hideItem");
    PhDTitle.classList.remove("boldText");
}
});

document.querySelector(".MasterLogo").addEventListener("click", () =>{
    var MasterTitle = document.querySelector(".MasterTitle");
    var MasterList = document.querySelector(".MasterList");
if(MasterList.classList.contains("hideItem")){
    MasterList.classList.remove("hideItem");
    MasterTitle.classList.add("boldText");
} else{
    MasterList.classList.add("hideItem");
    MasterTitle.classList.remove("boldText");
}
});

document.querySelector(".BachelorLogo").addEventListener("click", () =>{
    var BachelorTitle = document.querySelector(".BachelorTitle");
    var BachelorList = document.querySelector(".BachelorList");
if(BachelorList.classList.contains("hideItem")){
    BachelorList.classList.remove("hideItem");
    BachelorTitle.classList.add("boldText");
} else{
    BachelorList.classList.add("hideItem");
    BachelorTitle.classList.remove("boldText");
}
});