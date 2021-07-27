{
    // Enum
    const MAX_NUM = 6;
    const MAX_STUDENTS_PER_CLASS = 10;
    const MONDAY = 0;
    const TUESDAY = 1;
    const WEDNESDAY = 2;
    const DAYS_ENUM = Object.freeze({"MONDAY": 0, "TUESDAY": 1, "WEDNESDAY": 2});
    const dayOfToday = DAYS_ENUM.MONDAY;

    // TypeScript
    type  DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday';
    enum Days {
        Monday, // 0
        Tuesday,
        WEDNESDAY,
        Thursday,
        Friday,
        Saturday,
        Sunday, // 6
    }
    console.log(Days.Sunday);
    let day: Days = (Days.Saturday);
    day = Days.Tuesday;
    day = 10;
    console.log(day);
    
    let dayOfWeek: DaysOfWeek ='Monday';
    dayOfWeek = 'Wednesday';
}