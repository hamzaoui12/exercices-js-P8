function calculateAverage(numbers = []) {

    if (numbers.length === 0) {
      return 'No numbers to calculate average';
    }
  

    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  

    return sum / numbers.length;
  }
  
  // Exemples d'utilisation de la fonction
  console.log(calculateAverage([5, 10, 15]));   // Retourne 10
  console.log(calculateAverage([10, 20, 30, 20])); // Retourne 20
  console.log(calculateAverage());              // Retourne "No numbers to calculate average"
  
  export default calculateAverage;
  
