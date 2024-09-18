function convertToBinary() {
    const decimalInput = document.getElementById('decimalInput').value.trim();
    const decimalNumber = parseInt(decimalInput, 10);

    console.log('Input:', decimalInput);
    console.log('Decimal Number:', decimalNumber);

    const numberRegex = /^[0-9]+$/

    if (isNaN(decimalNumber) || decimalNumber < 0 || !Number.isInteger(decimalNumber) || !numberRegex.test(decimalInput)) {
        document.getElementById('binaryResult').textContent = '';
        return;
    }

    const binaryString = decimalNumber.toString(2);

    console.log('Binary String:', binaryString);

    document.getElementById('binaryResult').textContent = `Représentation binaire: ${binaryString}`;
}
