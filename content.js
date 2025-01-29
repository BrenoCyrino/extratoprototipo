function addCopyButtonToTable(table) {
    const button = document.createElement('button');
    button.innerText = 'Copiar Tabela';
    button.className = 'copy-table-button';
  
    // Posiciona o botão sobre a tabela
    const rect = table.getBoundingClientRect();
    button.style.position = 'absolute';
    button.style.top = `${window.scrollY + rect.top - 30}px`; // Posicionado acima da tabela
    button.style.left = `${window.scrollX + rect.left}px`;
  
    button.addEventListener('click', () => {
      const range = document.createRange();
      range.selectNode(table);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
  
      try {
        document.execCommand('copy');
        alert('Tabela copiada com sucesso!');
      } catch (err) {
        console.error('Vish, não deu certo', err);
      }
  
      window.getSelection().removeAllRanges();
    });
  
    document.body.appendChild(button);
  }
  
  function findTablesAndAddButtons() {
    const tables = document.querySelectorAll('table');
    console.log(`Found ${tables.length} tables.`);
    tables.forEach((table) => {
      const rows = table.getElementsByTagName('tr');
      if (rows.length > 2) { // Verifica se a tabela tem mais de 2 linhas
        addCopyButtonToTable(table);
      }
    });
  }
  
  // Inicia a função assim que o script é executado
  findTablesAndAddButtons();
  
  