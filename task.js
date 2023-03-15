function calculateBMI2() {

    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    let he = height / 100;
  
  
    let bmi = weight / (he * he);
    bmi = bmi.toFixed(1);
  
  
    document.getElementById("bmi2").innerHTML = bmi;
  }