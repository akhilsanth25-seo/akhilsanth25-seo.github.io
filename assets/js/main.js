
(() => {
 const menuBtn=document.querySelector('.menu-btn');
 const nav=document.querySelector('.nav-links');
 const works=document.querySelector('.works-menu');
 const toggle=document.querySelector('.works-toggle');
 if(menuBtn && nav){menuBtn.addEventListener('click',()=>{const open=nav.classList.toggle('mobile-open');menuBtn.setAttribute('aria-expanded',String(open));});}
 if(works && toggle){
   toggle.addEventListener('click',(e)=>{e.preventDefault();const open=works.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});
   works.addEventListener('mouseenter',()=>{if(window.matchMedia('(min-width:701px)').matches)works.classList.add('open');});
   works.addEventListener('mouseleave',()=>{if(window.matchMedia('(min-width:701px)').matches)works.classList.remove('open');});
   document.addEventListener('click',(e)=>{if(!works.contains(e.target)){works.classList.remove('open');toggle.setAttribute('aria-expanded','false');}});
   document.addEventListener('keydown',(e)=>{if(e.key==='Escape'){works.classList.remove('open');toggle.setAttribute('aria-expanded','false');}});
 }
 const lightbox=document.querySelector('.lightbox');
 if(lightbox){
   const img=lightbox.querySelector('img');
   document.querySelectorAll('[data-lightbox]').forEach(btn=>btn.addEventListener('click',()=>{img.src=btn.dataset.src;img.alt=btn.dataset.alt||'SEO evidence screenshot';lightbox.classList.add('open');lightbox.setAttribute('aria-hidden','false');}));
   const close=()=>{lightbox.classList.remove('open');lightbox.setAttribute('aria-hidden','true');img.src='';};
   lightbox.querySelector('.lightbox-close').addEventListener('click',close);
   lightbox.addEventListener('click',e=>{if(e.target===lightbox)close();});
   document.addEventListener('keydown',e=>{if(e.key==='Escape')close();});
 }
})();
