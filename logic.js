const in1 = document.querySelector('.in-1')
const in2 = document.querySelector('.in-2')
const reset = document.querySelector('form')
const err = document.querySelector('.error')
const h2 = document.querySelector('h2')
const f = document.querySelector('.l1')
const j = document.querySelector('.l2')
const mess = document.querySelector('.error')
const notshow = document.querySelector('#notshow2')
const showbtn = document.querySelector('#notshow #homeh')
const hidebtn = document.querySelector('#reset1')
// console.dir(in1.value)
reset.addEventListener('submit', function(e){
    if(in1.value !== in2.value){
        e.preventDefault();
        in2.style.border = 'red solid 3px'
        err.innerHTML = "Passwords do not match";
    }
    else{
        in1.style.display = 'none'
        in2.style.display = 'none'
        f.style.display = 'none'
        j.style.display = 'none'
        hidebtn.style.display = 'none'
        h2.innerHTML = 'Password Changed'
        notshow.style.display = 'inherit'
        mess.style.display = 'none'
        showbtn.style.display = 'inherit'
    }
})