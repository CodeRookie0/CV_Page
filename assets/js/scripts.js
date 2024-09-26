document.addEventListener("DOMContentLoaded", function () {
	const rightSection = document.querySelector(".right");
	const headings = document.querySelectorAll(".left h3");
	const nameSpan = document.querySelector(".left h1");
	const paragraph = document.querySelector(".left p");
	const cvDownload = document.querySelector(".cv-download");
	const socialButtons = document.querySelectorAll(".social-button");

	const observerOptions = {
		root: null,
		threshold: 0.1,
	};

	const homeSection = document.querySelector("#home");

	const observerHome = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				rightSection.classList.add("visible");

				headings.forEach((heading) => {
					heading.classList.add("visible");
				});

				nameSpan.classList.add("visible");
				paragraph.classList.add("visible");

				cvDownload.classList.add("visible");

				socialButtons.forEach((button, index) => {
					setTimeout(() => {
						button.classList.add("visible");
					}, 200 * index);
				});
			} else {
				rightSection.classList.remove("visible");

				headings.forEach((heading) => {
					heading.classList.remove("visible");
				});

				nameSpan.classList.remove("visible");
				paragraph.classList.remove("visible");

				cvDownload.classList.remove("visible");

				socialButtons.forEach((button) => {
					button.classList.remove("visible");
				});
			}
		});
	}, observerOptions);

	observerHome.observe(homeSection);

	const experienceHeader = document.querySelector(".experience-header");
	const experienceCards = document.querySelector(".experience-cards");

	const experienceSection = document.querySelector("#experience");

	const observerExperience = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				experienceHeader.classList.add("visible");
				experienceCards.classList.add("visible");
			} else {
				experienceHeader.classList.remove("visible");
				experienceCards.classList.remove("visible");
			}
		});
	}, observerOptions);

	observerExperience.observe(experienceSection);
});

const texts = ["C# Developer", "Java Developer", "HTML Developer"];
let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function type() {
	if (isDeleting) {
		currentText = texts[index].substring(0, charIndex - 1);
		charIndex--;
	} else {
		currentText = texts[index].substring(0, charIndex + 1);
		charIndex++;
	}

	document.getElementById("typing-text").textContent = currentText;

	if (!isDeleting && charIndex === texts[index].length) {
		setTimeout(() => {
			isDeleting = true;
		}, 1000);
	} else if (isDeleting && charIndex === 0) {
		isDeleting = false;
		index = (index + 1) % texts.length;
	}

	const typingSpeed = isDeleting ? 100 : 200;
	setTimeout(type, typingSpeed);
}

type();
