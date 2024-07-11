let typed = new Typed('.multiple', {
    strings : ['Frontend Developer'],
    typeSpeed : 100,
    backSpeed : 100,
    backDelay : 100,
    loop : true
});

// toggle icon
let menu = document.querySelector("#menu");
let navbar = document.querySelector('.navbar')

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// Scroll selection active link

let section = document.querySelectorAll('section');
let nav = document.querySelectorAll('header nav a');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            nav.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });


// sticky navbar

let header = document.querySelector('header');

header.classList.toggle('sticky',window.scrollY > 100);


// remove toggle icon navbar
menu.classList.remove('bx-x');
navbar.classList.remove('active');

};

// slider code
