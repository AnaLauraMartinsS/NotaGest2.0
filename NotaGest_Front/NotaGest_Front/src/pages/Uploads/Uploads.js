import React, { useState } from 'react';
import AddFileModal from '../../components/AddFileModal/AddFileModal';
import { MdDeleteForever } from "react-icons/md";
import './Uploads.css';
import arquivo_nao_encontrado from '../../assets/arquivo_nao_encontrado.jpg';
import Logo from '../../assets/Logo.png';
import { useNavigate } from 'react-router-dom';

const Uploads = () => {
  const [files, setFiles] = useState([]); // Cria um estado files que armazena uma lista de arquivos. Inicialmente, é um array vazio.
  const [isModalOpen, setModalOpen] = useState(false); //Cria um estado isModalOpen que controla se o modal para adicionar arquivos está aberto ou fechado. Inicialmente, está fechado (false).

  const addFile = (fileData) => { // Define uma função que será chamada quando um novo arquivo for adicionado pelo modal.
    const newFileData = {
        ...fileData, // Arquivo atual
        date: new Date().toLocaleString(), // Adiciona a data atual ao novo arquivo. // toLocaleString() converter o objeto de data em uma string, formatada de acordo com as convenções locais do usuário.
      };
    
    setFiles([...files , newFileData]); //Atualiza o estado files adicionando o novo fileData (que contém informações do arquivo, como título e observação). O operador spread (...) é usado para criar uma nova array com os arquivos existentes e o novo arquivo.
    setModalOpen(false); // Fecha o modal após adicionar o arquivo.
  };

  // ...files arquivos anteriores
  const closeModal = () => {
    setModalOpen(false);
  };

  const deleteFile = (index) => {
    // filter é uma função de array que cria um novo array contendo todos os elementos que atendem a uma condição específica. 
    // filter recebe dois parâmetros:
    //(OBRIGATORIO) O primeiro parâmetro, que geralmente representa o elemento atual do array, está sendo ignorado com _. O caractere _ é uma convenção comum em JavaScript para indicar que o valor não será usado.
    //O segundo parâmetro i é o índice do elemento atual no array.
    const newFiles = files.filter((_, i) => i !== index); // Remove o arquivo selecionado.
    setFiles(newFiles); // Atualiza a lista de arquivos.
  };
  // ATENÇÃO quando o i = 0 (arquivo 'file1.txt'): 0 !== 1 é true, então ele é incluído.
  // Para i = 1 (arquivo 'file2.txt'): 1 !== 1 é false, então ele é excluído.

  const navigate = useNavigate();
  const goHome = () => { 
    navigate('/');
  }

  return (
    <div>
      <header className="files-header" id="home">
        <img src={Logo} alt="Logo da Empresa" className="files-logo-image" />
        <nav className="files-nav">
          <ul className="files-nav-list">
            <li>
              <button className="files-logoff-button" onClick={goHome}>Logoff</button>
            </li>
          </ul>
        </nav>
      </header>
  
      <div>
        <h1 className="files-title">Meus Arquivos</h1>
      </div>
  
      <div className="files-button-container">
        <button 
          onClick={() => setModalOpen(true)} 
          className="files-add-button">
          Adicionar Arquivo
        </button>
      </div>
  
      {isModalOpen && <AddFileModal onAddFile={addFile} onClose={closeModal} />}
  
      {files.length === 0 ? (
        <div className="files-empty-state">
          <img 
            className="files-empty-image" 
            src={arquivo_nao_encontrado} 
            alt="Nenhum arquivo encontrado" 
          />
          <p className="files-empty-text">Nenhum arquivo encontrado. Adicione um arquivo.</p>
        </div>
      ) : (
        <div className="files-table-container">
          <table className="files-table">
            <thead>
              <tr>
                <th>Título</th>
                <th>Observação</th>
                <th>Data</th>
                <th>Ação</th>
              </tr>
            </thead>
            <tbody>
              {files.map((file, index) => (
                <tr key={index}>
                  <td>{file.title}</td>
                  <td>{file.observation}</td>
                  <td>{file.date}</td>
                  <td>
                    <button 
                      onClick={() => deleteFile(index)} 
                      className="files-delete-button">
                      <MdDeleteForever />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
  
};

export default Uploads;
// Dentro do componente Uploads tem um modal (AddFileModal) que é exibido quando isModalOpen é true. A função addFile é responsável por adicionar um novo arquivo ao estado files do componente Uploads.
// No AddFileModal, terá um código onde, após a seleção de um arquivo e o envio do formulário, a função onAddFile será chamada, geralmente passando os dados do arquivo como argumento.

// onAddFile é uma propriedade que está sendo  passanda para o componente AddFileModal. Essa convenção é comum em React, onde prefixos como on indicam que a propriedade é uma função de callback que será chamada em um determinado evento (neste caso, quando um arquivo é adicionado). 
 
// {addFile}: Aqui, você está passando a função addFile como valor para a prop onAddFile. Isso significa que, quando o evento apropriado acontecer dentro do AddFileModal (por exemplo, quando um arquivo é adicionado e o formulário é enviado), o modal pode chamar essa função.