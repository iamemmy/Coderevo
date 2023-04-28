let toggleButton = document.querySelector('.toggle--button')
let body = document.querySelector('body')

toggleButton.addEventListener('click', function() {
    toggleButton.classList.remove('fa-bars');
    toggleButton.classList.add('fa-times');
})

// toggleButton.onclick = function(){
//     if ( navListContainer.style.left != '0px') {
//         navListContainer.style.left = '0px'
//         navListContainer.style.zIndex = '999'
//         setTimeout(function(){
//             toggleButton.classList.remove('fa-bars');
//             toggleButton.classList.add('fa-times');
//         },1000)

//         body.style.overflowY = 'hidden'
//        }else{
//         navListContainer.style.left = '-70vw'
//         setTimeout(function(){
//             toggleButton.classList.remove('fa-times');
//             toggleButton.classList.add('fa-bars');
//         },400)

//         body.style.overflowY = 'scroll'
//        }
// }