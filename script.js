const loginInput = document.getElementById('login__input'),
    passwordInput = document.getElementById('password__input'),
    emailInput = document.getElementById('email__input'),
    addButton = document.getElementById('add__user'),
    listUser = document.getElementById('user__full__list');

let user = []
!localStorage.user ? user = [] : user = JSON.parse(localStorage.getItem('user'))
function User(login, password, email) {
    this.login = login
    this.password = password
    this.email = email
}
addButton.addEventListener('click', () => {
    if (emailInput.value.length < 1 || loginInput.value.length < 1 || passwordInput.value.length < 1) {
        alert('Введіть всі поля!!')
    }
    else {
        user.push(new User(loginInput.value, passwordInput.value, emailInput.value))
        updateLocal()
        fillHTMLList()
    }

})
const updateLocal = () => {
    localStorage.setItem('user', JSON.stringify(user))
}
const createTemplate = (user, index) => {
    return `<ul class = 'user__list'>
    <li>${index + 1}</li>
    <li>${user.login}</li>
    <li>${user.password}</li>
    <li>${user.email}</li>
    <li><button id ='edit__user'>Edit</button></li>
    <li><button id ='delete__user' onclick = 'deleteTask(${index})'>Delete</button></li>
</ul>`
}
const fillHTMLList = () => {
    listUser.innerHTML = `<ul class = 'user__list'>
    <li>#</li>
    <li>Login</li>
    <li>Password</li>
    <li>Email</li>
    <li>Edit</li>
    <li>Delete</li>
</ul>`
    if (user.length > 0) {
        user.forEach((user, index) => {
            listUser.innerHTML += createTemplate(user, index)
        })
    }
}
const deleteTask = index => {
    user.splice(index,1)
    updateLocal()
    fillHTMLList()
}
fillHTMLList()
