let menuIcon = document.querySelector('#menu-icon')
let  navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}





















let section = document.querySelectorAll("section")
let navlink =document.querySelectorAll("header nav a")

window.onscroll = () =>{
    section.forEach(sec => {
        let top = window.scrollY
        let offset =sec.offsetTop - 150
        let height = sec.offsetHeight
        let id = sec.getAttribute("id")
        if(top => offset && top < offset + height) {
            navlink.forEach(links =>{
                links.classList.remove("active")
                document.querySelector("header nav a[href*=" +  id +"]").classList.add("active")
            })
        }
    })
let header = document.querySelector("header")
header.classList.toggle("sticky", window.scrollY > 100)


// remove toggle icon and nav


menuIcon.classList.remove('bx-x')
navbar.classList.remove('active')










}

// scroll reveal


ScrollReveal({ 
    reset: true,
    distance:'80px',
    duration:2000,
    delay:200
})

ScrollReveal().reveal(".home-content, .heading",{
origin:"top"
})


ScrollReveal().reveal(".home-img, .services-container, .portfolio-box, .contact form",{
    origin:"left"
    })


    ScrollReveal().reveal(".home-content h1 .about-img, .heading",{
        origin:"left"
        })

        ScrollReveal().reveal(".home-content p, .about-contact",{
            origin:"right"
            })





// typed

const typed = new Typed(".multi-te", {
    strings: ["Frontend Developer","Faebook user","wathsapp user"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 100,
    loop: true
})

const scriptURL = 'https://script.google.com/macros/s/AKfycbzQizhlFDP6KXDgcxs3O_kNBfwg8nkIz6HTbiGPIvEV0MViIHmk9jycxxis3jiZBaBXcg/exec'
    const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Message Sent Successfully"
            setTimeout(function(){
                msg.innerHTML = ""
            },5000)
            formReset()
        })
        .catch(error => console.error('Error!', error.message))
    })











/*

// <!-- Your JavaScript code -->
  const scriptURL = 'https://script.google.com/macros/s/AKfycbzQizhlFDP6KXDgcxs3O_kNBfwg8nkIz6HTbiGPIvEV0MViIHmk9jycxxis3jiZBaBXcg/exec';
  const form = document.forms['submit-to-google-sheet'];
  const msg = document.getElementById("msg");

  form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(response => {
        msg.innerHTML = "Message Sent Successfully";
        setTimeout(function() {
          msg.innerHTML = "";
        }, 5000);
        formReset(); // Call the formReset function after successful submission
      })
      .catch(error => console.error('Error!', error.message));
  });

  // Define the formReset function to reset the form fields
  function formReset() {
    form.reset(); // Resets the form fields to their initial state
  }
*/