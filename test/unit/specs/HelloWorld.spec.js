import Vue from 'vue'

import HelloWorld from '@/components/HelloWorld'

import * as assert from './assert.js'


const myMock = jest.fn();

myMock
  .mockReturnValueOnce(10)
  .mockReturnValueOnce('x')
  .mockReturnValue(true);

// console.log(myMock(), myMock(), myMock(), myMock());
// > 10, 'x', true, true


describe('vue 관련 테스트', () => {
  test('is vue instance', () => {
    var mock = HelloWorld;
    isVueInstance(mock);
  })

  // test('fail test', () => {
  //   assert.Fail('just fail');
  // })
})



describe('부등호 테스트', () =>{
  test('array 값이 같은가??', () => {
    var expecteds = [1,2,3];
    var actuals = [1,2,3];

    assert.ArrayEquals(expecteds,actuals);
  })

  test('두 값이 같은가??', () => {
    var expecteds = 1;
    var actuals = 1;

    assert.Equals(expecteds,actuals);
  })

  test('두 값이 같지 않은가??', () => {
    var expecteds = 1;
    var actuals = 2;
    
    assert.NotSame(expecteds, actuals);
  })
})

describe('null 테스트', () => {
  test('null값으로 나오는가??', () => {
    var expecteds = null;
    
    assert.Null(expecteds);
  })

  test('null값이 아닌가??', () => {
    var expecteds = undefined;
    
    assert.NotNull(expecteds);
  })
})

describe('if 테스트', () => {
  test('참인 명제인가??', () =>{
    var expecteds = true;

    assert.True(expecteds);
  })

  test('거짓 명제 인가??', () => {
    var expecteds = false;
    
    assert.False(expecteds);
  })
})
