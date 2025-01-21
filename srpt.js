    const selectedLanguage = document.getElementsByClassName('lang-select');


    const fetchTranslate = async(lang='en')=>{
        const response = await fetch(`/data?lang=${lang}`);
        const data = await response.json();
        // header
          document.getElementById('menu1').textContent = data.header.menu[0];
          document.getElementById('menu2').textContent = data.header.menu[1];
          document.getElementById('menu3').textContent = data.header.menu[2];
          document.getElementById('menu4').textContent = data.header.menu[3];
          document.getElementById('menu5').textContent = data.header.menu[4];
          document.getElementById('menu6').textContent = data.header.menu[5];
          document.getElementById('menu7').textContent = data.header.menu[6];
        // body
          document.getElementsByClassName('form-title').textContent = data.body.h3;
          document.getElementsByClassName('form-text').textContent = data.body.p_form;
          document.getElementById('first-name').placeholder = data.body.placeholder[0];
          document.getElementById('last-name').placeholder = data.body.placeholder[1];
          document.getElementById('shop-name').placeholder = data.body.placeholder[2];
          document.getElementById('country').placeholder = data.body.placeholder[3];
          document.getElementById('phone').placeholder = data.body.placeholder[4];
          document.getElementById('email').placeholder = data.body.placeholder[5];
          document.getElementById('email-confirmation').placeholder = data.body.placeholder[6];
          document.getElementById('message').placeholder = data.body.placeholder[7];
          document.getElementsByClassName('vs-btn').textContent =data.p_btn;
      // legals
        document.getElementById('staticBackdropLabel').textContent = data.legal.h5;
        document.getElementsByClassName('modal-body').innerHTML = data.legal.body;
        document.getElementById('btn-close').textContent = data.legal.btn_close;
      // footer
          document.getElementsByClassName('footer-text').textContent = data.footer.footer-text;
          document.getElementById('subtitle1').textContent = data.subtitle1;
    }