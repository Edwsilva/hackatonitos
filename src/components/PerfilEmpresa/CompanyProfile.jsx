import React from 'react';

const CompanyProfile = (empresa) => {
    console.log("Empresas company ", empresa.empresa.nome)
  

  return (


    <div className="container mt-4" style={{color: 'black'}}>
      <div className="card mb-3">
        <div className="card-header text-center"  style={{ paddingBottom: '0.0rem', paddingTop: '0.0rem' }}>
          <h5>{empresa.empresa.nome}</h5>
          <h6 className="text-muted">{empresa.empresa.fantasia}</h6>
        </div>
        <div className="card-body"  style={{ paddingBottom: '0.0rem', paddingTop: '0.0rem' }}>
          {/* <h6 className="card-title">Informações da empresa</h6> */}
          <p><strong>Tipo:</strong> {empresa.empresa.tipo}</p>
          <p><strong>Porte:</strong> {empresa.empresa.porte}</p>
          <p><strong>Natureza Jurídica:</strong> {empresa.empresa.natureza_juridica}</p>
        </div>
      </div>

      <div className="card mb-3">
        <div className="card-header">
          <h6>Endereço</h6>
        </div>
        <div className="card-body" style={{ paddingBottom: '0.0rem', paddingTop: '0.0rem' }}>
          <p>{empresa.empresa.logradouro}, {empresa.empresa.numero} {empresa.empresa.complemento}, {empresa.empresa.bairro}, {empresa.empresa.municipio} - {empresa.empresa.uf}, {empresa.empresa.cep}</p>
        </div>
      </div>

      <div className="card mb-3">
        <div className="card-header">
          <h6>Contato</h6>
        </div>
        <div className="card-body"  style={{ paddingBottom: '0.0rem', paddingTop: '0.0rem' }}>
          <p><strong>Telefone:</strong> {empresa.empresa.telefone}</p>
        </div>
      </div>

      <div className="card mb-3">
        <div className="card-header">
          <h6>Informações Adicionais</h6>
        </div>
        <div className="card-body"  style={{ paddingBottom: '0.0rem', paddingTop: '0.0rem' }}>
          <p><strong>Abertura:</strong> {empresa.empresa.abertura}</p>
          <p><strong>Situação:</strong> {empresa.empresa.situacao}</p>
          <p><strong>Última Atualização:</strong> {new Date(empresa.empresa.ultima_atualizacao).toLocaleDateString()}</p>
          <p><strong>Capital Social:</strong> R$ {parseFloat(empresa.empresa.capital_social).toLocaleString('pt-BR')}</p>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;