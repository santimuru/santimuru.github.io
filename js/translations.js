const translations = {
  en: {
    'page.title': 'Santiago Martinez | Data Analyst',
    'page.lang': 'en',

    'nav.name': 'Santiago Martinez',
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.education': 'Education',
    'nav.skills': 'Skills',
    'nav.certifications': 'Certifications',

    'about.subtitle': 'Data Analyst · Tokyo, Japan',
    'about.cv.download': 'Download CV',
    'connect.title': 'Contact',
    'connect.sub': 'LinkedIn is the best way to reach me.',
    'connect.button': 'LinkedIn',
    'about.bio1': "Economist by training, data analyst by trade. For the past 6+ years I've worked across telecom, e-commerce and consulting, building dashboards, predictive models and the data pipelines that feed them.",
    'about.bio2': 'Currently in Tokyo as Lead BI Analyst at Montecable -- including building an LLM system that audits ~1,500 customer calls per day. The specific numbers are in the Experience section below.',

    'section.experience': 'Experience',
    'section.projects': 'Projects',
    'section.education': 'Education',
    'section.skills': 'Skills',
    'section.certifications': 'Certifications & Impact',

    'exp1.title': 'Lead Business Intelligence Analyst',
    'exp1.company': 'Montecable',
    'exp1.dates': 'July 2025 – Present',
    'exp1.badge1': '$20K saved',
    'exp1.badge2': 'BI Migration',
    'exp1.badge3': 'LLM / GPT-4o',
    'exp1.b1': '<strong>$20K/year saved</strong> -- led full migration from Qlik Sense to Power BI, rebuilding data models and reporting pipelines on Azure cloud',
    'exp1.b2': '<strong>~1,500 calls/day audited</strong> -- designed and deployed an LLM-powered call-quality system (OpenAI GPT-4o) that replaced a manual QA process covering less than 2% of volume, optimized to ~$8/day via prompt caching after 7 prompt iterations',
    'exp1.b3': 'Drove data-driven culture adoption by aligning metric definitions across departments and positioning the BI team as the central analytics reference',

    'exp2.title': 'Fraud Prevention Senior Analyst',
    'exp2.company': 'Mercado Libre',
    'exp2.dates': 'July 2024 – June 2025',
    'exp2.badge1': '$310K+ prevented',
    'exp2.badge2': 'Fraud Analytics',
    'exp2.b1': '<strong>$310K+ in annual losses prevented</strong> -- built classification, time-series, and graph-analysis models in Python to detect fraud patterns across Mercado Libre\'s delivery network',
    'exp2.b2': 'Designed Tableau and Looker dashboards translating model output into actionable signals for operations and engineering teams',
    'exp2.b3': 'Presented findings to senior management and regional directors, translating analytical results into concrete risk mitigation strategies',

    'exp3.title': 'Senior Business Intelligence Analyst',
    'exp3.company': 'Montecable',
    'exp3.dates': 'January 2021 – July 2024',
    'exp3.badge1': '13% churn reduction',
    'exp3.badge2': '$113K revenue uplift',
    'exp3.badge3': 'XGBoost · MLOps',
    'exp3.b1': 'Designed and maintained dashboards for customer behavior tracking, commercial KPI monitoring and business performance reporting',
    'exp3.b2': '<strong>13% churn reduction, $113K incremental revenue</strong> -- developed XGBoost churn-prediction models with Platt calibration and CLV-based ROI prioritization',
    'exp3.b3': 'Automated monthly scoring pipeline covering ~33,000 accounts, with versioned model artifacts, PSI drift monitoring, and A/B testing',

    'exp4.title': 'Data Analyst',
    'exp4.company': 'Tata Consultancy Services',
    'exp4.dates': 'October 2019 – January 2021',
    'exp4.b1': 'Migrated operational reporting from Excel to interactive dashboards, enabling deeper workflow analysis and supporting data-driven improvements across teams',

    'exp5.title': 'Junior Researcher',
    'exp5.company': 'Willis Towers Watson',
    'exp5.dates': 'January 2019 – July 2019',
    'exp5.b1': 'Contributed to research projects at a <strong>global insurance and actuarial consultancy</strong>, collecting and analyzing structured financial and workforce datasets for comparative reports on pension obligations and workforce metrics across companies',

    'proj4.title': 'Telecom Customer Churn · Survival Analysis',
    'proj4.context': 'Open Source · IBM Telco Dataset · lifelines',
    'proj4.demo': 'Live Demo',
    'proj4.desc': 'Survival analysis (Kaplan-Meier + Cox PH) paired with an <strong>XGBoost classifier (AUC 0.842)</strong> and SHAP explanations across 6 interactive sections including a churn simulator and revenue calculator. Built on the same techniques applied in production at Montecable, where the model drove a <strong>13% churn reduction</strong>.',

    'proj5.title': 'Customer Review Intelligence',
    'proj5.context': 'Open Source · Yelp Review Full Dataset · HuggingFace',
    'proj5.demo': 'Live Demo',
    'proj5.desc': 'NLP pipeline benchmarking 4 methods — from TF-IDF to LLMs — for detecting <strong>churn risk in review text</strong>, with the best model reaching <strong>AUC 0.981</strong>. Includes SHAP text explanations, a live analyzer, and <strong>Google Gemini API</strong> for structured complaint categorization.',

    'proj6.title': 'Customer Lifetime Value Prediction',
    'proj6.context': 'Open Source · UCI Online Retail Dataset',
    'proj6.demo': 'Live Demo',
    'proj6.desc': '<strong>BG/NBD + Gamma-Gamma</strong> probabilistic models predict individual CLV with RFM segmentation, cohort heatmaps, and a customer simulator. Projects <strong>£8M+ in 12-month CLV</strong> across 2,790 customers, with the top 20% accounting for over 65% of total value.',

    'proj7.title': 'Japan Real Estate Intelligence',
    'proj7.context': 'Open Source · Modeled after MLIT Public Statistics',
    'proj7.demo': 'Live Demo',
    'proj7.desc': 'Interactive dashboard covering ~50K transactions across Tokyo\'s <strong>23 Special Wards</strong> (2020–2024), with a Pydeck 3D map, Plotly trend charts, and a <strong>k-NN price estimator</strong> with P10/P50/P90 ranges. Architected for live connection to the <strong>MLIT Real Estate Information Library API</strong>.',

    'proj8.title': 'Life Insurance Lapse Analytics · Japan Market',
    'proj8.context': 'Python · scikit-learn · SHAP · ECharts · Insurance / Financial Analytics',
    'proj8.demo': 'Live Demo',
    'proj8.desc': 'End-to-end lapse prediction and customer segmentation for the Japanese life insurance market. Gradient boosting and logistic regression models with <strong>k-means clustering and SHAP explanations</strong>, plus a fairness audit. Delivered as a single-page interactive report built with <strong>ECharts</strong>. Market data is real and cited; the policy book is synthetic and declared.',

    'proj1.title': 'Customer Churn Prediction',
    'proj1.context': 'Telecom · Montecable',
    'proj1.desc': 'End-to-end churn prediction pipeline for a 100K+ subscriber base. Combines <strong>ML classification models</strong> (logistic regression, gradient boosting) with a Power BI dashboard that surfaces at-risk segments for the retention team.',

    'proj2.title': 'Logistics Fraud Detection',
    'proj2.context': 'E-commerce · Mercado Libre',
    'proj2.desc': '<strong>Anomaly detection system</strong> built on shipment and operational data to identify fraud patterns across a large-scale logistics network. Contributed to over $310K in prevented annual losses.',

    'proj3.title': 'BI Platform Migration Playbook',
    'proj3.context': 'Telecom · Montecable',
    'proj3.desc': 'Documentation and architecture for migrating an enterprise BI ecosystem from Qlik Sense to Power BI, including <strong>data model redesign</strong>, DAX patterns, and a department-wide metrics dictionary.',

    'projects.note': 'Projects are example implementations built with open-source data to protect the privacy of real work datasets.',

    'edu.institution': 'Universidad Católica del Uruguay',
    'edu.degree': "Bachelor's Degree in Economics",
    'edu.location': 'Montevideo, Uruguay',
    'edu.notes': 'Merit-based scholarship for academic excellence · Elective coursework in Big Data and Financial Crimes.',
    'edu.dates': 'Graduated December 2023',

    'skills.data.title': 'Data & Analytics',
    'skills.tools.title': 'Tools & Platforms',
    'skills.tools.list': 'Power BI · Tableau · Qlik Sense · Looker Studio · Alteryx',
    'skills.languages.list': 'Python · R · SQL · BigQuery · Excel',
    'skills.method.title': 'Technical Expertise',
    'skills.m1': 'LLM application development (OpenAI GPT-4o) · Prompt engineering · XGBoost · Time-series analysis · Graph analysis · MLOps (drift monitoring, versioned artifacts, A/B testing)',
    'skills.m2': 'KPI Design & Dashboard Architecture',
    'skills.m3': 'Data Pipeline Design & BI Migration',
    'skills.m4': 'Agile & Six Sigma',
    'skills.lang.title': 'Languages',
    'skills.lang.1': 'Spanish — Native',
    'skills.lang.2': 'English — C1 · Cambridge Certified',
    'skills.lang.3': 'Japanese — Conversational',

    'cert.sub1': 'Certifications',
    'cert.sub2': 'Key Impact',
    'cert.1': 'C1 Business Higher · Cambridge English',
    'cert.2': 'Financial Markets · Yale University / Coursera',
    'cert.3': 'QlikView Business Analyst',
    'cert.4': 'Agile Methodologies',
    'cert.5': 'Six Sigma',
    'impact.1.num': '$310K+',
    'impact.1.desc': 'in annual fraud losses prevented at Mercado Libre',
    'impact.2.num': '$113K',
    'impact.2.desc': 'in incremental annual revenue through churn reduction at Montecable',
    'impact.3.num': '13%',
    'impact.3.desc': 'reduction in annual customer churn via predictive ML models',
    'impact.4.num': '$20K',
    'impact.4.desc': 'in annual savings from BI platform migration (Qlik Sense → Power BI)',
    'impact.5.num': '6+',
    'impact.5.desc': 'years of experience across telecom, e-commerce, and consulting',
  },

  es: {
    'page.title': 'Santiago Martinez | Data Analyst',
    'page.lang': 'es',

    'nav.name': 'Santiago Martinez',
    'nav.about': 'Sobre mí',
    'nav.experience': 'Experiencia',
    'nav.projects': 'Proyectos',
    'nav.education': 'Formación',
    'nav.skills': 'Habilidades',
    'nav.certifications': 'Certificaciones',

    'about.subtitle': 'Data Analyst · Tokio, Japón',
    'about.cv.download': 'Descargar CV',
    'connect.title': 'Contacto',
    'connect.sub': 'LinkedIn es la mejor forma de contactarme.',
    'connect.button': 'LinkedIn',
    'about.bio1': 'Economista de formación, analista de datos de oficio. En los últimos 6 años trabajé en telecomunicaciones, e-commerce y consultoría, construyendo dashboards, modelos predictivos y los pipelines de datos que los alimentan.',
    'about.bio2': 'Hoy en Tokio como Analista BI Líder en Montecable -- incluyendo la construcción de un sistema LLM que audita ~1.500 llamadas de clientes por día. Los números concretos están en la sección Experiencia.',

    'section.experience': 'Experiencia',
    'section.projects': 'Proyectos',
    'section.education': 'Formación',
    'section.skills': 'Habilidades',
    'section.certifications': 'Certificaciones e Impacto',

    'exp1.title': 'Analista BI Líder',
    'exp1.company': 'Montecable',
    'exp1.dates': 'Julio 2025 – Presente',
    'exp1.badge1': '$20K ahorrados',
    'exp1.badge2': 'Migración BI',
    'exp1.badge3': 'LLM / GPT-4o',
    'exp1.b1': '<strong>$20K/año ahorrados</strong> -- lideré la migración completa de Qlik Sense a Power BI, reconstruyendo modelos de datos y pipelines de reporting en la nube de Azure',
    'exp1.b2': '<strong>~1.500 llamadas/día auditadas</strong> -- diseñé e implementé un sistema de auditoría de calidad basado en LLM (OpenAI GPT-4o) que reemplazó un proceso manual con cobertura menor al 2%, optimizado a ~$8/día via prompt caching tras 7 versiones de prompt',
    'exp1.b3': 'Impulsé la adopción de una cultura basada en datos alineando definiciones entre áreas y posicionando al equipo de BI como referente central de analítica',

    'exp2.title': 'Analista Senior de Prevención de Fraude',
    'exp2.company': 'Mercado Libre',
    'exp2.dates': 'Julio 2024 – Junio 2025',
    'exp2.badge1': '$310K+ prevenidos',
    'exp2.badge2': 'Analítica de Fraude',
    'exp2.b1': '<strong>$310K+ en pérdidas anuales prevenidas</strong> -- desarrollé modelos de clasificación, series de tiempo y análisis de grafos en Python para detectar patrones de fraude en la red de delivery de Mercado Libre',
    'exp2.b2': 'Diseñé dashboards en Tableau y Looker que transformaron el output de los modelos en señales accionables para los equipos de operaciones e ingeniería',
    'exp2.b3': 'Presenté hallazgos y recomendaciones a management senior y directores regionales, traduciendo resultados analíticos en estrategias concretas de mitigación de riesgo',

    'exp3.title': 'Analista BI Senior',
    'exp3.company': 'Montecable',
    'exp3.dates': 'Enero 2021 – Julio 2024',
    'exp3.badge1': '13% reducción de churn',
    'exp3.badge2': '$113K de ingresos extra',
    'exp3.badge3': 'XGBoost · MLOps',
    'exp3.b1': 'Diseñé y mantuve dashboards para el seguimiento del comportamiento de clientes, monitoreo de KPIs comerciales y reporting de desempeño de negocio',
    'exp3.b2': '<strong>13% de reducción de churn, $113K de ingresos extra</strong> -- desarrollé modelos XGBoost de predicción de churn con calibración de Platt y priorización ROI basada en CLV',
    'exp3.b3': 'Pipeline de scoring mensual automatizado sobre ~33.000 cuentas, con artefactos de modelo versionados, monitoreo de drift PSI y A/B testing',

    'exp4.title': 'Analista de Datos',
    'exp4.company': 'Tata Consultancy Services',
    'exp4.dates': 'Octubre 2019 – Enero 2021',
    'exp4.b1': 'Migré el reporting operativo de Excel a dashboards interactivos, habilitando un análisis más profundo de los flujos de trabajo y apoyando mejoras basadas en datos en los equipos',

    'exp5.title': 'Investigador Junior',
    'exp5.company': 'Willis Towers Watson',
    'exp5.dates': 'Enero 2019 – Julio 2019',
    'exp5.b1': 'Contribuí a proyectos de investigación en una <strong>consultora global de seguros y actuaría</strong>, recopilando y analizando datasets financieros y de fuerza laboral para informes comparativos sobre obligaciones de pensiones y métricas de workforce entre empresas',

    'proj4.title': 'Churn en Telecom · Análisis de Supervivencia',
    'proj4.context': 'Open Source · IBM Telco Dataset · lifelines',
    'proj4.demo': 'Demo en vivo',
    'proj4.desc': 'Análisis de supervivencia (Kaplan-Meier + Cox PH) combinado con un <strong>clasificador XGBoost (AUC 0.842)</strong> y explicaciones SHAP en 6 secciones interactivas, incluyendo simulador de churn y calculadora de ingresos. Construido sobre las mismas técnicas aplicadas en producción en Montecable, donde el modelo logró una <strong>reducción del 13% en el churn</strong>.',

    'proj5.title': 'Inteligencia de Reseñas de Clientes',
    'proj5.context': 'Open Source · Yelp Review Full Dataset · HuggingFace',
    'proj5.demo': 'Demo en vivo',
    'proj5.desc': 'Pipeline NLP que compara 4 métodos — de TF-IDF a LLMs — para detectar <strong>riesgo de churn en texto de reseñas</strong>, con el mejor modelo alcanzando <strong>AUC 0.981</strong>. Incluye explicaciones SHAP, un analizador en tiempo real y <strong>Google Gemini API</strong> para categorización estructurada de quejas.',

    'proj6.title': 'Predicción de Valor de Vida del Cliente',
    'proj6.context': 'Open Source · UCI Online Retail Dataset',
    'proj6.demo': 'Demo en vivo',
    'proj6.desc': 'Modelos probabilísticos <strong>BG/NBD + Gamma-Gamma</strong> predicen el CLV individual con segmentación RFM, mapas de cohortes y simulador de clientes. Proyecta <strong>£8M+ en CLV a 12 meses</strong> para 2.790 clientes, con el 20% superior representando más del 65% del valor total.',

    'proj7.title': 'Inteligencia del Mercado Inmobiliario Japonés',
    'proj7.context': 'Open Source · Modelado sobre Estadísticas Públicas MLIT',
    'proj7.demo': 'Demo en vivo',
    'proj7.desc': 'Dashboard interactivo con ~50K transacciones en los <strong>23 distritos especiales de Tokio</strong> (2020–2024), con mapa 3D en Pydeck, gráficos de tendencias y un <strong>estimador de precios k-NN</strong> con rangos P10/P50/P90. Arquitectura preparada para conectarse en vivo al <strong>MLIT Real Estate Information Library API</strong>.',

    'proj8.title': 'Analítica de Lapse en Seguros de Vida · Mercado Japonés',
    'proj8.context': 'Python · scikit-learn · SHAP · ECharts · Seguros / Analítica Financiera',
    'proj8.demo': 'Demo en vivo',
    'proj8.desc': 'Predicción de lapse y segmentación de clientes end-to-end para el mercado de seguros de vida japonés. Modelos de gradient boosting y regresión logística con <strong>clustering k-means y explicaciones SHAP</strong>, más una auditoría de equidad. Entregado como reporte interactivo de una página construido con <strong>ECharts</strong>. Los datos de mercado son reales y citados; el libro de pólizas es sintético y declarado.',

    'proj1.title': 'Predicción de Churn de Clientes',
    'proj1.context': 'Telecom · Montecable',
    'proj1.desc': 'Pipeline end-to-end de predicción de churn para una base de más de 100K abonados. Combina <strong>modelos de clasificación ML</strong> (regresión logística, gradient boosting) con un dashboard en Power BI que identifica segmentos en riesgo para el equipo de retención.',

    'proj2.title': 'Detección de Fraude Logístico',
    'proj2.context': 'E-commerce · Mercado Libre',
    'proj2.desc': '<strong>Sistema de detección de anomalías</strong> construido sobre datos de envíos y operaciones para identificar patrones de fraude en una red logística a gran escala. Contribuyó a prevenir más de $310K en pérdidas anuales.',

    'proj3.title': 'Playbook de Migración BI',
    'proj3.context': 'Telecom · Montecable',
    'proj3.desc': 'Documentación y arquitectura para la migración del ecosistema BI de Qlik Sense a Power BI, incluyendo <strong>rediseño de modelos de datos</strong>, patrones DAX y un diccionario de métricas para toda la organización.',

    'projects.note': 'Proyectos construidos como ejemplos con datos open source para proteger la privacidad de los datos de mi trabajo real.',

    'edu.institution': 'Universidad Católica del Uruguay',
    'edu.degree': 'Licenciatura en Economía',
    'edu.location': 'Montevideo, Uruguay',
    'edu.notes': 'Beca por excelencia académica · Cursos electivos en Big Data y Crímenes Financieros.',
    'edu.dates': 'Graduado en diciembre de 2023',

    'skills.data.title': 'Datos y Analítica',
    'skills.tools.title': 'Herramientas y Plataformas',
    'skills.tools.list': 'Power BI · Tableau · Qlik Sense · Looker Studio · Alteryx',
    'skills.languages.list': 'Python · R · SQL · BigQuery · Excel',
    'skills.method.title': 'Especialización Técnica',
    'skills.m1': 'Desarrollo de aplicaciones LLM (OpenAI GPT-4o) · Prompt engineering · XGBoost · Análisis de series de tiempo · Análisis de grafos · MLOps (monitoreo de drift, artefactos versionados, A/B testing)',
    'skills.m2': 'Diseño de KPIs y Arquitectura de Dashboards',
    'skills.m3': 'Diseño de Pipelines de Datos y Migración de BI',
    'skills.m4': 'Agile & Six Sigma',
    'skills.lang.title': 'Idiomas',
    'skills.lang.1': 'Español — Nativo',
    'skills.lang.2': 'Inglés — C1 · Certificado Cambridge',
    'skills.lang.3': 'Japonés — Nivel conversacional',

    'cert.sub1': 'Certificaciones',
    'cert.sub2': 'Impacto Clave',
    'cert.1': 'C1 Business Higher · Cambridge English',
    'cert.2': 'Mercados Financieros · Yale University / Coursera',
    'cert.3': 'QlikView Business Analyst',
    'cert.4': 'Metodologías Ágiles',
    'cert.5': 'Six Sigma',
    'impact.1.num': '$310K+',
    'impact.1.desc': 'en pérdidas anuales por fraude prevenidas en Mercado Libre',
    'impact.2.num': '$113K',
    'impact.2.desc': 'de ingresos adicionales anuales por reducción del churn en Montecable',
    'impact.3.num': '13%',
    'impact.3.desc': 'de reducción anual del churn con modelos predictivos de ML',
    'impact.4.num': '$20K',
    'impact.4.desc': 'de ahorro anual por migración de plataforma BI (Qlik Sense → Power BI)',
    'impact.5.num': '6+',
    'impact.5.desc': 'años de experiencia en telecomunicaciones, e-commerce y consultoría',
  },

  ja: {
    'page.title': 'サンティアゴ・マルティネス | データアナリスト',
    'page.lang': 'ja',

    'nav.name': 'Santiago Martinez',
    'nav.about': '自己紹介',
    'nav.experience': '職務経歴',
    'nav.projects': 'プロジェクト',
    'nav.education': '学歴',
    'nav.skills': 'スキル',
    'nav.certifications': '資格・実績',

    'about.subtitle': 'データアナリスト · 東京',
    'about.cv.download': '職務経歴書をダウンロード',
    'connect.title': 'お問い合わせ',
    'connect.sub': 'LinkedIn からご連絡いただくのが確実です。',
    'connect.button': 'LinkedIn',
    'about.bio1': '経済学を学び、データアナリストとして実務を重ねてきました。この6年余り、通信・EC・コンサルティングの分野で、ダッシュボード、予測モデル、そしてそれらを支えるデータパイプラインを構築してきました。',
    'about.bio2': '現在は東京で、MontecableのリードBIアナリストとして活動中。1日約1,500件の顧客対応音声を審査するLLMシステムの構築を含む取り組みを推進しています。具体的な数字は下の職務経歴セクションをご覧ください。',

    'section.experience': '職務経歴',
    'section.projects': 'プロジェクト',
    'section.education': '学歴',
    'section.skills': 'スキル',
    'section.certifications': '資格・実績',

    'exp1.title': 'リードBIアナリスト',
    'exp1.company': 'Montecable',
    'exp1.dates': '2025年7月 – 現在',
    'exp1.badge1': '$20K削減',
    'exp1.badge2': 'BI移行',
    'exp1.badge3': 'LLM / GPT-4o',
    'exp1.b1': '<strong>年間$20K削減</strong> -- Qlik SenseからPower BIへの完全移行を主導し、データモデルとレポートパイプラインをAzureクラウド上で再構築',
    'exp1.b2': '<strong>1日約1,500件の通話を自動審査</strong> -- OpenAI GPT-4oを活用した通話品質システムを設計・実装。カバー率2%未満の手動QAを代替し、7バージョンのプロンプト改善を経てプロンプトキャッシングで約$8/日に最適化',
    'exp1.b3': '主要メトリクスの部門間定義統一を通じてデータドリブン文化の浸透を推進し、BIチームを分析の中心的参照点として確立',

    'exp2.title': '不正防止シニアアナリスト',
    'exp2.company': 'Mercado Libre',
    'exp2.dates': '2024年7月 – 2025年6月',
    'exp2.badge1': '$310K+防止',
    'exp2.badge2': '不正解析',
    'exp2.b1': '<strong>年間$310K超の損失防止</strong> -- Pythonで分類・時系列・グラフ分析モデルを構築し、Mercado Libreの物流ネットワークにおける不正パターンを検出',
    'exp2.b2': 'TableauおよびLookerダッシュボードを設計し、モデルの出力をオペレーション・エンジニアリングチームが即時に活用できるシグナルとして可視化',
    'exp2.b3': '分析結果・施策提言をシニアマネジメントおよび地域ディレクターに報告し、具体的なリスク軽減戦略の策定を支援',

    'exp3.title': 'シニアBIアナリスト',
    'exp3.company': 'Montecable',
    'exp3.dates': '2021年1月 – 2024年7月',
    'exp3.badge1': '解約率13%削減',
    'exp3.badge2': '$113K増収',
    'exp3.badge3': 'XGBoost · MLOps',
    'exp3.b1': '顧客行動追跡・商業KPIモニタリング・業績レポーティングのための経営・業務ダッシュボードを設計・維持管理',
    'exp3.b2': '<strong>解約率13%削減・$113K増収</strong> -- XGBoostとPlattキャリブレーションによる解約予測モデルを開発し、CLVベースのROIランキングで介入優先度を決定',
    'exp3.b3': '約33,000アカウントを対象とした月次自動スコアリングパイプラインを実装。バージョン管理済みモデル成果物・PSIドリフトモニタリング・A/Bテストで効果を検証',

    'exp4.title': 'データアナリスト',
    'exp4.company': 'タタ・コンサルタンシー・サービシズ',
    'exp4.dates': '2019年10月 – 2021年1月',
    'exp4.b1': '業務レポーティングをExcelからインタラクティブなダッシュボードへ移行し、ワークフロー分析の深化と各チームにおけるデータドリブンな改善を支援',

    'exp5.title': 'ジュニアリサーチャー',
    'exp5.company': 'ウィリス・タワーズワトソン',
    'exp5.dates': '2019年1月 – 2019年7月',
    'exp5.b1': '<strong>グローバルな保険・アクチュアリーコンサルティングファーム</strong>にて調査プロジェクトに参加。企業間の年金債務・人材指標に関する比較レポート作成に向け、財務・人材データセットを収集・分析',

    'proj4.title': '通信顧客解約 · 生存分析',
    'proj4.context': 'オープンソース · IBM Telco データセット · lifelines',
    'proj4.demo': 'ライブデモ',
    'proj4.desc': '生存分析（Kaplan-Meier + Cox PH）と<strong>XGBoost分類器（AUC 0.842）</strong>を組み合わせ、解約シミュレーターや収益計算機など6つのインタラクティブセクションにSHAP説明を搭載。Montecableの本番環境でも同様の手法を適用し、<strong>解約率13%削減</strong>を実現。',

    'proj5.title': '顧客レビュー・インテリジェンス',
    'proj5.context': 'オープンソース · Yelp Review Full データセット · HuggingFace',
    'proj5.demo': 'ライブデモ',
    'proj5.desc': 'TF-IDFからLLMまで4手法を比較し、レビューテキストから<strong>解約リスクを検知</strong>するNLPパイプライン。最良モデルは<strong>AUC 0.981</strong>を達成。SHAP説明・リアルタイム分析・<strong>Google Gemini API</strong>によるクレーム分類を搭載。',

    'proj6.title': '顧客生涯価値予測',
    'proj6.context': 'オープンソース · UCI Online Retail データセット',
    'proj6.demo': 'ライブデモ',
    'proj6.desc': '<strong>BG/NBD + Gamma-Gamma</strong>確率モデルでCLVを予測し、RFMセグメンテーション・コホートヒートマップ・顧客シミュレーターを搭載。2,790顧客の<strong>12ヶ月CLV合計£8M超</strong>を予測し、上位20%が全CLVの65%以上を占める。',

    'proj7.title': '日本不動産インテリジェンス',
    'proj7.context': 'オープンソース · 国土交通省公開統計に基づくモデル',
    'proj7.demo': 'ライブデモ',
    'proj7.desc': '東京<strong>23特別区</strong>の約5万件の取引データ（2020〜2024年）を可視化するダッシュボード。Pydeck 3Dマップ・Plotlyトレンドチャート・<strong>k近傍法による価格推定</strong>（P10/P50/P90）を搭載。<strong>国土交通省 不動産情報ライブラリAPI</strong>へのライブ接続に対応した設計。',

    'proj8.title': '生命保険失効分析 · 日本市場',
    'proj8.context': 'Python · scikit-learn · SHAP · ECharts · 保険 / 金融アナリティクス',
    'proj8.demo': 'ライブデモ',
    'proj8.desc': '日本の生命保険市場を対象とした、失効予測と顧客セグメンテーションのend-to-endパイプライン。勾配ブースティング・ロジスティック回帰モデルに<strong>k-meansクラスタリングとSHAP説明</strong>および公平性監査を組み合わせ。<strong>ECharts</strong>で構築した1ページのインタラクティブレポートとして提供。市場データは実データ・引用あり。保険契約データは合成データ・明示済み。',

    'proj1.title': '顧客解約予測モデル',
    'proj1.context': '通信 · Montecable',
    'proj1.desc': '100K以上の契約者ベースを対象とした解約予測パイプライン。<strong>MLによる分類モデル</strong>（ロジスティック回帰・勾配ブースティング）とPower BIダッシュボードを組み合わせ、リテンションチームにリスクセグメントを提供。',

    'proj2.title': '物流不正検知システム',
    'proj2.context': 'EC · Mercado Libre',
    'proj2.desc': '大規模物流ネットワークの配送・業務データを基にした<strong>異常検知システム</strong>。不正パターンを特定し、年間$310K超の損失防止に貢献。',

    'proj3.title': 'BIプラットフォーム移行プレイブック',
    'proj3.context': '通信 · Montecable',
    'proj3.desc': 'Qlik SenseからPower BIへのBIエコシステム移行のための設計・文書化。<strong>データモデル再設計</strong>、DAXパターン、組織全体のメトリクス辞書を含む。',

    'projects.note': '実務データのプライバシーを守るため、オープンソースのデータを用いたサンプル実装です。',

    'edu.institution': 'ウルグアイ・カトリック大学',
    'edu.degree': '経済学士',
    'edu.location': 'ウルグアイ・モンテビデオ',
    'edu.notes': '学業優秀奨学金 · ビッグデータ・金融犯罪の選択科目。',
    'edu.dates': '2023年12月 卒業',

    'skills.data.title': 'データ・分析',
    'skills.tools.title': 'ツール・プラットフォーム',
    'skills.tools.list': 'Power BI · Tableau · Qlik Sense · Looker Studio · Alteryx',
    'skills.languages.list': 'Python · R · SQL · BigQuery · Excel',
    'skills.method.title': '技術的専門分野',
    'skills.m1': 'LLMアプリケーション開発（OpenAI GPT-4o）・プロンプトエンジニアリング・XGBoost・時系列分析・グラフ分析・MLOps（ドリフトモニタリング、バージョン管理、A/Bテスト）',
    'skills.m2': 'KPI設計・ダッシュボードアーキテクチャ',
    'skills.m3': 'データパイプライン設計・BI移行',
    'skills.m4': 'アジャイル & シックスシグマ',
    'skills.lang.title': '語学',
    'skills.lang.1': 'スペイン語 — ネイティブ',
    'skills.lang.2': '英語 — C1 · ケンブリッジ認定',
    'skills.lang.3': '日本語 — 日常会話レベル',

    'cert.sub1': '資格',
    'cert.sub2': '主な成果',
    'cert.1': 'C1 ビジネス上級 · ケンブリッジ英語',
    'cert.2': '金融市場論 · イェール大学 / Coursera',
    'cert.3': 'QlikView ビジネスアナリスト',
    'cert.4': 'アジャイル手法',
    'cert.5': 'シックスシグマ',
    'impact.1.num': '$310K+',
    'impact.1.desc': 'Mercado Libreでの年間不正損失防止額',
    'impact.2.num': '$113K',
    'impact.2.desc': 'Montecableでの解約率低下による年間増収額',
    'impact.3.num': '13%',
    'impact.3.desc': 'MLモデルによる年間顧客解約率低下',
    'impact.4.num': '$20K',
    'impact.4.desc': 'BIプラットフォーム移行による年間コスト削減（Qlik Sense → Power BI）',
    'impact.5.num': '6年以上',
    'impact.5.desc': '通信・EC・コンサルティング分野での経験年数',
  }
};

function setLang(lang) {
  const t = translations[lang];
  if (!t) return;

  document.documentElement.lang = t['page.lang'];
  document.title = t['page.title'];

  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.getAttribute('data-key');
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });

  document.querySelectorAll('[data-href-key]').forEach(el => {
    const key = el.getAttribute('data-href-key');
    if (t[key] !== undefined) {
      el.href = t[key];
    }
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  const cvMap = { en: 'assets/cv/cv-en.pdf', es: 'assets/cv/cv-es.pdf', ja: 'assets/cv/cv-ja.pdf' };
  document.querySelectorAll('.js-cv-btn').forEach(btn => {
    btn.href = cvMap[lang] || cvMap['en'];
  });

  localStorage.setItem('lang', lang);
}

document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('lang') || 'en';
  setLang(saved);
});
