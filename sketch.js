//Tema: input = traduzindo entrada: "entrada de dados" var input; var cadastro; 
//Funçao de configuração
 function setup() { 
   createCanvas(300,200); 
   background("green"); 
   input = createInput(); 
   input.position(5,60); 
   
   cadastro = createElement ('h1',"Digite uma vogal: ");   
   textSize(50); 
   textAlign(CENTER); 
  }
   
   //O h1 2 3 4 5 ou 6 determina o tamanho e a importancia do texto 
   
  function draw() {
  var resposta = input.value();
  switch (resposta) {

    case "a":
      console.log ("A letra A é uma vogal voce acertou corretamente!");
     break;   //break interompe o codigo
     case "e":
      console.log ("A letra E é uma vogal voce acertou corretamente!");
     break;   
     case "i":
      console.log ("A letra I é uma vogal voce acertou corretamente!");
     break;   
     case "o":
      console.log ("A letra O é uma vogal voce acertou corretamente!");
     break;   
     case "u":
      console.log ("A letra U é uma vogal voce acertou corretamente!");
     break;   

     default:
       console.log ("por favor insira uma vogal!");

    }
   

}