Calculator = {
  current: 0,
  add: function(){
    // this.current += num
    var sum = this.current;
    for(var i = 0, len = arguments.length; i < len; i++){
      sum += arguments[i]
    };
    this.current = sum;
    return this.current;
  },
  subtract: function(num){
    var result = this.current;
    for(var i = 0, len = arguments.length; i < len; i++){
      result -= arguments[i]
    };
    this.current = result;
    return this.current
  },
  reset: function(){
    this.current = 0;
  }
}
