{
    // undefined
    let name: undefined;
    let age: number | undefined;
    age = undefined;
    age = 1;

    function find(): number | undefined {
        return undefined;
    }

    // null
    let person: string | null ;
    person = 'aaa';

    // unknown   -- 가능하면 쓰지 않는걸 추천
    let notSure: unknown = 0;
    notSure = 'he';
    notSure = true;

    // any -- 가능하면 쓰지 않는걸 추천
    let anything: any =  0;
    anything = 'hello';

    // void -- 함수에서 아무 것도 리턴하지 않을 시 보이드가 적용되어있음(생략되어있음) --선언해서 사용시 undefined 밖에 리턴을 못해서 선언으로 사용하지 않음
    function print(): void {
        console.log('hello');
        return ;
    }

    // never -- 리턴값이 나오지 않아야함   -- 함수가 끝나지 않게 작성을 하거나, 에러가 작성돼야함
    function throwError(message: string): never {
        // throw new Error(message);
        while(true){}
    }

    // object -- 쓰지 않는걸 추천함
    let obj: object; 
    function acceptSomeObject(obj: object) {

    }
    acceptSomeObject({ name: 'jaeyah'});
    acceptSomeObject({ animal: 'dog'});
}

