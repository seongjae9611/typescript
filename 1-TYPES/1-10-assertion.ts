{
    // Type Assertions -- 좋은건 아님
    function jsStrFunc(): any {
        return 'hhhhhhhhhh';
    }

    const result = jsStrFunc();
    console.log((result as string).length);
    console.log((<string>result).length);
    
    const wrong: any = 5;
    // console.log((wrong as Array<number>).push(1)); // 하면안됨
    

    function findNumbers(): number[] | undefined {
        return undefined;
    }
    const numbers = findNumbers();
    //numbers!.push(3);

    const button = document.querySelector('class');
    if (button) {
        button.nodeValue;
    }
}