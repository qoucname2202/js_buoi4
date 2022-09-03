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
		setTimeout(() => {
			document.getElementById('formSorting').reset();
		}, 1000);
		return '';
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
	}, 7000);
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
	}, 7000);
});
// Exercise 3: Couting even and odd numbers
function isEvenOdd(numb) {
	return numb % 2 === 0 ? true : false;
}
document.getElementById('btnCounting').addEventListener('click', e => {
	e.preventDefault();
	let countEven = 0;
	// Get value form
	const numb1 = +document.getElementById('numb1').value;
	const numb2 = +document.getElementById('numb2').value;
	const numb3 = +document.getElementById('numb3').value;
	// Check validate
	if (numb1 < 0 || numb2 < 0 || numb3 < 0) {
		Swal.fire({
			position: 'center',
			icon: 'error',
			title: 'Vui lòng nhập số nguyên bạn nhé',
			showConfirmButton: false,
			timer: 1500,
		});
		setTimeout(() => {
			document.getElementById('formCounting').reset();
		}, 1000);
		return;
	}
	// Couting even number and odd number
	const result = document.querySelector('.showCounting');
	if (isEvenOdd(numb1)) {
		countEven++;
	}
	if (isEvenOdd(numb2)) {
		countEven++;
	}
	if (isEvenOdd(numb3)) {
		countEven++;
	}
	let countOdd = 3 - countEven;
	result.innerHTML = `Số lượng số chẵn ${countEven} - số lẻ ${countOdd}`;
	// Reset form
	setTimeout(() => {
		document.getElementById('formCounting').reset();
		result.innerText = '';
	}, 7000);
});
// Exercise 4: Guess the triagle
function isIsoscelesTriangle(a, b, c) {
	if (a === b && a !== c && b !== c) {
		return true;
	} else if (b === c && b !== a && c !== a) {
		return true;
	} else if (c === a && a !== b && c !== b) {
		return true;
	}
	return false;
}
function rightTriagle(a, b, c) {
	if (c ** 2 === a ** 2 + b ** 2) {
		return true;
	} else if (b ** 2 === a ** 2 + c ** 2) {
		return true;
	} else if (a ** 2 === c ** 2 + b ** 2) {
		return true;
	}
	return false;
}
function guessTriagle(a, b, c) {
	if (a < 0 || b < 0 || c < 0) {
		Swal.fire({
			position: 'center',
			icon: 'error',
			title: 'Vui lòng nhập lại 3 cạnh',
			showConfirmButton: false,
			timer: 1500,
		});
		setTimeout(() => {
			document.getElementById('formGuessTriagle').reset();
		}, 1000);
		return '';
	}
	if (a === b && b === a && a === c) {
		return `Hình tam giác đều`;
	} else if (isIsoscelesTriangle(a, b, c)) {
		return `Hình tam giác cân`;
	} else if (rightTriagle(a, b, c)) {
		return `Hình tam giác vuông`;
	}
	return `Hình tam giác khác`;
}
document.getElementById('btnGuess').addEventListener('click', e => {
	e.preventDefault();
	// Get value form
	const side01 = +document.getElementById('side01').value;
	const side02 = +document.getElementById('side02').value;
	const side03 = +document.getElementById('side03').value;
	const value = guessTriagle(side01, side02, side03);
	const result = document.querySelector('.showGuess');
	result.innerHTML = value;
	// Reset form
	setTimeout(() => {
		document.getElementById('formGuessTriagle').reset();
		result.innerText = '';
	}, 7000);
});

// Exercise 5: Tính ngày tháng năm

function calcNextDate(day, month, year) {
	if (day < 0 || month < 0 || year < 0) {
		Swal.fire({
			position: 'center',
			icon: 'error',
			title: 'Vui lòng nhập lại ngày tháng năm',
			showConfirmButton: false,
			timer: 1500,
		});
		setTimeout(() => {
			document.getElementById('formCalcDate').reset();
		}, 1000);
		return '';
	}
	const now = new Date(`${month}/${day}/${year}`);
	let nextDay = new Date(now);
	nextDay.setDate(nextDay.getDate() + 1);
	const monthNext = nextDay.getMonth() + 1;
	const dayNext = nextDay.getDate();
	const yearNext = nextDay.getFullYear();
	return `${dayNext < 10 ? `0${dayNext}` : dayNext}/${
		monthNext < 10 ? `0${monthNext}` : monthNext
	}/${yearNext}`;
}
function calcPrevDate(day, month, year) {
	if (day < 0 || month < 0 || year < 0) {
		Swal.fire({
			position: 'center',
			icon: 'error',
			title: 'Vui lòng nhập lại ngày tháng năm',
			showConfirmButton: false,
			timer: 1500,
		});
		setTimeout(() => {
			document.getElementById('formCalcDate').reset();
		}, 1000);
		return '';
	}
	const now = new Date(`${month}/${day}/${year}`);
	let prevDay = new Date(now);
	prevDay.setDate(prevDay.getDate() - 1);
	const monthPrev = prevDay.getMonth() + 1;
	const dayPrev = prevDay.getDate();
	const yearPrev = prevDay.getFullYear();
	return `${dayPrev < 10 ? `0${dayPrev}` : dayPrev}/${
		monthPrev < 10 ? `0${monthPrev}` : monthPrev
	}/${yearPrev}`;
}

document.getElementById('btnPrevDate').addEventListener('click', e => {
	e.preventDefault();
	const day = +document.getElementById('day').value;
	const month = +document.getElementById('month').value;
	const year = +document.getElementById('year').value;
	const result = document.querySelector('.showDate');
	const value = calcPrevDate(day, month, year);
	result.innerHTML = value;
	setTimeout(() => {
		document.getElementById('formCalcDate').reset();
		result.innerHTML = '';
	}, 7000);
});

document.getElementById('btnNextDate').addEventListener('click', e => {
	e.preventDefault();
	const day = +document.getElementById('day').value;
	const month = +document.getElementById('month').value;
	const year = +document.getElementById('year').value;
	const result = document.querySelector('.showDate');
	const value = calcNextDate(day, month, year);
	result.innerHTML = value;
	setTimeout(() => {
		document.getElementById('formCalcDate').reset();
		result.innerHTML = '';
	}, 7000);
});

// Exercise 6: Calculate date

function calcDate(month, year) {
	if (month < 0 || year < 0) {
		Swal.fire({
			position: 'center',
			icon: 'error',
			title: 'Vui lòng nhập lại tháng năm',
			showConfirmButton: false,
			timer: 1500,
		});
		setTimeout(() => {
			document.getElementById('formAmountDays').reset();
		}, 1500);
		return '';
	}
	switch (month) {
		case 2:
			return (year % 4 == 0 && year % 100) || year % 400 == 0 ? 29 : 28;
		case 4:
		case 6:
		case 9:
		case 11:
			return 30;
		default:
			return 31;
	}
}
document.getElementById('btnCalcDay').addEventListener('click', e => {
	e.preventDefault();
	const month = +document.getElementById('months').value;
	const year = +document.getElementById('years').value;
	const result = document.querySelector('.showDay');
	const value = calcDate(month, year);
	result.innerHTML = `Tháng ${month} năm ${year} có ${value} ngày`;
	setTimeout(() => {
		document.getElementById('formAmountDays').reset();
		result.innerHTML = '';
	}, 7000);
});
// Exercise 7: Read number
function readNumber(numb) {
	// Validation numb 3 digit
	if (numb < 100 || numb >= 1000) {
		Swal.fire({
			position: 'center',
			icon: 'error',
			title: 'Vui lòng nhập lại số',
			showConfirmButton: false,
			timer: 1500,
		});
		setTimeout(() => {
			document.getElementById('formReadNumber').reset();
		}, 1500);
		return '';
	}
	const numbList = [
		'không',
		'một',
		'hai',
		'ba',
		'bốn',
		'năm',
		'sáu',
		'bảy',
		'tám',
		'chín',
	];
	let result = '';
	let tram = parseInt(numb / 100);
	let chuc = parseInt((numb % 100) / 10);
	let donvi = numb % 10;
	if (tram === 0 && chuc === 0 && donvi === 0) return '';
	if (tram !== 0) {
		result += numbList[tram] + ' trăm ';
		if (chuc === 0 && donvi !== 0) result += ' linh ';
	}
	if (chuc !== 0 && chuc !== 1) {
		result += numbList[chuc] + ' mươi';
		if (chuc === 0 && donvi !== 0) result += ' linh ';
	}
	if (chuc === 1) result += ' mười ';
	switch (donvi) {
		case 1:
			if (chuc !== 0 && chuc !== 1) {
				result += ' mốt ';
			} else {
				result += numbList[donvi];
			}
			break;
		case 5:
			if (chuc === 0) {
				result += numbList[donvi];
			} else {
				result += ' lăm ';
			}
			break;
		default:
			if (donvi !== 0) {
				result += numbList[donvi];
			}
			break;
	}
	return result;
}
document.getElementById('btnReadNumber').addEventListener('click', e => {
	e.preventDefault();
	const result = document.querySelector('.showReadNumber');
	const numb = +document.getElementById('readNumb').value;
	const value = readNumber(numb);
	result.innerHTML = value;
	setTimeout(() => {
		document.getElementById('formReadNumber').reset();
		result.innerHTML = '';
	}, 7000);
});
// Exercise 8: Find the student farthest from the school
// distanceA = Math.sqrt(Math.pow(x2-x1) + Math.pow(y2-y1))
