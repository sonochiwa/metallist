let btns = document.getElementsByClassName('menu__item');

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function() {
        let current = document.getElementsByClassName('menu__item_active');
        if (current.length > 0) {
            current[0].className = current[0].className.replace(' menu__item_active', '');
        }
        this.className += ' menu__item_active';
    });
}