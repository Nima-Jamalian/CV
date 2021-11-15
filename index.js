//Automatically detect light mode and dark mode
// if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
//     // dark mode
//     ActivateDarkMode();
// } 

// if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
//     // light mode
//     ActivateLightMode();
// } 

//Manually change between dark mode and light mode
document.querySelector(".lightDarkMode").addEventListener("click", ()=>{
    var DarkLightMode = document.querySelector(".lightDarkMode");
    if(DarkLightMode.classList.contains("fa-sun")){
        //Activate Dark Mode
        ActivateDarkMode();
    } else if (DarkLightMode.classList.contains("fa-moon")){
        //Activate Light Mode
        ActivateLightMode();
    }
});

function ActivateDarkMode(){
    DisplayDarkModeButton();
    DisplayDarkModeImages();
    var body = document.querySelector("body");
    var topContainer = document.querySelector(".topContainer");
    var hr = document.querySelectorAll("hr");
    var GoldsmithsLogo = document.querySelector(".GoldsmithsLogo");
    var bottomContainer = document.querySelector(".bottom-container");
    var buttonTLB = document.querySelector(".BUTTON_TLB");
    body.classList.add("bodyDark");
    topContainer.classList.add("topContainerDark");
    hr.forEach(element => {
        element.classList.add("hrDark")
    });
    GoldsmithsLogo.classList.add("GoldsmithsLogoDark");
    bottomContainer.classList.add("bottom-containerDark")
    buttonTLB.classList.add("BUTTON_TLBDark");    
}

function ActivateLightMode(){
    DisplayLightModeButton();
    DisplayLightModeImages();
    var body = document.querySelector("body");
    var topContainer = document.querySelector(".topContainer");
    var hr = document.querySelectorAll("hr");
    var GoldsmithsLogo = document.querySelector(".GoldsmithsLogo");
    var bottomContainer = document.querySelector(".bottom-container");
    var buttonTLB = document.querySelector(".BUTTON_TLB");
    //Remove Dark Mode
    body.classList.remove("bodyDark");
    topContainer.classList.remove("topContainerDark");
    hr.forEach(element => {
        element.classList.remove("hrDark")
    });
    GoldsmithsLogo.classList.remove("GoldsmithsLogoDark");
    bottomContainer.classList.remove("bottom-containerDark")
    buttonTLB.classList.remove("BUTTON_TLBDark"); 
    //Add Light Mode
    body.classList.add("bodyLight");
    topContainer.classList.add("topContainerLight");
    hr.forEach(element => {
        element.classList.add("hrLight")
    });
    GoldsmithsLogo.classList.add("GoldsmithsLogoLight");
    bottomContainer.classList.add("bottom-containerLight")
    buttonTLB.classList.add("BUTTON_TLBLight");   
}


function DisplayDarkModeButton(){
    var DarkLightMode = document.querySelector(".lightDarkMode");
    DarkLightMode.classList.remove("fa-sun");
    DarkLightMode.classList.add("fa-moon");
}

function DisplayLightModeButton(){
    var DarkLightMode = document.querySelector(".lightDarkMode");
    DarkLightMode.classList.remove("fa-moon");
    DarkLightMode.classList.add("fa-sun");
}

function DisplayLightModeImages(){
    document.querySelector(".UoLLogo").src = "images/U_of_Londo_Coursera_LightMode.png";
    document.querySelector(".languagesHTMLCSSJavaScript").src = "images/WebDevToolsIcon_LightMode.png";
}

function DisplayDarkModeImages(){
    document.querySelector(".UoLLogo").src = "images/U_of_Londo_Coursera_DarkMode.png";
    document.querySelector(".languagesHTMLCSSJavaScript").src = "images/WebDevToolsIcon_DarkMode.png";
}

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