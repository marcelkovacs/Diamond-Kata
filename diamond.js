function Diamond (value) {
    this.value = value;
};

Diamond.prototype.toString = function (){
    return this.value;
};

Diamond.prototype.line = function(value) {
    return value;
};