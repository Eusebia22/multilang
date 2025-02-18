const languageSelect = document.getElementById('language-select');

    const fetchTranslations= async(lang,page)=> {
        const response = await fetch(`/data?lang=${lang}`);
        const data =await response.json();
      
          if (page === "index") {
            const index = data[page];
          document.getElementById("greeting").textContent = index.greeting;
          document.getElementById("welcome").textContent = index.welcome;
          document.getElementById("title").textContent = index.title;
          document.getElementById('subtitle1').textContent = index.subtitle1;
          document.getElementById('Citem1').textContent = index.Citem1;
          document.getElementById('Citem2').textContent = index.Citem2;
          document.getElementById('Citem3').textContent = index.Citem3;
          document.getElementById('Citem4').textContent = index.Citem4;
          document.getElementById('Citem5').textContent = index.Citem5;
          document.getElementById('subtitle2').textContent = index.subtitle2;
          document.getElementById('Ditem1').textContent = index.Ditem1;
          document.getElementById('Ditem2').textContent = index.Ditem2;
          document.getElementById('Ditem3').textContent = index.Ditem3;
          document.getElementById('Ditem4').textContent = index.Ditem4;
          document.getElementById('bot_line').href = index.src[0];
          document.getElementById('src').src = index.src[1];

          }else if (page === "contact"){
            const contact = data[page];
          document.getElementById("base").textContent = contact.id[0];
          document.getElementById("disc").innerHTML = contact.html;
          document.getElementById("img").src = contact.id[1];
          document.getElementById("l1").textContent =contact.l1;
          document.getElementById("l2").innerHTML = contact.l2;
          }
  };
    
    // Initialize the language selection
const initializeLanguage = (page) => {
  const storedLanguage = localStorage.getItem('language') || 'en'; // Default to English
  languageSelect.value = storedLanguage; // Set the dropdown to the stored language
  fetchTranslations(storedLanguage, page);
};

// Update the language and store it in localStorage
const updateLanguage = (lang, page) => {
  localStorage.setItem('language', lang);
  fetchTranslations(lang, page);
};
    export {languageSelect, initializeLanguage, updateLanguage};
