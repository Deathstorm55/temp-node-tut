const { readFile, writeFile } = require('fs')

console.log('start');
readFile('./built_in_modules/first.txt', 'utf8', (err,result)=>{
    if(err){
        console.log(err);
        return
    }
    const first = result;
    readFile('./built_in_modules/second.txt', 'utf8', (err,result)=>{
        if(err){
            console.log(err);
            return
        }
        const second = result;
        writeFile(
            './built_in_modules/aresult-sync.txt',
            `Here is the result : ${first}, ${second}`,(err,result) => {
                if(err){
                    console.log(err);
                    return
                }
                console.log('done with this task');
            }
        )
    })
})
console.log('starting new file');
