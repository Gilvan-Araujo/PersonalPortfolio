function toggleVisualMode() {
    var button = document.querySelector('button.visual-mode-button')
    if (button.innerHTML == '☀️') {
        button.innerHTML = '🌑'
    } else {
        button.innerHTML = '☀️'
    }

    var header = document.querySelector('header');
    var footer = document.querySelector('footer');
    header.classList.toggle('light-mode-header-footer');
    footer.classList.toggle('light-mode-header-footer');

    var main = document.querySelector('.main');
    var sidebar = document.querySelector('.sidebar');
    main.classList.toggle('light-mode-main-sidebar');
    sidebar.classList.toggle('light-mode-main-sidebar');

    var headers = document.querySelectorAll('h1, h2, h3, h4, figcaption');
    for (var i = 0; i < headers.length; i++) {
        headers[i].classList.toggle('light-mode-headers')
    }

    var appContainer = document.querySelectorAll('.app-container');
    for (var i = 0; i < appContainer.length; i++) {
        appContainer[i].classList.toggle('light-mode-button-app-container')
    }
    button.classList.toggle('light-mode-button-app-container')

    var vectors = document.querySelectorAll('.svg');
    for (var i = 0; i < vectors.length; i++) {
        vectors[i].classList.toggle('filter-black')
    }
}