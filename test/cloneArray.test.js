const { cloneArray } = require('../src/cloneArray');


test('test cloned array', () => {

    const arr = [1, 2, 3];
    
    const result = cloneArray(arr);

    expect(result).toEqual(arr);

});