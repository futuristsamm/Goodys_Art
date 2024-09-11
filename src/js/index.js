document.querySelectorAll('nav a').forEach(link =>{
    link.addEventListener('click', event =>{
        event.preventDefault(); //Prevent Default Link Behviour
        const targetId = link.getAttribute('href'); // Get target section ID
        const targetSection = document.querySelector(targetId); //Get target section element
        const marginTop = window.innerHeight * 0.1; //calculate 5% of window Height
        window.scrollTo({top:targetSection.offsetTop - marginTop, behavior:'smooth'}); //Scroll to section with offset
    });
});