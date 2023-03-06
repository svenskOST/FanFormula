var navbar = document.getElementById("navbar")
var navbarvalue = 150
window.onscroll = function(){
  if(document.documentElement.scrollTop > navbarvalue){
    navbar.style.transitionProperty = "none"
    navbar.style.transitionDuration = "0s"
    navbar.style.top = "0px"
    navbar.style.position = "fixed"
  } 
  else{
    navbar.style.transitionProperty = "none"
    navbar.style.transitionDuration = "0s"
    navbar.style.top = navbarvalue + "px"
    navbar.style.position = "absolute";
  }
}

var animation1 = document.getElementsByClassName("animation1")
var animationtxt1 = document.getElementsByClassName("animationtxt1")
for(let i = 0; i < animation1.length; i++){
  let indicator = document.createElement("img")
  indicator.style.transitionDuration = "0.2s"
  indicator.style.height = "16.8px"
  indicator.style.width = "53.44px"
  indicator.style.display = "block"
  indicator.style.marginRight = "auto"
  indicator.style.marginLeft = "auto"
  indicator.style.marginTop = "5px"
  indicator.style.opacity = 0
  indicator.src = "img/indicatorAsset 1.png"
  animation1[i].appendChild(indicator)
  animationtxt1[i].addEventListener("mouseenter",function(){
    animation1[i].style.top = "6px"
    indicator.style.top = "0px"
    indicator.style.opacity = 1
  })
  animation1[i].addEventListener("mouseleave",function(){
    animation1[i].style.top = "16px"
    indicator.style.top = "10px"
    indicator.style.opacity = 0
  })
}

var login = document.getElementById("login")
var register = document.getElementById("register")
var articles = document.getElementById("articles")
var articlearray = document.getElementsByClassName("article")
var articleimgarray = document.getElementsByClassName("articleimg")
var mediaico = document.getElementsByClassName("media")
var infobox = document.getElementsByClassName("infobox")
var infoa = document.getElementsByClassName("infoa")
var originalwidth2 = [
  articleimgarray[0].clientWidth,
  articleimgarray[1].clientWidth,
  articleimgarray[2].clientWidth,
  articleimgarray[3].clientWidth
]
var originalheight2 = [
  articleimgarray[0].clientHeight,
  articleimgarray[1].clientHeight,
  articleimgarray[2].clientHeight,
  articleimgarray[3].clientHeight
]

login.addEventListener("mouseenter", function(){
  login.style.textDecoration = "underline"
})
login.addEventListener("mouseleave", function(){
  login.style.textDecoration = "none"
})

register.addEventListener("mouseenter", function(){
  register.style.textDecoration = "underline"
})
register.addEventListener("mouseleave", function(){
  register.style.textDecoration = "none"
})

for(let i = 0; i < articlearray.length; i++){
  articlearray[i].addEventListener("mouseenter", function(){
    articleimgarray[i].style.borderRadius = "0px"
    articleimgarray[i].style.width = originalwidth2[i] * 1.1 + "px"
    articleimgarray[i].style.height = originalheight2[i] * 1.1 + "px"
  })

  articlearray[i].addEventListener("mouseleave", function(){
    articleimgarray[i].style.borderRadius = "20px"
    articleimgarray[i].style.width = originalwidth2[i] + "px"
    articleimgarray[i].style.height = originalheight2[i] + "px"
  })
}

for(let i = 0; i < infoa.length; i++){
  let arrow = document.createElement("div")
  infobox[i].appendChild(arrow)
  arrow.style.width = 0
  arrow.style.height = 0
  arrow.style.borderTop = "15px solid transparent"
  arrow.style.borderBottom = "15px solid transparent"
  arrow.style.borderLeft = "25px solid red"
  arrow.style.borderRadius = "4px"
  arrow.style.opacity = 0
  arrow.style.left = - 70 + "px"
  arrow.style.top = 21 + "px"
  arrow.style.transitionProperty = "opacity, left"
  arrow.style.transitionDuration = "0.2s"
  arrow.style.position = "absolute"
  infoa[i].addEventListener("mouseenter", function(){
    arrow.style.opacity = 1
    infoa[i].style.left = "20px"
    arrow.style.left = - 20 + "px"
  })
  infobox[i].addEventListener("mouseleave", function(){
    arrow.style.opacity = 0
    infoa[i].style.left = "0px"
    arrow.style.left = - 70 + "px"
  })
}

for(let i = 0; i < mediaico.length; i++){
  let circle = document.createElement("div")
  let x
  let y
  circle.style.borderRadius = "50%"
  circle.style.transitionDuration = "0.2s"
  circle.style.position = "absolute"
  circle.style.width = "80px"
  circle.style.height = "80px"
  circle.style.border = "3.5px solid red"
  if(i == 0){
    x = 14
    y = 14
  }
  else if(i == 1){
    x = 12
    y = 13
  }
  else if(i == 2){
    x = 13
    y = 14
  }
  else if(i == 3){
    x = 7
    y = 6
  }
  circle.style.left = mediaico[i].clientLeft - x + "px"
  circle.style.top = mediaico[i].clientTop - y + "px"
  mediaico[i].appendChild(circle)
  circle.style.opacity = 0
  mediaico[i].addEventListener("mouseenter", function(){
    circle.style.opacity = 1
    mediaico[i].style.scale = "90%"
  })
  mediaico[i].addEventListener("mouseleave", function(){
    circle.style.opacity = 0
    mediaico[i].style.scale = "100%"
  })
}