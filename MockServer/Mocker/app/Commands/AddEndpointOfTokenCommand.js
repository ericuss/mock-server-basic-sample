
import CoreCommand from './Core/CoreCommand';
import requestTemplates from '../RequestTemplates';

export default class AddEndpointOfTokenCommand extends CoreCommand {
    constructor(mockServerClient) {
        super(mockServerClient);
    }
    execute(documents) {
        var expectation = requestTemplates.accessTokenExpectationBuilder();
        this.mockServerClient
            .mockAnyResponse(expectation)
            .then(
                () => {
                    console.log(`   access token expectation created`);
                },
                (error) => console.log(error)
            );
    }
}