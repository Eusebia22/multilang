import { languageSelect, fetchTranslations } from "./script.js";

// Load default language
fetchTranslations("en", "contact");

// Change language on selection
languageSelect.addEventListener("change", (event) => {
	fetchTranslations(event.target.value, "contact");
});
