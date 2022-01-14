let grid = [
	['', '', ''],
	['', '', ''],
	['', '', '']
];

let player = 'X';

let time = 0;

function rand(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min +1)) + min;
}

function reset() {
	grid = [
		['', '', ''],
		['', '', ''],
		['', '', '']
	];
	player = 'X';
	time = 0;
}

function displayGrid() {
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[i].length; j++) {
			document.getElementById('c' + i + j).textContent = grid[i][j];
			if (grid[i][j] === 'X') {
				document.getElementById('c' + i + j).style.color = 'blue';
			} else {
				document.getElementById('c' + i + j).style.color = 'red';
			}
		}
	}
}

function winTest() {
	if (grid[0][0] === 'O' && grid[0][1] === 'O' && grid[0][2] === 'O' ||
		grid[1][0] === 'O' && grid[1][1] === 'O' && grid[1][2] === 'O' ||
		grid[2][0] === 'O' && grid[2][1] === 'O' && grid[2][2] === 'O' ||

		grid[0][0] === 'O' && grid[1][0] === 'O' && grid[2][0] === 'O' ||
		grid[0][1] === 'O' && grid[1][1] === 'O' && grid[2][1] === 'O' ||
		grid[0][2] === 'O' && grid[1][2] === 'O' && grid[2][2] === 'O' ||

		grid[0][0] === 'O' && grid[1][1] === 'O' && grid[2][2] === 'O' ||
		grid[0][2] === 'O' && grid[1][1] === 'O' && grid[2][0] === 'O') {
		document.getElementById('result').innerHTML = '<span style="color: red;">O</span> win !';
		reset();
	}
	if (grid[0][0] === 'X' && grid[0][1] === 'X' && grid[0][2] === 'X' ||
		grid[1][0] === 'X' && grid[1][1] === 'X' && grid[1][2] === 'X' ||
		grid[2][0] === 'X' && grid[2][1] === 'X' && grid[2][2] === 'X' ||

		grid[0][0] === 'X' && grid[1][0] === 'X' && grid[2][0] === 'X' ||
		grid[0][1] === 'X' && grid[1][1] === 'X' && grid[2][1] === 'X' ||
		grid[0][2] === 'X' && grid[1][2] === 'X' && grid[2][2] === 'X' ||

		grid[0][0] === 'X' && grid[1][1] === 'X' && grid[2][2] === 'X' ||
		grid[0][2] === 'X' && grid[1][1] === 'X' && grid[2][0] === 'X') {
		document.getElementById('result').innerHTML = '<span style="color: blue;">X</span> win !';
		reset();
	}
	if (time === 5) {
		document.getElementById('result').innerHTML = 'Equality !';
		reset();
	}
}

for (let i = 0; i < grid.length; i++) {
	for (let j = 0; j < grid[i].length; j++) {
		document.getElementById('c' + i + j).addEventListener('click', e => {
			document.getElementById('result').textContent = '';
			if (grid[i][j] === '') {
				time++;
				grid[i][j] = 'X';

				while (true) {
					if (time === 5) {
						break;
					}
					let ri = rand(0, 2);
					let rj = rand(0, 2);
					if (grid[ri][rj] === '') {
						grid[ri][rj] = 'O'
						break;
					}
				}

				displayGrid();
				winTest();
				console.log(time);
			}
		});
	}
}