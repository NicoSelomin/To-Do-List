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
}