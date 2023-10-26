const name = document.getElementById('name')
const email = document.getElementById*('email')
const password = document.getElementById*('password')
const address = document.getElementById*('address')
const form = document.getElementById('form')
const errorElement = document.getElementById ('error')

form.addEventListener('submit', (e) => {
    let messages = []

    if (name.value === ''){
        messages.push('Name is required !')
    } if (email.value === ''){
        messages.push('Email is empty !')
    } if (password.value.lenght === ''){
        messages.push('Password is empty !')
    }if (password.value.lenght > 24){
        messages.push('Password is too long !')
    } if (password.value.lenght < 8){
        messages.push('Password is too short !')
    } if (messages.lenght > 0){
        e.preventDefault()
        errorElement.innerText = messages.join(',\n ')
    }

})
