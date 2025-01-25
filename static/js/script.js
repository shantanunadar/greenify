
      const buttons = document.querySelectorAll(".myButton");
      const closeButtons = document.querySelectorAll(".closePopup");

      buttons.forEach(button => {
      	button.addEventListener("click", function() {

      		const popupId = this.getAttribute("data-popup");
      		const targetPopup = document.getElementById(popupId);
      		targetPopup.classList.add("show");
      	});
      });

      closeButtons.forEach(button => {
      	button.addEventListener("click", function() {
      		this.closest(".popup").classList.remove("show");
      	});
      });

      window.addEventListener("click", function(event) {
      	if (event.target.classList.contains("popup")) {
      		event.target.classList.remove("show");
      	}
      });

      const focusimgdiv = document.getElementById('focusdiv');
      let currentPopup = null;

      function getRandomInteger() {
      	return Math.floor(Math.random() * 8) + 1;
      }

      focusimgdiv.addEventListener('mouseover', () => {
      	let i = getRandomInteger();
      	currentPopup = document.getElementById(`popup${i}`);

      	if (currentPopup) {
      		currentPopup.style.visibility = 'visible';
      	}
      });

      focusimgdiv.addEventListener('mouseout', () => {
      	if (currentPopup) {
      		currentPopup.style.visibility = 'hidden';
      		currentPopup = null;
      	}
      });
