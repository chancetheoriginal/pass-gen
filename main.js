/////// Pass gen / copy 

let password = '';

function genPassword() {
    const chars = '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    password = '';
    const passwordLength = 16;
    const passEl = document.querySelector('.password')

    for (let i = 0; i <= passwordLength; i++) {
        let randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber +1);
    }
    passEl.innerText = password;
}
genPassword();
function copyPass() {
    // let copyText = document.querySelector('.password').innerText;
    let copiedSp = document.getElementById('copied');
    
    navigator.clipboard.writeText(password);
    copiedSp.innerText = `${password} copied to clipboard`;
    setTimeout(() => {
        copiedSp.innerText = "";
    }, '3000');
    
} 

const btnRefresh = document.getElementById('btn-refresh');
btnRefresh.addEventListener('click', genPassword);

const btnCopy = document.getElementById('btn-copy');
btnCopy.addEventListener('click', copyPass);

/////// Utils

const btn = document.querySelectorAll('.btn');


btn.forEach(btn => {
    //hover
    let input = '';
    btn.addEventListener('mouseover' || 'touchstart', () => {
        btn.classList.add('hover');
    });
    btn.addEventListener('mousedown' || 'click' ||'touchstart', () => {
        btn.classList.remove('hover');
        btn.classList.add('active');
    });
    btn.addEventListener('mouseout' || 'touchend', () => {
        btn.classList.remove('hover');
        btn.classList.remove('active');
    });
})
