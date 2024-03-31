```<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body style="background-color: #414141;">
    <h2>Amazing images</h2>
    <ul id="images">
        <li><img src="pic.jpg" id="mountain" width="200px" alt=""></li>
        <li><img src="pic.jpg" width="200px" alt=""></li>
        <li><img src="pic.jpg" width="200px" alt=""></li>
        <li><img src="pic.jpg" width="200px" alt=""></li>
        <li><img src="pic.jpg" width="200px" alt=""></li>
        <a href="https://www.google.com" id="google">Google</a>
    </ul>
</body>
<script>
    // document.getElementById('mountain').onclick = function(){
        //     alert("Mountain")
        // }
        
        // another approch
        document.getElementById('mountain').addEventListener('click',function(e){
            // alert('hello')
        },false)
// third paramenter is bydefault false in some application where true and false need to be used

//attachEvent()
//jQuery

// what to study 
//type,timestamp,defaultPrevented
//target,toElement,scrElement ,currentTarget
//clientX,clientY,screenX,screenY
//altKey ,ctrlKey,shiftKey,keyCode


//event propogition 
//bubbling first the inner is clicked then outer
document.getElementById('images').addEventListener('click',function(e)
{
    // console.log('Ul clicked')
},false)
document.getElementById('mountain').addEventListener('click',function(e)
{
    // console.log('mountain clicked')
    e.stopPropagation();
            // stop the propagation 
            // uper ke element pe nahi jayega 
},false)


//capturing first the outer  is clicked then inner
document.getElementById('images').addEventListener('click',function(e)
        {
            // console.log('Ul clicked')
        },true)
document.getElementById('mountain').addEventListener('click',function(e)
        {
            // console.log('mountain clicked')
           
        },true)


        // anchor tag 
        // document.getElementById('google').addEventListener('click',function(e){
        //     e.preventDefault();
        //     console.log("Google clicked");
        //     e.stopPropagation();

        // },false)


        // project approch 
        document.getElementById('images').addEventListener('click',function(e){
            console.log(e.target.parentNode);
            const removeIt= e.target.parentNode
            if(e.target.tagName ==='IMG'){

                removeIt.remove();
            }
            // removeIt.parentNode.removeChild(removeIt)
        },false)


</script>
</html>
```
