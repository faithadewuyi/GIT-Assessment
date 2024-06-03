const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(e){
  e.preventDefault()

  const contactFormData = new FormData(contactForm)
  const name = contactFormData.get('fullname')
  const email =contactFormData.get('email')
  const message = contactFormData.get('message')
})