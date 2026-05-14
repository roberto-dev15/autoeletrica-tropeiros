new Swiper('.swiper', {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,

    breakpoints: {
        0: { slidesPerView: 1 },
        480: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4.2 }  // 4,2 para dar aquele "preview" do próximo
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

function enviarWhats(event) {
    event.preventDefault()
    const nome = document.getElementById('nome').value
    const mensagem = document.getElementById('mensagem').value
    const telefone = '5549988548856'
    const texto = encodeURIComponent(`Olá! Me chamo ${nome}, ${mensagem}`)
    window.open(`https://wa.me/${telefone}?text=${texto}`, '_blank')
}