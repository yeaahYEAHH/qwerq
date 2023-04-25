document.addEventListener('DOMContentLoaded', () =>{
    let btnClose = document.querySelector('.win__btn-close'),
    btnMin = document.querySelector('.win__btn-min');

    btnClose.addEventListener('click', () =>{
        window.electronAPI.quit()
    })

    btnMin.addEventListener('click', () =>{
        window.electronAPI.min()
    })

    // Табы
    let register  = document.querySelector('#form__register'),
        login = document.querySelector('#form__login');
    
    login.style.display = 'block'
    
    document.querySelector('.login__message').addEventListener('click', ()=>{
        login.style.display = 'block';
        register.style.display = 'none';
    })

    document.querySelector('.register__message').addEventListener('click', () => {
        login.style.display = 'none';
        register.style.display = 'block';
    })
})