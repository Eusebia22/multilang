const languageSelect = document.getElementById('language-select');

    const fetchTranslations= async(lang='en')=> {
        const response = await fetch(`/data?lang=${lang}`);
        const data =await response.json();
      
          document.getElementById('greeting').textContent = data.index.greeting;
          document.getElementById('welcome').textContent = data.index.welcome;
          document.getElementById('title').textContent = data.title;
          document.getElementById('subtitle1').textContent = data.subtitle1;
          document.getElementById('Citem1').textContent = data.Citem1;
          document.getElementById('Citem2').textContent = data.Citem2;
          document.getElementById('Citem3').textContent = data.Citem3;
          document.getElementById('Citem4').textContent = data.Citem4;
          document.getElementById('Citem5').textContent = data.Citem5;
          document.getElementById('subtitle2').textContent = data.subtitle2;
          document.getElementById('Ditem1').textContent = data.Ditem1;
          document.getElementById('Ditem2').textContent = data.Ditem2;
          document.getElementById('Ditem3').textContent = data.Ditem3;
          document.getElementById('Ditem4').textContent = data.Ditem4;

          document.getElementById('bot_line').href = data.contact.id[0];
          document.getElementById('bot_line').textContent = data.bot_line;  //|| "Learn More"
          // document.getElementById('contact').innerHTML = contact.html;
          document.getElementById("base").textContent = data.contact.l1;
          document.getElementById("disc").innerHTML = data.contact.html;
          document.getElementById("img").src = data.contact.id[1];

          document.getElementById("l1").textContent = data.contact.l1;
          document.getElementById("l2").innerHTML = data.contact.l2;

        // upadate footer
       
        }
    

    // Load default language
    fetchTranslations();

    // Change language on selection
    languageSelect.addEventListener('change', (event) => {
      fetchTranslations(event.target.value);
    });





   