// if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
//     // dark mode
//     document.querySelector(".UoLLogo").src = "images/U_of_Londo_Coursera_DarkMode.png";
//     document.querySelector(".languagesHTMLCSSJavaScript").src = "images/WebDevToolsIcon_DarkMode.png";
// } 

// if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
//     // dark mode
//     document.querySelector(".UoLLogo").src = "images/U_of_Londo_Coursera_LightMode.png";
//     document.querySelector(".languagesHTMLCSSJavaScript").src = "images/WebDevToolsIcon_LightMode.png";
// } 
   
document.querySelector("#profilePic").addEventListener("mouseenter",()=>{
    document.querySelector("#profilePic").src = "images/NimaEmojiPhotoRound.png";
    document.querySelector(".helloText").innerHTML = "Welcome to my site! 😁";

});

document.querySelector("#profilePic").addEventListener("mouseleave",()=>{
    document.querySelector("#profilePic").src = "images/Nima Profile Pciture.png";
    document.querySelector(".helloText").innerHTML = "Hello!";
});

document.querySelector(".southBankLogo").addEventListener("click", () =>{
    var southBankTitle = document.querySelector(".southBankTitle");
    var southBankList = document.querySelector(".southBankList");
    displayListInformation(southBankTitle, southBankList);
});

document.querySelector(".NokiaLogo").addEventListener("click", () =>{
    var NokiaTitle = document.querySelector(".NokiaTitle");
    var NokiaList = document.querySelector(".NokiaList");
    displayListInformation(NokiaTitle, NokiaList);
});

document.querySelector(".UoLLogo").addEventListener("click", () =>{
    var UoLTitle = document.querySelector(".UoLTitle");
    var UoLList = document.querySelector(".UoLList");
    displayListInformation(UoLTitle, UoLList);
});

document.querySelector(".GoldsmithsLogo").addEventListener("click", () =>{
    var GoldsmithsTitle = document.querySelector(".GoldsmithsTitle");
    var GoldsmithsList = document.querySelector(".GoldsmithsList");
    displayListInformation(GoldsmithsTitle, GoldsmithsList);
});

document.querySelector(".PhDLogo").addEventListener("click", () =>{
    var PhDTitle = document.querySelector(".PhDTitle");
    var PhDList = document.querySelector(".PhDList");
    displayListInformation(PhDTitle, PhDList);

});

document.querySelector(".MasterLogo").addEventListener("click", () =>{
    var MasterTitle = document.querySelector(".MasterTitle");
    var MasterList = document.querySelector(".MasterList");
    displayListInformation(MasterTitle, MasterList);
});

document.querySelector(".BachelorLogo").addEventListener("click", () =>{
    var BachelorTitle = document.querySelector(".BachelorTitle");
    var BachelorList = document.querySelector(".BachelorList");
    displayListInformation(BachelorTitle, BachelorList );
});

function displayListInformation(inputTitle, inputList){
    if(inputList.classList.contains("hideItem")){
        inputList.classList.remove("hideItem");
        inputTitle.classList.add("boldText");
        inputTitle.classList.remove("TitleList");
    } else{
        inputList.classList.add("hideItem");
        inputTitle.classList.remove("boldText");
        inputTitle.classList.add("TitleList");
    }
}