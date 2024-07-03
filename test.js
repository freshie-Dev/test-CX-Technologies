const descendingSort = (array) => {
    console.log("Passed Array: ", array)
    let outerIndex = 0
    const arrayLength = array.length;
    for (outerIndex; outerIndex <= arrayLength - 1; outerIndex++) {
    
        let traverseIndex = 0
        for (traverseIndex; traverseIndex < arrayLength - 1 - outerIndex; traverseIndex++) {

            if (array[traverseIndex] < array[traverseIndex + 1]) {

                let temp = array[traverseIndex]
                array[traverseIndex] = array[traverseIndex + 1]
                array[traverseIndex + 1] = temp
            }
        }
    }
    console.log("Sorted array is: ", array)
    // return array

}

const isPalindrome = (string) => {
    let processedString = ''
    for(let index = 0; index < string.length; index++) {
        if (string[index] !== " ") {
            processedString += string[index].toLowerCase()
        }
    }
    
    let leftIndex = 0
    let rightIndex = (processedString.length - 1)

    let isPalindrome = true;

    while (rightIndex > leftIndex) {
        if (processedString[rightIndex] !== processedString[leftIndex]) {
            isPalindrome = false
        }
        rightIndex--
        leftIndex++
    }
    console.log(`Is "${string}" a palindrome: ${isPalindrome}`)
    // return isPalindrome
}

const sumLargestTwoNumbers = (array) => {
    console.log('Passed Array: ', array)
    let largestNum = -Infinity;
    let SecondLargestNum = -Infinity;

    for (let index = 0; index < array.length; index++) {
        if (array[index] > largestNum) {
            SecondLargestNum = largestNum; 
            largestNum = array[index];  
        } else if (array[index] > SecondLargestNum) {
            SecondLargestNum = array[index]; 
        }
    }
    console.log(`Sum of 2 largest numbers "${largestNum}" & "${SecondLargestNum} is ${largestNum + SecondLargestNum}`)
    // return largestNum + SecondLargestNum;
}

const findMissingNumbers = (array) => {
    console.log('Passed Array: ', array)
    const maxNum = Math.max(...array);

    const presentSet = new Set(array);

    const missingNumbers = [];
    for (let i = 0; i <= maxNum; i++) {
        if (!presentSet.has(i)) {
            missingNumbers.push(i);
        }
    }
    console.log("Missing Numbers: ", missingNumbers)
    // return missingNumbers;
}

const findMostRepeatedNumber = (array) => {
    console.log("Passed Array: ", array);
    const frequency = {};
    array.forEach(num => {
        if (frequency[num]) {
            frequency[num]++;
        } else {
            frequency[num] = 1;
        }
    });

    let mostRepeatedNumber = null;
    let repeatedTimes = 0;

    for (let num in frequency) {
        if (frequency[num] > repeatedTimes) {
            mostRepeatedNumber = num;
            repeatedTimes = frequency[num];
        }
    }
    console.log(`${mostRepeatedNumber} has been repeated ${repeatedTimes} times`)
    // return `${mostRepeatedNumber} has been repeated ${repeatedTimes} times`;
}

const shiftEachArrayElementToRight = (array) => {
    console.log("Passed Array: ", array);
    
    if (array.length <= 1) {
        return array;
    }
    
    const lastElement = array[array.length - 1];

    for (let i = array.length - 1; i > 0; i--) {
        array[i] = array[i - 1];
    }

    array[0] = lastElement;
    console.log("Shifted Array: ", array);
    return(array)
}

const seperator = () => {
    console.log("------------------------------------------")
}
function main() {
    console.log("QUESTION # 01")
    //! Descending Sort
    descendingSort([1,2,3,4,5,6,7])
    
     
    console.log("QUESTION # 02")
    //! Is String Palindrome Check
    isPalindrome("madam")
    isPalindrome("Doctor")

     
    console.log("QUESTION # 03")
    //! Sum of Two Largest Numbers
    sumLargestTwoNumbers([1,2,3,4,5,6,7,7])

     
    console.log("QUESTION # 04")
    //! Find Missing Numbers In The Array
    findMissingNumbers([1,3,5,7,9])

     
    console.log("QUESTION # 05")
    //! Find Most Repeated Number
    findMostRepeatedNumber([2, 3, 4, 5, 6, 4, 7, 8, 4, 4, 5, 5, 3])

     
    console.log("QUESTION # 06")
    //! Shift Array Elements to the right
    shiftEachArrayElementToRight([1,2,3,4,5,6])
   

}

main();