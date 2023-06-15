function genPassword() {
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const passwordLength = 16;
    let password = "";
    const passEl = document.querySelector('.password')

    for (let i = 0; i <= passwordLength; i++) {
        let randomNumber = Math.floor(Math.random() * chars.length);
        password  += chars.substring(randomNumber, randomNumber +1);
    }
    passEl.innerText = password;
}
genPassword();

function copyPass() {
    let copyText = document.querySelector('.password').innerText;
    let copiedSp = document.getElementById('copied');
    
    navigator.clipboard.writeText(copyText);
    copiedSp.innerText = `${copyText} copied to clipboard`;
    console.log(copiedSp.innerText);
    setTimeout(() => {
        copiedSp.innerText = "";
        console.log(copiedSp.innerText);
    }, '3000');
    
} 

const btnRefresh = document.getElementById('btn-refresh');
btnRefresh.addEventListener('click', genPassword);

const btnCopy = document.getElementById('btn-copy');
btnCopy.addEventListener('click', copyPass);