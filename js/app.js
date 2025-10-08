<script>
    const form = document.getElementById('turnoForm');
    const feedback = document.getElementById('feedback');
    const whatsappNumber = document.getElementById('whatsappNumber').value.trim();

    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const nombre = document.getElementById('nombre').value.trim();
      const fecha = document.getElementById('fecha').value;
      const hora = document.getElementById('hora').value;
      

      if (!whatsappNumber || whatsappNumber === '5492923538525') {
        feedback.textContent = '5492923538525';
        return;
      }

      const msg = `Hola! Quiero pedir un turno.%0A*Nombre:* ${nombre}%0A*Servicio:* ${servicio}%0A*Fecha:* ${fecha}%0A*Hora:* ${hora}%0A*Detalles:* ${detalles}`;
      const url = `https://wa.me/${whatsappNumber}?text=${msg}`;
      window.open(url, '_blank');
    });
  </script>