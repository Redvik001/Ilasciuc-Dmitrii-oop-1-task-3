export const mdbConnectionString = "mongodb+srv://user001:H9wUBPsdmspef63c@cluster001-sgsi2.mongodb.net/main?retryWrites=true&w=majority";

export const serverConfig = new class {
    readonly production = false;

    readonly protocol = this.production ? "https" : "http";
    readonly host = this.production ? "node-chat-001.herokuapp.com" : "localhost";
    readonly port = this.production ? 80 : 5000;
    readonly uri = this.protocol + "://" + this.host + (this.port !== 80 ? ":" + this.port : "");
}

export const gAuthConfig = {
    clientId: "542989413324-vibeh8n200fvnm60gshdq5ujfrkpqbqh.apps.googleusercontent.com",
    clientSecret: "S1myRkzryHSeh46SgvXsPRya"
} as const;

export const headersNames = {
    identityToken: "authorization"
} as const;

export const cookiesDefaultOptions = {
    path: "/",
    maxAge: 315360000,  // 10 лет
    secure: serverConfig.protocol === "https",
    sameSite: "lax",
    httpOnly: true
} as const;


export const tamagotchiMinIntervals = {
    dog: {
        walking: 6,
        feeding: 4
    },
    cat: {
        walking: 3,
        feeding: 5
    },
    parrot: {
        feeding: 3
    }
}