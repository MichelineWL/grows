// js.js

function myFunction() {
    // Mengubah teks pada scoreheader
    document.getElementById("scoreheader").innerHTML = "YAY YOU DID IT !!!";
  
    // Menampilkan gambar animasi
    const animation = document.querySelector('.score img');
    animation.style.display = 'block';
  
    setTimeout(function() {
      animation.style.display = 'none';
    }, 3000);
  }
  

// Function to handle scrolling to the cards section
function scrollToCards() {
    const cardsSection = document.querySelector('.section2');
    cardsSection.scrollIntoView({ behavior: 'smooth' });
  }
  
// Function to attach scrollToCards to button click event
  const arrowButton = document.querySelector('.hero button');
  arrowButton.addEventListener('click', scrollToCards);
  
  