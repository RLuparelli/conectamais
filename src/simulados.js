// Estado do progresso do usuário
let progressoUsuario = {
    aulasCompletas: [],
    quizCompleto: false,
    simuladorCompleto: false,
    pontuacaoQuiz: 0
};

// Dados das aulas
const aulas = {
    1: {
        titulo: "Golpes Comuns e Golpe do Parente",
        conteudo: `
            <h2>🚨 Aula 1: Golpes Comuns e Golpe do Parente</h2>
            
            <div class="aula-content">
                <div class="aula-section">
                    <h3>O que são golpes digitais?</h3>
                    <p>Golpes digitais são tentativas de enganar pessoas para roubar dinheiro, dados pessoais ou acesso a contas.</p>
                </div>

                <div class="aula-section">
                    <h3>🔴 GOLPE DO PARENTE - O Mais Perigoso</h3>
                    <div class="exemplo-golpe">
                        <h4>Como funciona:</h4>
                        <ol>
                            <li>Criminoso se passa por um parente ou amigo</li>
                            <li>Inventa uma emergência (prisão, acidente, hospital)</li>
                            <li>Pede dinheiro urgente via PIX</li>
                            <li>Pressiona para agir rápido, sem pensar</li>
                        </ol>
                    </div>
                </div>

                <div class="aula-section">
                    <h3>🛡️ Como se proteger:</h3>
                    <ul class="lista-protecao">
                        <li><strong>SEMPRE confirme:</strong> Ligue diretamente para o parente</li>
                        <li><strong>Desconfie de pressa:</strong> Golpistas criam urgência falsa</li>
                        <li><strong>Pergunte detalhes:</strong> Só parentes verdadeiros saberão</li>
                        <li><strong>Jamais faça PIX</strong> sem confirmar a identidade</li>
                    </ul>
                </div>

                <div class="aula-section">
                    <h3>⚠️ Outros golpes comuns:</h3>
                    <div class="golpes-lista">
                        <div class="golpe-item">
                            <strong>Falso Banco:</strong> Ligações pedindo dados bancários
                        </div>
                        <div class="golpe-item">
                            <strong>Promoção Falsa:</strong> Prêmios que pedem taxa para retirar
                        </div>
                        <div class="golpe-item">
                            <strong>App Falso:</strong> Aplicativos que copiam bancos verdadeiros
                        </div>
                    </div>
                </div>

                <div class="aula-quiz">
                    <h3>📝 Mini-teste:</h3>
                    <p>Uma pessoa liga dizendo ser seu neto, pedindo PIX para uma emergência. O que você faz?</p>
                    <div class="mini-opcoes">
                        <button onclick="respostaMiniTeste(1, 'errado')">Envio o PIX imediatamente</button>
                        <button onclick="respostaMiniTeste(1, 'certo')">Desligo e ligo para meu neto</button>
                        <button onclick="respostaMiniTeste(1, 'errado')">Peço o número da conta</button>
                    </div>
                    <div id="resultado-mini-1"></div>
                </div>

                <div class="aula-footer">
                    <button class="btn-concluir" onclick="concluirAula(1)">✅ Concluir Aula 1</button>
                </div>
            </div>
        `
    },
    2: {
        titulo: "Phishing por E-mail/SMS",
        conteudo: `
            <h2>📧 Aula 2: Phishing por E-mail/SMS</h2>
            
            <div class="aula-content">
                <div class="aula-section">
                    <h3>O que é Phishing?</h3>
                    <p>Phishing é quando criminosos enviam e-mails ou SMS falsos, fingindo ser empresas conhecidas, para roubar suas informações.</p>
                </div>

                <div class="aula-section">
                    <h3>🔍 Sinais de E-mail Suspeito:</h3>
                    <div class="sinais-phishing">
                        <div class="sinal">
                            <span class="emoji">⚠️</span>
                            <div>
                                <strong>Remetente Estranho:</strong><br>
                                E-mail não oficial (ex: banco123@gmail.com)
                            </div>
                        </div>
                        <div class="sinal">
                            <span class="emoji">⏰</span>
                            <div>
                                <strong>Urgência Falsa:</strong><br>
                                "Sua conta será bloqueada em 24h"
                            </div>
                        </div>
                        <div class="sinal">
                            <span class="emoji">🔗</span>
                            <div>
                                <strong>Links Suspeitos:</strong><br>
                                URLs diferentes do site oficial
                            </div>
                        </div>
                        <div class="sinal">
                            <span class="emoji">📝</span>
                            <div>
                                <strong>Pedido de Dados:</strong><br>
                                Solicita senha, CPF ou dados bancários
                            </div>
                        </div>
                    </div>
                </div>

                <div class="aula-section">
                    <h3>📱 SMS de Phishing:</h3>
                    <div class="exemplo-sms">
                        <div class="sms-falso">
                            <strong>Exemplo de SMS FALSO:</strong><br>
                            "Seu cartão foi clonado! Clique aqui para bloquear: www.banco-falso.com"
                        </div>
                        <div class="sms-real">
                            <strong>SMS VERDADEIRO seria:</strong><br>
                            "Para dúvidas, ligue 0800-XXX-XXXX ou acesse seu app oficial"
                        </div>
                    </div>
                </div>

                <div class="aula-section">
                    <h3>🛡️ Como se proteger:</h3>
                    <ul class="lista-protecao">
                        <li><strong>NUNCA clique</strong> em links suspeitos</li>
                        <li><strong>Vá direto ao site oficial</strong> do banco/empresa</li>
                        <li><strong>Ligue para o atendimento</strong> oficial para confirmar</li>
                        <li><strong>Jamais digite dados</strong> em links de e-mail/SMS</li>
                    </ul>
                </div>

                <div class="aula-quiz">
                    <h3>📝 Mini-teste:</h3>
                    <p>Você recebe um SMS: "Seu PIX foi bloqueado! Clique aqui para desbloquear". O que faz?</p>
                    <div class="mini-opcoes">
                        <button onclick="respostaMiniTeste(2, 'errado')">Clico no link</button>
                        <button onclick="respostaMiniTeste(2, 'certo')">Ignoro e vou ao app do banco</button>
                        <button onclick="respostaMiniTeste(2, 'errado')">Respondo o SMS</button>
                    </div>
                    <div id="resultado-mini-2"></div>
                </div>

                <div class="aula-footer">
                    <button class="btn-concluir" onclick="concluirAula(2)">✅ Concluir Aula 2</button>
                </div>
            </div>
        `
    },
    3: {
        titulo: "Autenticação em Dois Fatores",
        conteudo: `
            <h2>🔐 Aula 3: Autenticação em Dois Fatores</h2>
            
            <div class="aula-content">
                <div class="aula-section">
                    <h3>O que é Autenticação em Dois Fatores (2FA)?</h3>
                    <p>É uma camada extra de segurança que exige duas formas de confirmar sua identidade antes de acessar suas contas.</p>
                </div>

                <div class="aula-section">
                    <h3>🔒 Como funciona:</h3>
                    <div class="passos-2fa">
                        <div class="passo">
                            <span class="numero">1</span>
                            <div>
                                <strong>Primeiro Fator:</strong><br>
                                Sua senha normal
                            </div>
                        </div>
                        <div class="passo">
                            <span class="numero">2</span>
                            <div>
                                <strong>Segundo Fator:</strong><br>
                                Código no celular, biometria ou token
                            </div>
                        </div>
                    </div>
                </div>

                <div class="aula-section">
                    <h3>📱 Tipos de Segundo Fator:</h3>
                    <div class="tipos-2fa">
                        <div class="tipo">
                            <span class="emoji">💬</span>
                            <div>
                                <strong>SMS:</strong><br>
                                Código enviado por mensagem
                            </div>
                        </div>
                        <div class="tipo">
                            <span class="emoji">📱</span>
                            <div>
                                <strong>App Autenticador:</strong><br>
                                Google Authenticator, etc.
                            </div>
                        </div>
                        <div class="tipo">
                            <span class="emoji">👆</span>
                            <div>
                                <strong>Biometria:</strong><br>
                                Digital ou reconhecimento facial
                            </div>
                        </div>
                    </div>
                </div>

                <div class="aula-section">
                    <h3>⚙️ Como ativar no seu banco:</h3>
                    <ol class="passos-ativacao">
                        <li>Entre no app do seu banco</li>
                        <li>Vá em "Configurações" ou "Segurança"</li>
                        <li>Procure "Autenticação em dois fatores" ou "2FA"</li>
                        <li>Escolha SMS ou biometria</li>
                        <li>Siga as instruções na tela</li>
                    </ol>
                </div>

                <div class="aula-section">
                    <h3>✅ Benefícios:</h3>
                    <ul class="lista-protecao">
                        <li><strong>Proteção extra:</strong> Mesmo com senha vazada, conta fica segura</li>
                        <li><strong>Alerta de invasão:</strong> Você sabe se alguém tentou entrar</li>
                        <li><strong>Tranquilidade:</strong> Muito mais difícil de ser hackeado</li>
                    </ul>
                </div>

                <div class="aula-quiz">
                    <h3>📝 Mini-teste:</h3>
                    <p>Com 2FA ativado, um criminoso que descobriu sua senha consegue entrar na conta?</p>
                    <div class="mini-opcoes">
                        <button onclick="respostaMiniTeste(3, 'errado')">Sim, a senha é suficiente</button>
                        <button onclick="respostaMiniTeste(3, 'certo')">Não, ainda precisa do segundo fator</button>
                        <button onclick="respostaMiniTeste(3, 'errado')">Depende do horário</button>
                    </div>
                    <div id="resultado-mini-3"></div>
                </div>

                <div class="aula-footer">
                    <button class="btn-concluir" onclick="concluirAula(3)">✅ Concluir Aula 3</button>
                </div>
            </div>
        `
    }
};

// Perguntas do Quiz
const perguntasQuiz = [
    {
        pergunta: "Você recebe uma ligação de alguém se passando por seu filho, pedindo PIX urgente. Qual a primeira coisa a fazer?",
        opcoes: [
            "Fazer o PIX imediatamente para ajudar",
            "Pedir mais detalhes sobre a emergência",
            "Desligar e ligar diretamente para seu filho",
            "Perguntar o valor necessário"
        ],
        correta: 2,
        explicacao: "Sempre confirme a identidade ligando diretamente para a pessoa. Golpistas criam urgência para impedir verificações."
    },
    {
        pergunta: "Qual destes e-mails é mais suspeito de ser phishing?",
        opcoes: [
            "contato@banco-oficial.com.br",
            "noreply@banco123gmail.com",
            "atendimento@bancoreal.com.br",
            "suporte@banco.gov.br"
        ],
        correta: 1,
        explicacao: "E-mails de bancos legítimos têm domínios oficiais. Gmail e outros gratuitos são suspeitos para empresas."
    },
    {
        pergunta: "O que fazer se receber SMS dizendo que seu cartão foi clonado?",
        opcoes: [
            "Clicar no link para verificar",
            "Responder o SMS com seus dados",
            "Ignorar e acessar o app oficial do banco",
            "Repassar para amigos"
        ],
        correta: 2,
        explicacao: "Nunca clique em links de SMS suspeitos. Sempre acesse o app oficial ou ligue para o banco."
    },
    {
        pergunta: "Com autenticação em dois fatores ativada, o que acontece se alguém descobrir sua senha?",
        opcoes: [
            "A pessoa consegue acessar sua conta normalmente",
            "A conta é bloqueada automaticamente",
            "A pessoa ainda precisa do segundo fator para entrar",
            "Todos os seus dados são apagados"
        ],
        correta: 2,
        explicacao: "O 2FA adiciona uma camada extra. Mesmo com a senha, o invasor precisa do segundo fator (SMS, app, etc)."
    },
    {
        pergunta: "Identifique os 3 principais sinais de golpe em uma ligação suspeita:",
        opcoes: [
            "Urgência, pedido de dados pessoais, pressão para agir rápido",
            "Horário da ligação, duração, volume da voz",
            "Sotaque regional, música de fundo, qualidade da linha",
            "Número conhecido, conversa longa, histórias detalhadas"
        ],
        correta: 0,
        explicacao: "Golpistas sempre usam: urgência falsa, solicitam dados/dinheiro, e pressionam para decisões rápidas."
    }
];

// Cenários do Simulador
const cenariosSimulador = [
    {
        id: 1,
        tipo: "whatsapp",
        titulo: "Mensagem no WhatsApp",
        cenario: `
            <div class="simulador-phone">
                <div class="phone-header">WhatsApp - Seu Filho</div>
                <div class="phone-messages">
                    <div class="message received">Mãe/Pai, preciso urgente de R$ 500</div>
                    <div class="message received">Tive um acidente, estou no hospital</div>
                    <div class="message received">Meu celular quebrou, pega esse número emprestado</div>
                    <div class="message received">PIX: 11987654321 - Maria Silva</div>
                    <div class="message received">Por favor não demora! 😰</div>
                </div>
            </div>
        `,
        pergunta: "O que você faria nesta situação?",
        opcoes: [
            "Fazer o PIX imediatamente",
            "Ligar para o número salvo do meu filho",
            "Pedir mais informações pelo WhatsApp",
            "Fazer o PIX mas com valor menor"
        ],
        respostaCorreta: 1,
        sinaisGolpe: [
            "Urgência excessiva",
            "Número diferente do conhecido",
            "Pedido de PIX para terceiros",
            "Pressão emocional"
        ],
        explicacao: "Este é o clássico golpe do parente. Sempre confirme ligando para o número que você tem salvo!"
    },
    {
        id: 2,
        tipo: "email",
        titulo: "E-mail do Banco",
        cenario: `
            <div class="email-interface">
                <div class="email-header">
                    <strong>De:</strong> seguranca@banco-brasil123.com<br>
                    <strong>Para:</strong> você<br>
                    <strong>Assunto:</strong> ⚠️ URGENTE: Conta será bloqueada
                </div>
                <div class="email-body">
                    <p>Prezado(a) cliente,</p>
                    <p>Detectamos atividade suspeita em sua conta. Para evitar o bloqueamento, 
                    clique no link abaixo e confirme seus dados em até 2 horas:</p>
                    <a href="#" class="fake-link">www.banco-brasil-seguro.net.br</a>
                    <p>Caso não atualize, sua conta será <strong>BLOQUEADA</strong> hoje!</p>
                    <p>Atenciosamente,<br>Equipe de Segurança</p>
                </div>
            </div>
        `,
        pergunta: "Como você reagiria a este e-mail?",
        opcoes: [
            "Clicar no link rapidamente",
            "Ignorar e acessar o site oficial do banco",
            "Responder o e-mail com meus dados",
            "Encaminhar para familiares"
        ],
        respostaCorreta: 1,
        sinaisGolpe: [
            "Domínio suspeito (banco-brasil123.com)",
            "Urgência artificial",
            "Link diferente do site oficial",
            "Ameaça de bloqueio"
        ],
        explicacao: "E-mail de phishing típico! Bancos nunca pedem dados por e-mail. Sempre acesse o site oficial digitando o endereço."
    },
    {
        id: 3,
        tipo: "ligacao",
        titulo: "Ligação do 'Banco'",
        cenario: `
            <div class="phone-call">
                <div class="call-header">📞 Ligação recebida</div>
                <div class="caller-info">
                    <div class="caller-name">Banco do Brasil</div>
                    <div class="caller-number">11 99999-9999</div>
                </div>
                <div class="call-transcript">
                    <p><strong>Pessoa:</strong> "Olá, aqui é João do Banco do Brasil, setor de segurança."</p>
                    <p><strong>Pessoa:</strong> "Detectamos movimentações suspeitas em sua conta."</p>
                    <p><strong>Pessoa:</strong> "Para confirmar que é você, preciso que me informe os últimos 4 dígitos do seu cartão e o código de segurança."</p>
                    <p><strong>Pessoa:</strong> "É só para validar sua identidade, é protocolo de segurança."</p>
                </div>
            </div>
        `,
        pergunta: "O que você deveria fazer?",
        opcoes: [
            "Fornecer os dados solicitados",
            "Desligar e ligar para o banco pelo número oficial",
            "Dar apenas os últimos 4 dígitos",
            "Pedir para ligar mais tarde"
        ],
        respostaCorreta: 1,
        sinaisGolpe: [
            "Pedido de dados por telefone",
            "Número não oficial",
            "Pressão por 'protocolo'",
            "Ligação não solicitada"
        ],
        explicacao: "Bancos NUNCA pedem dados por telefone! Sempre desligue e ligue você para o número oficial do banco."
    }
];

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    carregarProgresso();
    atualizarInterface();
});

// Funções de Aulas
function iniciarAula(numeroAula) {
    const modal = document.getElementById('aulaModal');
    const content = document.getElementById('aulaContent');
    
    content.innerHTML = aulas[numeroAula].conteudo;
    modal.style.display = 'block';
    
    // Marcar aula como em progresso
    const card = document.querySelector(`[data-aula="${numeroAula}"]`);
    card.classList.add('active');
    atualizarStatusAula(numeroAula, 'em-progresso', '⏳ Em progresso');
}

function respostaMiniTeste(aula, resultado) {
    const resultadoDiv = document.getElementById(`resultado-mini-${aula}`);
    if (resultado === 'certo') {
        resultadoDiv.innerHTML = '<div class="resultado acerto">✅ Correto! Você está aprendendo bem!</div>';
    } else {
        resultadoDiv.innerHTML = '<div class="resultado erro">❌ Ops! Releia o conteúdo e tente novamente.</div>';
    }
}

function concluirAula(numeroAula) {
    progressoUsuario.aulasCompletas.push(numeroAula);
    salvarProgresso();
    
    // Atualizar interface
    const card = document.querySelector(`[data-aula="${numeroAula}"]`);
    card.classList.remove('active');
    card.classList.add('completed');
    atualizarStatusAula(numeroAula, 'concluida', '✅ Concluída');
    
    // Desbloquear próxima aula
    const proximaAula = numeroAula + 1;
    if (proximaAula <= 3) {
        desbloquearAula(proximaAula);
    }
    
    // Verificar se pode desbloquear quiz
    if (progressoUsuario.aulasCompletas.length === 3) {
        desbloquearQuiz();
    }
    
    atualizarProgressoGeral();
    fecharModal();
    
    // Mostrar mensagem de parabéns
    alert(`🎉 Parabéns! Aula ${numeroAula} concluída com sucesso!`);
}

function desbloquearAula(numeroAula) {
    const btn = document.querySelector(`[data-aula="${numeroAula}"] .btn-aula`);
    btn.disabled = false;
    btn.textContent = 'Iniciar Aula';
    atualizarStatusAula(numeroAula, 'nao-iniciada', '🔓 Disponível');
}

function atualizarStatusAula(numeroAula, classe, texto) {
    const status = document.getElementById(`status-aula-${numeroAula}`);
    status.className = `aula-status ${classe}`;
    status.textContent = texto;
}

// Funções do Quiz
function desbloquearQuiz() {
    const btn = document.getElementById('btnIniciarQuiz');
    btn.disabled = false;
    btn.textContent = '🧠 Iniciar Quiz';
    btn.classList.remove('btn-quiz');
    btn.classList.add('btn-quiz-ativo');
}

function iniciarQuiz() {
    const modal = document.getElementById('quizModal');
    const content = document.getElementById('quizContent');
    
    let quizHTML = '<h2>🧠 Quiz: Identificação de Golpes</h2>';
    quizHTML += '<p>Responda todas as perguntas para testar seus conhecimentos:</p>';
    
    perguntasQuiz.forEach((pergunta, index) => {
        quizHTML += `
            <div class="quiz-question" id="pergunta-${index}">
                <h3>Pergunta ${index + 1}:</h3>
                <p>${pergunta.pergunta}</p>
                <div class="quiz-options">
                    ${pergunta.opcoes.map((opcao, i) => `
                        <div class="quiz-option" onclick="selecionarOpcao(${index}, ${i})">
                            ${opcao}
                        </div>
                    `).join('')}
                </div>
                <div class="quiz-feedback" id="feedback-${index}"></div>
            </div>
        `;
    });
    
    quizHTML += '<button class="btn-quiz" onclick="finalizarQuiz()" id="btnFinalizarQuiz">Finalizar Quiz</button>';
    
    content.innerHTML = quizHTML;
    modal.style.display = 'block';
}

let respostasQuiz = {};

function selecionarOpcao(perguntaIndex, opcaoIndex) {
    // Remove seleção anterior
    const perguntaDiv = document.getElementById(`pergunta-${perguntaIndex}`);
    perguntaDiv.querySelectorAll('.quiz-option').forEach(opt => {
        opt.classList.remove('selected');
    });
    
    // Adiciona nova seleção
    const opcaoSelecionada = perguntaDiv.querySelectorAll('.quiz-option')[opcaoIndex];
    opcaoSelecionada.classList.add('selected');
    
    respostasQuiz[perguntaIndex] = opcaoIndex;
}

function finalizarQuiz() {
    let pontuacao = 0;
    
    perguntasQuiz.forEach((pergunta, index) => {
        const perguntaDiv = document.getElementById(`pergunta-${index}`);
        const opcoes = perguntaDiv.querySelectorAll('.quiz-option');
        const feedback = document.getElementById(`feedback-${index}`);
        
        opcoes.forEach((opcao, i) => {
            if (i === pergunta.correta) {
                opcao.classList.add('correct');
            } else if (respostasQuiz[index] === i) {
                opcao.classList.add('incorrect');
            }
        });
        
        if (respostasQuiz[index] === pergunta.correta) {
            pontuacao++;
            feedback.innerHTML = `<div class="resultado acerto">✅ Correto! ${pergunta.explicacao}</div>`;
        } else {
            feedback.innerHTML = `<div class="resultado erro">❌ Incorreto. ${pergunta.explicacao}</div>`;
        }
    });
    
    progressoUsuario.quizCompleto = true;
    progressoUsuario.pontuacaoQuiz = pontuacao;
    salvarProgresso();
    
    const btnFinalizar = document.getElementById('btnFinalizarQuiz');
    btnFinalizar.textContent = `Quiz Finalizado - ${pontuacao}/${perguntasQuiz.length} pontos`;
    btnFinalizar.disabled = true;
    
    if (pontuacao >= 3) {
        setTimeout(() => {
            alert(`🎉 Parabéns! Você acertou ${pontuacao} de ${perguntasQuiz.length} perguntas! Simulador desbloqueado!`);
            desbloquearSimulador();
        }, 2000);
    } else {
        setTimeout(() => {
            alert(`📚 Você acertou ${pontuacao} de ${perguntasQuiz.length}. Revise as aulas e tente novamente!`);
        }, 2000);
    }
    
    atualizarProgressoGeral();
}

// Funções do Simulador
function desbloquearSimulador() {
    const btn = document.getElementById('btnIniciarSimulador');
    btn.disabled = false;
    btn.textContent = '🎭 Iniciar Simulador';
}

function iniciarSimulador() {
    const modal = document.getElementById('simuladorModal');
    const content = document.getElementById('simuladorContent');
    
    let simuladorHTML = '<h2>🎭 Simulador Interativo de Golpes</h2>';
    simuladorHTML += '<p>Vamos simular situações reais! Analise cada cenário e decida se é seguro ou suspeito:</p>';
    
    content.innerHTML = simuladorHTML;
    modal.style.display = 'block';
    
    mostrarProximoCenario(0);
}

let cenarioAtual = 0;
let resultadosSimulador = [];

function mostrarProximoCenario(index) {
    if (index >= cenariosSimulador.length) {
        finalizarSimulador();
        return;
    }
    
    const cenario = cenariosSimulador[index];
    const content = document.getElementById('simuladorContent');
    
    const cenarioHTML = `
        <div class="simulador-scenario" id="cenario-${index}">
            <div class="scenario-header">
                <span class="scenario-icon">📱</span>
                <span class="scenario-title">${cenario.titulo}</span>
            </div>
            
            ${cenario.cenario}
            
            <p><strong>${cenario.pergunta}</strong></p>
            
            <div class="scenario-actions">
                ${cenario.opcoes.map((opcao, i) => `
                    <button class="btn-scenario ${i === cenario.respostaCorreta ? 'btn-desconfiar' : 'btn-confiar'}" 
                            onclick="responderCenario(${index}, ${i})">
                        ${opcao}
                    </button>
                `).join('')}
            </div>
            
            <div class="scenario-result" id="resultado-cenario-${index}"></div>
        </div>
    `;
    
    content.innerHTML = content.innerHTML + cenarioHTML;
}

function responderCenario(cenarioIndex, respostaIndex) {
    const cenario = cenariosSimulador[cenarioIndex];
    const resultadoDiv = document.getElementById(`resultado-cenario-${cenarioIndex}`);
    const acertou = respostaIndex === cenario.respostaCorreta;
    
    resultadosSimulador.push({
        cenario: cenarioIndex,
        acertou: acertou
    });
    
    let resultadoHTML = '';
    
    if (acertou) {
        resultadoHTML = `
            <div class="resultado acerto">
                <h4>✅ Excelente! Você identificou corretamente!</h4>
                <p><strong>Sinais de golpe identificados:</strong></p>
                <ul>
                    ${cenario.sinaisGolpe.map(sinal => `<li>${sinal}</li>`).join('')}
                </ul>
                <p><strong>Explicação:</strong> ${cenario.explicacao}</p>
            </div>
        `;
    } else {
        resultadoHTML = `
            <div class="resultado erro">
                <h4>❌ Atenção! Esta situação era suspeita!</h4>
                <p><strong>Sinais que você deveria ter notado:</strong></p>
                <ul>
                    ${cenario.sinaisGolpe.map(sinal => `<li>${sinal}</li>`).join('')}
                </ul>
                <p><strong>Explicação:</strong> ${cenario.explicacao}</p>
            </div>
        `;
    }
    
    resultadoDiv.innerHTML = resultadoHTML;
    
    // Desabilitar botões
    const botoes = document.querySelectorAll(`#cenario-${cenarioIndex} .btn-scenario`);
    botoes.forEach(btn => btn.disabled = true);
    
    // Mostrar próximo cenário após 3 segundos
    setTimeout(() => {
        mostrarProximoCenario(cenarioIndex + 1);
    }, 3000);
}

function finalizarSimulador() {
    const acertos = resultadosSimulador.filter(r => r.acertou).length;
    const total = resultadosSimulador.length;
    
    progressoUsuario.simuladorCompleto = true;
    salvarProgresso();
    
    const content = document.getElementById('simuladorContent');
    content.innerHTML += `
        <div class="simulador-final">
            <h2>🏆 Simulador Concluído!</h2>
            <div class="resultado-final ${acertos >= 2 ? 'acerto' : 'erro'}">
                <h3>Sua pontuação: ${acertos}/${total}</h3>
                ${acertos >= 2 ? 
                    '<p>🎉 Parabéns! Você está bem preparado para identificar golpes!</p>' :
                    '<p>📚 Continue estudando! Revise as aulas para melhorar sua proteção.</p>'
                }
            </div>
            <button class="btn-simulador" onclick="fecharSimuladorModal()">Finalizar</button>
        </div>
    `;
    
    atualizarProgressoGeral();
}

// Funções de Modal
function fecharModal() {
    document.getElementById('aulaModal').style.display = 'none';
}

function fecharQuizModal() {
    document.getElementById('quizModal').style.display = 'none';
}

function fecharSimuladorModal() {
    document.getElementById('simuladorModal').style.display = 'none';
}

// Funções de Progresso
function atualizarProgressoGeral() {
    const totalItens = 6; // 3 aulas + 1 quiz + 1 simulador + 1 extra
    let itensCompletos = progressoUsuario.aulasCompletas.length;
    
    if (progressoUsuario.quizCompleto) itensCompletos++;
    if (progressoUsuario.simuladorCompleto) itensCompletos++;
    
    const porcentagem = Math.round((itensCompletos / totalItens) * 100);
    
    document.getElementById('progressFill').style.width = porcentagem + '%';
    document.getElementById('progressText').textContent = porcentagem + '% Completo';
}

function atualizarInterface() {
    // Atualizar status das aulas
    progressoUsuario.aulasCompletas.forEach(aula => {
        const card = document.querySelector(`[data-aula="${aula}"]`);
        card.classList.add('completed');
        atualizarStatusAula(aula, 'concluida', '✅ Concluída');
    });
    
    // Desbloquear próxima aula disponível
    const proximaAula = progressoUsuario.aulasCompletas.length + 1;
    if (proximaAula <= 3) {
        desbloquearAula(proximaAula);
    }
    
    // Verificar se pode desbloquear quiz
    if (progressoUsuario.aulasCompletas.length === 3) {
        desbloquearQuiz();
    }
    
    // Verificar se pode desbloquear simulador
    if (progressoUsuario.quizCompleto && progressoUsuario.pontuacaoQuiz >= 3) {
        desbloquearSimulador();
    }
    
    atualizarProgressoGeral();
}

// Funções de Persistência
function salvarProgresso() {
    localStorage.setItem('progressoSimulados', JSON.stringify(progressoUsuario));
}

function carregarProgresso() {
    const progressoSalvo = localStorage.getItem('progressoSimulados');
    if (progressoSalvo) {
        progressoUsuario = JSON.parse(progressoSalvo);
    }
}

// Event Listeners para fechar modais clicando fora
window.onclick = function(event) {
    const modals = ['aulaModal', 'quizModal', 'simuladorModal'];
    modals.forEach(modalId => {
        const modal = document.getElementById(modalId);
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}