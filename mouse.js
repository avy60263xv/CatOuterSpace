//Window.innerWidth
//Window.innerHeight

const cat = document.getElementById("cat_astronaut");

let mouse = {
    x:0,
    y:0
}
window.addEventListener('mousemove', function(e){
    //console.log(`${e.pageX},${e.pageY}`);
    mouse.x = e.pageX;
    mouse.y = e.pageY;
    cat.style.left = mouse.x + "px"; //cat 左右移
    cat.style.top = mouse.y + "px";  //cat 上下移   
});

//json 抓資料
var requestURL = 'https://raw.githubusercontent.com/avy60263xv/CatOuterSpace/main/planet.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
//
request.onload = function() {
    var planet = request.response;
    //console.log(planet);
    addBtns(planet);
}

function addBtns(obj){
    var ul = document.getElementById("StarButtons");
    for(let i=0;i<=7;i++){
        ul.innerHTML += `<li label=${[i]}><div class="starcircle"></div>${obj[i].nameCh}</li>`;
        const li = ul.getElementsByTagName("li");
    }
//Btn 星球按鈕個人化
    const li = ul.getElementsByTagName("li");
    const starcircle = ul.getElementsByClassName("starcircle");
    for(let j=0; j<=7;j++){
        li[j].style.boxShadow = `0 2px 25px ${obj[j].color}`;
        starcircle[j].style.background = `linear-gradient(${obj[j].color}, rgba(255, 255, 255, 0.5))`
        starcircle[j].style.boxShadow = `0 2px 20px ${obj[j].color}`
        li[j].addEventListener("mouseenter", function(e){
            li[j].style.background = `linear-gradient(290deg,${obj[j].color}, rgba(35, 35, 35, 0.1))`;
        });
        li[j].addEventListener("mouseleave", function(e){
            li[j].style.background = "transparent";
        });
        li[j].addEventListener("click", function(e){
            const planetIntro = document.getElementById("planet_intro");    
            const planetImg = document.getElementById("planet_img");           
            planetIntro.innerHTML = `${obj[j].intro}`;
            console.log(planetIntro);
            planetImg.src = `img/${obj[j].plantImg}`
        });
    }
}


