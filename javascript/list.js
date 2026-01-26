const tel = document.getElementById('tel');
const error = document.getElementById('error');

function login() {
    if (tel.value === '0956422523') {
        window.location.href = '\patient_dashboard_staff.html'
    } else {
        error.innerHTML = 'กรุณากรอกหมายเลขโทรศัพท์'; error.style.color = 'red';
    }
}
