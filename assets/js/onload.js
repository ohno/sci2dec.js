window.onload = function() {
document.getElementById('input').value = `-0.123
1.4E+0
1.4E+1
1.4E11
-4.999E-1
-0.4999
5.00E-01
5.00D-01`;
document.getElementById('output').value = sci2dec(document.getElementById('input').value);
}