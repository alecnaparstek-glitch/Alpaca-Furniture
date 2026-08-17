const menuToggle=document.querySelector(".menu-toggle"),nav=document.querySelector(".nav");if(menuToggle){menuToggle.addEventListener("click",()=>{const open=nav.classList.toggle("open");menuToggle.setAttribute("aria-expanded",open)});nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");menuToggle.setAttribute("aria-expanded","false")}))}
document.getElementById("year").textContent=new Date().getFullYear();
const items=[...document.querySelectorAll(".gallery-item")],box=document.querySelector(".lightbox"),boxImg=box.querySelector("img"),caption=box.querySelector("figcaption");let current=0;
function show(i){current=(i+items.length)%items.length;const item=items[current];boxImg.src=item.dataset.full;boxImg.alt=item.querySelector("img").alt;caption.textContent=item.dataset.caption||"";box.classList.add("open");box.setAttribute("aria-hidden","false");document.body.style.overflow="hidden"}
function close(){box.classList.remove("open");box.setAttribute("aria-hidden","true");document.body.style.overflow=""}
items.forEach((item,i)=>item.addEventListener("click",()=>show(i)));
box.querySelector(".lightbox-close").addEventListener("click",close);
box.querySelector(".lightbox-prev").addEventListener("click",()=>show(current-1));
box.querySelector(".lightbox-next").addEventListener("click",()=>show(current+1));
box.addEventListener("click",e=>{if(e.target===box)close()});
document.addEventListener("keydown",e=>{if(!box.classList.contains("open"))return;if(e.key==="Escape")close();if(e.key==="ArrowLeft")show(current-1);if(e.key==="ArrowRight")show(current+1)});
