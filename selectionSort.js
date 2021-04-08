let array = [3,-1,5,-5,7,9]

function selectionSort(array){
    let num
    let sorted = []
    while (array.length != 0) {
        num = minAndRemove(array)
        sorted.push(num)
    }
    
    function minAndRemove(array) {
        let min = array[0]
        let minIndex = 0
        
        for (let i = 0; i < array.length; i++){
            if (array[i] < min){
                min = array[i]
                minIndex = i
            }
        }
        array.splice(minIndex, 1)
        return min
    }

    return sorted
}
