{
//     // JavaScript
//     function jsAdd(num1, num2) {
//         return num1 + num2;
//     }

//     // TypeScript
//     function jsadd1(num1: number, num2: number): number {
//         return num1 + num2;
//     }

//     // JavaScript
//     function jsFetchNum(id) {
//         return new Promise((resolve, reject) => {
//             resolve(100);
//         });
//     }

//     // TypeScript
//     function jsFetchNum1(id): Promise<number> {
//         return new Promise((resolve, reject) => {
//             resolve(100);
//         });
//     }

    // JavaScript => TypeScript
    
    //Optional parameter   -- ? 입력시 필수 내용이 아니라 작성해도 되고 안해도 됨
    function printName(firstName: string, lastName?: string) {
        console.log(firstName);
        console.log(lastName);
    }
    printName('Steve', 'Jobs');
    printName('Jaeyah');
    printName('Anna', undefined);

    // Default parameter
    function printMessage( message: string = 'default message') {
        console.log(message);
    }
    printMessage();


    // Rest parameter
    function addNumbers(...numbers:number[]): number {
        return numbers.reduce((a, b) => a + b);
    }
    console.log(addNumbers(1, 2));
    console.log(addNumbers(1, 2, 3, 4));
    console.log(addNumbers(1, 5, 3, 2, 2, 1));
}