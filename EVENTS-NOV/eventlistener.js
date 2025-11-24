// let h1 = document.querySelector("h1");
// h1.addEventListener('click', function() {
//     h1.style.color = "green";
//     h1.style.fontSize = "77px";
// });


// let p = document.querySelectorAll("p");
//                                                     //for line by line paragraph
// p.forEach(function(element) {
//   element.addEventListener('click', function() {
//     element.style.color = "green";
//   });
// });


// let p =document.querySelector("p");
// p.addEventListener('dblclick', function(){         //double click for single paragraph
//     p.style.color ="red";
// });


//  let p =document.querySelector("p");
//  function dblclick(){         
//     p.style.color ="red";
//  };

// p.addEventListener('dblclick',dblclick);
// p.removeEventListener('dblclick',dblclick);  //removelistner steps


// let inp =document.querySelector("input");
// inp.addEventListener("input",function(){     //it shows how many times you tuped at keyboard
//    console.log("typed");
// });


// let inp = document.querySelector("input");
// inp.addEventListener("input",function(details){      //it access placeholder data to console
//    console.log(details.data);                        //we can use both (data) & (whatever.data)
// });

let inp= document.querySelector("input");
inp.addEventListener("input",function(details){
   if(details.data !==null){               //agar data null nhi to details print karenge
      console.log(details.data);
   }
})