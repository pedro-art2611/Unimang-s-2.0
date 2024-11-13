// modo escuro
const darkModeToggle = document.getElementById("darkModeChange");
const darkModeIcon = document.getElementById("darkMode");
const changeImg = document.getElementById("U");

darkModeToggle.addEventListener("click", function() {

  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {

    darkModeIcon.classList.replace("fa-sun", "fa-moon");
    darkModeIcon.style.color = "#f39c12";
    changeImg.src = 'Uclaro.png';
  } else {

    darkModeIcon.classList.replace("fa-moon", "fa-sun");
    darkModeIcon.style.color = "";
    changeImg.src = 'Uescuro.png';
  }
});


//Validação de login

// Carrossel 

/*var slides = ['mariage.png', 'dandadan.png', 'jjk.jpeg', 'narutin.jpg', 'days.png'];
var currentSlide = 0;

function showSlide(direction) {
    var slider = document.getElementById('dvSlider');

    var img = document.createElement('div');
    img.className = `slide-image ${direction}`;
    img.style.backgroundImage = `url('${slides[currentSlide]}')`;

    slider.appendChild(img);

    setTimeout(() => img.classList.add('slide-active'), 10);
}

function troca(dir) {

    var direction = dir === 1 ? 'from-right' : 'from-left';
    currentSlide = (currentSlide + dir + slides.length) % slides.length;
    showSlide(direction);

    if(troca === true){
      setInterval(() => troca(1), 6000);
    }
}


setInterval(() => troca(1), 6000);

showSlide('from-right');*/

var slides = ['mariage.png', 'dandadan.png', 'jjk.jpeg', 'narutin.jpg', 'days.png'];
var currentSlide = 0;
var interval; // Variável para armazenar o intervalo de transição

function showSlide(direction, instant = false) {
    var slider = document.getElementById('dvSlider');

    var img = document.createElement('div');
    img.className = `slide-image ${direction}`;
    img.style.backgroundImage = `url('${slides[currentSlide]}')`;

    // Define transição rápida se for um clique manual
    if (instant) {
        img.style.transition = 'none';
    }

    slider.appendChild(img);

    setTimeout(() => img.classList.add('slide-active'), 10);
}

function troca(dir, instant = false) {
    var direction = dir === 1 ? 'from-right' : 'from-left';
    currentSlide = (currentSlide + dir + slides.length) % slides.length;
    showSlide(direction, instant);

    // Pausa a transição automática e redefine o intervalo
    clearInterval(interval);
    interval = setInterval(() => troca(1), 6000);
}

// Inicia o intervalo para troca automática de slides
interval = setInterval(() => troca(1), 6000);

// Exibe o primeiro slide
showSlide('from-right');

// Função para troca manual com transição instantânea
function manualChange(dir) {
    troca(dir, true); // Passa o parâmetro true para transição instantânea
}

//Favoritos (Não consegui fazer)
