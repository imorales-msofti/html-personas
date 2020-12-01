function cargarDatosPersona(){

    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then(response => response.json())
      .then(jsonData => {
        let tablePersona = document.getElementById('table-persona');

        let tablePersonaTbody  = tablePersona.getElementsByTagName('tbody')[0];
        
        for (const itemPersona of jsonData) {
            
            tablePersonaTbody.innerHTML += `<tr>
            <td>${itemPersona.id}</td>
            <td>${itemPersona.title}</td>
            </tr>`
        }

        
        
      })
}

cargarDatosPersona();
