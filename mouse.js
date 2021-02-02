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

/*function addImg(obj){
    //圖片都先載入 但透明度設定0隱藏
    const starSection = document.getElementById("starSection");   
    for(let i=0;i<=7;i++){
        starSection.innerHTML += `<img class="hide" src="img/${obj[i].plantImg}">`
    }
}*/

function addBtns(obj){
    //加按鈕跟圖片
    var ul = document.getElementById("StarButtons");
    const starSection = document.getElementById("starSection");  
    
    for(let i=0;i<=7;i++){
        ul.innerHTML += `<li label=${[i]}><div class="starcircle"></div>${obj[i].nameCh}</li>`;
        const li = ul.getElementsByTagName("li");
        const starimg = document.createElement('img');
        starimg.src = 'img/'+obj[i].plantImg;
        starimg.id = 'planet_img'+i;
        starimg.className = 'hide';
        starSection.append(starimg);
    }

//Btn 星球按鈕個人化
    const li = ul.getElementsByTagName("li");
    const starcircle = ul.getElementsByClassName("starcircle");
    const count = [];
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
//Btn按下        
        li[j].addEventListener("click", function(e){
            const planetIntro = document.getElementById("planet_intro");         
            planetIntro.innerHTML = `${obj[j].intro}`;
            count.push(j); //存現在哪個被點
            console.log(count);
            console.log(count[count.length-2]);
            //圖片哪一張要顯示
            const starimg = document.getElementById("planet_img"+j); //現在被點的
            const starimgBefore = document.getElementById("planet_img"+ count[count.length-2]); //上次被點的

            starimg.className = 'show planet_rotate';
            if(starimg == count[length] && starimg.className == 'show'){
                starimg.className = 'show planet_rotate';
            }else if(starimg != count[length]){
                starimgBefore.className = 'hide';
                starimg.className = 'show planet_rotate';
            }

            console.log(starimg);
            //console.log(planetIntro);
            //planetImg.src = `img/${obj[j].plantImg}`
        });
    }
}


