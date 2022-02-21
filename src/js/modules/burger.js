document.querySelector('.burger__btn').addEventListener('click', function() {
    this.classList.toggle('open');
    document.querySelector('.burger__nav').classList.toggle('open');
})