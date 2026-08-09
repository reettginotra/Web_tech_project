// Custom cursor
const cur=document.getElementById('cur'),ring=document.getElementById('cur-ring');
if(cur && ring){
  let mx=0,my=0,rx=0,ry=0;
  document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;cur.style.left=mx+'px';cur.style.top=my+'px';});
  (function anim(){rx+=(mx-rx)*.1;ry+=(my-ry)*.1;ring.style.left=rx+'px';ring.style.top=ry+'px';requestAnimationFrame(anim);})();
}
// Scroll reveal
const ro=new IntersectionObserver(entries=>entries.forEach(e=>{
  if(e.isIntersecting){e.target.classList.add('vis');ro.unobserve(e.target);}
}),{threshold:.08});
document.querySelectorAll('.reveal').forEach(el=>ro.observe(el));

// Mark active nav link
const path=window.location.pathname.split('/').pop()||'index.html';
document.querySelectorAll('.nav-links a').forEach(a=>{
  if(a.getAttribute('href')===path) a.classList.add('active');
});
