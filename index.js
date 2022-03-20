function binarySearch(
    arr,
    a
) {
    // add whatever parameters you deem necessary - good luck!
    let start = 0;
    let end = arr.length - 1;
    let center = Math.floor((start + end) / 2);

    while (arr[center] !== a && start <= end) {

        if (a < arr[center]) {
            end = center - 1;
        } else {
            start = center + 1;
        }
        center = Math.floor((start + end) / 2);
    }
    return arr[center] == a ? center : -1;
}
