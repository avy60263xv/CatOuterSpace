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
        ul.innerHTML += `<li label=${[i]}>${obj[i].nameCh}</li>`;
        const li = ul.getElementsByTagName("li");
        const starimg = document.createElement('img');
        starimg.src = 'img/'+obj[i].plantImg;
        starimg.id = 'planet_img'+i;
        starimg.className = 'hide';
        starSection.append(starimg);
    }

//Btn 星球按鈕個人化
    const li = ul.getElementsByTagName("li");
    const starcirclediv = document.createElement("div");
    const div = document.createElement("div");
    const count = [];
    let k = 0; //紀錄被點幾次
    for(let j=0; j<=7;j++){
        li[j].style.boxShadow = `0 2px 25px ${obj[j].color}`;
        li[j].addEventListener("mouseenter", function(){
            li[j].style.background = `linear-gradient(290deg,${obj[j].color}, rgba(35, 35, 35, 0.1))`;
            li[j].textContent = `${obj[j].nameEn}`;
            li[j].append(div);
            div.className = 'starcircle';
            div.style.background = `linear-gradient(${obj[j].color}, rgba(255, 255, 255, 0.5))`;
            div.style.boxShadow = `0 2px 20px ${obj[j].color}`;
        });
        li[j].addEventListener("mouseleave", function(){
            li[j].style.background = "transparent";
            li[j].textContent = `${obj[j].nameCh}`;
        });
//Btn按下        
        li[j].addEventListener("click", function(e){
           //要跑哪一筆介紹跟圖片
            const planetIntro = document.getElementById("planet_intro");         
            planetIntro.innerHTML = `${obj[j].intro}`;

            //要跑該行星與太陽的距離
            const distance = document.getElementById("distance");
            distance.innerHTML = `${obj[j].distanceFromSun} 天文單位  (${obj[j].distanceFromSun*149597871}公里)`;
            const distanceBar = document.getElementById("distanceBar");
            distanceBar.style.width = (obj[j].distanceFromSun*10) + 'px';
            distanceBar.style.background = (obj[j].color);
            littlePlanet.src = `img/${obj[j].plantImg}`;

            count.push(j); //用迴圈存現在哪個被點
            //console.log(count[count.length-2]);
            //圖片哪一張要顯示
             
            k++; //按鈕被點就+1
            const planetImg = document.getElementById("planet_img"+j); //現在被點的
            const planetImgBefore = document.getElementById("planet_img"+ count[k-2]); //上次被點的
            
            if(k>1 && planetImgBefore != planetImg){ //當現在按的與前一個不同時，前一個隱藏，現在的show
                planetImgBefore.className='hide';
                planetImg.className='show planet_rotate';
            }else{ //第一筆不管按什麼 都show
                planetImg.className='show planet_rotate';
            }
            

            /*starimg.className = 'show planet_rotate';
            if(planet_img == count[length] && starimg.className == 'show'){
                starimg.className = 'show planet_rotate';
            }else if(k > 1 && planet_imgimg.className == 'hide' ){
                planet_img.className = 'show planet_rotate';
                planet_imgBefore.className = 'hide';
            }*/
            //const starimgBefore; = document.getElementById("planet_img"+ count[count.length-2]);
            //console.log(planetIntro);
            //planetImg.src = `img/${obj[j].plantImg}`
        });
    }
}


