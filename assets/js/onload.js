window.onload = function() {
  document.getElementById('input').value = `examples:
    -0.123
    5.0E+00
    5.0E+01
    5.0E01
    5.0E1
    5.0E-01
    5.0e-01
    5.0D-01
  `;
  document.getElementById('output').value = sci2dec(document.getElementById('input').value);
}