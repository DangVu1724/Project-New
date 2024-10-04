function addSmoothScroll(clickId, scrollId) {
    document.getElementById(clickId).addEventListener('click', function() {
        document.getElementById(scrollId).scrollIntoView({
        });
    });
}

addSmoothScroll('chedau', 'chedau1');
addSmoothScroll('che', 'che1');
addSmoothScroll('tsav', 'tsav1');
addSmoothScroll('combo', 'combo1');






document.addEventListener("DOMContentLoaded", function() {
    const qrCode = document.getElementById("QRCode");
    const btnAddings = document.querySelectorAll(".btn-adding");
  
    btnAddings.forEach(btnAdding => {
      btnAdding.addEventListener("click", () => {
        qrCode.scrollIntoView({ block: 'center' }); 
        qrCode.classList.add("animate__animated", "animate__tada");
  
        qrCode.addEventListener('animationend', () => {
          qrCode.classList.remove("animate__animated", "animate__tada");
        }, { once: true });
      });
    });
  });