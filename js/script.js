        // Relogio da pagina
        function startTime()
        {
        var today=new Date();
        var h=today.getHours();
        var m=today.getMinutes();
        var d=today.getDate();
        var g=today.getMonth();
        var y=today.getFullYear();

        if(d == 29 && (g+1) == 11 && h == 12 && m == 10) {
          alert('Feliz aniversario Thiago Cardoso!!');
        } 
        if (d == 25 && (g+1) == 12 && y == y) {
          alert('Feliz Natal!!');
        }
        if(d == 1 && (g+1) == 1 && y == y && h == 12 && m == 10) {
          alert('Feliz ano novo' + ' ' + y+'!!');
        }
        if(y == y) {
          document.getElementById('ParaRodape').innerHTML= "Copyright" + " " + y;
        } 
        if(d == 1 && (g+1) == 1 && y == y) {
          document.getElementById('ParaRodape').innerHTML= "Feliz ano novo" + " " + y+"!!";
        }
        if(d == 25 && (g+1) == 12) {
          document.getElementById('ParaRodape').innerHTML= "Feliz natal!!";
        } 
        if(d == 29 && (g+1) == 11) {
          document.getElementById('ParaRodape').innerHTML= "Feliz aniversario, Thiago!!";
        }

        if(d == 29 && (g+1) == 11 && y == y) {
          document.getElementById('Nome1').innerHTML= "Feliz aniversario, Thiago!!";
        } 
        if(d == 25 && (g+1) == 12 && y == y) {
          document.getElementById('Nome1').innerHTML= "Feliz Natal!!";
        }
        if(d == 1 && (g+1) == 1 && y == y) {
          document.getElementById('Nome1').innerHTML= "Feliz Ano Novo!!";
        }
        // adicione um zero na frente de números<10
        h=checkTime(h);
        m=checkTime(m);
        d=checkTime(d);
        g=checkTime(g);
        document.getElementById('txt').innerHTML= h+":"+m+ " " + d+"/"+(g+1)+"/"+y;
        t=setTimeout('startTime()',500);
        }
        function checkTime(i)
        {
        if (i<10)
        {
        i="0" + i;
        }
        return i;
        }
        
        /*Carregamento*/
        var i = setInterval(function () {
    
        clearInterval(i);
  
        document.getElementById("loading").style.display = "none";
        document.getElementById("conteudo").style.display = "inline";
      
        // Animação No texto
         function Primeiro(elemento2){
          const textoArray = elemento2.innerHTML.split('');
          elemento2.innerHTML = ' ';
          textoArray.forEach(function(letra2, j){   
            
          setTimeout(function(){
              elemento2.innerHTML += letra2;
          }, 100 * j)
      
        });
      }
      const titulo = document.getElementById('Nome1');
      Primeiro(titulo);

      function Segundo(elemento){
        const textoArray = elemento.innerHTML.split('');
        elemento.innerHTML = ' ';
        textoArray.forEach(function(letra, i){   
          
        setTimeout(function(){
            elemento.innerHTML += letra;
        }, 30 * i)
    
      });
    }
    const titulo2 = document.getElementById('Nome2');
    Segundo(titulo2);

    // Animação do texto Sobre mim
    function Terceiro(elemento4){
      const texto2Array = elemento4.innerHTML.split('');
      elemento4.innerHTML = ' ';
      texto2Array.forEach(function(letra4, j){   
        
      setTimeout(function(){
          elemento4.innerHTML += letra4;
      }, 100 * j)
  
    });
  }
  const SobreMim = document.getElementById('SobreMim1');
  Terceiro(SobreMim);

  function Quarto(elemento5){
    const texto3Array = elemento5.innerHTML.split('');
    elemento5.innerHTML = ' ';
    texto3Array.forEach(function(letra5, i){   
      
    setTimeout(function(){
        elemento5.innerHTML += letra5;
    }, 30 * i)

  });
}
const titulo3 = document.getElementById('SobreMim2');
Quarto(titulo3);

function Quinto(elemento6){
  const texto6Array = elemento6.innerHTML.split('');
  elemento6.innerHTML = ' ';
  texto6Array.forEach(function(letra6, j){   
    
  setTimeout(function(){
      elemento6.innerHTML += letra6;
  }, 100 * j)

});
}
const ContatoRodape = document.getElementById('H3contato');
Quinto(ContatoRodape);

function Sexto(elemento7){
  const texto7Array = elemento7.innerHTML.split('');
  elemento7.innerHTML = ' ';
  texto7Array.forEach(function(letra7, j){   
    
  setTimeout(function(){
      elemento7.innerHTML += letra7;
  }, 250 * j)

});
}
const AnoPagina = document.getElementById('ParaRodape');
Sexto(AnoPagina);

function Menu1(elementoMenu1){
  const textoMenu1Array = elementoMenu1.innerHTML.split('');
  elementoMenu1.innerHTML = ' ';
  textoMenu1Array.forEach(function(letraMenu1, j){   
    
  setTimeout(function(){
      elementoMenu1.innerHTML += letraMenu1;
  }, 180 * j)

});
}
const Amenu1 = document.getElementById('Menu2');
Menu1(Amenu1);

function Menu2(elementoMenu2){
  const textoMenu2Array = elementoMenu2.innerHTML.split('');
  elementoMenu2.innerHTML = ' ';
  textoMenu2Array.forEach(function(letraMenu2, j){   
    
  setTimeout(function(){
      elementoMenu2.innerHTML += letraMenu2;
  }, 180 * j)

});
}
const Amenu2 = document.getElementById('Menu33');
Menu2(Amenu2);

function Menu3(elementoMenu3){
  const textoMenu3Array = elementoMenu3.innerHTML.split('');
  elementoMenu3.innerHTML = ' ';
  textoMenu3Array.forEach(function(letraMenu3, j){   
    
  setTimeout(function(){
      elementoMenu3.innerHTML += letraMenu3;
  }, 180 * j)

});
}
const Amenu3 = document.getElementById('Menu34');
Menu3(Amenu3);

function Menu4(elementoMenu4){
  const textoMenu4Array = elementoMenu4.innerHTML.split('');
  elementoMenu4.innerHTML = ' ';
  textoMenu4Array.forEach(function(letraMenu4, j){   
    
  setTimeout(function(){
      elementoMenu4.innerHTML += letraMenu4;
  }, 180 * j)

});
}
const Amenu4 = document.getElementById('Menu35');
Menu4(Amenu4);

function Menu5(elementoMenu5){
  const textoMenu5Array = elementoMenu5.innerHTML.split('');
  elementoMenu5.innerHTML = ' ';
  textoMenu5Array.forEach(function(letraMenu5, j){   
    
  setTimeout(function(){
      elementoMenu5.innerHTML += letraMenu5;
  }, 180 * j)

});
}
const Amenu5 = document.getElementById('Menu36');
Menu5(Amenu5);

function Menu6(elementoMenu6){
  const textoMenu6Array = elementoMenu6.innerHTML.split('');
  elementoMenu6.innerHTML = ' ';
  textoMenu6Array.forEach(function(letraMenu6, j){   
    
  setTimeout(function(){
      elementoMenu6.innerHTML += letraMenu6;
  }, 180 * j)

});
}
const Amenu6 = document.getElementById('Menu37');
Menu6(Amenu6);

function Projetos6(elementoMenu7){
  const textoMenu7Array = elementoMenu7.innerHTML.split('');
  elementoMenu7.innerHTML = ' ';
  textoMenu7Array.forEach(function(letraMenu7, j){   
    
  setTimeout(function(){
      elementoMenu7.innerHTML += letraMenu7;
  }, 180 * j)

});
}
const Amenu7 = document.getElementById('TituloPrincipal');
Projetos6(Amenu7);

function Projetos7(elementoMenu8){
  const textoMenu8Array = elementoMenu8.innerHTML.split('');
  elementoMenu8.innerHTML = ' ';
  textoMenu8Array.forEach(function(letraMenu8, j){   
    
  setTimeout(function(){
      elementoMenu8.innerHTML += letraMenu8;
  }, 150 * j)

});
}
const Amenu8 = document.getElementById('LinkCurriculo');
Projetos7(Amenu8);
    
}, 1300);
     
    /*Carregamento das imagens e janelas*/
    document.addEventListener('DOMContentLoaded', function(){
      document.querySelector('body')
              .classList
              .add('loaded');
    }); 
    
        /* Barra de progresso vai aumentando de acordo 
          com a rolagem da pagina 
          e diminui de acordo com que a pagina suba pra cima */

        window.onscroll = function() {myFunction()};

        function myFunction() {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        document.getElementById("progress-bar").style.width = scrolled + "%";   
        }
        
        // PopUp caixa1
        function abrir(){
          document.getElementById('Caixa1').style.display = 'block';
        }
        function fechar(){
          document.getElementById('Caixa1').style.display =  'none';
        }
        
        // PopUp caixa2
        function abrir1(){
          document.getElementById('Caixa2').style.display = 'block';
        }
        function fechar1(){
          document.getElementById('Caixa2').style.display =  'none';
        }

        // PopUp caixa3
        function abrir3(){
          document.getElementById('Caixa3').style.display = 'block';
        }
        function fechar3(){
          document.getElementById('Caixa3').style.display =  'none';
        }
        
        // PopUp caixa4
        function abrir4(){
          document.getElementById('Caixa4').style.display = 'block';
        }
        function fechar4(){
          document.getElementById('Caixa4').style.display =  'none';
        }

         // PopUp caixa5
         function abrir5(){
          document.getElementById('Caixa5').style.display = 'block';
        }
        function fechar5(){
          document.getElementById('Caixa5').style.display =  'none';
        }

         // PopUp caixa6
         function abrir6(){
          document.getElementById('Caixa6').style.display = 'block';
        }
        function fechar6(){
          document.getElementById('Caixa6').style.display =  'none';
        }

        // PopUp caixa27
        function abrir27(){
          document.getElementById('Caixa27').style.display = 'block';
        }
        function fechar27(){
          document.getElementById('Caixa27').style.display =  'none';
        }

         // PopUp caixa6
         function abrir25(){
          document.getElementById('Caixa25').style.display = 'block';
        }
        function fechar25(){
          document.getElementById('Caixa25').style.display =  'none';
        }

        // PopUp caixa26
        function abrir26(){
          document.getElementById('Caixa26').style.display = 'block';
        }
        function fechar26(){
          document.getElementById('Caixa26').style.display =  'none';
        }

        // PopUp caixa28
        function abrir28(){
          document.getElementById('Caixa28').style.display = 'block';
        }
        function fechar28(){
          document.getElementById('Caixa28').style.display =  'none';
        }

        // PopUp caixa7
        function abrir7(){
          document.getElementById('Caixa7').style.display = 'block';
        }
        function fechar7(){
          document.getElementById('Caixa7').style.display =  'none';
        }

        // PopUp caixa8
        function abrir8(){
          document.getElementById('Caixa8').style.display = 'block';
        }
        function fechar8(){
          document.getElementById('Caixa8').style.display =  'none';
        }

         // PopUp caixa9
         function abrir9(){
          document.getElementById('Caixa9').style.display = 'block';
        }
        function fechar9(){
          document.getElementById('Caixa9').style.display =  'none';
        }

         // PopUp caixa12 html
         function abrir12(){
          document.getElementById('Caixa12').style.display = 'block';
        }
        function fechar12(){
          document.getElementById('Caixa12').style.display =  'none';
        }

        // PopUp caixa13 CSS
        function abrir13(){
          document.getElementById('Caixa13').style.display = 'block';
        }
        function fechar13(){
          document.getElementById('Caixa13').style.display =  'none';
        }

         // PopUp caixa14 JS
         function abrir14(){
          document.getElementById('Caixa14').style.display = 'block';
        }
        function fechar14(){
          document.getElementById('Caixa14').style.display =  'none';
        }

        // PopUp caixa15 php
        function abrir15(){
          document.getElementById('Caixa15').style.display = 'block';
        }
        function fechar15(){
          document.getElementById('Caixa15').style.display =  'none';
        }

        // PopUp caixa16 Java
        function abrir16(){
          document.getElementById('Caixa16').style.display = 'block';
        }
        function fechar16(){
          document.getElementById('Caixa16').style.display =  'none';
        }

        // PopUp caixa17 .NET
        function abrir17(){
          document.getElementById('Caixa17').style.display = 'block';
        }
        function fechar17(){
          document.getElementById('Caixa17').style.display =  'none';
        }

        // PopUp caixa18 SQL
         function abrir18(){
          document.getElementById('Caixa18').style.display = 'block';
        }
        function fechar18(){
          document.getElementById('Caixa18').style.display =  'none';
        }
        
        // PopUp caixa19 MySQL
        function abrir19(){
          document.getElementById('Caixa19').style.display = 'block';
        }
        function fechar19(){
          document.getElementById('Caixa19').style.display =  'none';
        }

        // PopUp caixa20 C#
        function abrir20(){
          document.getElementById('Caixa20').style.display = 'block';
        }
        function fechar20(){
          document.getElementById('Caixa20').style.display =  'none';
        }
    
    // PopUp Dia, mês e ano.
    function abrir10(){
    var today=new Date();
    var d=today.getDate();
    var dy=today.getDay();
    var g=today.getMonth();
    var y=today.getFullYear();

    var Day = new Array('Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sábado');
    var Dia = Day[dy];
    var M = new Array('Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro');
    var Mes = M[g];
      
    document.getElementById('DateD').innerHTML= Dia + "," + " " +d+ " " + "de" + " " + Mes + " " + " " + "de" + " " + y;
    document.getElementById('DateD').style.display = 'block';
    
    // Animação No texto Date
    function Animation(elemento3){
      const textoArray = elemento3.innerHTML.split('');
      elemento3.innerHTML = ' ';
      textoArray.forEach(function(letra3, j){   
        
      setTimeout(function(){
          elemento3.innerHTML += letra3;
      }, 30 * j)
  
    });
  }
  const Animation1 = document.getElementById('DateD');
  Animation(Animation1);
    }
    
    
    function fechar10(){
    var today=new Date();
    var d=today.getDate();
    var dy=today.getDay();
    var g=today.getMonth();
    var y=today.getFullYear();

    var Day = new Array('Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sábado');
    var Dia = Day[dy];
    var M = new Array('Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro');
    var Mes = M[g];

    document.getElementById('DateD').innerHTML= Dia + "," + " " +d+ " " + "de" + " " + Mes + " " + " " + "de" + " " + y;
    document.getElementById('DateD').style.display =  'none';
    }

     // PopUp Dia, mês e ano ingles.
     function abrir11(){
      var today=new Date();
      var d=today.getDate();
      var dy=today.getDay();
      var g=today.getMonth();
      var y=today.getFullYear();
  
      var Day = new Array('Sunday','Monday','Tuesday','Wednesday','	Thursday','Friday','Saturday');
      var Dia = Day[dy];
      var M = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
      var Mes = M[g];
        
      document.getElementById('DateR').innerHTML= Dia + "," + " " + Mes+ " " + "in" + " " + d + " " + " " + "in" + " " + y;
      document.getElementById('DateR').style.display = 'block';
      
      // Animação No texto Date
    function Animation(elemento3){
      const textoArray = elemento3.innerHTML.split('');
      elemento3.innerHTML = ' ';
      textoArray.forEach(function(letra3, j){   
        
      setTimeout(function(){
          elemento3.innerHTML += letra3;
      }, 30 * j)
  
    });
  }
  const Animation1 = document.getElementById('DateR');
  Animation(Animation1);
      }
      
      // Data completa da Div Date
      function fechar11(){
      var today=new Date();
      var d=today.getDate();
      var dy=today.getDay();
      var g=today.getMonth();
      var y=today.getFullYear();
  
      var Day = new Array('Sunday','Monday','Tuesday','Wednesday','	Thursday','Friday','Saturday');
      var Dia = Day[dy];
      var M = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
      var Mes = M[g];
      
      document.getElementById('DateR').innerHTML= Dia + "," + " " + Mes+ " " + "in" + " " + d + " " + " " + "in" + " " + y;
      document.getElementById('DateR').style.display =  'none';
      }
      
      // atalhos do teclado para chamar linkAncora
      $(document).bind('keypress', function(event) {

        if( event.which === 104 ) {
          let href = document.getElementById("Menu2").getAttribute("href");
          window.open(href, '_top');
        }
    });

    $(document).bind('keypress', function(event) {

      if( event.which === 112 ) {
        let href = document.getElementById("Menu33").getAttribute("href");
        window.open(href, '_top');
      }
  });

  $(document).bind('keypress', function(event) {

    if( event.which === 115 ) {
      let href = document.getElementById("Menu34").getAttribute("href");
      window.open(href, '_top');
    }
});

$(document).bind('keypress', function(event) {

  if( event.which === 109 ) {
    let href = document.getElementById("Menu35").getAttribute("href");
    window.open(href, '_top');
  }
});

$(document).bind('keypress', function(event) {

  if( event.which === 99 ) {
    let href = document.getElementById("Menu36").getAttribute("href");
    window.open(href, '_top');
  }
});

$(document).bind('keypress', function(event) {

  if( event.which === 105) {
    let href = document.getElementById("Menu37").getAttribute("href");
    window.open(href, '_top');
  }
});

$(document).bind('keypress', function(event) {

  if( event.which === 118) {
    let href = document.getElementById("LinkCurriculo").getAttribute("href");
    window.open(href, '_blank');
  }
});

$(document).bind('keypress', function(event) {

  if( event.which === 103) {
    let href = document.getElementById("BTflutuante").getAttribute("href");
    window.open(href, '_blank');
  }
});

$(document).bind('keypress', function(event) {

  if( event.which === 108) {
    let href = document.getElementById("BTflutuante2").getAttribute("href");
    window.open(href, '_blank');
  }
});