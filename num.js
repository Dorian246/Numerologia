function calcularNumerologia() {
  const nombre = document.getElementById("name").value.toUpperCase();
  const fechaNacimiento = new Date(document.getElementById("birthdate").value);
  const dia = fechaNacimiento.getDate();
  const mes = fechaNacimiento.getMonth() + 1;
  const año = fechaNacimiento.getFullYear();
  let suma = 0;
  let digitos = [];
  

  
  suma += dia;
  suma += mes;
  suma += año;


  while (suma > 0) {
    digitos.push(suma % 10);
    suma = Math.floor(suma / 10);
  }
  suma = digitos.reduce((a, b) => a + b, 0);

 
  for (let i = 0; i < nombre.length; i++) {
    const letra = nombre.charAt(i);
    if (letra >= "A" && letra <= "Z") {
      suma += letra.charCodeAt(0) - 64;
    }
  }

  
  while (suma > 9) {
    digitos = [];
    while (suma > 0) {
      digitos.push(suma % 10);
      suma = Math.floor(suma / 10);
    }
    suma = digitos.reduce((a, b) => a + b, 0);
  }
  let significado = "";
  switch (suma) {
    case 1:
      significado = "Líder, emprendedor, original, inicio.";
      break;
    case 2:
      significado = "Colaborador, diplomático, paciente.";
      break;
    case 3:
      significado = "Comunicador, creativo, expresivo.";
      break;
    case 4:
      significado = "Organizado, estable, trabajador.";
      break;
    case 5:
      significado = "Aventurero, versátil, curioso.";
      break;
    case 6:
      significado = "Armonioso, justo, amoroso.";
      break;
    case 7:
      significado = "Analítico, sabio, espiritual.";
      break;
    case 8:
      significado = "Ambicioso, práctico, autoritario.";
      break;
      case 9:
        significado = "Compasivo, generoso, humanitario.";
        break;}
  
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "<p>" + nombre + ", tu número de numerología es " + suma + "<br> Significado:  "+ significado +"</p>";
}