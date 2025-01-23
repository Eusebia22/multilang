// import { languageSelect, fetchTranslations } from "./script.js";

// // Load default language
// fetchTranslations("en", "index");

// // Change language on selection
// languageSelect.addEventListener("change", (event) => {
// 	fetchTranslations(event.target.value, "index");
// });
import { languageSelect, initializeLanguage, updateLanguage } from "./script.js";

// Initialize language for the index page
initializeLanguage("index");

// Change language on selection
languageSelect.addEventListener("change", (event) => {
    updateLanguage(event.target.value, "index");
});
