const csv = require('csvtojson');
const fs = require('fs');
const path = require('path');



const csv2json = (csvFile = './file/customer-data.csv') => {
    csv()
        .fromFile(csvFile)
        .then((jsonObj) => {
            console.log('converting file..')
            fs.writeFileSync(path.join(__dirname, 'file', 'customer-data.json'), JSON.stringify(jsonObj))
            console.log('file converted & saved succesfully.')
            // console.log(jsonObj)
        })
}

csv2json(process.argv[2])