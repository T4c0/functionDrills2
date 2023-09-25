const luckyNumbers = (n) => {
    const numbersArr = []
    while(numbersArr.length < n) {
        const r = Math.floor(Math.random() * 10) + 1;
        if(numbersArr.indexOf(r) === -1) {
            numbersArr.push(r);
          }
    }
    console.log(numbersArr)
}

luckyNumbers(5)
luckyNumbers(9)
luckyNumbers(8)
luckyNumbers(7)


