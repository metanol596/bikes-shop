const menuAnchors = document.querySelectorAll('.main-nav a');

menuAnchors.forEach((anchor) => {
  anchor.addEventListener('click', (evt) => {
    evt.preventDefault();
    const blockId = anchor.getAttribute('href');

    document.querySelector(blockId).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
})
