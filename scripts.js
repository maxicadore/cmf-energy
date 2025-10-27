document.addEventListener('DOMContentLoaded', function(){
  // Mobile menu toggle
  const menuBtn = document.getElementById('menuBtn');
  const nav = document.getElementById('nav');
  menuBtn && menuBtn.addEventListener('click', () => {
    if(nav.style.display === 'flex') nav.style.display = 'none';
    else nav.style.display = 'flex';
  });

  // Form handling (simulado). Aquí podrías integrar Formspree/Netlify/FormBackend.
  const form = document.getElementById('presupuesto-form');
  const msg = document.getElementById('formMessage');
  form && form.addEventListener('submit', function(e){
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const tipo = document.getElementById('tipo').value;
    msg.textContent = 'Gracias ' + (name || '') + '. Hemos recibido tu solicitud para: ' + (tipo || '—') + '. Nos contactaremos pronto.';
    form.reset();
    window.scrollTo({ top: msg.offsetTop - 100, behavior: 'smooth' });
  });
});
