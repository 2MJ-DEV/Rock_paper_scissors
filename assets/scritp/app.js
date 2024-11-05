let [score_ordi,score_joueur]=[0,0];
let result_ref = document.getElementById("result");
let choices_object = {
    'Pierre' : {
        'Pierre' : 'Null',
        'Ciseaux' : 'Gagner',
        'Feuille' : 'Perdu !'
    },
    'Ciseaux' : {
        'Pierre' : 'Perdu !',
        'Ciseaux' : 'Null',
        'Feuille' : 'Gagner'
    },
    'Feuille' : {
        'Pierre' : 'Gagner',
        'Ciseaux' : 'Perdu !',
        'Feuille' : 'Null'
    }

}

function checker(input){
    var choices = ["Pierre", "Feuille", "Ciseaux"];
    var num = Math.floor(Math.random()*3);

    document.getElementById("comp_choice").innerHTML = 
    ` L'ordinateur a choisi <span> ${choices[num].toUpperCase()} </span>`;

    document.getElementById("user_choice").innerHTML = 
    ` Tu as choisi <span> ${input.toUpperCase()} </span>`;

    let computer_choice = choices[num];

    switch(choices_object[input][computer_choice]){
        case 'Gagner':
            result_ref.style.cssText = "background-color: #cefdce; color: #689f38";
            result_ref.innerHTML = "Tu as Gagner";
            score_joueur++;
            break;
        case 'Perdu !':
            result_ref.style.cssText = "background-color: #ffdde0; color: #d32f2f";
            result_ref.innerHTML = "L'ordinateur gagne ";
            score_ordi++;
            break;
        default:
            result_ref.style.cssText = "background-color: #e5e5e5; color: #808080";
            result_ref.innerHTML = "Égalité parfaite ! ⚔️";
            break;
    }

    document.getElementById("score_ordi").innerHTML = score_ordi;
    document.getElementById("score_joueur").innerHTML = score_joueur;
}