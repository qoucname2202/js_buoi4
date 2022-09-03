// Change open and close exercises
const buttons = document.querySelectorAll('.nav button');
buttons[0].children[0].innerHTML = '📖';
buttons.forEach((item, idx) => {
	item.addEventListener('click', e => {
		item.children[0].innerHTML = '📖';
		buttons.forEach((res, index) => {
			if (idx !== index) {
				res.children[0].innerHTML = '📒';
			}
		});
	});
});
// Exercise 1: Sort 3 numbers in ascending order
// Function sorting using if/else
function sorting(a, b, c) {
	// Check condition a, b,c
	if (a < 0 || b < 0 || c < 0) {
		Swal.fire({
			position: 'center',
			icon: 'error',
			title: 'Yêu cầu nhập vào số dương',
			showConfirmButton: false,
			timer: 1500,
		});
		return;
	}
	if (a > b && b > c && a > c) {
		return `${c} < ${b} < ${a}`;
	} else if (b > a && a > c && b > c) {
		return `${c} < ${a} < ${b}`;
	} else if (c > a && c > b && a > b) {
		return `${b} < ${a} < ${c}`;
	} else if (a > c && c > b && a > b) {
		return `${b} < ${c} < ${a}`;
	} else if (c > a && c > b && b > a) {
		return `${a} < ${b} < ${c}`;
	}
	return `${a} < ${c} < ${b}`;
}
document.getElementById('btnSorting').addEventListener('click', e => {
	// Get value from input
	e.preventDefault();
	const numb01 = +document.getElementById('numb01').value;
	const numb02 = +document.getElementById('numb02').value;
	const numb03 = +document.getElementById('numb03').value;
	const formSorting = document.getElementById('formSorting');
	const value = sorting(numb01, numb02, numb03);
	const result = document.querySelector('.showSorting');
	result.innerText = value;
	// Reset form
	setTimeout(() => {
		formSorting.reset();
		result.innerText = '';
	}, 5000);
});

// Exercise 2: Greeting program
function introduce(str) {
	switch (str) {
		case 'father': {
			return `Xin chào Cha!`;
		}
		case 'mother': {
			return `Xin chào Mẹ!`;
		}
		case 'brother': {
			return `Xin chào Anh Trai!`;
		}
		case 'sister': {
			return `Xin chào Em Gái!`;
		}
		default:
			{
				Swal.fire({
					position: 'center',
					icon: 'error',
					title: 'Vui lòng chọn thành viên',
					showConfirmButton: false,
					timer: 1500,
				});
			}
			return '';
	}
}
document.getElementById('btnIntroduce').addEventListener('click', e => {
	e.preventDefault();
	// Get value
	const value = document.getElementById('formSelected').value;
	const result = document.querySelector('.showInstroduce');
	// Print introduce
	const name = introduce(value);
	result.innerHTML = name;
	// Reset form
	setTimeout(() => {
		document.getElementById('formIntroduce').reset();
		result.innerText = '';
	}, 5000);
});
// Exercise 3: Couting even and odd numbers

// Exercise 4: Guess the triagle

// Exercise 5: Tính ngày tháng năm

// Exercise 6: Calculate date

// Exercise 7: Read number

// Exercise 8: Find the student farthest from the school
