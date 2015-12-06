$(document).ready(function() {

  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'
  ];

  var guess; // Geuss
  var geusses = []; // Stored geusses
  var lives = 5; // Lives
  var counter; // Count correct geusses
  var space; // Number of spaces in word '-'
  var palavra; //palavra inteira 
  var dicas; // lista de posições de dicas
  var dica_letras = []; // lista de letras posoções 
  var num; //numero dentro do laço
  var palavra_add = []; // palavra com dicas
  var palavra_var = [];
  var palavra_var2 = [];
  var palavra_var3 = [];
  var palavra_var4 = [];
  var palavra_var5 = [];
  var palavra_var6 = [];
  var palavra_var7 = [];
  var contador =0;


  //INICIO DO JOGO =================================================================
  $('.js-novo-jogo').click(function() {
    document.getElementById("palavra").innerHTML = "";
    $('#ator').removeClass('gameover');
    $('.chapolin').removeClass('disable');
    $('#titulo').removeClass('disable');
    palavra_add = "";
    lives = 5;
    contador = 0;





    //Lê SERVIDOR JSON

    $.post( "http://mainserver.com.br/hangman/index.php", function( data ) {

        //alert(data['palavra']);
        buttons();
        palavra = data['palavra'];
        var num_letras = palavra.length;

        dicas = data['dica'];

        for (var u = 0; u < dicas.length; u++) {
          num = dicas[u];
          dica_letras[u] = palavra.charAt(num);

          console.log(dicas[u]);
          console.log(dica_letras[u]);

        }
        console.log(palavra);
        //condiçao - se é igual a palavra
        for (var i = 0; i < palavra.length; i++) {

          if (palavra[i] === dica_letras[0]) {

            palavra_add +=  palavra[i];
            $("#palavra").append(palavra[i]);

          } else if (palavra[i] === dica_letras[1]) {

            palavra_add +=  palavra[i];
            $("#palavra").append(palavra[i]);

          } else {

            palavra_add += " _ ";
            $("#palavra").append(" _ ");
          }


        }//END FOR
        alert(palavra_add);

        $("#palavra").addClass("enable");

    });



//CRIA BOTTONS

    //cria btns
    function buttons() {
      document.getElementById("buttons").innerHTML = "";
      myButtons = document.getElementById('buttons');
      letters = document.createElement('ul');
      for (var i = 0; i < alphabet.length; i++) {
        letters.id = 'alphabet';
        list = document.createElement('li');
        list.id = 'letter';
        list.innerHTML = alphabet[i];
        check();
        myButtons.appendChild(letters);
        letters.appendChild(list);
      }
    } //FIM BUTTONS
  }); //FIM INICIAR JOGO









  //FUNCTIONS

  // CLIC DA LETRA
  check = function() {
    list.onclick = function() {
      var geuss = (this.innerHTML); //letra clicada
      this.setAttribute("class", "active");

      this.onclick = null;
      //alert(palavra); //palavra
      alert('letra clicada '+geuss); //letra clicada

      for (var i = 0; i < palavra.length; i++) {
        if (palavra[i] == geuss) {
          counter += 1; // acerto
          alert('acertou letra');
        }
      } //END FOR


      //pega a posição se encontrar o caracter
      var j = (palavra.indexOf(geuss));

      if (j === -1) {
        lives -= 1; //uma vida a menos
        console.log('vidas '+lives);

        switch (lives) {
          case 4:
            $('#perna-direita').addClass('disable');
            break;
          case 3:
            $('#perna-esquerda').addClass('disable');
            break;
          case 2:
            $('#braco-direito').addClass('disable');
            break;
          case 1:
            $('#braco-esquerdo').addClass('disable');
            break;
          case 0:
            $('#tronco').addClass('disable');
            $('#ator').addClass('gameover');
        } //END SWITCH

      } else { //acertou a letra


        for (var i = 0; i < palavra_add.length; i++) {
          if (palavra[i] == geuss) {


            if (geuss == dica_letras[0] || geuss == dica_letras[1]) {
                alert('letra ja existe');
              }else{

                //var primeira = palavra_add.replace(palavra_add.substring(dica_letras[0] -2, dica_letras[0] ), geuss);
                document.getElementById("palavra").innerHTML = "";
                palavra_add="";

                  for (var i = 0; i < palavra.length; i++) {








                      if (palavra[i] === dica_letras[0]) {
                          palavra_var5 += palavra[i];
                          palavra_var4 += palavra[i];
                          palavra_var3 += palavra[i];
                          palavra_var2 += palavra[i];
                          palavra_add += palavra[i];
                          $("#palavra").append(palavra[i]);
                      }
                      else if (palavra[i] === dica_letras[1]) {
                          palavra_var5 += palavra[i];
                          palavra_var4 += palavra[i];
                          palavra_var3 += palavra[i];
                          palavra_var2 += palavra[i];
                          palavra_add += palavra[i];
                          $("#palavra").append(palavra[i]);
                      }

                      else if(palavra[i] == geuss){
                          palavra_add += geuss;
                          palavra_var2 += geuss;
                          palavra_var3 += geuss;
                          $("#palavra").append(geuss);
                      }

                      else if(palavra[i] == palavra_var[i]){
                          palavra_var5 += palavra[i];
                          palavra_var4 += palavra[i];
                          palavra_var3 += palavra[i];
                          palavra_var2 += palavra[i];
                          palavra_add += palavra[i];
                          $("#palavra").append(palavra_var[i]);
                      }

                      else if (palavra[i] == palavra_var2[i]){
                          console.log('entrou var 2');
                          palavra_var5 += palavra[i];
                          palavra_var4 += palavra[i];
                          palavra_var3 += palavra[i];
                          palavra_var2 += palavra[i];
                          palavra_add += palavra[i];
                          $("#palavra").append(palavra[i]);
                      }
                      else if (palavra[i] == palavra_var3[i]){
                          console.log('entrou var 3');
                          palavra_add += palavra[i];
                          palavra_var2 += palavra[i];
                          palavra_var3 += palavra[i];
                          palavra_var5 += palavra[i];
                          palavra_var4 += palavra[i];
                          $("#palavra").append(palavra[i]);
                      }
                      else if (palavra[i] == palavra_var4[i]){
                          console.log('entrou var 4');
                          palavra_add += palavra[i];
                          palavra_var2 += palavra[i];
                          palavra_var3 += palavra[i];
                          palavra_var5 += palavra[i];
                          palavra_var4 += palavra[i];
                          $("#palavra").append(palavra[i]);
                      }
                      else if (palavra[i] == palavra_var5[i]){
                          console.log('entrou var 5');
                          palavra_add += palavra[i];
                          palavra_var2 += palavra[i];
                          palavra_var3 += palavra[i];
                          palavra_var5 += palavra[i];
                          palavra_var4 += palavra[i];
                          $("#palavra").append(palavra[i]);
                      }
                      else {
                          palavra_add += " _ ";
                          palavra_var2 += " _ ";
                          palavra_var3 += " _ ";
                          palavra_var4 += " _ ";
                          palavra_var5 += " _ ";
                          $("#palavra").append(" _ ");
                      }



                  } //END FOR

                  palavra_var = palavra_add;

                console.log(palavra_var3);

              }

          }

        } //END FOR
        console.log('acertou nao perdeu vida');
      }
      contador++;
      console.log('contador '+contador);
    }//END FUNCTION
  }//END FUNCTION



}); //FIM JAVASCRIPT