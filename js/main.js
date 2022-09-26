(() => {
    let contenedor = document.querySelector('.contenedor-clima'),
        contenedorImagen = document.querySelector('.contenedor-imagen')

    async function getData(){
        try {
            let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Buenos Aires &appid=fffc25dd0555327e5a0644d3cbc1749c`),
                json = await res.json();     
                
                let url1 = 'http://openweathermap.org/img/wn/01d@2x.png',
                    url2 = 'http://openweathermap.org/img/wn/02d@2x.png',
                    url3 = 'http://openweathermap.org/img/wn/03d@2x.png';

                console.log(json)

                // Creacion de los elementos del DOM
                const card = document.createElement('div'),
                      name = document.createElement('h2'),
                      tiempo = document.createElement('h3'),
                      humedad = document.createElement('p'),
                      presion = document.createElement('p'),
                      temperaturaMaxima = document.createElement('h3'),
                      temperaturaMinima = document.createElement('h3'),
                      viento = document.createElement('p'),
                      descripcion = document.createElement('p'),
                      imagen1 = document.createElement('img'),
                      imagen2 = document.createElement('img'),
                      imagen3 = document.createElement('img');

                      
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
                    imagen1.classList.add('img1');
                    imagen2.classList.add('img2');
                    imagen3.classList.add('img3');
                    
                // Haciendo text content en cada uno de los elementos    
                    name.textContent = json.name
                    tiempo.textContent = `Temperatura: ${(json.main.feels_like -273.15).toFixed(1)}°C`
                    humedad.textContent = `Humedad: ${json.main.humidity}`
                    presion.textContent = `Presion: ${json.main.pressure}`
                    temperaturaMaxima.textContent = `Temperatura Max: ${(json.main.temp_max - 273.15).toFixed(1)} °C`
                    temperaturaMinima.textContent = `Temperatura Min: ${(json.main.temp_min - 273.15).toFixed(1)} °C`
                    viento.textContent = `Viento: ${json.wind.speed}`
                    imagen1.src = url1
                    imagen2.src = url2
                    imagen3.src = url3
                   


                // Haciendo appenchild para mostrar los elementos
            
                    card.appendChild(descripcion)
                    card.appendChild(temperaturaMaxima)
                    card.appendChild(temperaturaMinima)
                    card.appendChild(humedad)
                    card.appendChild(presion)
                    card.appendChild(viento)
                    card.appendChild(imagen2)
                    card.appendChild(imagen3)
                    
                   
                 contenedorImagen.appendChild(name)
                 contenedorImagen.appendChild(tiempo)
                 contenedorImagen.appendChild(imagen1)
                 
                 contenedor.appendChild(card)   

        } catch (err) {
            let message = err.statusText || "Ocurrio un error"
                contenedor.textContent = `Error ${err.statusText} : ${message} `
            
        }
    }
    getData()

})();

