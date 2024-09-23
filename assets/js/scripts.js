document.addEventListener("DOMContentLoaded", function () {
	const rightSection = document.querySelector(".right");
	rightSection.classList.add("visible");

	const headings = document.querySelectorAll(".left h3");
	headings.forEach((heading) => {
		heading.classList.add("visible");
	});

	const nameSpan = document.querySelector(".left h1");
	const paragraph = document.querySelector(".left p");
	nameSpan.classList.add("visible");
	paragraph.classList.add("visible");

	const cvDownload = document.querySelector(".cv-download");
	cvDownload.classList.add("visible");

	const socialButtons = document.querySelectorAll(".social-button");
	setTimeout(() => {
		socialButtons.forEach((button, index) => {
			setTimeout(() => {
				button.classList.add("visible");
			}, 200 * index);
		});
	}, 800);
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
