document.addEventListener("DOMContentLoaded", function(){
    const Saisie_tache = document.getElementById ("text_tache");
    const date_tache = document.getElementById ("input-date");
    const prioriter_tache = document.getElementById ("numero_prioriter");
    const button_ajouter = document.getElementById ("button_ajouter");
    const ulContent = document.getElementById ("ul");
    let numero_tache = 1;

    button_ajouter.addEventListener("click", function(){
        const textAdd= Saisie_tache.value.trim();
        const date_du_tache= date_tache.value.trim();
        const numero_prioriter_tache= prioriter_tache.value.trim();
        if(textAdd.value !== ""){
            const listLi= document.createElement("li");
            listLi.classList.add("listTache");
            listLi.innerHTML=`
                <span>${numero_tache}</span>
                <span>${textAdd}</span>
                <span>${date_du_tache}</span>
                <span>${numero_prioriter_tache}</span>

                <button class="deleteBtn">supprimer</button>
            `;
            ulContent.appendChild(listLi);
            Saisie_tache.value="";
            Saisie_tache.focus();
            numero_tache = numero_tache + 1;
        }
    });
    ulContent.addEventListener("click",function(event){
        if(event.target.classList.contains("deleteBtn")){
            event.target.parentElement.remove();
        }
    });
});