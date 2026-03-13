let cards = [];

function save(){
    const tInput = document.getElementById('termInput');
    const dInput = document.getElementById('definitionInput');

    const term = tInput.value.trim();
    const definition = dInput.value.trim();

    if(definition === "" && term === ""){
        alert("Term and definition are empty");
        return;
    };

    cards.push({
        term: term,
        definition: definition
    });

    tInput.value = "";
    dInput.value = "";
}


function generate(){
    const display = document.getElementById('display');

    let html = '';


    for(let i = 0; i < cards.length; i++){
        html += `
        <div class="card" id="card${i}" onclick="flipCard(${i})">
                <div class="card-face card-front">
                    <h2>${cards[i].term}</h2>
                </div>
                <div class="card-face card-back">
                    <h2>${cards[i].definition}</h2>
                </div>
        </div>
        `;
    }


    display.innerHTML = html;

    /* const display = document.getElementById("display");

    if(cards.length === 0){
        alert("No flashcards saved.");
        return;
    }

    display.innerHTML = "";

    cards.forEach((card,index)=>{

        const cardElement = document.createElement("div");
        cardElement.classList.add("card");
        
        cardElement.innerHTML = `
            <div class="card-face card-front">
                ${card.term}
            </div>
            <div class="card-face card-back">
                ${card.definition}
            </div>
        `;

        cardElement.addEventListener("click",()=>{
            cardElement.classList.toggle("flip");
        });

        display.appendChild(cardElement);

    }); */
}

function flipCard(index){
    let card = document.getElementById("card" + index);


    if(card.style.transform === 'rotateY(180deg)'){
        card.style.transform = "rotateY(0deg)";
    } else {
        card.style.transform = "rotateY(180deg)";
    }
}

function clearCards(index){
    cards = [];
    const display = document.getElementById('display');
    display.innerHTML = "";
}
