describe('toyProblemChallenge', function() {
  describe('javascript', function() {
      it('should exist', function() {
        expect(javascript).toBeDefined();
      });
      it('should equal \'Is Awesome!\'', function() {
        expect(javascript).toEqual('Is Awesome!')
      });
  });

  describe('fizzBuzz', function() {
    it('should exist', function() {
      expect(fizzBuzz).toBeDefined();
    });
    it('should return fizz when passed 3', function(){
      let three = fizzBuzz(3);
      expect(three).toEqual('fizz');
    })
    it('should return buzz when passed 5', function(){
      let three = fizzBuzz(5);
      expect(three).toEqual('buzz');
    })
    it('should return fizzbuzz when passed a number divisble by both 3 and 5', function(){
      let three = fizzBuzz(30);
      expect(three).toEqual('fizzbuzz');
    })
    it('should return "boring!" when passed a number not divisble by 3 or 5', function(){
      let three = fizzBuzz(17);
      expect(three).toEqual('boring!');
    })
  });

  describe('countByX', function() {
    it('should exist', function() {
      expect(countByX).toBeDefined();
    });
    it('should return the expected array', function() {
      expect(countByX(1,5)).toEqual([1,2,3,4,5]);
      expect(countByX(35,17)).toEqual([35, 70, 105, 140, 175, 210, 245, 280, 315, 350, 385, 420, 455, 490, 525, 560, 595]);
    })

  });

  describe('isIsogram', function() {
    it('should exist', function() {
      expect(isIsogram).toBeDefined();
    })
    it('should return the correct answer', function() {
      expect(isIsogram('TheQuickBrownFoxJumpedOverThelazyDOG')).toEqual(false);
      expect(isIsogram('uncopyrightables')).toEqual(true);
      expect(isIsogram('moM')).toEqual(false);
      expect(isIsogram('yoga')).toEqual(true);
    })
  })

  describe('fakeBin', function() {
    it('should exist', function() {
      expect(fakeBin).toBeDefined();
    })
    it('should return the correct string of 1s and 0s', function () {
      expect(fakeBin('554881900856019316692704')).toEqual('110110100111001001110100');
      expect(fakeBin('1891364928')).toEqual('0110010101');
    })
  })

  describe('fibonacci', function() {
    it('should exist', function() {
      expect(fibonacci).toBeDefined();
    })
    it('should return the correct answer', function() {
      expect(fibonacci(5)).toEqual([0,1,1,2,3]);
      expect(fibonacci(-5)).toEqual([]);
      expect(fibonacci(30)).toEqual([ 0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597,2584,4181,6765,10946,17711,28657,46368,75025,121393,196418,317811,514229 ]);
      expect(fibonacci(0)).toEqual([]);
    })
  })

  describe('getMiddle', function() {
    it('should exist', function() {
      expect(getMiddle).toBeDefined();
    })
    it('should return the correct answer', function() {
      expect(getMiddle('testing')).toEqual('t')
      expect(getMiddle('middle')).toEqual('dd');
      expect(getMiddle('fbQoLkkHccikuAYvzgkfAszmeVzvYkExNlszjxtsJzaztTsjtMJMcpWygqLbCFdSYZZKuRGWundefinedQipeshKBIcXMWpSIxnbOvzLgPjlzcIdhkLOOYnKcPYTRIJDOwIiNJKSnRybxtIeieDphPymfzeGPxOyDgYNeVEVKSNGQunGebRhzfzundefinedaTFKRKjbDeJFdvyaWuyIqoLWYFqYMDmoHtJkCkVJOCGyxhhirqbOHxilbmLuIlqVrQdTkIMrbGbgiOKnyiAvQOCglmtemXhfaGfEremyypfTiiUJqczjQaaMUFJFyVbcvFzaHxJFIfQBxzHOwQWnPnzundefinedYNMHwbkuKoqXNVmD')).toEqual('un');
    })
  })

  describe('persistence', function () {
    it('should exist', function() {
      expect(persistence).toBeDefined();
    })
    it('should return the correct number', function() {
      expect(persistence(4)).toEqual(0);
      expect(persistence(25)).toEqual(2);
      expect(persistence(39)).toEqual(3);
      expect(persistence(999)).toEqual(4);
      expect(persistence(8341821)).toEqual(3);
    })
  });

  describe('validParentheses', function() {
    it('should exist', function() {
      expect(validParentheses).toBeDefined();
    })
    it('should pass the tests', function() {
      expect(validParentheses(')')).toEqual(false);
      expect(validParentheses('(())')).toEqual(true);
      expect(validParentheses('(())((()((()))))')).toEqual(true);
      expect(validParentheses(')()()()(')).toEqual(false);
      expect(validParentheses('((((()))))')).toEqual(true);
      expect(validParentheses('()()()())')).toEqual(false);
    })
  })

});
