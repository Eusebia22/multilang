import translate from "translate";

translate("Hello, Welcome to our website", { from: "en", to: "fr" }).then(console.log);

translate("Bonjour,Bienvenue sur notre site web", { from: "fr", to: "es" }).then(console.log);

translate("Bonjour,Bienvenue sur notre site web", { from: "fr", to: "ger" }).then(console.log);

translate("Hola, bienvenido a nuestro sitio web.", { from: "es", to: "en" }).then(console.log);



