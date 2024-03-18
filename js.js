// document.addEventListener('DOMContentLoaded', function() {
//     // Tampilkan intro
//     document.getElementById('intro').style.display = 'block';

//     // Tampilkan konten utama setelah 3 detik
//     setTimeout(function() {
//         document.getElementById('intro').style.display = 'none';
//         document.getElementById('main-content').style.display = 'block';
//     }, 3000);
// });

// document.addEventListener("DOMContentLoaded", function() {
//     var loadingBar = document.querySelector(".loading-bar");
//     var progress = 0;
//     var interval = setInterval(function() {
//       progress++;
//       loadingBar.style.width = progress + "%";
//       if (progress >= 100) {
//         clearInterval(interval);
//         setTimeout(function() {
//           document.querySelector(".intro").style.opacity = 0;
//           setTimeout(function() {
//             document.querySelector(".intro").style.display = "none";
//             sessionStorage.setItem("introShown", true);
//           }, 500);
//         }, 500);
//       }
//     }, 30);
//   });
  
// document.addEventListener("DOMContentLoaded", function() {
//     var logo = document.querySelector(".logo");
//     logo.style.opacity = 1;
//     setTimeout(function() {
//       logo.style.opacity = 0;
//       setTimeout(function() {
//         logo.style.display = "none";
//         var loadingBar = document.querySelector(".loading-bar");
//         loadingBar.style.width = "100%";
//         setTimeout(function() {
//           document.querySelector(".intro").style.opacity = 0;
//           setTimeout(function() {
//             document.querySelector(".intro").style.display = "none";
//             sessionStorage.setItem("introShown", true);
//           }, 500);
//         }, 2000);
//       }, 500);
//     }, 2000); // Durasi logo muncul selama 2 detik
//   });
  

  function playClickSound() {
    var clickSound = document.getElementById("clickSound");
    clickSound.play();
  }














document.addEventListener('DOMContentLoaded', function() {
    var video = document.querySelector('video');
    video.play();
  });
  

  document.addEventListener('DOMContentLoaded', function() {
    let video = document.querySelector('.container .content .profil .foto .img-figure img.img-profil');
    let imgWrapper = document.querySelector('.container .content .profil .foto .img-figure');
    let nama = document.querySelector('.container .content .profil .foto .nama');
    let sosmed = document.querySelector('.container .content .profil .foto .sosmed');

    window.addEventListener('scroll', function() {
        if (isInViewport(imgWrapper) && !video.classList.contains('show')) {
            video.src = video.getAttribute('data-src');
            video.classList.add('show');
        }

        if (isInViewport(nama) && !nama.classList.contains('show')) {
            nama.classList.add('show');
        }
        
    });

    function isInViewport(element) {
        let rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
});


// document.addEventListener('DOMContentLoaded', function() {
//     // Tambahkan class 'show' ke gambar setelah halaman dimuat
//     document.querySelector('.img-profil').classList.add('show');
// });


// lihat cv
function expandCV() {
    var cv = document.querySelector('.cv');
    if (cv.clientWidth === 70) {
        cv.style.width = "200px"; // Ubah lebar ke 200px jika sedang 100px
    } else {
        cv.style.width = "70px"; // Kembalikan lebar ke 100px jika sedang 200px
    }
}


// document.querySelectorAll('.container .content .profil .right .keahlian .nilai .css').forEach(function(element) {
//     element.addEventListener('click', function() {
//         this.classList.toggle('flipped');
//     });
// });

document.querySelectorAll('.container .content .profil .right .keahlian .nilai .css').forEach(function(element, index) {
    element.addEventListener('click', function() {
        const alreadyFlipped = document.querySelector('.container .content .profil .right .keahlian .nilai .css.flipped');

        if (alreadyFlipped && alreadyFlipped !== this) {
            alreadyFlipped.classList.remove('flipped');
        }

        this.classList.toggle('flipped');

        // Sembunyikan elemen <p> jika class 'flipped' tidak ada pada elemen .css
        document.querySelector('.keterangan .ket').style.display = this.classList.contains('flipped') ? 'none' : 'block';

        // Sembunyikan semua elemen .ket-css
        document.querySelectorAll('.keterangan .ket-css').forEach(function(ketElement) {
            ketElement.style.display = 'none';
        });

        // Tampilkan elemen .ket-css yang sesuai dengan index
        if (this.classList.contains('flipped')) {
            document.querySelectorAll('.keterangan .ket-css')[index].style.display = 'block';
        }
    });
});

// Periksa apakah ada yang diklik, jika tidak tampilkan <p>
document.addEventListener('click', function() {
    const anyFlipped = document.querySelector('.container .content .profil .right .keahlian .nilai .css.flipped');
    if (!anyFlipped) {
        document.querySelector('.keterangan .ket').style.display = 'block';
    }
});



function handleViewportChange(mediaQuery) {
    const isis = document.querySelectorAll('.isi:nth-child(even)');
    isis.forEach(isi => {
        const haasil = isi.querySelector('.haasil');
        const keterangan = isi.querySelector('.keterangan');
        isi.insertBefore(haasil, keterangan);
    });

    const isis2 = document.querySelectorAll('.isi2:nth-child(odd)');
    isis2.forEach(isi => {
        const haasil = isi.querySelector('.haasil2');
        const keterangan = isi.querySelector('.keterangan2');
        isi.insertBefore(keterangan, haasil);
    });
}

function checkWidth() {
    if (window.innerWidth <= 430) {
        handleViewportChange();
    } else {
        // Reset the order to original
        const isis = document.querySelectorAll('.isi:nth-child(even)');
        isis.forEach(isi => {
            const haasil = isi.querySelector('.haasil');
            const keterangan = isi.querySelector('.keterangan');
            isi.insertBefore(keterangan, haasil);
        });

        const isis2 = document.querySelectorAll('.isi2:nth-child(odd)');
        isis2.forEach(isi => {
            const haasil = isi.querySelector('.haasil2');
            const keterangan = isi.querySelector('.keterangan2');
            isi.insertBefore(haasil, keterangan);
        });
    }
}

window.addEventListener('DOMContentLoaded', checkWidth);
window.addEventListener('resize', checkWidth);









// JavaScript










