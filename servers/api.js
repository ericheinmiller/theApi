//the actual api itself.
var api = function(req, res){

  //if information doesn't exists send false
  if(!req.body.str){
    res.json(false);
    return;
  }

  //define variables
  var hashTable = {
    '}' : '{',
    ']' : '[',  //the role of theObject is to keep key value pairs of each parentheses.
    ')' : '('
  },
  i = 0,                            //define starting pointer
  submittedString = req.body.str,   //the inputted string  
  length = submittedString.length,  //length of string inputted
  stackArray = [];                  //test array

  //if the string is an odd length, return false
  if(length % 2 !== 0){
    res.json(false);
    return;
  }

  //loop through the string;
  for(i ; i <= length -1 ; i++){
    var indexValue = submittedString[i],
    lastIndex = stackArray.length-1;
    //if the character in the string is one of theObjects values, push it into theArray
    if( 
       indexValue === '{' ||
       indexValue === '[' ||
       indexValue === '(' ){
      stackArray.push(stringValue);
    }
    //using the object we check to see if value of the last index of the array matches the object's key value pair. If not, we return false and stop the app
    else{
      if(stackArray.length === 0){  //if the array is empty when the else statement is called, 
        res.json(false);            //it means that there wasn't an ititial push of an opening parentheses
        return
      }
      else if(stackArray[lastIndex] !== hashTable[indexValue]){    //if they don't match, return false
        res.json(false);
        return
      }
      else{
        if(hashTable[indexValue] === stackArray[lastIndex]){   //if they match, we remove the last 
          stackArray.pop();                                     //index from the array as they are matching pairs.
        }
      }
    }
  }

  //if the array is not empty, that means there are pairs that never found a match.
  if(stackArray.length !== 0){
    res.json(false);
    return;
  }

  //if the app ran through the whole for loop without breaking, then that means every parantheses found it's pair and is thus true
  res.json(true);
}

module.exports = api;
