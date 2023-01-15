var front = document.getElementById('front');
console.log(front);
front.addEventListener('mouseup', ()=>{
    console.log('clicked');
    front.classList = 'card active';
});
var back = document.getElementById('back');
back.addEventListener('mouseup', ()=>{
    front.classList.remove('active')});