//Click on  Toggel  settings gear
document.querySelector(".toggle-settings .fa-gear").onclick = function () {
    //Toggle Class Fa-Spin For Rotation on Self
    this.classList.toggle("fa-spin");
    //Toggle Class Open ON Main Settings box
    document.querySelector(".setting-box").classList.toggle("open"); 
};

//Click on  color  settings gear
document.querySelector(".setting-box .color-icon").onclick = function () {
    //Toggle Class Open ON Main Settings box
    document.querySelector(".option-box").classList.toggle("close"); 
};

//Switch colors
const MaincolorsLi = document.querySelectorAll(".Main-colors-list li");

//loop on all list items
MaincolorsLi.forEach(li => {

    //click on every list items
    li.addEventListener("click", (e) => {
        
        //set color on root 
        document.documentElement.style.setProperty('--main-color', e.target.dataset.color)
        
    });
    
});


//switch background color
const SecondarycolorsLi = document.querySelectorAll(".Secondary-color-list li");

//switch Secondary color
const SecondarycolorLi = document.querySelectorAll(".Secondary-color-list li");

//loop on all list items
SecondarycolorLi.forEach(li => {

    //click on every list items
    li.addEventListener("click", (e) => {
        
        //set color on root 
        document.documentElement.style.setProperty('--secondary-color', e.target.dataset.color)
        
    });
    
});

//switch para color
const ParagraphColorListLi = document.querySelectorAll(".paragraph-color-list li");

//loop on all list items
ParagraphColorListLi.forEach(li => {

    //click on every list items
    li.addEventListener("click", (e) => {
        
        //set color on root 
        document.documentElement.style.setProperty('--third-color', e.target.dataset.color)
        
    });
    
});

//switch para color
const backgroundColorListLi = document.querySelectorAll(".background-color-list li");

//loop on all list items
backgroundColorListLi.forEach(li => {

    //click on every list items
    li.addEventListener("click", (e) => {
        
        //set color on root 
        document.documentElement.style.setProperty('--fourth-color', e.target.dataset.color)
        
    });
    
});

//select landing page element
let landing = document.querySelector(".landing");

//Get array os imgs
let imgsArray = ["landing.jpg", "02.jpg", "03.jpg"];

setInterval(() => { 

//get random number 
let randomNumber = Math.floor(Math.random() * imgsArray.length);

//change background image url 
landing.style.backgroundImage = 'url("images/' + imgsArray[randomNumber] + '")';

}, 8000 );  

//cheak if theres  local colors
let  mainColors = localStorage.getItem("color_option");

if (mainColors !== null) {
    
    document.documentElement.style.setProperty('--main-color',localStorage.getItem("color_option"));
    
};
/*
//loop on all list items
colorsLi.forEach(li => {
    
    //Click on every list items 
    li.addEventListener("click", (e) => {
        
        //set color on rot
        //document.documentElement.style.setProperty('--main-color', e.tareget.dataset.color);
        
        //set color on local storage
        //localStorage.setItem("color_option,e.tareget.dataset.color")

        //remove active class from all children
      //  e.tareget   .parentElement.querySelectorAll(.active).forEeach(element => {
            
          // element.classlist.remove("active"); 
            
     //   });
        
        //add active class in target
       // e,target.classList.add("active");
    });
});*/



//btnScroll
let btnUp = document.querySelector(".buttonUp");

window.onscroll = function(){
    if (window.scrollY >= 1000){
        btnUp.style.display = "block";
    } else {
        btnUp.style.display = "none";
    };
};


btnUp.onclick = function () {
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: "smooth",
    });
  };
//end btnscroll

//search
  let Search = document.querySelector(".Srch")
  let inptSrch = document.querySelector(".inputSearch");
  let clsSrch = document.querySelector(".closeSrch");

  Search.onclick = function () {
    Search.style.display = "none";
    inptSrch.style.display = "block";
    clsSrch.style.display = "block";
    
  };

clsSrch.onclick = function () {

    Search.style.display = "block";
    inptSrch.style.display = "none";
    clsSrch.style.display = "none";
        
};
//end search
