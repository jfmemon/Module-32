const object = {
    name: 'Emon',
    id: '191-15-2497',
    address: {
        permanent: 'Lalmonirhat',
        present: 'Dhaka',
        past: 'Bogra'
    }
}

const objectJson = JSON.stringify(object);
console.log(objectJson);
const objectJsonParse = JSON.parse(objectJson);
console.log(objectJsonParse);