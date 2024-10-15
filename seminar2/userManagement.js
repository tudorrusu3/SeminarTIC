export const registerUser = (user) => {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));

    console.log('New user added', user);
}

// funct de auth daca exista user in local storage sa scrie numele user ului si pt toate task urile care au ca resp mihai sa poti edita sau sterge task urile lui
// folosim bcrypt
// sa nu poti pune acelasi email de 2 ori