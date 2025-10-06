document.addEventListener("DOMContentLoaded", () => {
	// Navigation toggle (mobile)
	const navToggle = document.querySelector(".nav-toggle");
	const siteNav = document.querySelector(".site-nav");

	if (navToggle && siteNav) {
		navToggle.addEventListener("click", () => {
			siteNav.classList.toggle("show");
			navToggle.setAttribute(
				"aria-expanded",
				siteNav.classList.contains("show")
			);
		});

		// Responsive nav close on resize
		window.addEventListener("resize", () => {
			if (window.innerWidth >= 640 && siteNav.classList.contains("show")) {
				siteNav.classList.remove("show");
				navToggle.setAttribute("aria-expanded", "false");
			}
		});
	}

	// Set current year in the footer
	document.querySelectorAll("#year").forEach((el) => {
		el.textContent = new Date().getFullYear();
	});

	// Reveal animations
	const revealElems = document.querySelectorAll(".reveal");
	if ("IntersectionObserver" in window) {
		const obs = new IntersectionObserver(
			(entries) => {
				entries.forEach((e) => {
					if (e.isIntersecting) e.target.classList.add("active");
				});
			},
			{ threshold: 0.12 }
		);
		revealElems.forEach((el) => obs.observe(el));
	} else {
		const onScroll = () => {
			revealElems.forEach((el) => {
				const r = el.getBoundingClientRect();
				if (r.top < window.innerHeight - 80) el.classList.add("active");
			});
		};
		window.addEventListener("scroll", onScroll);
		onScroll();
	}

	// Newsletter form
	const newsletter = document.getElementById("newsletterForm");
	if (newsletter) {
		const email = document.getElementById("newsletterEmail");
		const msg = document.getElementById("newsletterMsg");
		newsletter.addEventListener("submit", (e) => {
			e.preventDefault();
			if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
				msg.textContent = "Please enter a valid email.";
				return;
			}
			msg.textContent = "Thanks — you are subscribed!";
			newsletter.reset();
		});
	}

	// Contact form
	const contact = document.getElementById("contactForm");
	if (contact) {
		contact.addEventListener("submit", (e) => {
			e.preventDefault();
			alert("Thank you — we received your message!");
			contact.reset();
		});
	}
});
