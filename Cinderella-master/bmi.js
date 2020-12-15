const btn = document.getElementById('btn_id');

    btn.addEventListener('click', function() {

      const weight = document.getElementById('kg').value;
      const height = document.getElementById('cm').value;

      if(weight === 0 || weight === "") {

        alert('体重を入力してください');


      } else if(isNaN(weight) === true)　{

        alert('体重は数値を入力してください'); 

      } else if(height === 0 || height === "") {

        alert('身長を入力してください');

      } else if(isNaN(height) === true) {

        alert('身長は数値を入力してください');

      } else {

        const height_m = height / 100;

        const total = weight / (height_m * height_m);

        document.getElementById('bmi').value = Math.round(total);

      }


    })