module.exports = function check(str, bracketsConfig) {
 let tempStr = str;
 for (let strPart=tempStr.length; strPart>=0; strPart--){
   for(let bracketPart=0; bracketPart<bracketsConfig.length; bracketPart++){
if(tempStr[strPart]===bracketsConfig[bracketPart][0]){
  tempStr=tempStr.replace(bracketsConfig[bracketPart].join(''), '')
}
   }
 }
 return tempStr === '';
}
