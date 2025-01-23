// import { languageSelect, fetchTranslations } from "./script.js";

// // Load default language
// fetchTranslations("en", "contact");

// // Change language on selection
// languageSelect.addEventListener("change", (event) => {
// 	fetchTranslations(event.target.value, "contact");
// });

import { languageSelect, initializeLanguage, updateLanguage } from "./script.js";

// Initialize language for the contact page
initializeLanguage("contact");

// Change language on selection
languageSelect.addEventListener("change", (event) => {
    updateLanguage(event.target.value, "contact");
});
