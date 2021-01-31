//Window.innerWidth
//Window.innerHeight

const cat = document.getElementById("cat_astronaut");

let mouse = {
    x:0,
    y:0
}
window.addEventListener('mousemove', function(e){
   // console.log(`${e.pageX},${e.pageY}`);
    mouse.x = e.pageX;
    mouse.y = e.pageY;
    cat.style.left = mouse.x + "px"; //cat 左右移
    cat.style.top = mouse.y + "px";  //cat 上下移   
});