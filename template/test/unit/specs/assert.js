{{#if_eq testConfig "sfmi-assert"}}
import { mount } from 'vue-test-utils'
{{/if_eq}}


var projectName = "{{name}}";

module.exports = function isVueInstance(expecteds){
    const wrapper = mount(expecteds);
    expect(wrapper.isVueInstance()).toBeTruthy();
}

/**
 * use like assert
 */
module.exports = class assert{
    //assertEquals
    static Equals = function(expecteds, actuals){
        expect(expecteds).toEqual(actuals);
    }

    //assertArrayEquals
    static ArrayEquals = function(expecteds, actuals){
        this.Equals(expecteds, actuals);
    }

    //assertFalse
    static False = function(actuals){
        expect(actuals).toBeFalsy();
    }

    //assertNotNull
    static NotNull = function(actuals){
        expect(actuals).not.toBeNull();
    }

    //assertNotSame
    static NotSame = function(expecteds, actuals){
        expect(expecteds).not.toEqual(actuals);
    }

    //assertNull
    static Null = function(actuals){
        expect(actuals).toBeNull();
    }

    //assertSame
    static Same = function(expecteds, actuals){
        this.Equals(expecteds, actuals);
    }

    /********** TODO **********/
    //assertThat
    static That = function(expecteds, actuals){

    }

    //assertTrue
    static True = function(actuals){
        expect(actuals).toBeTruthy();
    }

    /********** TODO **********/
    //assertFail
    static Fail = function(msg){
        expect(msg).toThrowError(msg);
    } 





    /********** Vue 관련 테스트 코드 **********/
    // static isVueInstance(expecteds){
    //     const wrapper = mount(expecteds);
    //     expect(wrapper.isVueInstance()).toBeTruthy();
    // }
    
}