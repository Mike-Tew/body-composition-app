const calculateBodyFat = () => {
  const age = +document.getElementById('age').value
  const weight = +document.getElementById('weight').value
  const chest = +document.getElementById('chest-skinfold').value
  const abdominal = +document.getElementById('ab-skinfold').value
  const thigh = +document.getElementById('thigh-skinfold').value

  if (!(age > 0 && weight > 0 && chest > 0 && abdominal > 0 && thigh > 0)) {
    return
  }

  const fatTotal = chest + abdominal + thigh
  const fatSquared = Math.pow(fatTotal, 2)
  const density =
    1.10938 - 0.0008267 * fatTotal + 0.0000016 * fatSquared - 0.0002574 * age
  const bodyFat = (4.57 / density - 4.142) * 100
  const fatMass = (weight * bodyFat * 0.01).toFixed(1)

  document.getElementById('fat-percentage').innerHTML = `${bodyFat.toFixed(1)}%`
  document.getElementById('fat-mass').innerHTML = `${fatMass} lb`
  document.getElementById('lean-mass').innerHTML = `${weight - fatMass} lb`
}
