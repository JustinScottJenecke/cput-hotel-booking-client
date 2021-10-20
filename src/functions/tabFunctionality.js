export default function tabFunctionality() {

    const tabs = document.querySelectorAll('.tab');
    const nav = document.querySelectorAll('.nav__btn');
    
    nav.forEach(button => {

        button.addEventListener('click', () => {
            
            const target = button.dataset.tab;

            tabs.forEach(tab => {
                tab.classList.remove('active__tab');                    
            }) 

            tabs.forEach(tab => {
                if (tab.id === target) {
                    tab.classList.add('active__tab');
                }                 
            }) 
        })
    })
}