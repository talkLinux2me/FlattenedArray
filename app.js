function flattenArray(arr) {
const flattened = [];

function dfs(index, currentArray) {
 if (index === currentArray.length) return;
 if (Array.isArray(currentArray[index])) {
    dfs(0, currentArray[index]);
 }

 if (
typeof currentArray[index] === "number" ||
typeof currentArray[index] === "string"
){
    flattened.push(currentArray[index]);
}
dfs(index + 1, currentArray);
}
dfs(0, arr);

returned flattened;

}