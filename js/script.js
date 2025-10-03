// js/script.js
document.addEventListener("DOMContentLoaded", () => {
	// accessible nav toggle
	const navToggleButtons = document.querySelectorAll(".nav-toggle");
	navToggleButtons.forEach((btn) => {
		btn.addEventListener("click", () => {
			// prefer nav inside same header
			const header = btn.closest(".header-inner") || document;
			let nav = header.querySelector(".site-nav");
			if (!nav) nav = document.querySelector(".site-nav");
			if (!nav) return;
			const open = nav.classList.toggle("open");
			btn.setAttribute("aria-expanded", open ? "true" : "false");
		});
	});

	// set current year(s)
	document.querySelectorAll('[id^="year"]').forEach((el) => {
		el.textContent = new Date().getFullYear();
	});

	// reveal on scroll (IntersectionObserver or fallback)
	if ("IntersectionObserver" in window) {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((e) => {
					if (e.isIntersecting) e.target.classList.add("active");
				});
			},
			{ threshold: 0.12 }
		);
		document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
	} else {
		// fallback
		const revealOnScroll = () => {
			document.querySelectorAll(".reveal").forEach((el) => {
				const rect = el.getBoundingClientRect();
				if (rect.top < window.innerHeight - 80) el.classList.add("active");
			});
		};
		window.addEventListener("scroll", revealOnScroll);
		revealOnScroll();
	}

	// newsletter form handler
	const newsletterForm = document.getElementById("newsletterForm");
	if (newsletterForm) {
		newsletterForm.addEventListener("submit", (e) => {
			e.preventDefault();
			const email = document.getElementById("newsletterEmail");
			const msg = document.getElementById("newsletterMsg");
			if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
				msg.textContent = "Please enter a valid email.";
				return;
			}
			msg.textContent = "Thanks! You are subscribed.";
			email.value = "";
		});
	}

	// contact form (client-side simulation)
	const contactForm = document.getElementById("contactForm");
	if (contactForm) {
		contactForm.addEventListener("submit", (e) => {
			e.preventDefault();
			const name = document.getElementById("name");
			const email = document.getElementById("email");
			const message = document.getElementById("message");
			const out = document.getElementById("contactMsg");
			if (
				!name.value.trim() ||
				!/\S+@\S+\.\S+/.test(email.value) ||
				!message.value.trim()
			) {
				out.textContent = "Please fill all fields correctly.";
				return;
			}
			out.textContent = "Sending...";
			setTimeout(() => {
				out.textContent = "Message sent — we will reply soon.";
				contactForm.reset();
			}, 800);
		});
	}
});
// end of script.js