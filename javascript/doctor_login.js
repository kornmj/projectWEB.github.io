const username = document.getElementById('userid');
const password = document.getElementById('passcode');
const error = document.getElementById('error');
const btn = document.getElementById('btn');

btn.addEventListener('click', function (e) {
    e.preventDefault();

    if (username.value === "doctor" && password.value === "12345") {
        window.location.href = './Doctor_role_selection.html';
    } else {
        showError();
    }
});

function showError() {
    error.textContent = 'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง';
    error.style.color = 'red';
}
