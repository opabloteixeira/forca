$(document).ready(function() {

  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'
  ];

  var categories; // Array of topics
  var chosenCategory; // Selected catagory
  var getHint; // Word getHint
  var word; // Selected word
  var guess; // Geuss
  var geusses = []; // Stored geusses
  var lives = 5; // Lives
  var counter; // Count correct geusses
  var space; // Number of spaces in word '-'
  var palavra; //palavra inteira 
  var dicas; // lista de posições de dicas
  var dica_letras = []; // lista de letras posoções 
  var num; //numero dentro do laço
  var palavra_add =""; // palavra com dicas



  //INICIO DO JOGO =================================================================
  $('.js-novo-jogo').click(function() {
    document.getElementById("palavra").innerHTML = "";
    $('#ator').removeClass('gameover');
    $('.chapolin').removeClass('disable');
    $('#titulo').removeClass('disable');
    palavra_add = "";
    lives = 5;





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



// var valorDaDiv = $("#palavra").text();
//     console.log(valorDaDiv);

  }); //FIM INICIAR JOGO

  //FUNCTIONS

  function erro() {
    alert("errouuuuuu");
  }

  // CLIC DA LETRA
  check = function() {
    list.onclick = function() {
      var geuss = (this.innerHTML); //letra clicada

      this.setAttribute("class", "active");

      this.onclick = null;
      //alert(palavra); //palavra
      alert('letra clicada '+geuss); //letra clicada

      for (var i = 0; i < palavra.length; i++) {
        //console.log(palavra[i]);
        //console.log(geuss);
        if (palavra[i] == geuss) {
          //geusses[i].innerHTML = geuss;
          counter += 1; // acerto
          alert('acertou letra');
        }
      } //END FOR



      var j = (palavra.indexOf(geuss)); //pega a posição se encontrar o caracter
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
      } else {
        console.log('acertou nao perdeu vida');

      }
    }
  }



}); //FIM JAVASCRIPT