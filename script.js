const modal=document.getElementById('modal'),player=document.getElementById('player'),title=document.getElementById('modalTitle');
document.querySelectorAll('.card').forEach(c=>c.addEventListener('click',()=>{title.textContent=c.dataset.title;player.src=c.dataset.video;modal.classList.add('open');modal.setAttribute('aria-hidden','false');player.play().catch(()=>{});}));
function closeModal(){player.pause();player.removeAttribute('src');player.load();modal.classList.remove('open');modal.setAttribute('aria-hidden','true');}
document.querySelector('.close').addEventListener('click',closeModal);modal.addEventListener('click',e=>{if(e.target===modal)closeModal()});document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});
