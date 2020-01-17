function validation(){
    var lettre = /^[A-Za-z ]+$/,
        input = document.getElementById("exp").value;
    if (lettre.test(input)== true && (input.length>=10&&input.length<=100)){
        alert("la forme bien valide");
    }else{
        if(lettre.test(input)==false){
            alert("tu doit respecter la forme ecrire les lettres seulement");
        }else{
            alert("tu doit respecter la forme ecrire entre 10 et 100 caractére");
        }
    }
}