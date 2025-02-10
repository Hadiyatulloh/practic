window.onload = function() {
    const username = localStorage.getItem('username');
    const coin = localStorage.getItem('coin');
    const hp = localStorage.getItem('hp');
    const group = localStorage.getItem('group');
    username.textContent = 'hadiyatulloh'

    document.getElementById('username').textContent = `Ism: ${username}`;
    document.getElementById('coin').textContent = `Coin: ${coin}`;
    document.getElementById('hp').textContent = `HP: ${hp}`;
    document.getElementById('group').textContent = `Guruh: ${group}`;
};

document.getElementById('logout').onclick = function() {
    localStorage.clear();
    alert('Siz tizimdan chiqdingiz!');
    window.location.href = 'index.html';
};