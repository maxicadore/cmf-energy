document.addEventListener('DOMContentLoaded', function(){
  const simBtn = document.getElementById('sim-btn');
  const simResult = document.getElementById('sim-result');
  simBtn.addEventListener('click', function(){
    const coords = document.getElementById('coords').value.trim();
    const consumo = Number(document.getElementById('consumo').value) || 3500;
    // Simulación simple basada en consumo y una estimación solar
    const promedio_kwh_por_panel = 330 * 0.85 * 365/1000; // kWh/año estimado por panel 330W con factor 0.85
    const produccion_anual = Math.round((consumo * 0.6)); // asumimos cubrir 60% del consumo
    const panels = Math.max(1, Math.round(produccion_anual / promedio_kwh_por_panel));
    simResult.innerHTML = `<strong>Estimación:</strong>
    <ul>
      <li>Coordenadas: ${coords || 'No ingresadas'}</li>
      <li>Consumo anual estimado: ${consumo} kWh</li>
      <li>Producción anual estimada con ${panels} panel(es): ${Math.round(panels*promedio_kwh_por_panel)} kWh</li>
      <li>Ahorro aproximado: ${Math.round((panels*promedio_kwh_por_panel)/consumo*100)}% del consumo anual</li>
      <li>Recomendación: instalar ${panels} panel(es). Esto es una estimación inicial; se requiere visita técnica.</li>
    </ul>`;
  });
  // Contact form fake submit
  const contactForm = document.getElementById('contact-form');
  contactForm.addEventListener('submit', function(e){
    e.preventDefault();
    alert('Gracias. Su mensaje fue enviado (simulado).');
    contactForm.reset();
  });
});
