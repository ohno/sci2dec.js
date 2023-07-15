function sci2dec(input) {
  let output = input
  // https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences
  const regexpNames =  /(?<mantissa>[+-]?\d+(?:\.\d+)?)[ED]+(?<exponent>[+-]?\d+)/mg;
  console.log("hello")
  for (const match of input.matchAll(regexpNames)) {
    // console.log(match[0])
    // console.log(`${match.groups.mantissa}`)
    // console.log(`${match.groups.exponent}`)
    output = output.replace(`${match[0]}`, parseFloat(match.groups.mantissa)*10**parseInt(match.groups.exponent));
    // output = output.replace(`${match.groups.mantissa}`, 'aaaa');
    // output = output.replace(`${match.groups.exponent}`, 'bbbb');
  }
  return output;
}
