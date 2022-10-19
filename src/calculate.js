const calculate = () => {
  const weight = +document.getElementById('weight').value
  const feet = +document.getElementById('feet').value
  const inches = +document.getElementById('inches').value
  const height = feet * 12 + inches
  const bmi = (weight * 703) / Math.pow(height, 2)
  document.getElementById('bmi').innerHTML = bmi.toFixed(1)
  const bmiText = document.getElementById('bmi-text')

  switch (true) {
    case (bmi < 16):
      bmiText.innerHTML = 'Severe Thinness'
      break
    case (bmi < 17):
      bmiText.innerHTML = 'Moderate Thinness'
      break
    case (bmi < 18.5):
      bmiText.innerHTML = 'Mild Thinness'
      break
    case (bmi < 25):
      bmiText.innerHTML = 'Normal'
      break
    case (bmi < 30):
      bmiText.innerHTML = 'Overweight'
      break
    case (bmi < 35):
      bmiText.innerHTML = 'Obese Class I'
      break
    case (bmi < 40):
      bmiText.innerHTML = 'Obese Class II'
      break
    default:
      bmiText.innerHTML = 'Obese Class III'
  }
}
