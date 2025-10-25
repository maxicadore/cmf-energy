document.addEventListener('DOMContentLoaded', function(){
  const contactForm = document.getElementById('contact-form');
  contactForm.addEventListener('submit', function(e){
    e.preventDefault();
    alert('Gracias. Su mensaje fue enviado (simulado).');
    contactForm.reset();
  });
});
