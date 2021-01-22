

// kilometer to meter convert start

function kilometerToMeter(convertMeter){
    var meter = convertMeter * 1000;
    return meter;
}
var resultInMeter = kilometerToMeter(45);
console.log(resultInMeter);

// kilometer to meter convert end

//budgetCalculator Start

function budgetCalculator(watch, phone, laptop){
    var totalBudget = (50 * watch) + (100 * phone) + (500 * laptop);
    return (totalBudget);
}
console.log (budgetCalculator (10 , 15 , 20));

//budgetCalculator end

// hotelCost start

function hotelCost(days){
    var totalAmount = 0;
        if( days <= 10){
            totalAmount = days * 100;
        }
        else if ( days <= 20){
            var firstTenDays = 10 * 100;
            var remaining = days - 10;
            var secondTenDays = remaining * 80;
            totalAmount = firstTenDays + secondTenDays;
        }
        else{
            var firstTenDays = 10 * 100;
            var secondTenDays = 10 * 80;
            var remaining = days - 20;
            var remainingAllDays = remaining * 50;
            totalAmount = firstTenDays + secondTenDays + remainingAllDays;
        }
            return totalAmount;
    
}
var allCost = hotelCost(25);
console.log(allCost);

// hotelCost end

// megaFriend start

function megaFriend(names) {
    var namesLength = 0;
    var longestName = names[0];
    
    for (var i = 0; i < names.length; i++) {  
              
      if (names[i].length > namesLength) {
        namesLength = names[i].length;
        longestName = names[i];
      }
    }
    return longestName;
  }
  var names = ['ashraful', 'rimon', 'rajonshikder', 'riyad', 'raselahmed'];
  var outPut = megaFriend(names);
  console.log(outPut);

// megaFriend end



