
import CoreCommand from './Core/CoreCommand';
import fileService from '../FileService';
import requestTemplates from '../RequestTemplates';

export default class LoadDocumentsCommand extends CoreCommand {
    constructor(mockServerClient) {
        super(mockServerClient);
    }
    execute() {
        const documents = fileService.readFiles('files/');
        if (!Object.entries(documents).length) return;
        for (const name in documents) {
            const content = documents[name];
            const expectation = requestTemplates.pathExpectationBuilder(`/documents/${name}`, content);

            this.mockServerClient
                .mockAnyResponse(expectation)
                .then(
                    () => console.log(`   document expectation for '${name}' created`),
                    (error) => console.log(error)
                );
        }
    }
}