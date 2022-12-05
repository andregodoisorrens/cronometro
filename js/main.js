var display = document.querySelector(".display");
        var min = document.getElementById('min');
        var seg = document.getElementById('seg');
        const toque = new Audio("alarm.mp3");

        var button = document.querySelector('.alarme');

        for(var i = 0; i <= 60; i++){
            min.innerHTML+="<option value='"+i+"' >" + i + "</option>";
        }
        for(var i = 1; i <= 60; i++){
            seg.innerHTML+="<option value='"+i+"' >" + i + "</option>";
        }

        button.addEventListener('click', function(){
            var minClock = min.value;
            var segClock = seg.value;

            display.childNodes[1].innerHTML = minClock + ':' + segClock;

            interval = setInterval(function(){
                segClock --
                if(segClock <= 0){
                    if(minClock > 0){
                        minClock --;
                        segClock = 59;
                    }else{
                        alert('Acabou o tempo!!!');
                        toque.play();
                        clearInterval(interval)
                    }
                }

                display.childNodes[1].innerHTML = minClock + ':' + segClock;
            },1000);

        })