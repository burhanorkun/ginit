const fs = require('fs');
const path = require('path');

module.exports = {
    getCurrentDirectoryBase: () => {
        return path.basename(process.cwd());
    },

    directoryExist: (filePath) => {
        try{
            return fs.statSync(filePath).isDirectory();
        }catch(err){
            return false;
        }
    }
}