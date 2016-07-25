//the actual api itself.
var api = function(req, res){

  if(!req.body.str){
    res.json(false);
    return;
  }
  //define variables
  var theObject = {
    '}' : '{',
    ']' : '[',  //the role of theObject is to keep key value pairs of each parentheses.
    ')' : '('
  },
  i = 0, //define starting pointer
  str = req.body.str, //the inputted string  
  length = str.length,  //length of string inputted
  theArray = []; //test array

  //if the string is an odd length, return false
  if(length % 2 !== 0){
    res.json(false);
    return;
  }

  //loop through the string;
  for(i ; i <= length -1 ; i++){

    //if the character in the string is one of theObjects values, push it into theArray
    if(str[i] === '{' || str[i] === '[' || str[i] === '('){
      theArray.push(str[i]);
    }

    //using the object we check to see if value of the last index of the array matches the object's key value pair. If not, we return false and stop the app
    else{
      if(theArray[theArray.length -1] !== theObject[str[i]]){
        res.json(false);
        return
      }

      //if they match, we remove the last index from the array as they are matching pairs.
      else{
        if(theObject[str[i]] === theArray[theArray.length-1]){
          theArray.pop();
        }
      }
    }
  }

  //if the array is not empty, that means there are pairs that never found a match.
  if(theArray.length !== 0){
    res.json(false);
    return;
  }

  //if the app ran through the whole for loop without breaking, then that means every parantheses found it's pair and is thus true
  res.json(true);
}

module.exports = api;
