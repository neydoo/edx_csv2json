const csv = require('csvtojson');
const fs = require('fs');
const path = require('path');



const csv2json = (csvFile = './file/customer-data.csv') => {
    csv()
        .fromFile(csvFile)
        .then((jsonObj) => {
            console.log('converting file..')
            fs.writeFileSync(path.join(__dirname, 'file', 'customer-data.json'), JSON.stringify(jsonObj, null, "\t"), 'utf8', (error) => { //JSON.stringify converts from object to string
                if (error) {
                    console.log("error: " + error);
                    return console.error(error);
                } 
                
            })  
            console.log('file converted & saved succesfully.')
        })
}

csv2json(process.argv[2])
