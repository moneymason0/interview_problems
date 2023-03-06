function addTwoSum(array, target)
{
    let obj = {};
    let answerKey;

    for (var i = 0; i < array.length; i++)
    {
        search = target - array[i];
        obj[search] = i;
    }

    console.log(obj);

    for (var i = 0; i < array.length; i++)
    {
        console.log(obj[array[i]]);
        if (obj[array[i]] != undefined){
            obj[array[i][1]] = i;
            break;
        }
    }

    return obj.answerKey
}

let array = [1, 2, 4, 7, 8, 9];
let target = 11;
console.log(addTwoSum(array,target));