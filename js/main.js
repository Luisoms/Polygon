const btnToggle = document.querySelector('#but');

btnToggle.addEventListener('click', function() {
    document.getElementById('img').classList.toggle('active');
    document.getElementById('title').classList.toggle('active');
});

const like = document.querySelector('#icon');

like.addEventListener('click', function() {
    document.getElementById('icon').classList.toggle('active');
});