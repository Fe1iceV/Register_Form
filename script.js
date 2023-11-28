function saveInput() {
    var checkbox = document.querySelector('input[type="checkbox"]');
    var input = document.getElementById('usernameInput');

    if (checkbox.checked) {
        localStorage.setItem('savedUsername', input.value);
    } else {
        localStorage.removeItem('savedUsername');
    }
}

function submitForm(event) {
    event.preventDefault(); 
    var username = document.getElementById('usernameInput').value;
    

    var mailtoURL = 'mailto:hotabu41995@gmail.com' +
        '?subject=' + encodeURIComponent('Login Form Submission') +
        '&body=' + encodeURIComponent('Username: ' + username);


    window.location.href = mailtoURL;
}
