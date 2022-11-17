        // Relogio da pagina
        function startTime()
        {
        var today=new Date();
        var h=today.getHours();
        var m=today.getMinutes();
        var s=today.getSeconds();
        // adicione um zero na frente de números<10
        m=checkTime(m);
        s=checkTime(s);
        document.getElementById('txt').innerHTML=h+":"+m+":"+s;
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
      const titulo = document.querySelector('.jumbotron-heading');
      Primeiro(titulo);

      function Segundo(elemento){
        const textoArray = elemento.innerHTML.split('');
        elemento.innerHTML = ' ';
        textoArray.forEach(function(letra, i){   
          
        setTimeout(function(){
            elemento.innerHTML += letra;
        }, 40 * i)
    
      });
    }
    const titulo2 = document.querySelector('.lead');
    Segundo(titulo2);