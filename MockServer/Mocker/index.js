import mockServerClient from 'mockserver-client';
import LoadDocumentsCommand from './app/Commands/LoadDocumentsCommand';
import AddEndpointOfTokenCommand from './app/Commands/AddEndpointOfTokenCommand';

const iso_server_host = process.env.URL_MOCK_SERVER;
const iso_server_port = process.env.URL_MOCK_SERVER_PORT;

const main = () => {
    console.log("   Starting...");
    const mockClient = mockServerClient.mockServerClient(iso_server_host, iso_server_port);

    new LoadDocumentsCommand(mockClient)
            .execute();
    
    new AddEndpointOfTokenCommand(mockClient)
            .execute();

    console.log("   Mocks:");
    setTimeout(() => console.log('  bye'), 3000000);
}

const bootstrapper = () => {
    console.log("   executing bootstrapper");
    mockServerClient.mockServerClient(iso_server_host, iso_server_port).reset().then(
        () => main(),
        (e) => {
            console.log(e);
            setTimeout(bootstrapper, 1000);
        }
    );
}

bootstrapper();

//async function sleep(t) {
//    await new Promise(resolve => setTimeout(resolve, t));
//}

//sleep(300000);