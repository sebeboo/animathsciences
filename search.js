function myFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";

        }
    }
}




function cachecache() {
return document.getElementById("loupe").style ="display:none";}


function cachecache2() {
  return document.getElementById("loupe2").style ="display:none";}



  function cachecache3() {
    return document.getElementById("loupe3").style ="display:none";}
  


  function myFunction2() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput2");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL2");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
              a = li[i].getElementsByTagName("a")[0];
              if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
                  li[i].style.display = "";
              } else {
                  li[i].style.display = "none";
      
              }
          }
      }




      function myFunction3() {
        var input, filter, ul, li, a, i;
        input = document.getElementById("myInput3");
        filter = input.value.toUpperCase();
        ul = document.getElementById("myUL3");
        li = ul.getElementsByTagName("li");
        for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("a")[0];
            if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
    
            }
        }
    }
    