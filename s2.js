function calcu() {

  var ph1ntd = Number(document.getElementById('ph1ntd').value) ;

 

  var ph1ctrl = Number(document.getElementById('ph1ctrl').value);

  var ph1ntp = Number(document.getElementById('ph1ntp').value);

 

  var ph1tt = document.getElementById('ph1tt').value =  Number((ph1ntd)*0.2+(ph1ctrl*0.6)+(ph1ntp)*0.2);





  var ch1ntd = Number(document.getElementById('ch1ntd').value) ;


  var ch1ctrl = Number(document.getElementById('ch1ctrl').value);

  var ch1ntp = Number(document.getElementById('ch1ntp').value);

  

  var ch1tt = document.getElementById('ch1tt').value = Number((ch1ntd)*0.2+(ch1ctrl*0.6)+(ch1ntp*0.2));






  var info1tt = Number(document.getElementById('info1tt').value);
  


  





    var alg1ntd = Number(document.getElementById('alg1ntd').value) ;

   

    var alg1ctrl = Number(document.getElementById('alg1ctrl').value);

    var alg1tt = document.getElementById('alg1tt').value = Number((((alg1ntd)*4)+(alg1ctrl*6))/10);





    var ana1ntd = Number(document.getElementById('ana1ntd').value) ;

   

    var ana1ctrl = Number(document.getElementById('ana1ctrl').value);

    var ana1tt = document.getElementById('ana1tt').value = Number((((ana1ntd)*4)+(ana1ctrl*6))/10);






  
  var des1tt = Number(document.getElementById('des1tt').value);






      var eng1tt = Number(document.getElementById('eng1tt').value);





      var et1tt = Number(document.getElementById('et1tt').value) ;



      document.getElementById("tt").innerHTML = ((4*ph1tt)+(4*ch1tt)+(2*info1tt)+(2*alg1tt)+(3*ana1tt)+(2*des1tt)+eng1tt+et1tt)/19;



}
