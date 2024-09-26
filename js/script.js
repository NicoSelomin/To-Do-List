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
        let span1 = document.createElement('span');
        let span = document.createElement('span');
        span.innerHTML = `<i class="bi bi-x-lg"></i>`;
        span1.innerHTML = `<i class="bi bi-pencil-square"></i>`;
        span.classList.add('remove');
        span1.classList.add('edit');
        li.appendChild(span1);
        li.appendChild(span);
        
    }
    inputBox.value = '';
    saveData();
}

listContainer.addEventListener("click", function(e) {
    // Si on clique sur l'élément li
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle("checked");
        saveData();
    }
    // Si on clique sur l'élément span avec la classe 'remove'
    else if (e.target.classList.contains('remove')) {
        e.target.parentElement.remove();
        saveData();
    }
    // Si on clique sur l'élément span avec la classe 'edit'
    else if (e.target.classList.contains('edit')) {
        // Récupère l'élément li parent
        let li = e.target.parentElement;
        // Ouvre un prompt pour modifier le texte
        let newText = prompt("Modifier la tâche:", li.firstChild.textContent);
        if (newText) {
            li.firstChild.textContent = newText;
            saveData();
        }
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