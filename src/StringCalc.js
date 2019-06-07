//Add
function Add(numbers) {
  
  if (numbers == "") return 0;

  let sum = 0;
  let nums = numbers.split(/[,\n;*%]/);
  
    
  nums.forEach(element => {
    let number = parseInt(element);
    if (!isNaN(number) && number < 1000) {
      sum = sum + number;
    }
      
     if(number < 0){
        throw Error("negatives not allowed" + number);
    } 
  });

  return sum;
}
    



