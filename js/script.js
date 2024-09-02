// Création des variables pour récuperer les éléments de notre HTML
const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

// Création de la fonction pour ajouter un task
function addTask(){
    //Vérification si le champ est bien remplit
    if(inputBox.value === ''){
        alert('You must write something');
    }else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        //création de l'icon pour supprimer
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}

listContainer.addEventListener("click", function(e){
    //Si on clique sur l'élément li
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked");
        saveData()
    }
    //Si on clique sur l'élément span
    else if(e.target.tagName === 'SPAN'){ 
        e.target.parentElement.remove();
        saveData()
    }
}, false);

//Fonction pour enregistrer les task même si on ferme le navigateur
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();