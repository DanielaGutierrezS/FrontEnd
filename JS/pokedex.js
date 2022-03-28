const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("npokemon");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./pokemon-sad.gif")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
            console.log(pokeImg);

            let nombre = data.species.name;
            nombre=nombre.toUpperCase();
            nombrePokemon(nombre);
            console.log(nombre);

            let tipo = data.types[0].type.name;
            tipo=tipo.toUpperCase();
            tipoPokemon(tipo);
            console.log(tipo);

            let mov = data.moves[0].move.name;
            mov=mov.toUpperCase();
            movPokemon(mov);
            console.log(mov);

            let ps = data.stats[0].base_stat;
            psPokemon(ps);
            console.log(ps);

            let attk = data.stats[1].base_stat;
            attkPokemon(attk);
            console.log(attk);

            let def = data.stats[2].base_stat;
            defPokemon(def);
            console.log(def);

            let atks = data.stats[3].base_stat;
            atksPokemon(atks);
            console.log(atks);

            let defs = data.stats[4].base_stat;
            defsPokemon(defs);
            console.log(defs);

            let vel = data.stats[5].base_stat;
            velPokemon(vel);
            console.log(vel);
        }
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("img");
    pokePhoto.src = url;
}

function nombrePokemon (nombre){
    const nombrePokemon = document.getElementById("nombre");
    nombrePokemon.innerHTML=nombre;
}
function tipoPokemon (tipo){
    const tipoPokemon = document.getElementById("tipo");
    tipoPokemon.innerHTML=tipo;
}
function movPokemon (mov){
    const movPokemon = document.getElementById("mov");
    movPokemon.innerHTML=mov;
}
function psPokemon (ps){
    const psPokemon = document.getElementById("ps");
    psPokemon.innerHTML=ps;
}

function attkPokemon (attk){
    const attkPokemon = document.getElementById("atk");
    attkPokemon.innerHTML=attk;
}

function defPokemon (def){
    const defPokemon = document.getElementById("def");
    defPokemon.innerHTML=def;
}

function atksPokemon (atks){
    const atksPokemon = document.getElementById("atks");
    atksPokemon.innerHTML=atks;
}

function defsPokemon (defs){
    const defsPokemon = document.getElementById("defs");
    defsPokemon.innerHTML=defs;
}

function velPokemon (vel){
    const velPokemon = document.getElementById("vel");
    velPokemon.innerHTML=vel;
}