import fs from 'fs';

export default class FileService {
    static readFiles (dirname) {
        var files = {};
        var filenames = fs.readdirSync(dirname);
        filenames.forEach((filename) => {
            var content = fs.readFileSync(dirname + filename, 'utf-8');
            files[filename] = content;
        });
    
        return files;
    };
}