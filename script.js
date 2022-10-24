const checker = document.querySelector('.scroll-checker')
const breakpoints = checker.children
const textContainer = document.querySelector('.text-container')
const textLines = textContainer.children

// Remove until preferred starting point / starting line
const textLinesSpliced = [...textLines].splice(6, 13)

const observer = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			const index = entry.target.dataset.section

            // Ignores out of bounds error
            try {
                textLinesSpliced[index].classList.toggle('focus', entry.isIntersecting)
            } catch {}
			if (entry.isIntersecting) {
				textContainer.style.transform = `translateY(-${index * 3}em)`
			}
		})
	},
	{
		rootMargin: '-50% 0% -50% 0%',
	}
)

for (const breakpoint of breakpoints) {
	observer.observe(breakpoint)
}
