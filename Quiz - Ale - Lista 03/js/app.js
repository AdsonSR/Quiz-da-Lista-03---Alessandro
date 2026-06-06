const questions = [
    {
        q: "Os três elementos básicos constitutivos de qualquer Sistema de Informação (SI) corporativo são as Pessoas (Peopleware), os Processos de negócio e a Tecnologia (Hardware/Software).",
        answer: true,
        rationale: "Verdadeiro. Os materiais definem o SI como o arranjo integrado de pessoas, processos organizacionais e tecnologias de suporte."
    },
    {
        q: "No ciclo lógico de processamento de um SI, a etapa de 'Feedback' consiste no recolhimento inicial de dados brutos do ambiente antes que eles sejam computados.",
        answer: false,
        rationale: "Falso. O recolhimento de dados brutos é a Entrada (Input). O Feedback serve para monitorar e ajustar o comportamento do sistema com base nas saídas obtidas."
    },
    {
        q: "O ERP (Enterprise Resource Planning) atua como uma plataforma modular com o objetivo primordial de integrar as diversas áreas funcionais de uma empresa em um banco de dados unificado.",
        answer: true,
        rationale: "Verdadeiro. A principal característica de um ERP é quebrar os silos de informação, integrando contabilidade, logística, RH e vendas."
    },
    {
        q: "Sistemas do tipo CRM (Customer Relationship Management) concentram suas funcionalidades exclusivamente no planejamento operacional de manufatura e controle do chão de fábrica.",
        answer: false,
        rationale: "Falso. O foco do CRM é gerenciar e analisar os pontos de contato, relacionamento e automação de força de vendas com o cliente final."
    },
    {
        q: "Os sistemas OLTP são voltados ao processamento de transações diárias em tempo real, enquanto os sistemas OLAP realizam consultas e análises profundas de grandes bases de dados históricos para fins estratégicos.",
        answer: true,
        rationale: "Verdadeiro. OLTP cuida da operação rápida do dia a dia (ex: vendas); OLAP lida com mineração e cubos analíticos para suporte à decisão."
    },
    {
        q: "Controladores Lógicos Programáveis (PLCs/CLPs) e os sistemas SCADA atuam na camada de automação industrial e controle direto de variáveis de processos físicos de plantas industriais.",
        answer: true,
        rationale: "Verdadeiro. Eles compõem a base dos sistemas operacionais industriais que monitoram chão de fábrica em tempo real."
    },
    {
        q: "Na hierarquia tradicional da modelagem de dados corporativos, a menor unidade de dados existente é chamada de 'Registro'.",
        answer: false,
        rationale: "Falso. A menor unidade de dado é o Bit (seguido por Byte, Campo, Registro, Arquivo e Banco de Dados)."
    },
    {
        q: "A sequência correta e ascendente da Pirâmide do Conhecimento é constituída por: Dados (base), Informação, Conhecimento e Inteligência/BI (topo).",
        answer: true,
        rationale: "Verdadeiro. Os dados ganham contexto para virar informação; a informação gera ação/experiência para virar conhecimento, culminando em decisões inteligentes."
    },
    {
        q: "Dados brutos, de forma isolada, já possuem significado interpretado de prontidão e contexto explícito, sendo suficientes para a imediata tomada de decisões estratégicas de alta complexidade.",
        answer: false,
        rationale: "Falso. Dados brutos são apenas registros soltos (ex: números ou códigos). Eles precisam ser processados e estruturados para que ganhem significado (informação)."
    },
    {
        q: "No contexto de Business Intelligence (BI), o termo ETL refere-se ao processo crítico de Extração (Extract), Transformação (Transform) e Carga (Load) de dados.",
        answer: true,
        rationale: "Verdadeiro. O processo ETL prepara, limpa e padroniza dados vindos de múltiplas fontes transacionais para inseri-los em um Data Warehouse ou repositório analítico."
    },
    {
        q: "Os KPIs (Key Performance Indicators) medem o alcance das metas estratégicas de longo prazo, enquanto os KPGs (Key Goal Indicators) medem a eficiência operacional de curto prazo dos processos.",
        answer: false,
        rationale: "Falso. A lógica está invertida. Os KPIs medem o desempenho do processo (como as coisas estão operando); os KPGs rastreiam se os objetivos finais de negócio foram alcançados."
    },
    {
        q: "O conceito de 'sistemas legados' descreve as tecnologias mais inovadoras e disruptivas baseadas em nuvem que acabaram de ser adquiridas no mercado por uma startup.",
        answer: false,
        rationale: "Falso. Sistemas legados são aplicações e hardwares antigos, muitas vezes obsoletos, mas que continuam operando por serem vitais ou complexos demais de substituir."
    },
    {
        q: "O gerenciamento visual de indicadores em painéis corporativos interativos e de fácil compreensão imediata é conceitualmente conhecido como 'gestão à vista' ou Dashboards.",
        answer: true,
        rationale: "Verdadeiro. O objetivo é disponibilizar métricas cruciais de maneira transparente e rápida para todos os tomadores de decisão envolvidos."
    },
    {
        q: "A Gestão do Conhecimento (KM) foca prioritariamente no descarte acelerado de arquivos digitais para economizar armazenamento de servidores locais da Diretoria de TI.",
        answer: false,
        rationale: "Falso. A KM atua no mapeamento, captura, retenção e compartilhamento do capital intelectual e know-how explícito e tácito dentro da empresa."
    },
    {
        q: "A adoção de uma Infraestrutura Tradicional (Local/On-Premise) de TI exige grandes despesas iniciais de capital (CapEx) voltadas à compra de servidores físicos, roteadores e instalações dedicadas.",
        answer: true,
        rationale: "Verdadeiro. A infraestrutura tradicional requer alto investimento antes da operação iniciar, além de custos com manutenção física e riscos de obsolescência rápida."
    },
    {
        q: "No modelo econômico e operacional de Computação em Nuvem do tipo SaaS (Software as a Service), a empresa adquire licenças físicas vitalícias e se responsabiliza por fazer patches e updates manuais em seus servidores locais.",
        answer: false,
        rationale: "Falso. No SaaS, o software é hospedado na nuvem do provedor e consumido como um serviço/assinatura pela web, sendo que a infraestrutura e atualizações ficam totalmente a cargo do fornecedor."
    },
    {
        q: "A virtualização é um mecanismo estrutural della computação em nuvem que viabiliza a execução simultânea de múltiplos sistemas operacionais e servidores virtuais isolados dentro de uma única máquina física.",
        answer: true,
        rationale: "Verdadeiro. A virtualização maximiza a eficiência de hardware, permitindo particionar e compartilhar a capacidade do servidor de maneira dinâmica."
    },
    {
        q: "As redes locais estruturadas para cobrir apenas os escritórios localizados dentro de um único andar de um prédio comercial são classificadas como WAN (Wide Area Network).",
        answer: false,
        rationale: "Falso. Redes de curto alcance local são LAN (Local Area Network). Redes WAN cobrem extensas áreas geográficas como países e continentes."
    },
    {
        q: "O BPM (Business Process Management) representa uma prática gerencial disciplinada utilizada para desenhar, modelar, executar, controlar e otimizar processos de negócios ponta a ponta.",
        answer: true,
        rationale: "Verdadeiro. O BPM foca na melhoria contínua da eficiência de fluxos operacionais internos das organizações."
    },
    {
        q: "Nos materiais didáticos, o ecossistema chamado Base27 é referenciado como um importante Hub de Inovação tecnológica situado no Espírito Santo.",
        answer: true,
        rationale: "Verdadeiro. O Base27 atua como centro integrador de startups, empresas e academia no ambiente corporativo regional capixaba."
    },
    {
        q: "A inteligência artificial generativa e os LLMs atuam unicamente no reparo mecânico de cabos de rede e hardware, sendo incapazes de atuar na automação inteligente ou no suporte à decisão gerencial.",
        answer: false,
        rationale: "Falso. Eles estão revolucionando a automação de processos, geração de códigos, análise preditiva e interação inteligente via agentes dentro das corporações."
    },
    {
        q: "A ferramenta de inteligência artificial EvaGPT é documentada nas apresentações como um caso real de agente inteligente corporativo projetado para automação inteligente.",
        answer: true,
        rationale: "Verdadeiro. Trata-se de um exemplo prático de aplicação de IA avançada adaptada para orquestrar fluxos de informações e automações empresariais."
    },
    {
        q: "Conforme abordado no Texto Base 1, o controle gerencial das informações é considerado secundário e irrelevante, já que a competitividade das empresas modernas depende apenas de fatores puramente macroeconômicos.",
        answer: false,
        rationale: "Falso. O Texto Base 1 reforça que o domínio estruturado da informação é a chave crítica indispensável para a competitividade em mercados dinâmicos."
    },
    {
        q: "O Texto Base 2 detalha que as empresas que buscam alta lucratividade e sobrevivência no mercado precisam adotar uma postura de inovação contínua de seus sistemas de forma sustentável.",
        answer: true,
        rationale: "Verdadeiro. Inovar em infraestrutura e em lógica operacional é vital para assegurar fontes rentáveis de crescimento a longo prazo."
    },
    {
        q: "Os antigos CPDs (Centros de Processamento de Dados) das décadas de 1970/1980 eram altamente caracterizados pela descentralização operacional completa e autonomia total dada aos usuários nas pontas.",
        answer: false,
        rationale: "Falso. Os CPDs eram centralizados, rígidos e focados essencialmente no processamento em lotes (batch), mantendo os dados sob estrito controle isolado de poucos técnicos."
    },
    {
        q: "A mineração de dados (Data Mining) envolve a aplicação de algoritmos em grandes volumes de dados (Big Data) com o propósito específico de revelar padrões ocultos, tendências ou regras de comportamento de mercado.",
        answer: true,
        rationale: "Verdadeiro. É uma vertente de BI avançada que extrai conhecimento implícito valioso de repositórios massivos de dados corporativos."
    },
    {
        q: "O modelo econômico de computação em nuvem permite converter custos operacionais rígidos de capital (CapEx) em custos sob demanda baseados no consumo operacional (OpEx).",
        answer: true,
        rationale: "Verdadeiro. Em vez de comprar e imobilizar dinheiro em máquinas (CapEx), a empresa paga pelo uso mensal da infraestrutura elástica como despesa operacional (OpEx)."
    },
    {
        q: "A Governança de TI cuida apenas da limpeza de poeira nos gabinetes dos servidores e computadores, não possuindo correlação alguma com segurança de dados, diretrizes éticas ou conformidade com legislações.",
        answer: false,
        rationale: "Falso. Governança de TI envolve todo o alinhamento estratégico da TI ao negócio, gerenciamento de riscos, políticas rígidas de segurança da informação, ética e conformidade legal."
    },
    {
        q: "Sistemas do tipo MES (Manufacturing Execution System) operam na camada que conecta as diretrizes macro de negócios do ERP ao controle físico de sensores e máquinas do chão de fábrica.",
        answer: true,
        rationale: "Verdadeiro. O MES faz o gerenciamento em tempo real da execução da manufatura, intermediando o plano corporativo com as máquinas operacionais."
    },
    {
        q: "A técnica de Benchmarking consiste em avaliar e mensurar os processos e indicadores de TI internos de uma empresa comparando-os com as melhores práticas documentadas no mercado e em concorrentes de ponta.",
        answer: true,
        rationale: "Verdadeiro. O objetivo do benchmarking é identificar oportunidades de melhoria contínua a partir de padrões externos de excelência de mercado."
    }
];

let currentQuestionIndex = 0;
let score = 0;
let answered = false;

const questionTextEl = document.getElementById("question-text");
const btnTrue = document.getElementById("btn-true");
const btnFalse = document.getElementById("btn-false");
const feedbackBox = document.getElementById("feedback-box");
const nextBtn = document.getElementById("next-btn");
const progressBar = document.getElementById("progress-bar");
const questionNumberEl = document.getElementById("question-number");
const scoreCounterEl = document.getElementById("score-counter");

function loadQuestion() {
    answered = false;
    nextBtn.disabled = true;
    
    // Reset buttons style
    btnTrue.classList.remove("selected");
    btnTrue.disabled = false;
    btnFalse.classList.remove("selected");
    btnFalse.disabled = false;
    
    // Hide feedback
    feedbackBox.style.display = "none";
    feedbackBox.className = "feedback";

    // Update progress metadata
    const total = questions.length;
    const currentNum = currentQuestionIndex + 1;
    questionNumberEl.innerText = `Pergunta ${currentNum} de ${total}`;
    progressBar.style.width = `${(currentQuestionIndex / total) * 100}%`;

    // Set text
    questionTextEl.innerText = `${currentNum}. ${questions[currentQuestionIndex].q}`;
}

function submitAnswer(userChoice) {
    if (answered) return;
    answered = true;

    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = userChoice === currentQuestion.answer;

    if (isCorrect) {
        score++;
        scoreCounterEl.innerText = `Acertos: ${score}`;
        feedbackBox.innerText = `✅ Correto! ${currentQuestion.rationale}`;
        feedbackBox.classList.add("correct");
    } else {
        feedbackBox.innerText = `❌ Incorreto. ${currentQuestion.rationale}`;
        feedbackBox.classList.add("incorrect");
    }

    // Highlight selected
    if (userChoice) {
        btnTrue.classList.add("selected");
    } else {
        btnFalse.classList.add("selected");
    }

    // Disable options
    btnTrue.disabled = true;
    btnFalse.disabled = true;

    // Show feedback and enable Next
    feedbackBox.style.display = "block";
    nextBtn.disabled = false;

    if (currentQuestionIndex === questions.length - 1) {
        nextBtn.innerText = "Finalizar Quiz";
    }
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById("quiz-screen").style.display = "none";
    const resultScreen = document.getElementById("result-screen");
    resultScreen.style.display = "block";

    document.getElementById("score-circle").innerHTML = `${score}<span>de ${questions.length}</span>`;

    const msgEl = document.getElementById("performance-message");
    const descEl = document.getElementById("performance-desc");

    const percentage = (score / questions.length) * 100;

    if (percentage >= 85) {
        msgEl.innerText = "🏆 Desempenho Excelente!";
        descEl.innerText = "Parabéns! Você demonstrou domínio completo sobre os conceitos de sistemas organizacionais, indicadores, infraestrutura local e em nuvem e as novas tendências de TI do futuro.";
    } else if (percentage >= 60) {
        msgEl.innerText = "👍 Muito Bom Trabalho!";
        descEl.innerText = "Você obteve uma ótima pontuação. Releia os pontos de justificativa das questões incorretas para fixar de vez conceitos específicos de automação e métricas corporativas.";
    } else {
        msgEl.innerText = "📚 Boa Oportunidade para Revisão!";
        descEl.innerText = "A tecnologia da computação possui muitos termos técnicos integrados. Recomendamos revisar o material de slides (Material 3) e os tópicos base para reforçar o entendimento sobre os eixos conceituais.";
    }
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    scoreCounterEl.innerText = `Acertos: 0`;
    nextBtn.innerText = "Próxima Pergunta";
    document.getElementById("result-screen").style.display = "none";
    document.getElementById("quiz-screen").style.display = "block";
    loadQuestion();
}

// Inicializar o quiz na primeira carga
window.onload = loadQuestion;