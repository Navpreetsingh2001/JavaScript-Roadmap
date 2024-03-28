
const form =document.querySelector('form')
const btn = document.querySelector('#btnCal')

// cannot write height and weight  because we donot need empty values 
btn.addEventListener('click',function(e){
    e.preventDefault(); //default action roko
   const height = parseInt(document.querySelector("#height").value)
   
   const weight = parseInt(document.querySelector("#weight").value)
   const result =document.querySelector("#results")

   if(height === '' || height <0 || isNaN(height)){
    result.textContent = "Please give valid height"
   }
   else if(weight === '' || weight <0 || isNaN(weight)){
    result.innerHTML = "Please give valid height"
   }
   
   else{
    const h = height *0.01
    const val = ((weight / (h*h)))
    
    result.innerHTML = val.toFixed(2)

    // comment 
    const comment = document.querySelector('#comment')
   if(val < 18.5){
    comment.innerHTML = "You'r underweight"
   }
   if(18.5 <val <24.9){
    comment.innerHTML = "You'r Normal"
   }
   
   if(25 <val <29.9){
    comment.innerHTML = "You'r Overweight"
   }
   if(val >30) {
    comment.innerHTML = "You'r Obsity"
   }


   }

   

   
})