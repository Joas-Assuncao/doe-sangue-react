const propsCheckBoxes = [
    {id: Math.random(), text: 'A+', check: true},
    {id: Math.random(), text: 'A-', check: false},
    {id: Math.random(), text: 'B+', check: false},
    {id: Math.random(), text: 'B-', check: false},
    {id: Math.random(), text: 'AB+', check: false},
    {id: Math.random(), text: 'AB-', check: false},
    {id: Math.random(), text: 'O+', check: false},
    {id: Math.random(), text: 'O-', check: false},
]

const typesWithGiveAndReceive = [
    ['A+', {give: 'A+ e AB+'}, {receive: 'A+, A-, O+ e O-'}],
    ['A-', {give: 'A+, A-, AB+ e AB-'}, {receive: 'A- e O-'}],
    ['B+', {give: 'B+ e AB+'}, {receive: 'B+, B-, O+ e O-'}],
    ['B-', {give: 'B+, B-, AB+ e AB-'}, {receive: 'B- e O-'}],
    ['AB+', {give: 'AB+'}, {receive: 'A+, B+, O+, AB+, A-, B-, O- e AB-'}],
    ['AB-', {give: 'AB+ e AB-'}, {receive: 'A-, B-, O- e AB-'}],
    ['O+', {give: 'A+, B+, O+ e AB+'}, {receive: 'O+ e O-'}],
    ['O-', {give: 'A+, B+, O+, AB+, A-, B-, O- e AB-'}, {receive: 'O-'}],
]

export default { propsCheckBoxes, typesWithGiveAndReceive };