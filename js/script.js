
window.onload = function(){scrollFunction()};
window.onscroll = function() {scrollFunction()};
window.onresize = function(){

    if(window.innerWidth>900){
        
        document.getElementById("links").style.visibility="visible";
        document.getElementById("close").style.visibility="hidden";
        i=0;
    }

    else{
        document.getElementById("links").style.visibility="hidden";
        document.getElementById("close").style.visibility="hidden";
        i=1;
    }
   
}

let list = document.querySelectorAll('.list');
let itemBox = document.querySelectorAll('.itemBox');



for(let i =0; i<list.length; i++) {
    list[i].addEventListener('click',function(){
        for(let j = 0; j<list.length; j++){
            list[j].classList.remove('active'); 
        }
        this.classList.add('active');

        let dataFilter = this.getAttribute('data-filter');

        for(let k = 0; k<itemBox.length;k++){
            itemBox[k].classList.remove('active');
            itemBox[k].classList.add('hide');

            if(itemBox[k].getAttribute('data-item') == dataFilter || dataFilter=='all'){
                itemBox[k].classList.remove('hide');
                itemBox[k].classList.add('active');
            }
        }
    });
}

function scrollFunction() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 20) {
      document.getElementById("navbar").style.background = "#393939";
      document.getElementById("logo").style.color = "white";
      
    } else {
      document.getElementById("navbar").style.background = "transparent";
      document.getElementById("logo").style.color = "#960319";
     
    }
  }


  var i =1;
  var x = window.matchMedia("(max-width: 900px)");
  document.getElementById("menu").addEventListener('click',()=>{

    if(x.matches){
        if (i==1){
            document.getElementById("links").style.visibility="visible";
            document.getElementById("close").style.visibility="visible";
            i=0;
        }
        else{
            document.getElementById("links").style.visibility="hidden";
            document.getElementById("close").style.visibility="hidden";
            i=1;
        }
    }
    
    
  });

  document.getElementById("close").addEventListener('click',()=>{
    document.getElementById("links").style.visibility="hidden";
    document.getElementById("close").style.visibility="hidden";
    i=1;
  });
