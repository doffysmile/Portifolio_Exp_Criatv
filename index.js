document.addEventListener('DOMContentLoaded', ()=>{
  // year
  const year = document.getElementById('year');
  if(year) year.textContent = new Date().getFullYear();

  // nav toggle
  const navToggle = document.querySelector('.nav-toggle');
  const siteNav = document.querySelector('.site-nav');
  if(navToggle && siteNav){
    navToggle.addEventListener('click', ()=>{
      const visible = siteNav.style.display === 'flex';
      siteNav.style.display = visible ? 'none' : 'flex';
    });
  }

  // smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', (e)=>{
      const href = a.getAttribute('href');
      if(href.length>1){
        e.preventDefault();
        const target = document.querySelector(href);
        if(target) target.scrollIntoView({behavior:'smooth',block:'start'});
        if(siteNav) siteNav.style.display = 'none';
      }
    })
  });

  // project modal
  const modal = document.getElementById('modal');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');
  const closeBtn = document.querySelector('.modal-close');
  document.querySelectorAll('.view-project').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      modalTitle.textContent = btn.dataset.title || '';
      modalDesc.textContent = btn.dataset.desc || '';
      modal.setAttribute('aria-hidden','false');
    });
  });
  if(closeBtn){
    closeBtn.addEventListener('click', ()=> modal.setAttribute('aria-hidden','true'))
  }
  if(modal){
    modal.addEventListener('click', e=>{ if(e.target===modal) modal.setAttribute('aria-hidden','true') })
  }
});
