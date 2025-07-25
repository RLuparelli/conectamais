// Script to help convert week cards to accordion format
const weekData = [
  {
    number: 2,
    title: "WhatsApp Seguro e Eficiente",
    description: "Dominando o WhatsApp com proteção total",
    topics: [
      "Configurações de privacidade",
      "Identificando mensagens suspeitas",
      "Grupos familiares organizados",
      "Videochamadas de qualidade"
    ]
  },
  {
    number: 3,
    title: "Banco Digital Blindado",
    description: "Apps bancários com segurança máxima",
    topics: [
      "Instalação e configuração segura",
      "PIX protegido contra golpes",
      "Consultas e extratos",
      "Investimentos pelo celular"
    ]
  },
  {
    number: 4,
    title: "Compras Online Inteligentes",
    description: "Comprando online com segurança e economia",
    topics: [
      "Sites confiáveis vs. golpes",
      "Comparação de preços",
      "Cupons e promoções legítimas",
      "Rastreamento de entregas"
    ]
  },
  {
    number: 5,
    title: "Aplicativos do Dia a Dia",
    description: "Apps úteis para facilitar sua vida",
    topics: [
      "Uber/99 com segurança",
      "iFood e delivery",
      "Previsão do tempo",
      "Mapas e GPS"
    ]
  },
  {
    number: 6,
    title: "Saúde e Bem-Estar Digital",
    description: "Tecnologia a favor da sua saúde",
    topics: [
      "Telemedicina e consultas online",
      "Farmácias digitais",
      "Lembretes de medicamentos",
      "Emergências médicas"
    ]
  },
  {
    number: 7,
    title: "Entretenimento e Conexões",
    description: "Se divertindo e conectando com família",
    topics: [
      "Netflix, YouTube e streaming",
      "Jogos relaxantes",
      "Redes sociais seguras",
      "Compartilhamento de memórias"
    ]
  },
  {
    number: 8,
    title: "Autonomia Total e Manutenção",
    description: "Tornando-se independente digitalmente",
    topics: [
      "Revisão de segurança completa",
      "Resolução de problemas",
      "Atualizações e backups",
      "Plano de manutenção contínua"
    ]
  }
];

// Generate accordion HTML
weekData.forEach(week => {
  const html = `                        <div class="accordion-item">
                            <button class="accordion-header" data-week="${week.number}">
                                <div class="accordion-left">
                                    <div class="week-number-small">${week.number}</div>
                                    <div class="accordion-title">${week.title}</div>
                                </div>
                                <svg class="accordion-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                                </svg>
                            </button>
                            <div class="accordion-content">
                                <p>${week.description}</p>
                                <ul class="week-topics">
${week.topics.map(topic => `                                    <li>${topic}</li>`).join('\n')}
                                </ul>
                            </div>
                        </div>`;
  console.log(html);
  console.log('\n');
});