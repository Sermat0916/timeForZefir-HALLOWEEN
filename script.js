

const btnZefirMaster = document.querySelector('.btnZefirMaster'),
      block2 = document.querySelector('.block2'),
      centerzagolovok2 = document.querySelector('.centerzagolovok2'),
      block4 = document.querySelector('.block4'),
      centerzagolovok5 = document.querySelector('.centerzagolovok5'),
      block5 = document.querySelector('.block5')
     
   

btnZefirMaster.addEventListener('click',()=>{
    if (block2.style.display == 'block' ) {
        block2.style.display = 'none' 
    }else{
        block2.style.display = 'block' 
    }
})

centerzagolovok2.addEventListener('click',()=>{
    if (block4.style.display == 'block' ) {
        block4.style.display = 'none' 
    }else{
        block4.style.display = 'block' 
    }
})

centerzagolovok5.addEventListener('click',()=>{
    if (block5.style.display == 'block' ) {
        block5.style.display = 'none' 
    }else{
        block5.style.display = 'block' 
    }
})





let v1 = document.querySelector('.v1'),
    ot1 = document.querySelector('.ot1'),
    x1 = document.querySelector('.x1'),
    v2 = document.querySelector('.v2')
    ot2 = document.querySelector('.ot2'),
    x2 = document.querySelector('.x2'),
    v3 = document.querySelector('.v3')
    ot3 = document.querySelector('.ot3'),
    x3 = document.querySelector('.x3'),
    v4 = document.querySelector('.v4')
    ot4 = document.querySelector('.ot4'),
    x4 = document.querySelector('.x4'),
    v5 = document.querySelector('.v5')
    ot5 = document.querySelector('.ot5'),
    x5 = document.querySelector('.x5')
    v6 = document.querySelector('.v6')
    ot6 = document.querySelector('.ot6'),
    x6 = document.querySelector('.x6'),
    v7 = document.querySelector('.v7')
    ot7 = document.querySelector('.ot7'),
    x7 = document.querySelector('.x7')
    

v1.addEventListener('click',()=>{
    ot1.style.display = 'block'
})
x1.addEventListener('click',()=>{
    ot1.style.display = 'none'
})


v2.addEventListener('click',()=>{
    ot2.style.display = 'block'
})
x2.addEventListener('click',()=>{
    ot2.style.display = 'none'
})


v3.addEventListener('click',()=>{
    ot3.style.display = 'block'
})
x3.addEventListener('click',()=>{
    ot3.style.display = 'none'
})


v4.addEventListener('click',()=>{
    ot4.style.display = 'block'
})
x4.addEventListener('click',()=>{
    ot4.style.display = 'none'
})


v5.addEventListener('click',()=>{
    ot5.style.display = 'block'
})
x5.addEventListener('click',()=>{
    ot5.style.display = 'none'
})


v6.addEventListener('click',()=>{
    ot6.style.display = 'block'
})
x6.addEventListener('click',()=>{
    ot6.style.display = 'none'
})


v7.addEventListener('click',()=>{
    ot7.style.display = 'block'
})
x7.addEventListener('click',()=>{
    ot7.style.display = 'none'
})





let pauck = document.querySelector('.pauck'),
    caback = document.querySelector('.caback')





pauck.animate([

{transform: 'translateY(0)'},
{transform: 'translateY(10px)'},
{transform: 'translateY(20px)'},
{transform: 'translateY(30px)'},
{transform: 'translateY(40px)'},
{transform: 'translateY(30px)'},
{transform: 'translateY(50px)'},
{transform: 'translateY(40px)'},
{transform: 'translateY(10px)'},
{transform: 'translateY(0)'},

],{
    duration: 5000,
    iterations: Infinity
  })


  caback.animate([

    {transform: 'translateX(-150%) '},
    {transform: 'translateX(30%) '},
    {transform: 'translateX(-150%) '}
    
    ],{
        duration: 5000,
        iterations: Infinity
      })
    