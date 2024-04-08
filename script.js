document.addEventListener("DOMContentLoaded", function(){
    const Saisie_tache = document.getElementById ("text_tache");
    const date_tache = document.getElementById ("input-date");
    const prioriter_tache = document.getElementById ("numero_prioriter");
    const button_ajouter = document.getElementById ("button_ajouter");
    const ulContent = document.getElementById ("ul");
    
    // Charger les tâches sauvegardées du localStorage
    let savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    savedTasks.forEach(task => {
        addTaskToList(task);
    });
    button_ajouter.addEventListener("click", function(){
        const textAdd= Saisie_tache.value.trim();
        const date_du_tache= date_tache.value.trim();
        const numero_prioriter_tache= prioriter_tache.value.trim();
        if(textAdd !== ""){
            const task = {
                text: textAdd,
                date: date_du_tache,
                priority: numero_prioriter_tache,
                completed: false
            };
            addTaskToList(task);

            // Sauvegarder la tâche dans le localStorage
            savedTasks.push(task);
            localStorage.setItem('tasks', JSON.stringify(savedTasks));

            Saisie_tache.value="";
            Saisie_tache.focus();
        }
    });

    ulContent.addEventListener("click",function(event){
        if(event.target.classList.contains("deleteBtn")){
            const liToRemove = event.target.parentElement;
            const textToRemove = liToRemove.querySelector("span").textContent;
            // Supprimer la tâche de la liste
            ulContent.removeChild(liToRemove);
            // Mettre à jour les tâches sauvegardées dans le localStorage
            savedTasks = savedTasks.filter(task => task.text !== textToRemove);
            localStorage.setItem('tasks', JSON.stringify(savedTasks));
        }
    });

    // Fonction pour ajouter une tâche à la liste
    function addTaskToList(task) {
        const listLi= document.createElement("li");
        listLi.classList.add("listTache");
        listLi.innerHTML=`
            <span><form action="">
            <select name="" id="button_statut">
                <option value="En cour">En cour</option>
                <option value="Terminer">Terminer</option>
            </select>
        </form></span>
            <span>${task.text}</span>
            <span>${task.date}</span>
            <span>${task.priority}</span>
            <img src="/Images/supprimer.png" width=34px class="deleteBtn">
        `;
        ulContent.appendChild(listLi);
    }
});
