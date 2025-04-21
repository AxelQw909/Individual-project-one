document.querySelector('.button').addEventListener('click', function () {
    const login = document.querySelector('input[type="text"]').value;
    const password = document.querySelector('input[type="password"]').value;

    if (login === 'admin' && password === 'admin') {
        localStorage.setItem("role", "admin");
        window.location.href = "admin.html";
    } else {
        localStorage.setItem("role", "user");
        window.location.href = "user.html";
    }
});
