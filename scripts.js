document.addEventListener('DOMContentLoaded', function(){
  const form = document.getElementById('presupuesto-form');
  form.addEventListener('submit', function(e){
    e.preventDefault();
    alert('Gracias, su solicitud de presupuesto fue enviada (simulado).');
    form.reset();
  });
});
