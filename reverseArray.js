/* This function reverses an array by traversing through the array from the ends to meet in the middle. All the while storing the 
current value in a temp variable at the beginning of the array and swap it with the value at the end of the array*/

function reverseArray(array){
let tempStorage;  // Variable to store a temp value from the array
let tempIndex = array.length-1; // Varilable to store the current index from the end

    for (var i = 0; i < array.length; i++) {

        if (tempIndex === i) // If tempIndex === i, then the array had an odd number of elements and we are in the middle of the array
            return array;
        else if (tempIndex < i) // If tempIndex < i, then the array had an even number of elements and they have now passed each other
            return array;
        
        tempStorage = array[i]; // Store element closer to the beginning of the array into a temp variable
        array[i] = array[tempIndex]; // Set the element closer to the beginning to element closer to end
        array[tempIndex] = tempStorage; // Set element closer to end equal to temp variable

        tempIndex--; // Decrease your index closer to the end of the array;
    }
return array;
}

let array = [1,2,3,4,6,19,20,21,25,67,8,4,5];
console.log(array);
console.log(reverseArray(array));