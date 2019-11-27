function Rectangle(a, b) {
    const x =  new Object()
    x.length = a;
    x.width = b;
    x.perimeter=2*(a+b);
    x.area = a * b

    return x
}
console.log(Rectangle(4,5))