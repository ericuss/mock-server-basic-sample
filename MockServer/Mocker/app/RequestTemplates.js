export default class Builder {
    static accessTokenExpectationBuilder() {
        return {
            "httpRequest": {
                "method": "GET",
                "path": `/oauth/client_credential/accesstoken`
            },
            "httpResponse": {
                "body": "{\"expires_in\": 10000, \"access_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c\"}"
            }
        };
    }

    static pathExpectationBuilder(path, content) {
        return {
            "httpRequest": {
                "method": "GET",
                "path": `${path}`
            },
            "httpResponse": {
                "body": content
            }
        };
    }
    static expectationBuilderPaginated(path, isJson, content, page, pageSize) {
        return {
            "httpRequest": {
                "method": "GET",
                "path": `/${path}(/[^/]*)?`,
                "queryStringParameters": {
                    "page": [page.toString()],
                    "size": [pageSize.toString()]
                },
                "headers": {
                    "Accept": [(isJson ? "application/json" : "!application/json")]
                }
            },
            "httpResponse": {
                "body": content
            }
        };
    }
}
