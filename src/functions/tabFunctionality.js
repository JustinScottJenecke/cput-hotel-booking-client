export default function tabFunctionality() {

    const tabs = document.querySelectorAll('.tab');
    const nav = document.querySelectorAll('.nav__btn');
    const tabTitle = document.getElementById('subHeading');
    
    nav.forEach(button => {

        button.addEventListener('click', () => {
            
            const target = button.dataset.tab;

            tabTitle.innerText = target;

            tabs.forEach(tab => {
                tab.classList.remove('tab__active');                    
            }) 

            tabs.forEach(tab => {
                if (tab.id === target) {
                    tab.classList.add('tab__active');
                    
                }                 
            }) 
        })
    })
}