
fetch("https://randomuser.me/api/")
  .then((response) => response.json())
  .then((data) => modificarTodosLosDatos(data));



function modificarDom(data) {
  let cambiarNombre = document.getElementById("nombre");
  let cambiarFoto = document.getElementById("foto");
  let nombreDeUsuario = data.results[0].name;
  let fotoDeUsuario = data.results[0].picture.large;
  cambiarNombre.textContent =
    nombreDeUsuario.first + " " + nombreDeUsuario.last;
  cambiarFoto.src = fotoDeUsuario;
}

function modificarTodosLosDatos(data) {
  modificarDom(data);
  let areaContacto = document.getElementById("contacto");
  let usuario = data.results[0];


  areaContacto.innerHTML = `
  <section>
  <h3>Información personal</h3>
  <p><strong>Fecha de nacimiento:</strong>${usuario.dob.date}<br>
     <strong>Dirección:</strong> Calle ${usuario.location.street.name} numero${usuario.location.street.number} ,Ciudad ${usuario.location.city} ,Pais ${usuario.location.country}<br>
     <strong>Correo electrónico: </strong> <a href="${usuario.email}">${usuario.email}</a><br>
     <strong>Teléfono:</strong> <p>${usuario.phone}</p>
  </p>
</section>`;
}


const btns = document.querySelectorAll('.portfolio li button');

btns.forEach(btn => {
  btn.addEventListener('click', () => {
    const details = btn.previousElementSibling;
    details.classList.toggle('hidden');
    btn.textContent = details.classList.contains('hidden') ? 'Ver más' : 'Ver menos';
  });
});