const b=document.getElementById("data")
 let =fetch('https://jsonplaceholder.typicode.com/posts' )  
.then(y => y.json()) 

                    //fetch هي الي بتجيبلي البيانات 
                        

.then(a =>{        
    
    a.forEach((element) => {
        let m=document.createElement ("div");      
        m.innerHTML=`<h3>${element.title}</h3>`;
        b.appendChild(m);
    })

   
 })
 



 
           
  

  



 