clet next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.property--slide-item')
    document.querySelector('.property--slide').appendChild(items[1])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.property--slide-item')
    document.querySelector('.property--slide').prepend(items[items.length -1])
})