const toggle=document.querySelector('.nav-toggle');
const nav=document.querySelector('#nav');
toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')==='true';toggle.setAttribute('aria-expanded',String(!open));nav.classList.toggle('open',!open)});
nav.addEventListener('click',event=>{if(event.target.closest('a')){toggle.setAttribute('aria-expanded','false');nav.classList.remove('open')}});
document.querySelector('#year').textContent=new Date().getFullYear();
document.querySelectorAll('.lite-youtube').forEach(button=>button.addEventListener('click',()=>{
  const id=button.dataset.videoId;
  const frame=document.createElement('iframe');
  frame.src=`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`;
  frame.title='Unworthy by All for Christ';
  frame.allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
  frame.allowFullscreen=true;
  button.replaceWith(frame);
}));
