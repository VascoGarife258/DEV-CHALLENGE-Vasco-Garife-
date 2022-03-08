/* const url=('https://34100289-review-master-8dyme2.preview.eks.technoplus.link/api/v1/contacts', { mode: 'no-cors'});
 let output= ''; 
fetch('https://34100289-review-master-8dyme2.preview.eks.technoplus.link/api/v1/contacts', { mode: 'no-cors'})
 
  .then(res =>res.json())
  
  
  .then (data  => {
       data.forEach(post => {

       output += `
       
       <div class="col-sm-4 py-3 py-sm-0">
                <div class="card" style="width: 18rem;">
                    <img src="" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${post.email}</h5>
                      <p class="card-text">${post.name}</p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
            </div>
       
       
       `;
       });
       postsList.innerHTML=output;
  }) 
   */
  
const url = 'https://jsonplaceholder.typicode.com/users';
const postsList = document.querySelector('.card');
fetch(url).then((data)=>{

return data.json();
}).then((completedata)=>{
let data1= '';
completedata.map((values)=>{
   data1+=`
   <div class="card mt-4 col-md-8 py-3 py-sm-0" style="width: 18rem"data-id=${values.id}>
      <img src="${values.avatar}" class="card-img-left" alt="...">
               <div class="card" style="width: 18rem;">
                   
                   <div class="card-body">
                     <h5 class="card-title">${values.name}</h5>
                     <p class="card-text"> ${values.username}</p>
                     <p class="card-text"> ${values.email}</p>
                     
                     <a href="#" class="btn btn-primary" id="delete-post" >Delete</a>
                   </div>
                 </div>
           </div>
         `
});
postsList.innerHTML=data1;
})
postsList.addEventListener('click',(e)=>{
   e.preventDefault();
   
   let delButtonIsPressed = e.target.id=='delete-post';


   let id=e.target.parentElement.dataset.id;
    
    if(delButtonIsPressed){
       fetch(`${url}/${id}` ,{
           method:'DELETE',
           
           
           
       })

       
       
       .then(res=> res.json())
       
       .then(()=>location)
   } 
   
});