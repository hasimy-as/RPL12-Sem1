const bmi = (w, h) => {
  let hgt = h * h / 10;
  let wgh = w;
  return hgt / wgh;
};

const bmiChecker = (size) => {
	size < 18.4
		? console.log('Kekurusan')
		: size > 18.4 && size < 25
		? console.log('Normal')
		: size > 25 && size < 30
		? console.log('Kelebihan')
		: size > 30
		? console.log('Obesitas')
		: console.log('Error detected');
		console.log('BMI detected:', size);
};

bmiChecker(bmi(90, 170));