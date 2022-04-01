const nav = () => {

    const dot = document.querySelector('nav ul li .dot');
    const links = document.querySelectorAll('nav ul li');

    links.forEach((link, index) => {
        link.addEventListener('click', () => {
            links.forEach(link => {
                link.firstChild.classList.remove('active');
            })
            link.firstChild.classList.add('active');
            dot.style.left = `${48+(100*(index))}%`;
        })
    })

}

nav();