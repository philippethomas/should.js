module.exports = function(should, Assertion) {
  Assertion.add('NaN', function() {
    this.params = { operator: 'to be NaN' };

    this.is.a.Number
      .and.assertIf(isNaN(this.obj));
  }, true);

  Assertion.add('Infinity', function() {
    this.params = { operator: 'to be Infinity' };

    this.is.a.Number
      .and.not.a.NaN
      .and.assertIf(!isFinite(this.obj));
  }, true);

  Assertion.add('within', function(start, finish, description){
    this.params = { operator: 'to be within '+ start + '..' + finish, message: description };

    this.assertIf(this.obj >= start && this.obj <= finish);
  });

  Assertion.add('approximately', function(value, delta, description) {
    this.params = { operator: 'to be approximately ' + value + " ±" + delta, message: description };

    this.assertIf(Math.abs(this.obj - value) <= delta);
  });

  Assertion.add('above', function(n, description){
    this.params = { operator: 'to be above ' + n, message: description };

    this.assertIf(this.obj > n);
  });

  Assertion.add('below', function(n, description){
    this.params = { operator: 'to be below ' + n, message: description };

    this.assertIf(this.obj < n);
  });

  Assertion.alias('above', 'greaterThan');
  Assertion.alias('below', 'lessThan');

};