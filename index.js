// async function add(){			// định nghĩa function add là async
// 	console.log("Hello World !");
// };

// let add = async () => {			
// 	console.log("Hello World !");
// };
// add();

// 	=======================================================
// 	function bao await phải là async function
//	let a = await aPromise : sẽ dừng function async lại (không chạy các câu lệnh bên dưới)
//	và chờ promse trả về kết quả.
//	kết quả của promise trả về sẽ gán vào a
//	sau đó mới chạy tiếp các câu lệnh tiếp theo

let add = (a, b) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (typeof a != 'number' || typeof b != 'number') {	
				return reject(new Error('Tham so phai co kieu number'));
			}
			resolve(a + b);
		}, 1000);
	});
};

// let add = async () => {
// 	// let res = addPr(4,5);
// 	// console.log(res);			// Promise { <pending> }

// 	let res = await addPr(4,5);		// chờ cho đến khi addPr chạy xong thì mới chạy các câu lệnh bên tiếp theo
// 	console.log(res);				// 9	
// }
// add();

let multiply = (a, b) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (typeof a != 'number' || typeof b != 'number') {	
				return reject(new Error('Tham so phai co kieu number'));
			}
			resolve(a * b);
		}, 500);
	});
};

let divide = (a, b) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (typeof a != 'number' || typeof b != 'number') {	
				return reject(new Error('Tham so phai co kieu number'));
			}
			if(b == 0) return reject(new Error('Chi cho so 0'));
			resolve(a / b);
		}, 800);
	});
};

// Để tái sử dụng lại function, ta tạo hàm dưới dạng callback function
// let tinhDienTich = async (a, b, h, callback) => {
// 	try {
// 		let ab = await add(a, b);
// 		let abh = await multiply(ab, h);
// 		let square = await divide(abh, 2);
// 		callback(undefined, square)
// 	} catch (e){
// 		callback(e)
// 	}	
// }

// tinhDienTich(4, 5, 4, (err, result) => {
// 	if (err) return console.log(err + '');
// 	console.log('Square is ', result);
// });

//	==========================================================
// Để tái sử dụng lại trong async function khác, kết quả trả về là một promise
let tinhDienTich = async (a, b, h) => {
	try {
		let ab = await add(a, b);
		let abh = await multiply(ab, h);
		let square = await divide(abh, 2);
		return Promise.resolve(square);
	} catch (e){
		return Promise.reject(e);
	}	
}

tinhDienTich(4, '5', 4)
	.then(res => console.log("Square is ", res))
	.catch(e => console.log(e + ''))
	