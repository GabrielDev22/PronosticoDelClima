(() => {
    let contenedor = document.querySelector('.contenedor-clima'),
        contenedorImagen = document.querySelector('.contenedor-imagen')

    async function getData(){
        try {
            let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Buenos Aires &appid=fffc25dd0555327e5a0644d3cbc1749c`),
                json = await res.json();    
                
                let url = "http://openweathermap.org/img/w/";

                console.log(json)

                const fecha = new Date(),
                dia = fecha.getDate(),
                mes = fecha.getMonth(),
                year = fecha.getFullYear();

            // Creacion de los elementos del dom de la Fecha
                const contenedorFecha = document.createElement('div')
                const pDia = document.createElement('p')
                const pMes= document.createElement('p')
                const pYear = document.createElement('p')

                contenedorFecha.appendChild(pDia)
                contenedorFecha.appendChild(pMes)
                contenedorFecha.appendChild(pYear)

            // Creacion de las clases de la fecha    
               contenedorFecha.classList.add('contenedor-fecha')
               pDia.classList.add('dia')
               pMes.classList.add('mes')
               pYear.classList.add('year')

                pDia.textContent = dia 
                pMes.textContent = `/${mes + 1}`
                pYear.textContent = `/${year}`            

                // Creacion de los elementos del DOM
                const card = document.createElement('div'),
                      name = document.createElement('h2'),
                      tiempo = document.createElement('h3'),
                      humedad = document.createElement('p'),
                      presion = document.createElement('p'),
                      temperaturaMaxima = document.createElement('h3'),
                      temperaturaMinima = document.createElement('h3'),
                      viento = document.createElement('p'),
                      descripcion = document.createElement('p');
                      descripcion1 = document.createElement('p');
                      imagen1 = document.createElement('img'),
                      
                // Creando las clases a los elementos
                    card.classList.add('card')
                    name.classList.add('name')
                    tiempo.classList.add('tiempo')
                    humedad.classList.add('humedad')
                    presion.classList.add('presion')
                    temperaturaMaxima.classList.add('temperaturaMaxima')
                    temperaturaMinima.classList.add('temperaturaMinima')
                    descripcion.classList.add('descripcion-clima')
                    viento.classList.add('viento')
                    descripcion1.classList.add('descripcion1');
                    imagen1.classList.add('imagen1')
                    
                // Haciendo text content en cada uno de los elementos    
                    name.textContent = json.name
                    tiempo.textContent = `Temperatura: ${(json.main.feels_like -273.15).toFixed(1)}°C`
                    humedad.textContent = `Humedad: ${json.main.humidity}`
                    presion.textContent = `Presion: ${json.main.pressure}`
                    temperaturaMaxima.textContent = `Temperatura Max: ${(json.main.temp_max - 273.15).toFixed(1)} °C`
                    temperaturaMinima.textContent = `Temperatura Min: ${(json.main.temp_min - 273.15).toFixed(1)} °C`
                    viento.textContent = `Viento: ${json.wind.speed}`
                    descripcion1.textContent = `descripcion: ${json.weather[0].description}`
                    imagen1.src = url + json.weather[0].icon + '.png';

                // Haciendo appenchild para mostrar los elementos
            
                    card.appendChild(descripcion)
                    card.appendChild(temperaturaMaxima)
                    card.appendChild(temperaturaMinima)
                    card.appendChild(humedad)
                    card.appendChild(presion)
                    card.appendChild(viento)
                   
                    contenedorImagen.appendChild(name)
                    contenedorImagen.appendChild(contenedorFecha)
                    contenedorImagen.appendChild(tiempo)
                    contenedorImagen.appendChild(descripcion1)
                    contenedorImagen.appendChild(imagen1)
                 
               
                 contenedor.appendChild(card)   

        } catch (err) {
            let message = err.statusText || "Ocurrio un error"
                contenedor.textContent = `Error ${err.statusText} : ${message} `
            
        }
    }
    getData()
})();



