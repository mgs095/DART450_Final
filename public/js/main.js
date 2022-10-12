console.log('Hello 2022');

const subs = document.querySelectorAll('.the-sub');
const subsInfo = document.querySelectorAll('.the-sub-info');

subs.forEach((sub) =>
	sub.addEventListener('click', function () {
		sub.classList.add('open');
	})
);
