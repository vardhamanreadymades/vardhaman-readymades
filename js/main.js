// Smooth scroll for “Shop Now” button
document.querySelector('.btn').addEventListener('click', function(e){
  e.preventDefault();
  document.querySelector('#products').scrollIntoView({behavior: 'smooth'});
});
