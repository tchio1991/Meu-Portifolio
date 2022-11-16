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

