class Student{
    constructor(name, age, hasGraduated) {
        this.name = name,
        this.age = age,
        this.hasGraduated = hasGraduated
    }

    
canWork(){
    return this.hasGraduated
}


}

const student1 = new Student("Mikka Makka", 9, true)

console.log(student1.canWork())