// CODE here for your Lambda Classes

// #### Person
class Person {
    constructor(personAttributes) {
        this.name = personAttributes.name;
        this.age = personAttributes.age;
        this.location = personAttributes.location;
    }
    speak () {
        return (`Hello my name is ${this.name}, I am from ${this.location}`)
    }
}


// #### Instructor

// * Instructor has the following methods:
//   * `demo` receives a `subject` string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
//   * `grade` receives a `student` object and a `subject` string as arguments and logs out '{student.name} receives a perfect score on {subject}'
class Instructor extends Person {
    constructor(instructorAttributes) {
        super(instructorAttributes);
        this.specialty = instructorAttributes.specialty;
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase;
        this.subject = instructorAttributes.subject;
    }
    demo (student) {
        return `Today we are learning about ${student.subject}`;
    }
    grade (student, subject) {
        return `${student.name} receives a perfect score on ${subject}`;
    }
    studentGrading (student) {
        const receivedGrade = Math.random() * 100;
        if (student.grade >= 80){
            student.grade += receivedGrade;
            return `${receivedGrade} points have been added to ${student.name}`
        } else {
            student.grade -= receivedGrade;
            return `${receivedGrade} points have been subtracted to ${student.name}`
        }
    }
}


// #### Student
class Student extends Person {
    constructor(studentAttributes) {
        super(studentAttributes);
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
        this.grade = studentAttributes.grade;
        this.subject = studentAttributes.subject;
        
    }
    listsSubjects (favSubjects) {
        return this.favSubjects.forEach(item => console.log (items));
    }
    PRAssignment (subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge (subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }    
}


// #### Project Manager
class ProjectManagers extends Instructor {
    constructor(projectManagersAttributes) {
        super(projectManagersAttributes);
        this.gradClassName = projectManagersAttributes.gradClassName;
        this.favInstructor = projectManagersAttributes.favInstructor;
    }
    standUp (slackChannel) {
        return `${this.name} announces to ${slackChannel}, @channel standy times!​​​​​`;
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}



// Instructor
const frank = new Instructor ({
    name: 'Ryan',
    age: 40,
    location: 'Portland',
    specialty: 'redux',
    favLanguage: 'JavaScript',
    catchPhrase: 'you\'ve got this!',
    subject: 'JavaScript'
});

// Student
const studentOne = new Student ({
    name: 'chris',
    age: 30,
    location: 'Portland',
    previousBackground: 'Banking',
    className: 'Web23',
    favSubjects: ['Html', 'CSS', 'JavaScript'],
    grade: 90,
});

const studentTwo = new Student ({
    name: 'mary',
    age: 30,
    location: 'Portland',
    previousBackground: 'teaching',
    className: 'Web23',
    favSubjects: ['Html', 'CSS', 'JavaScript'],
    grade: 75,
});
// Project Manager
const sean = new ProjectManagers ({
    name: 'Sean',
    age: 55,
    location: 'Portland',
    gradClassName: 'CS1',
    favInstructor: 'Zac'
});


// Instructor
console.log(frank.speak());
console.log(frank.demo("JavaScript"));

// student 
console.log(chris.listsSubjects());
console.log(mary.PRAssignment());

// Project Manager 
console.log(sean.standUp(channel));
console.log(sean.speak());

// #### Stretch Problem
// * Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.

// * Now that our students have a grade build out a method on the Instructor (this will be used by _BOTH_ instructors and PM's) that will randomly add or subtract points to a student's grade. _Math.random_ will help.

// * Add a graduate method to a student.
//   * This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School

//   * If the student's grade is above a 70% let them graduate! Otherwise go back to grading their assignments to increase their score.