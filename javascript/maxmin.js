function maxmin(arr) {
    if (arr.length === 0) {
        return "Error: Array is empty";
    }
    let largest = smallest = arr[0];
    for (let num of arr) {
        if (num > largest) {
            largest = num;
        } else if (num < smallest) {
            smallest = num;
        }
    }
    return `Largest: ${largest} Smallest: ${smallest}`;
}


let numbers = [7, 2, 10, 4, 8];
console.log(maxmin(numbers));
