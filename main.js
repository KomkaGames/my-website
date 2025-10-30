// Simple interactive enhancements for the history site
document.addEventListener('DOMContentLoaded', function(){
	// smooth scroll for in-page nav links
	document.querySelectorAll('a[href^="#"]').forEach(function(a){
		a.addEventListener('click', function(e){
			const target = document.querySelector(this.getAttribute('href'));
			if(target){
				e.preventDefault();
				target.scrollIntoView({behavior:'smooth', block:'start'});
			}
		});
	});

	// Timeline interactivity
	const details = {
		'1814': '1814 — Людовік XVIII повертається на престол. Прийнята Хартія (Конституція), яка гарантувала деякі громадянські свободи.',
		'1815': '1815 — Сторінка Сто Днів Наполеона, поразка під Ватерлоо та остаточна реставрація Бурбонів.',
		'1824': '1824 — Людовік XVIII помирає; на престол сходить Карл X. Починаються спроби посилити монархічну владу.',
		'1830': '1830 — Липнева (Іюльська) революція. Карл X зречений, реставрація Бурбонів закінчена; до влади приходить Луї-Філіп.'
	};

	const eventButtons = document.querySelectorAll('.timeline .event');
	const detailBox = document.getElementById('event-detail');
	if(eventButtons && detailBox){
		eventButtons.forEach(function(btn){
			btn.addEventListener('click', function(){
				const year = this.dataset.year;
				detailBox.innerHTML = '<h3>'+year+'</h3><p>'+ (details[year] || 'Опис відсутній') +'</p>';
				// visually mark active
				eventButtons.forEach(b=>b.classList.remove('active'));
				this.classList.add('active');
			});
		});
	}
});
