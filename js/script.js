let h1 = document.querySelector('#h1');
let input = document.querySelector('#input');
let btn1 = document.querySelector('#btn1');
let input2 = document.querySelector('#input2');
let btn2 = document.querySelector('#btn2');
let error = document.querySelector('#error');
let main = document.querySelector('.main');

btn1.addEventListener('click', () => {
  let input_value = input.value;

  if (input_value === '') {
    error.innerHTML = 'plise input the number ';
  } else {
    if (isNaN(input_value)) {
      error.innerHTML = 'Enter The numer pliese ';
      input.value = '';
    } else {
      error.innerHTML = '';
      if (input_value > 10 || input_value < 1) {
        error.innerHTML = 'sorry';
      } else {
        h1.innerHTML = 'player -2';
        input.style.display = 'none';
        btn1.style.display = 'none';
        input2.style.display = 'inline-block';
        btn2.style.display = 'inline-block';
      }
    }
  }
});

btn2.addEventListener('click', () => {
  let input_value = input.value;
  let input_2_vlaue = input2.value;

  if (input_2_vlaue === input_value) {
    main.style.display = 'none';
    document.body.innerHTML = '<h1>sucessfully you are winar</h1>';
  } else {
    // console.log('jakaria ahmod');
    document.body.innerHTML = '<h1>opps! sorry try agin pliese</h1>';
  }
});
