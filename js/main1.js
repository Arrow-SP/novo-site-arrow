/* =========================================================
   ARROW STRATEGIC PARTNERS — main.js
   ========================================================= */

document.addEventListener('DOMContentLoaded', function () {

  /* ---- Menu mobile ---- */
  var menuToggle = document.getElementById('menuToggle');
  var mainNav = document.getElementById('mainNav');

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', function () {
      var isOpen = mainNav.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // fecha o menu ao clicar em um link (mobile)
    mainNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mainNav.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---- Formulário de candidatos ----
     Este site é 100% estático (GitHub Pages), então o envio do
     formulário depende de um serviço externo gratuito.

     PARA ATIVAR O RECEBIMENTO DOS CADASTROS POR E-MAIL:
     1. Crie uma conta gratuita em https://formspree.io (ou https://web3forms.com)
     2. Copie o endpoint/ID gerado
     3. Substitua o valor de FORMSPREE_ENDPOINT abaixo
     4. Pronto — os cadastros passam a cair direto no seu e-mail

     Enquanto o endpoint não for configurado, o formulário usa o
     fallback abaixo: abre o cliente de e-mail do candidato com os
     dados já preenchidos, endereçado para consultoria@arrowsp.com.br.
  ========================================================= */
  var FORMSPREE_ENDPOINT = ''; // ex: 'https://formspree.io/f/abcdwxyz'

  var applyForm = document.getElementById('applyForm');
  if (applyForm) {
    applyForm.addEventListener('submit', function (e) {
      e.preventDefault();

      var data = {
        nome: document.getElementById('f-nome').value,
        email: document.getElementById('f-email').value,
        telefone: document.getElementById('f-tel').value,
        linkedin: document.getElementById('f-linkedin').value,
        area: document.getElementById('f-area').value,
        nivel: document.getElementById('f-nivel').value,
        mensagem: document.getElementById('f-msg').value
      };

      function showSuccess() {
        var successBox = document.getElementById('formSuccess');
        if (successBox) successBox.classList.add('show');
        applyForm.querySelectorAll('input, select, textarea, button[type="submit"]').forEach(function (el) {
          el.disabled = true;
        });
      }

      if (FORMSPREE_ENDPOINT) {
        var formData = new FormData(applyForm);
        fetch(FORMSPREE_ENDPOINT, {
          method: 'POST',
          body: formData,
          headers: { 'Accept': 'application/json' }
        }).then(function (response) {
          if (response.ok) {
            showSuccess();
          } else {
            alert('Não foi possível enviar agora. Tente novamente ou envie por e-mail: consultoria@arrowsp.com.br');
          }
        }).catch(function () {
          alert('Não foi possível enviar agora. Tente novamente ou envie por e-mail: consultoria@arrowsp.com.br');
        });
      } else {
        var body = 'Nome: ' + data.nome +
          '%0ATelefone/WhatsApp: ' + data.telefone +
          '%0ALinkedIn: ' + data.linkedin +
          '%0AÁrea de atuação: ' + data.area +
          '%0ANível pretendido: ' + data.nivel +
          '%0AMensagem: ' + data.mensagem;
        window.location.href = 'mailto:consultoria@arrowsp.com.br?subject=' +
          encodeURIComponent('Cadastro de currículo — ' + data.nome) +
          '&body=' + body;
        showSuccess();
      }
    });
  }

});
