var tablePokemon = document.getElementById("table");
var bodyTable = document.getElementById("tbody");
var footerTable = document.createElement("tfoot");
var inputSearch = document.getElementById("input-search");
var button = document.getElementById("search-button");

let pokemones = [{
        id: 1,
        nombre: "Charmander",
        tipo: "Fuego",
        imagen: "https://www.pngmart.com/files/13/Pokemon-Charmander-PNG-Pic.png",
    },
    {
        id: 2,
        nombre: "Squartle",
        tipo: "Agua",
        imagen: "http://assets.stickpng.com/images/580b57fcd9996e24bc43c32a.png",
    },
    {
        id: 3,
        nombre: "Bulbasaur",
        tipo: "Planta",
        imagen: "https://www.pngmart.com/files/11/Bulbasaur-PNG-Transparent-Image.png",
    },
    {
        id: 4,
        nombre: "Pikachu",
        tipo: "Electrico",
        imagen: "https://eltallerdehector.com/wp-content/uploads/2022/06/ab82e-pikachu-cute-png.png",
    },
    {
        id: 5,
        nombre: "Totodile",
        tipo: "Agua",
        imagen: "https://i.pinimg.com/originals/ca/97/07/ca9707bf4a6613d8ab48a492642f7706.png",
    },
    {
        id: 6,
        nombre: "Dragonite",
        tipo: "dragón",
        imagen: "https://www.pngplay.com/wp-content/uploads/10/Dragonite-Pokemon-PNG-HD-Free-File-Download.png",
    },
    {
        id: 7,
        nombre: "Cyndaquil",
        tipo: "Fuego",
        imagen: "https://www.pngplay.com/wp-content/uploads/10/Cyndaquil-Pokemon-PNG-Background.png",
    },
];

function showHeadTable() {
    
    let keys = Object.keys(pokemones[0]);
    const row = document.createElement("tr");
    row.classList.add("table_head-tr");
    for (let i = 0; i < keys.length; i++) {

        let key = keys[i];
        key = key.charAt(0).toUpperCase() + key.substring(1);
        const cell = document.createElement("th");
        if (i === 0) {
            cell.classList.add("table_head-thBorderL");
        }
        if ((i > 0) || (i < keys.length - 2)) {
            cell.classList.add("table_head-th");
        }
        if (i === keys.length - 1) {
            cell.classList.add("table_head-thBorderR");
        }
        cell.classList.add("table_head-th");
        cell.innerText = key;
        row.appendChild(cell);
    }
    const table_head = document.getElementById("table_head");
    table_head.appendChild(row);
    tablePokemon.appendChild(row);
}

function showPokemons(foundPokemons) {

    bodyTable.innerHTML = '';
    foundPokemons.forEach(pokemon => {

        // Crear un <tr>
        let fila = document.createElement("tr");
        fila.classList.add("table_body-tr");
        // Creamos el <td> de nombre y lo adjuntamos a tr

        let keysAndValues=Object.entries(pokemon)

            console.log(keysAndValues)

            for(let [key,value] of keysAndValues){

                    let td = document.createElement("td");
                    td.innerText = value;
                    td.classList.add("table_body-td");
                if(key === 'id'){
                    
                    td.style.borderTopLeftRadius = "15px";
                    td.style.borderBottomLeftRadius = "15px";
                                  };
                if(key === 'nombre'){};
                if(key === 'tipo'){};
                if(key === 'imagen'){

                    td.innerText = "";
                    td.classList.add("table_body-img");
                    var img1 = document.createElement("img");
                    img1.src = value;
                    img1.style.width = "150px";
                    img1.style.padding = "5px";
                    td.style.borderTopRightRadius = "15px";
                    td.style.borderBottomRightRadius = "15px";
                    td.style.borderBottom = "3px solid #778bbe";
                    td.style.padding = "0.3em";
                    td.style.width = "25%";
                    td.appendChild(img1);

                };
                
                fila.appendChild(td);
            };


        bodyTable.appendChild(fila);

    });

    tablePokemon.appendChild(bodyTable);
}

function showFooterTable(enunciado) {
    let keys = Object.keys(pokemones[0]);
    let ultimaFila = document.createElement("tr");
    ultimaFila.classList.add("table_footer-tr");
    let ultimaColumna = document.createElement("td");
    ultimaColumna.classList.add("table_footer-td");
    ultimaColumna.colSpan = keys.length.toString();
    ultimaColumna.innerText = enunciado; // el textContent del td es el nombre
    ultimaFila.appendChild(ultimaColumna);
    footerTable.appendChild(ultimaFila);
    tablePokemon.appendChild(footerTable);
    footerTable.style.visibility = "hidden";

}




document.addEventListener("keyup", e => {
    

    if (e.target.matches('#input-search')) {
        footerTable.style.visibility = "hidden";
        const resultado = pokemones.filter(pokemon => {

            
            let keysAndValues = Object.entries(pokemon)
            // console.log(values)
            console.log(keysAndValues)
            for (let [key, value] of keysAndValues) {
                if (key !== 'imagen') {
                    if (value.toString().toLowerCase().includes(e.target.value.toLowerCase())) {
                        return pokemon
                    }
                }
            }
            // if(values.toString().toLowerCase().includes(e.target.value.toLowerCase())){
            //     if(values.)
            //     return pokemon
            // }


            // Funciona el metodo

            // let values=Object.values(pokemon)
            // // console.log(values)
            // if(values.toString().toLowerCase().includes(e.target.value.toLowerCase())){
            //     return pokemon
            // }



            // No funciona porque trae un array de objetos 

            // values.map(item =>{
            //     if(item.toString().toLowerCase().includes(e.target.value.toLowerCase())){
            //         return pokemon
            //     }
            // })

            // let keys=Object.keys(pokemon)
            // for(let i=0;i<keys.length;i++){
            //     let value=pokemon[keys[i]]

            //     if(value.toString().toLowerCase().includes(e.target.value.toLowerCase())){
            //         return pokemon;
            //     }
            // }
            // })



            // Tipos de variables 
            // Manejo arrays
            // Object
            // Transformar el arreglo con un map , concatenar los campos en un string 

        })


        if (resultado.length === 0) {
            bodyTable.innerHTML = '';
            footerTable.innerHTML = '';
            showFooterTable("No se encontraron resultados");
            footerTable.style.visibility = "visible";
        } else {
            showPokemons(resultado);
            footerTable.innerHTML = '';
            if(pokemones.length==resultado.length){
                footerTable.style.visibility = "hidden";
            }
            else{showFooterTable("Se encontraron: "+resultado.length+ "  resultados");
            footerTable.style.visibility = "visible";}
        }

    }
})

window.showHeadTable();
window.showPokemons(pokemones);
window.showFooterTable("No se encontraron elementos");