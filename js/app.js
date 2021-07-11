let toggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation');
toggle.onclick = function (e) {
    e.currentTarget.classList.toggle('active');
    navigation.classList.toggle('active');
}