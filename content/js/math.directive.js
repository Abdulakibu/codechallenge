function counter (){
  return{
    scope: {},
    restrict: 'E',
    controller: 'MathController as math',
    template:`<div class='math'>
    <form>
    <div>Enter math equation. Space delimited</div>
    <input type='text' ng-model='math.count' />
    <button type='submit' ng-click='math.calculate();'>Enter</button>
    </form>
    <div>{{math.test}}</div>
    </div>`
  };

};

angular
.module('app')
.directive('counter',counter);
