<script>
  function enviarPorWhatsApp() {
    const nombre = document.getElementById('nombre').value;
    const telefono = document.getElementById('telefono').value;
    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;

    const mensaje = `Hola, soy ${nombre}. Quiero reservar un turno para el ${fecha} a las ${hora}. Mi teléfono es ${telefono}.`;
    const telefonoDestino = '5492923538525'; // Número de la peluquería (con código de país, sin +)

    const url = `https://wa.me/${telefonoDestino}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  }
</script>