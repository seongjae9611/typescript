{
    // Array
    const fruits: string[] = ['apple', 'banana'];
    const scores: Array<number> = [1, 3, 4];

    // readonly 문법이 작성되어 있을 시 변경이 불가능
    function printArray(fruits: readonly string[]) {}

    // Tuple  -- 권장하지 않음 (대부분 사용시 interface, type, alias, class 에서 사용함)
    let student: [string, number];
    student = ['name', 123];
    student[0] // name
    student[1] // number
    const [name, age] = student;
}