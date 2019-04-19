var random = Math.round( Math.random()*100 );
var count=0;
console.log(random);

$('#calculate').click(function(){
    //on récupère la valeur de l'input
    var inputNumber = $('#valueNumber').val();
    //si le nombre est trop grand
    if (inputNumber > random ){
        //j'affiche dans une boîte de dialogue que c'est trop grand
        count++;
        alert(inputNumber + ' est trop grand, réessayez.');
    }
    if (inputNumber < random ){
        //j'affiche dans une boîte de dialogue que c'est trop petit
        count ++;
        alert(inputNumber + ' est trop petit, réessayez.');
    }
    if (inputNumber == random){
        // j'affiche dans une boîte de dialogue que c'est gagné
        count ++;
        alert(inputNumber + ' s\'est pendu. Bah bravo, Maurice.');
        alert('Vous l\'avez suicidé en ' + count +' tentatives de harcèlement.');
    }
});
