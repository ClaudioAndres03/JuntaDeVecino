const enviroments = { dev: "dev", prod: "prod" };

module.exports = {
    env: enviroments.dev,
    baseApiURL: {
        dev: "http://52.170.189.52:8080",
        prod: "",
    },
    language: "EN",
    apiKey: "de8mTVyN2r8Ixn3sBeT0",
    messageState: [
        { message: "Hello", messageCode: "HL" },
    ]
};
