const emailMeElement = document.querySelector('.email-me');

emailMeElement.addEventListener('click', () => {
  const email = 'shauryag21@iitk.ac.in';
  const subject = 'Hello';
  const body = 'I wanted to get in touch with you.';

  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailtoLink;
});

const callMeElement = document.querySelector('.call-me');
let flag = 0;
callMeElement.addEventListener('click', () => {
  const phoneNumber = '+91 8076531475';
  window.location.href = `tel:${phoneNumber}`;
});
const navbar = document.getElementById('navbar');
const ullinks = document.querySelector('.nav-links')
const burger = document.getElementById('burger');
burger.addEventListener('click', () => {
  if (flag == 0) {
    navbar.classList.add("navbar2");
    ullinks.classList.add("navbaron");
    flag = 1;
  }
  else{
    navbar.classList.remove('navbar2');
    ullinks.classList.remove('navbaron');
    flag=0;
  }


})