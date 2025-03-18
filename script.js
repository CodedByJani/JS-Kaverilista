// Versio 1
function kysyNimet() {
    let kaverit = [];
    for (let i = 0; i < 10; i++) {
        let nimi = prompt(`Anna ${i + 1}. kaverin nimi:`);
        if (nimi) {
            kaverit.push(nimi);
        }
    }

    let lista = document.getElementById("nimetLista1");
    lista.innerHTML = "";

    kaverit.forEach(nimi => {
        let listItem = document.createElement("li");
        listItem.textContent = nimi;
        lista.appendChild(listItem);
    });
}

// Versio 2
let kaverit2 = [];

function lisaaNimi() {
    let input = document.getElementById("nimiInput");
    let nimi = input.value.trim();

    if (nimi) {
        kaverit2.push(nimi);
        input.value = "";
        paivitaLista();
    } else {
        alert("Anna nimi ennen lisäämistä!");
    }
}

function poistaNimi(nimi) {
    kaverit2 = kaverit2.filter(n => n !== nimi);
    paivitaLista();
}

function jarjestaNimet() {
    kaverit2.sort();
    paivitaLista();
}

function paivitaLista() {
    let lista = document.getElementById("nimetLista2");
    lista.innerHTML = "";

    kaverit2.forEach(nimi => {
        let listItem = document.createElement("li");
        listItem.textContent = nimi;

        let poistaButton = document.createElement("button");
        poistaButton.textContent = "Poista";
        poistaButton.onclick = function () {
            poistaNimi(nimi);
        };

        listItem.appendChild(poistaButton);
        lista.appendChild(listItem);
    });
}