// import React, { useEffect, useState } from "react";
// import DropDownButton from "./UI/Dropdown";
// import Table from "react-bootstrap/Table";
// import "./tabelaEmpresas.css";

// const TabelaEmpresas = () => {
//   const empresas = [
//     {
//       cnpj: "04.534.084/0001-02",
//       empresa: "PBI Informática Ltda",
//       contato: "(51)3029-0029",
//       email: "negocios@bence.com.br",
//       site: "www.bence.com.br",
//       data: "04/09/2024",
//       avaliacao: {
//         estrelas: 5.0,
//         comentario: "★★★★★",
//       },
//       cnaePrincipal: "",
//       descricaoCnaePrincipal: "",
//       cnaeSecundarias: [
//         {
//           cnaeSecundaria: "",
//           descricaoCnaeSecundaria: "",
//         },
//       ],
//       processos: [
//         {
//           objeto_processo_rio: "IPL-PRO-2024/00437",
//           titulo:
//             "FORNECIMENTO DE SOLUÇÃO DE GESTÃO DE ATENDIMENTO NA MODALIDADE DE SOFTWARE COMO UM SERVIÇO (SAAS) COM DISPONIBILIZAÇÃO DA PLATAFORMA PELA INTERNET, INCLUINDO O ARMAZENAMENTO DE DADOS.",
//           unidade: "",
//           quantidade: "23",
//           preco_unitario: "indeferido pela área demandante",
//           preco_total: "indeferido pela área demandante",
//           data: "04/09/2024",
//           validade: "03/12/2024",
//           itens: [
//             {
//               numero: "",
//               descricao: "",
//               unidade: "",
//               quantidade: "",
//               preco_unitario: "",
//               preco_total: "",
//               data: "",
//               validade: "",
//               situacao: "",
//               data_homologacao: "",
//             },
//           ],
//         },
//       ],
//     },
//     {
//       cnpj: "21.034.800/0001-01",
//       empresa: "BLANK IT CONSULTORIA EM INFORMÁTICA LTDA",
//       contato: "(21)99862-4333",
//       email: "ilan.blank@blankit.com.br",
//       site: "www.lankit.com.br",
//       avaliacao: {
//         estrelas: 4.5,
//         comentario: "★★★★",
//       },
//       cnaePrincipal: "",
//       descricaoCnaePrincipal: "",
//       cnaeSecundarias: [
//         {
//           cnaeSecundaria: "",
//           descricaoCnaeSecundaria: "",
//         },
//       ],
//       processos: [
//         {
//           objeto_processo_rio: "SME-PRO-2023/00705",
//           titulo:
//             "Serviços de suporte em Tecnologia da Informação e Comunicação (TIC) – Service Desk –, com Central de Atendimento (Help Desk – 1º Nível) e Atendimento de Campo (2º nível) a usuários, equipamentos de informática e sistemas/aplicativos da Secretaria Municipal de Educação (SME)",
//           unidade: "",
//           quantidade: "24",
//           preco_unitario: "780865,35",
//           preco_total: "18740768,40",
//           data: "12/12/2023",
//           validade: "12/02/2024",
//           itens: [
//             {
//               numero: "",
//               descricao: "",
//               unidade: "",
//               quantidade: "",
//               preco_unitario: "",
//               preco_total: "",
//               data: "",
//               validade: "",
//               situacao: "",
//               data_homologacao: "",
//             },
//           ],
//         },
//       ],
//     },
//     {
//       cnpj: "02.877.566/0001-21",
//       empresa: "IBROWSE CONSULTORIA E INFORMÁTICA LTDA",
//       contato: "(51)3458-3160",
//       email: "ibrowse@ibrowse.com.br",
//       site: "www.ibrowse.com.br",
//       avaliacao: {
//         estrelas: 4.0,
//         comentario: "★★★★",
//       },
//       cnaePrincipal: "",
//       descricaoCnaePrincipal: "",
//       cnaeSecundarias: [
//         {
//           cnaeSecundaria: "",
//           descricaoCnaeSecundaria: "",
//         },
//       ],
//       processos: [
//         {
//           objeto_processo_rio: "SME-PRO-2023/00705",
//           titulo:
//             "Serviços de suporte em Tecnologia da Informação e Comunicação (TIC) – Service Desk –, com Central de Atendimento (Help Desk – 1º Nível) e Atendimento de Campo (2º nível) a usuários, equipamentos de informática e sistemas/aplicativos da Secretaria Municipal de Educação (SME)",
//           unidade: "",
//           quantidade: "24",
//           preco_unitario: "936056,79",
//           preco_total: "22465362,96",
//           data: "13/12/2023",
//           validade: "13/02/2024",
//           itens: [
//             {
//               numero: "",
//               descricao: "",
//               unidade: "",
//               quantidade: "",
//               preco_unitario: "",
//               preco_total: "",
//               data: "",
//               validade: "",
//               situacao: "",
//               data_homologacao: "",
//             },
//           ],
//         },
//       ],
//     },
//     {
//       cnpj: "00.092.369/0001-71",
//       empresa: "NETCENTER INFORMÁTICA LTDA",
//       contato: "(21)4501-4000",
//       email: "negocios@netcenter.com.br",
//       site: "www.netcenter.com.br",
//       avaliacao: {
//         estrelas: 5.0,
//         comentario: "★★★★★",
//       },
//       cnaePrincipal: "",
//       descricaoCnaePrincipal: "",
//       cnaeSecundarias: [
//         {
//           cnaeSecundaria: "",
//           descricaoCnaeSecundaria: "",
//         },
//       ],
//       processos: [
//         {
//           objeto_processo_rio: "SME-PRO-2023/00705",
//           titulo:
//             "Serviços de suporte em Tecnologia da Informação e Comunicação (TIC) – Service Desk –, com Central de Atendimento (Help Desk – 1º Nível) e Atendimento de Campo (2º nível) a usuários, equipamentos de informática e sistemas/aplicativos da Secretaria Municipal de Educação (SME)",
//           unidade: "",
//           quantidade: "24",
//           preco_unitario: "808389,38",
//           preco_total: "21561345,12",
//           data: "08/12/2023",
//           validade: "08/02/2024",
//           itens: [
//             {
//               numero: "",
//               descricao: "",
//               unidade: "",
//               quantidade: "",
//               preco_unitario: "",
//               preco_total: "",
//               data: "",
//               validade: "",
//               situacao: "",
//               data_homologacao: "",
//             },
//           ],
//         },
//       ],
//     },
//     {
//       cnpj: "33.402.892/0001-06",
//       empresa: "ABNT",
//       contato: "(61) 3344-0236",
//       email: "mrossetto@alltechsolucoes.com.br",
//       site: "alltechsolucoes.com.br",
//       avaliacao: {
//         estrelas: 4.5,
//         comentario: "★★★★★",
//       },
//       cnaePrincipal: "",
//       descricaoCnaePrincipal: "",
//       cnaeSecundarias: [
//         {
//           cnaeSecundaria: "",
//           descricaoCnaeSecundaria: "",
//         },
//       ],
//       processos: [
//         {
//           objeto_processo_rio: "IPL-PRO-2021/00062",
//           titulo:
//             "Prestação de Serviços via internet (Software como Serviço) de visualização, atualização automática, impressão e gerenciamento de biblioteca de normas técnicas ABNT – NBR (Normas Técnicas Brasileiras) pelo período de 24 (vinte e quatro) meses.",
//           unidade: "",
//           quantidade: "100",
//           preco_unitario: "113,42",
//           preco_total: 11342,
//           data: "30/08/2024",
//           validade: "29/09/2024",
//           itens: [
//             {
//               numero: "",
//               descricao: "",
//               unidade: "",
//               quantidade: "",
//               preco_unitario: "",
//               preco_total: "",
//               data: "",
//               validade: "",
//               situacao: "",
//               data_homologacao: "",
//             },
//           ],
//         },
//       ],
//     },
//     {
//       cnpj: "03.482.307/0001-18",
//       empresa: "AGF Engenharia de Combate a Incêndio",
//       contato: "(21)3596-3754",
//       email: "comercial@agf.eng.br",
//       site: "www.agf.eng.br",
//       avaliacao: {
//         estrelas: 4.5,
//         comentario: "★★★★★",
//       },
//       cnaePrincipal: "",
//       descricaoCnaePrincipal: "",
//       cnaeSecundarias: [
//         {
//           cnaeSecundaria: "",
//           descricaoCnaeSecundaria: "",
//         },
//       ],
//       processos: [
//         {
//           objeto_processo_rio: "IPL-PRO-2024/00416",
//           titulo:
//             "Contratação de Empresa para Prestação de Serviços de Manutenção de Extintores",
//           unidade: "",
//           quantidade: "",
//           preco_unitario: "",
//           preco_total: "",
//           data: "",
//           validade: "",
//           itens: [
//             {
//               numero: "",
//               descricao: "",
//               unidade: "",
//               quantidade: "",
//               preco_unitario: "",
//               preco_total: "",
//               data: "",
//               validade: "",
//               situacao: "",
//               data_homologacao: "",
//             },
//           ],
//         },
//       ],
//     },
//     {
//       cnpj: "02.935.467/0001-59",
//       empresa: "Marvin Comércio de Extintores Ltda",
//       contato: "(21) 2661-2077",
//       email: "vendas3@marvinextintores.com.br",
//       site: "www.marvinextintores.com.br",
//       avaliacao: {
//         estrelas: 4.0,
//         comentario: "★★★★",
//       },
//       cnaePrincipal: "",
//       descricaoCnaePrincipal: "",
//       cnaeSecundarias: [
//         {
//           cnaeSecundaria: "",
//           descricaoCnaeSecundaria: "",
//         },
//       ],
//       processos: [
//         {
//           objeto_processo_rio: "IPL-PRO-2024/00416",
//           titulo:
//             "Contratação de Empresa para Prestação de Serviços de Manutenção de Extintores",
//           unidade: "",
//           quantidade: "",
//           preco_unitario: "",
//           preco_total: "",
//           data: "",
//           validade: "",
//           itens: [
//             {
//               numero: "",
//               descricao: "",
//               unidade: "",
//               quantidade: "",
//               preco_unitario: "",
//               preco_total: "",
//               data: "",
//               validade: "",
//               situacao: "",
//               data_homologacao: "",
//             },
//           ],
//         },
//       ],
//     },
//     {
//       cnpj: "11.574.847/0001-04",
//       empresa: "SYC SOLUCOES E GESTAO DE SEGURANCA LTDA",
//       contato: "(21) 3082-9506",
//       email: "syc@sycsolucoes.com.br",
//       site: "www.sycsolucoes.com.br",
//       avaliacao: {
//         estrelas: 5.0,
//         comentario: "★★★★★",
//       },
//       cnaePrincipal: "",
//       descricaoCnaePrincipal: "",
//       cnaeSecundarias: [
//         {
//           cnaeSecundaria: "",
//           descricaoCnaeSecundaria: "",
//         },
//       ],
//       processos: [
//         {
//           objeto_processo_rio: "IPL-PRO-2024/00416",
//           titulo:
//             "Contratação de Empresa para Prestação de Serviços de Manutenção de Extintores",
//           unidade: "",
//           quantidade: "",
//           preco_unitario: "",
//           preco_total: "",
//           data: "",
//           validade: "",
//           itens: [
//             {
//               numero: "",
//               descricao: "",
//               unidade: "",
//               quantidade: "",
//               preco_unitario: "",
//               preco_total: "",
//               data: "",
//               validade: "",
//               situacao: "",
//               data_homologacao: "",
//             },
//           ],
//         },
//       ],
//     },
//     {
//       cnpj: "73.239.162/0001-50",
//       empresa: "CENTRAL FIRE COM E MANUTENCAO DE EQUIP INCENDIO LTDA",
//       contato: "(21) 2281 8103",
//       email: "comercial@centralfire.com.br",
//       site: "www.centralfire.com.br",
//       avaliacao: {
//         estrelas: 5.0,
//         comentario: "★★★★★",
//       },
//       cnaePrincipal: "",
//       descricaoCnaePrincipal: "",
//       cnaeSecundarias: [
//         {
//           cnaeSecundaria: "",
//           descricaoCnaeSecundaria: "",
//         },
//       ],
//       processos: [
//         {
//           objeto_processo_rio: "IPL-PRO-2024/00416",
//           titulo:
//             "Contratação de Empresa para Prestação de Serviços de Manutenção de Extintores",
//           unidade: "",
//           quantidade: "",
//           preco_unitario: "",
//           preco_total: "",
//           data: "",
//           validade: "",
//           itens: [
//             {
//               numero: "",
//               descricao: "",
//               unidade: "",
//               quantidade: "",
//               preco_unitario: "",
//               preco_total: "",
//               data: "",
//               validade: "",
//               situacao: "",
//               data_homologacao: "",
//             },
//           ],
//         },
//       ],
//     },
//     {
//       cnpj: "07.692.685/0001-23",
//       empresa: "J.S.R.C. EXTINTORES E GNV",
//       contato: "(21) 99296-7274",
//       email: "thaisbernardes.extintores@gmail.com",
//       site: "",
//       avaliacao: {
//         estrelas: 4.0,
//         comentario: "★★★★",
//       },
//       cnaePrincipal: "",
//       descricaoCnaePrincipal: "",
//       cnaeSecundarias: [
//         {
//           cnaeSecundaria: "",
//           descricaoCnaeSecundaria: "",
//         },
//       ],
//       processos: [
//         {
//           objeto_processo_rio: "IPL-PRO-2024/00416",
//           titulo:
//             "Contratação de Empresa para Prestação de Serviços de Manutenção de Extintores",
//           unidade: "",
//           quantidade: "",
//           preco_unitario: "",
//           preco_total: "",
//           data: "",
//           validade: "",
//           itens: [
//             {
//               numero: "",
//               descricao: "",
//               unidade: "",
//               quantidade: "",
//               preco_unitario: "",
//               preco_total: "",
//               data: "",
//               validade: "",
//               situacao: "",
//               data_homologacao: "",
//             },
//           ],
//         },
//       ],
//     },
//   ];
//   return (
//     <div
//       style={{
//         overflowX: "auto", // Scroll horizontal
//         maxHeight: "500px", // Limita a altura da tabela e adiciona scroll vertical
//         overflowY: "auto", // Scroll vertical

//         zIndex: 999,
//         backgroundColor: "white",
//         maxWidth: "100%",
//       }}
//     >
//       <table className="table table-striped table-hover">
//         <thead
//           style={{
//             position: "sticky",
//             top: 10,
//             padding: 20,

//             zIndex: 1, // Garante que o cabeçalho fique acima do corpo da tabela
//             height: "50px", // Define uma altura fixa
//           }}
//           className="bg-primary text-white"
//         >
//           <th
//             className="cnpj-col"
//             style={{
//               padding: "10px",
//               verticalAlign: "middle",
//               borderTopLeftRadius: "8px",
//               width: "150px",
//             }}
//           >
//             CNPJ
//           </th>
//           {/* Centraliza verticalmente */}
//           <th style={{ padding: "20px", verticalAlign: "middle" }}>Empresa</th>
//           <th style={{ padding: "20px", verticalAlign: "middle" }}>Contatos</th>
//           <th style={{ padding: "20px", verticalAlign: "middle" }}>Email</th>
//           <th style={{ padding: "20px", verticalAlign: "middle" }}>Site</th>
//           <th style={{ padding: "20px", verticalAlign: "middle" }}>
//             Atualizado
//           </th>

//           <th
//             style={{
//               padding: "20px",
//               verticalAlign: "middle",
//             }}
//           >
//             Avaliação
//           </th>
//           <th scope="col"></th>
//           <th scope="col"></th>
//         </thead>
//         <tbody style={{ marginTop: "10px", paddingTop: "500px" }}>
//           {empresas.map((empresa, index) => (
//             <tr key={index}>
//               <td className="cnpj-col">{empresa.cnpj}</td>
//               <td>{empresa.empresa}</td>
//               <td>{empresa.contato}</td>
//               <td>{empresa.email}</td>
//               <td>{empresa.site}</td>
//               <td>{empresa.data}</td>

//               <td>
//                 <span className="badge text-bg-light">
//                   <span className="text-warning">
//                     {empresa.avaliacao.comentario}
//                   </span>{" "}
//                   {empresa.avaliacao.estrelas}
//                 </span>
//               </td>
//               <td>
//                 <div className="d-flex justify-content-between align-items-center">
//                   <button
//                     type="button"
//                     className="btn btn-sm btn-outline-primary me-2"
//                   >
//                     <i className="fa fa-list-alt" aria-hidden="true"></i>{" "}
//                     Detalhes
//                   </button>
//                   <DropDownButton />
//                 </div>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default TabelaEmpresas;

import React, { useEffect, useState } from "react";
import "./tabelaEmpresas.css"; // Estilos CSS para a tabela
import DropDownButton from "./UI/Dropdown";

// const empresas = [
//   {
//     cnpj: "12.345.678/dfsdffsdfsdfsdfsdsdfsd0001-90",
//     nome: "Empresadfsd fsdfsda Alfa",
//     contato: "(21) 123sdfsdfsd4-5678",
//     email: "condfsdafsdatato@empresa-alfa.com",
//     site: "www.empresa-alfa.com",
//     avaliacao: { estrelas: "★★★★☆", nota: 4.5 },
//   },
//   {
//     cnpj: "12.345.678/dfsdffsdfsdfsdfsdsdfsd0001-90",
//     nome: "Empresadfsd fsdfsda Alfa",
//     contato: "(21) 123sdfsdfsd4-5678",
//     email: "condfsdafsdatato@empresa-alfa.com",
//     site: "www.empresa-alfa.com",
//     avaliacao: { estrelas: "★★★★☆", nota: 4.5 },
//   },
//   {
//     cnpj: "12.345.678/dfsdffsdfsdfsdfsdsdfsd0001-90",
//     nome: "Empresadfsd fsdfsda Alfa",
//     contato: "(21) 123sdfsdfsd4-5678",
//     email: "condfsdafsdatato@empresa-alfa.com",
//     site: "www.empresa-alfa.com",
//     avaliacao: { estrelas: "★★★★☆", nota: 4.5 },
//   },
//   {
//     cnpj: "12.345.678/dfsdffsdfsdfsdfsdsdfsd0001-90",
//     nome: "Empresadfsd fsdfsda Alfa",
//     contato: "(21) 123sdfsdfsd4-5678",
//     email: "condfsdafsdatato@empresa-alfa.com",
//     site: "www.empresa-alfa.com",
//     avaliacao: { estrelas: "★★★★☆", nota: 4.5 },
//   },
//   {
//     cnpj: "12.345.678/dfsdffsdfsdfsdfsdsdfsd0001-90",
//     nome: "Empresadfsd fsdfsda Alfa",
//     contato: "(21) 123sdfsdfsd4-5678",
//     email: "condfsdafsdatato@empresa-alfa.com",
//     site: "www.empresa-alfa.com",
//     avaliacao: { estrelas: "★★★★☆", nota: 4.5 },
//   },
//   {
//     cnpj: "12.345.678/dfsdffsdfsdfsdfsdsdfsd0001-90",
//     nome: "Empresadfsd fsdfsda Alfa",
//     contato: "(21) 123sdfsdfsd4-5678",
//     email: "condfsdafsdatato@empresa-alfa.com",
//     site: "www.empresa-alfa.com",
//     avaliacao: { estrelas: "★★★★☆", nota: 4.5 },
//   },
//   {
//     cnpj: "12.345.678/dfsdffsdfsdfsdfsdsdfsd0001-90",
//     nome: "Empresadfsd fsdfsda Alfa",
//     contato: "(21) 123sdfsdfsd4-5678",
//     email: "condfsdafsdatato@empresa-alfa.com",
//     site: "www.empresa-alfa.com",
//     avaliacao: { estrelas: "★★★★☆", nota: 4.5 },
//   },
//   {
//     cnpj: "12.345.678/dfsdffsdfsdfsdfsdsdfsd0001-90",
//     nome: "Empresadfsd fsdfsda Alfa",
//     contato: "(21) 123sdfsdfsd4-5678",
//     email: "condfsdafsdatato@empresa-alfa.com",
//     site: "www.empresa-alfa.com",
//     avaliacao: { estrelas: "★★★★☆", nota: 4.5 },
//   },
//   {
//     cnpj: "12.345.678/dfsdffsdfsdfsdfsdsdfsd0001-90",
//     nome: "Empresadfsd fsdfsda Alfa",
//     contato: "(21) 123sdfsdfsd4-5678",
//     email: "condfsdafsdatato@empresa-alfa.com",
//     site: "www.empresa-alfa.com",
//     avaliacao: { estrelas: "★★★★☆", nota: 4.5 },
//   },
//   {
//     cnpj: "12.345.678/dfsdffsdfsdfsdfsdsdfsd0001-90",
//     nome: "Empresadfsd fsdfsda Alfa",
//     contato: "(21) 123sdfsdfsd4-5678",
//     email: "condfsdafsdatato@empresa-alfa.com",
//     site: "www.empresa-alfa.com",
//     avaliacao: { estrelas: "★★★★☆", nota: 4.5 },
//   },
//   {
//     cnpj: "12.345.678/dfsdffsdfsdfsdfsdsdfsd0001-90",
//     nome: "Empresadfsd fsdfsda Alfa",
//     contato: "(21) 123sdfsdfsd4-5678",
//     email: "condfsdafsdatato@empresa-alfa.com",
//     site: "www.empresa-alfa.com",
//     avaliacao: { estrelas: "★★★★☆", nota: 4.5 },
//   },
//   {
//     cnpj: "12.345.678/dfsdffsdfsdfsdfsdsdfsd0001-90",
//     nome: "Empresadfsd fsdfsda Alfa",
//     contato: "(21) 123sdfsdfsd4-5678",
//     email: "condfsdafsdatato@empresa-alfa.com",
//     site: "www.empresa-alfa.com",
//     avaliacao: { estrelas: "★★★★☆", nota: 4.5 },
//   },
//   {
//     cnpj: "12.345.678/dfsdffsdfsdfsdfsdsdfsd0001-90",
//     nome: "Empresadfsd fsdfsda Alfa",
//     contato: "(21) 123sdfsdfsd4-5678",
//     email: "condfsdafsdatato@empresa-alfa.com",
//     site: "www.empresa-alfa.com",
//     avaliacao: { estrelas: "★★★★☆", nota: 4.5 },
//   },
//   {
//     cnpj: "12.345.678/dfsdffsdfsdfsdfsdsdfsd0001-90",
//     nome: "Empresadfsd fsdfsda Alfa",
//     contato: "(21) 123sdfsdfsd4-5678",
//     email: "condfsdafsdatato@empresa-alfa.com",
//     site: "www.empresa-alfa.com",
//     avaliacao: { estrelas: "★★★★☆", nota: 4.5 },
//   },
//   {
//     cnpj: "12.345.678/dfsdffsdfsdfsdfsdsdfsd0001-90",
//     nome: "Empresadfsd fsdfsda Alfa",
//     contato: "(21) 123sdfsdfsd4-5678",
//     email: "condfsdafsdatato@empresa-alfa.com",
//     site: "www.empresa-alfa.com",
//     avaliacao: { estrelas: "★★★★☆", nota: 4.5 },
//   },
//   {
//     cnpj: "12.345.678/dfsdffsdfsdfsdfsdsdfsd0001-90",
//     nome: "Empresadfsd fsdfsda Alfa",
//     contato: "(21) 123sdfsdfsd4-5678",
//     email: "condfsdafsdatato@empresa-alfa.com",
//     site: "www.empresa-alfa.com",
//     avaliacao: { estrelas: "★★★★☆", nota: 4.5 },
//   },
//   {
//     cnpj: "12.345.678/dfsdffsdfsdfsdfsdsdfsd0001-90",
//     nome: "Empresadfsd fsdfsda Alfa",
//     contato: "(21) 123sdfsdfsd4-5678",
//     email: "condfsdafsdatato@empresa-alfa.com",
//     site: "www.empresa-alfa.com",
//     avaliacao: { estrelas: "★★★★☆", nota: 4.5 },
//   },
//   {
//     cnpj: "12.345.678/dfsdffsdfsdfsdfsdsdfsd0001-90",
//     nome: "Empresadfsd fsdfsda Alfa",
//     contato: "(21) 123sdfsdfsd4-5678",
//     email: "condfsdafsdatato@empresa-alfa.com",
//     site: "www.empresa-alfa.com",
//     avaliacao: { estrelas: "★★★★☆", nota: 4.5 },
//   },
//   {
//     cnpj: "12.345.678/dfsdffsdfsdfsdfsdsdfsd0001-90",
//     nome: "Empresadfsd fsdfsda Alfa",
//     contato: "(21) 123sdfsdfsd4-5678",
//     email: "condfsdafsdatato@empresa-alfa.com",
//     site: "www.empresa-alfa.com",
//     avaliacao: { estrelas: "★★★★☆", nota: 4.5 },
//   },
//   {
//     cnpj: "12.345.678/dfsdffsdfsdfsdfsdsdfsd0001-90",
//     nome: "Empresadfsd fsdfsda Alfa",
//     contato: "(21) 123sdfsdfsd4-5678",
//     email: "condfsdafsdatato@empresa-alfa.com",
//     site: "www.empresa-alfa.com",
//     avaliacao: { estrelas: "★★★★☆", nota: 4.5 },
//   },
//   {
//     cnpj: "12.345.678/dfsdffsdfsdfsdfsdsdfsd0001-90",
//     nome: "Empresadfsd fsdfsda Alfa",
//     contato: "(21) 123sdfsdfsd4-5678",
//     email: "condfsdafsdatato@empresa-alfa.com",
//     site: "www.empresa-alfa.com",
//     avaliacao: { estrelas: "★★★★☆", nota: 4.5 },
//   },
//   {
//     cnpj: "12.345.678/dfsdffsdfsdfsdfsdsdfsd0001-90",
//     nome: "Empresadfsd fsdfsda Alfa",
//     contato: "(21) 123sdfsdfsd4-5678",
//     email: "condfsdafsdatato@empresa-alfa.com",
//     site: "www.empresa-alfa.com",
//     avaliacao: { estrelas: "★★★★☆", nota: 4.5 },
//   },

//   // Adicione mais objetos conforme necessário
// ];
const TabelaEmpresas = ({ empresas }) => {
  console.log("empresas ", empresas);
  return (
    <div className="tabela-container">
      <table className="tabela">
        <thead>
          <th scope="col">CNPJ</th>
          <th scope="col">Empresa</th>
          <th scope="col">Contatos</th>
          <th scope="col">Email</th>
          <th scope="col">Site</th>
          <th scope="col">Atualização</th>
          <th scope="col">Avaliação</th>
          <th scope="col"></th>
          <th scope="col"></th>
        </thead>
        <tbody>
          {empresas.map((empresa) => (
            <tr key={empresa.cnpj}>
              <td>{empresa.cnpj}</td>
              <td>{empresa.empresa}</td>
              <td>{empresa.contato}</td>
              <td>{empresa.email}</td>
              <td>{empresa.site}</td>
              <td>{empresa.data}</td>

              <td>
                <span className="badge text-bg-light">
                  <span className="text-warning">
                    {empresa.avaliacao.comentario}
                  </span>{" "}
                  {empresa.avaliacao.estrelas}
                </span>
              </td>
              <td>
                <div className="d-flex justify-content-between align-items-center">
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-primary me-2"
                  >
                    <i className="fa fa-list-alt" aria-hidden="true"></i>{" "}
                    Detalhes
                  </button>
                  <DropDownButton />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TabelaEmpresas;