// exercice 1 

let formHeure = document.getElementById('formHeure');



formHeure.addEventListener('submit', e => {
    e.preventDefault()

    let affiche = document.getElementById('affiche');
    let heure = Number(document.getElementById('heure').value);
    let minutes = Number(document.getElementById('minutes').value);
    let secondes = Number(document.getElementById('secondes').value);

    secondes ++ 

    if(secondes > 59){
        minutes += 1;
        secondes = 0;
    }
    if(minutes > 59){
        heure += 1;
        minutes = 0;
        secondes = 0;
    }
    affiche.innerHTML = ` ${heure} heure(s)  ${minutes} minute(s)  ${secondes} seconde(s)`;
})


// exercice 2 vote -----------


let nombreVoteTotal;


//exercice 3 -------- 


// exercice 4------------


let form = document.getElementById('form');
let leJustePrix = 384;



form.addEventListener('submit', e => {
    e.preventDefault();
    let affiche = document.getElementById('resultat');
        let prix = document.getElementById('justeprix');
        if(prix.value > leJustePrix){
            affiche.innerHTML = 'plus petit ! '
        }
        if(prix.value < leJustePrix){
            affiche.innerHTML = 'plus grand ! '
        }
        if(prix.value == leJustePrix){
            affiche.innerHTML = 'Gagné ! '
        }
})


//exercice 5 age ------------

let formDateNaissance = document.getElementById('formNaissance');

formDateNaissance.addEventListener('submit', e => {
    e.preventDefault();
            let fuckingdate;
})



// excercice 6 calcul tableaux ----------

let tab1 = [4 , 8 , 7 , 12];
let tab2 = [3, 6];
let result = 0 ;
let afficheResult = document.getElementById('afficheresult')
for(j = 0 ; j < tab2.length ; j++){

for(i = 0 ; i < tab1.length ; i++){

   console.log(tab2[j] + '*' +  tab1[i] + '=' + tab2[j]* tab1[i]); 
   result = result + tab2[j] * tab1[i];
   console.log(result);

  let p = document.createElement('p')
   afficheResult.appendChild(p)
    p.innerHTML = `${tab2[j]} * ${tab1[i]} <br> ${result}`;
}
}

