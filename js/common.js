var dotnet = {
      parent : function(node ,targetClass){
           while(node){
            if(node.nodeType == 1 && node.classList.contains(targetClass)){
              return node;
            }
            node = node.parentNode;
        }
      }
    }
;(function(){
  var screenWidth = window.innerWidth;
  if(screenWidth < 768){
      var navMenu = document.querySelector("#navMenu"),
          openNavBtn = document.querySelector("#openNavMenu"),
          overlay    = document.createElement("div");

      overlay.classList.add("navMenu-overlay");
      document.body.appendChild(overlay);
        
      navMenu.addEventListener("touchstart",function(e){
        var target = dotnet.parent(e.target,"item-link");
            target && target.classList.add("active-status");
      }); 
      navMenu.addEventListener("touchend",function(e){
        var target = dotnet.parent(e.target,"item-link");
            target && target.classList.remove("active-status");
      });
      
      openNavBtn.addEventListener("touchend",function(){
          document.body.classList.add("open");
          setTimeout(function(){
              overlay.addEventListener("touchend",openMenu);
          },1)
      });
      var openMenu = function(){
        document.body.classList.remove("open");
        overlay.removeEventListener("touchend",openMenu);
        return false;
      }
  }
})();