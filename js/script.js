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