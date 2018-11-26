window.onscroll = () => {
    const nav = document.querySelector('#navbar');
    if (this.scrollY <= 10) {
        nav.className = 'is-dark';
    } else {
        nav.className = 'is-transparent';
    }
};