function Stack () {
    let stackArr = [];

    const push = (val) => {
      stackArr.push(val);
      return stackArr.length;
    }

    const pop = () => {
        return stackArr.pop();
    }

    const viewStack = () => [...stackArr]

    const size = () => stackArr.length;

    return {
        push,
        pop,
        viewStack,
        size
    }


}

let myStack = Stack();
myStack.push(5);
myStack.push(10);
console.log(myStack.viewStack())
console.log(myStack.pop())
console.log(myStack.push(10))
console.log(myStack.size())
