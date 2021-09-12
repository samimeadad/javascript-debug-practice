const sami = {
    name: {
        firstName: 'Sami',
        middleName: 'Meadad',
        surName: 'Choudhury'
    },
    id: 101,
    isMarried: true,
    friends: [ 'Farmee', 'Arishamma', 'Aarash' ],
    subjects: [ 'csc-101', 'mat-100', 'eng-101' ],
    location: 'Uttara',
    age: 40,
    height: 66,
    mark: 59.33,
    skill: {
        webDev: {
            language: [ 'JavaScript', 'html', 'CSS' ],
            framework: [ 'bootstrap', 'tailwind', 'reactjs' ],
            ide: 'vs-code'
        },
        programming: [ 'c', 'c++', 'java', 'python' ]
    }
};

const addToLocalStorage = () => {
    localStorage.setItem( 'Student', JSON.stringify( sami ) );
}
const removeFromLocalStorage = () => {
    localStorage.removeItem( 'Student' );
}
const consoleLocalStorage = () => {
    console.count( 'Function called: ' );
    const localStorageData = localStorage.getItem( 'Student' );
    const localStorageObject = JSON.parse( localStorageData );
    console.log( localStorageObject );
}