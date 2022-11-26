        // Relogio da pagina
        function startTime()
        {
        var today=new Date();
        var h=today.getHours();
        var m=today.getMinutes();
        var ml=today.getMilliseconds();
        var d=today.getDate();
        var g=today.getMonth();
        var y=today.getFullYear();

        if(d == 29 && g == 11 && h == 12 && m == 15) {
          alert('Feliz aniversario Thiago Cardoso!!');
        }
        if(y == y) {
          document.getElementById('ParaRodape').innerHTML= "Copyright" + " " + y;
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
      
      // atalhos do teclado para chamar link
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