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
    'about.bio1': "Economist by training, data professional by practice. Over the past 6+ years, across telecom, e-commerce and consulting, I've built analytics infrastructure that turns raw data into real decisions: dashboards people actually use, predictive models that drive strategy, and data pipelines that keep things moving.",
    'about.bio2': 'Currently based in Tokyo, working as Lead BI Analyst at Montecable. I work at the intersection of technology and business strategy, helping teams see clearly and act with confidence. The numbers and outcomes are in the Experience section below.',

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
    'exp1.b1': 'Led the full migration from <strong>Qlik Sense to Power BI</strong>, rebuilding data models, recreating dashboards and redesigning reporting pipelines across the organization',
    'exp1.b2': 'Integrated <strong>CRM and operational data sources</strong>, improving data quality and reducing licensing and infrastructure costs by approximately <strong>$20K annually</strong>',
    'exp1.b3': 'Drove <strong>data-driven culture adoption</strong> by documenting key metrics, aligning definitions across departments and positioning the BI team as the central analytics reference',

    'exp2.title': 'Fraud Prevention Senior Analyst',
    'exp2.company': 'Mercado Libre',
    'exp2.dates': 'July 2024 – June 2025',
    'exp2.badge1': '$310K+ prevented',
    'exp2.badge2': 'Fraud Analytics',
    'exp2.b1': 'Analyzed shipping and operational datasets within <strong>Mercado Libre\'s logistics network</strong> to surface fraud signals, anomalous patterns and operational risk',
    'exp2.b2': 'Built <strong>analytical models and monitoring dashboards</strong> that contributed to detecting and preventing over <strong>$310K in annual losses</strong>',
    'exp2.b3': 'Collaborated with operations, engineering and regional teams to translate analytical findings into <strong>concrete risk mitigation actions</strong> aligned with real operational constraints',

    'exp3.title': 'Senior Business Intelligence Analyst',
    'exp3.company': 'Montecable',
    'exp3.dates': 'January 2021 – July 2024',
    'exp3.badge1': '13% churn reduction',
    'exp3.badge2': '$113K revenue uplift',
    'exp3.b1': 'Designed and maintained dashboards for <strong>customer behavior tracking</strong>, commercial KPI monitoring and business performance reporting across executive and operational levels',
    'exp3.b2': 'Developed <strong>churn prediction and conversion models</strong> using Python, R and machine learning techniques, translating outputs into targeted retention strategies',
    'exp3.b3': 'Worked with commercial and marketing teams to turn findings into campaigns, reducing annual churn by <strong>13%</strong> and generating an estimated <strong>$113K in revenue uplift</strong>',

    'exp4.title': 'Data Analyst',
    'exp4.company': 'Tata Consultancy Services',
    'exp4.dates': 'October 2019 – January 2021',
    'exp4.b1': 'Analyzed KPI and operational performance data to identify inefficiencies, capacity bottlenecks and process gaps across client teams',
    'exp4.b2': 'Built and maintained dashboards giving operations managers clearer daily and weekly visibility into team performance and workload distribution',
    'exp4.b3': 'Worked across multiple client engagements, adapting analytical frameworks and reporting standards to each operational context',

    'exp5.title': 'Junior Researcher',
    'exp5.company': 'Willis Towers Watson',
    'exp5.dates': 'January 2019 – July 2019',
    'exp5.b1': 'Collected and structured financial and workforce datasets to support actuarial and advisory research deliverables',
    'exp5.b2': 'Produced comparative analyses of pension obligations and workforce metrics across companies and industry sectors',
    'exp5.b3': 'Contributed to internal reports used by senior consultants in client-facing engagements across Latin America',

    'proj4.title': 'Telecom Customer Churn Prediction',
    'proj4.context': 'Open Source · IBM Telco Dataset',
    'proj4.demo': 'Live Demo',
    'proj4.desc': 'End-to-end ML pipeline that trains and compares <strong>3 classification models</strong> (Logistic Regression, Random Forest, Gradient Boosting) on the IBM Telco dataset. Features an interactive Streamlit dashboard with model metrics, feature importance, a customer risk simulator, and churn segmentation. Best model achieves <strong>~81% accuracy and 0.85 AUC-ROC</strong>. Applied similar techniques in production at Montecable, achieving a <strong>13% churn reduction</strong>.',

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
    'skills.m1': 'Predictive Modeling & Machine Learning (Churn, Fraud Detection)',
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
    'about.bio1': 'Economista de formación y profesional de datos en la práctica. Durante más de 6 años, trabajando en telecomunicaciones, e-commerce y consultoría, he construido la infraestructura analítica que convierte datos en decisiones reales: dashboards que realmente se usan, modelos predictivos que guían la estrategia, y pipelines que mantienen todo en movimiento.',
    'about.bio2': 'Actualmente en Tokio como Analista BI Líder en Montecable. Trabajo en la intersección entre tecnología y estrategia de negocio, ayudando a los equipos a ver con claridad y actuar con confianza. Los números y resultados están en la sección Experiencia más abajo.',

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
    'exp1.b1': 'Lideré la migración completa de <strong>Qlik Sense a Power BI</strong>, reconstruyendo modelos de datos, recreando dashboards y rediseñando los pipelines de reporting en toda la organización',
    'exp1.b2': 'Integré <strong>fuentes de CRM y datos operativos</strong>, mejorando la calidad de los datos y reduciendo costos de licencias e infraestructura en aproximadamente <strong>$20K anuales</strong>',
    'exp1.b3': 'Impulsé la <strong>adopción de una cultura basada en datos</strong> documentando métricas clave, alineando definiciones entre áreas y posicionando al equipo de BI como referente central de analítica',

    'exp2.title': 'Analista Senior de Prevención de Fraude',
    'exp2.company': 'Mercado Libre',
    'exp2.dates': 'Julio 2024 – Junio 2025',
    'exp2.badge1': '$310K+ prevenidos',
    'exp2.badge2': 'Analítica de Fraude',
    'exp2.b1': 'Analicé datasets de envíos y operaciones dentro de la <strong>red logística de Mercado Libre</strong> para detectar señales de fraude, patrones anómalos y riesgo operativo',
    'exp2.b2': 'Construí <strong>modelos analíticos y dashboards de monitoreo</strong> que contribuyeron a detectar y prevenir más de <strong>$310K en pérdidas anuales</strong>',
    'exp2.b3': 'Colaboré con equipos de operaciones, ingeniería y regionales para traducir hallazgos en <strong>acciones concretas de mitigación de riesgo</strong> alineadas con las restricciones operativas reales',

    'exp3.title': 'Analista BI Senior',
    'exp3.company': 'Montecable',
    'exp3.dates': 'Enero 2021 – Julio 2024',
    'exp3.badge1': '13% reducción de churn',
    'exp3.badge2': '$113K de ingresos extra',
    'exp3.b1': 'Diseñé y mantuve dashboards para el <strong>seguimiento del comportamiento de clientes</strong>, monitoreo de KPIs comerciales y reporting de desempeño de negocio a nivel ejecutivo y operativo',
    'exp3.b2': 'Desarrollé <strong>modelos de predicción de churn y conversión</strong> en Python y R con técnicas de machine learning, traduciendo los resultados en estrategias de retención focalizadas',
    'exp3.b3': 'Colaboré con equipos comerciales y de marketing para convertir hallazgos en campañas, logrando una reducción del <strong>13%</strong> en churn anual y un incremento estimado de <strong>$113K en ingresos</strong>',

    'exp4.title': 'Analista de Datos',
    'exp4.company': 'Tata Consultancy Services',
    'exp4.dates': 'Octubre 2019 – Enero 2021',
    'exp4.b1': 'Analicé datos de KPIs y desempeño operativo para identificar ineficiencias, cuellos de botella y brechas de rendimiento en los equipos de clientes',
    'exp4.b2': 'Construí y mantuve dashboards que dieron a los gestores de operaciones mayor visibilidad diaria y semanal sobre el rendimiento y la distribución de carga de trabajo',
    'exp4.b3': 'Trabajé en múltiples proyectos de clientes, adaptando marcos de análisis y estándares de reporting a cada contexto operativo',

    'exp5.title': 'Investigador Junior',
    'exp5.company': 'Willis Towers Watson',
    'exp5.dates': 'Enero 2019 – Julio 2019',
    'exp5.b1': 'Recopilé y estructuré datasets financieros y de fuerza laboral para apoyar entregables de investigación actuarial y de consultoría',
    'exp5.b2': 'Redacté análisis comparativos de obligaciones de pensiones y métricas de workforce entre empresas y sectores',
    'exp5.b3': 'Contribuí a informes internos utilizados por consultores senior en compromisos con clientes en América Latina',

    'proj4.title': 'Predicción de Churn en Telecom',
    'proj4.context': 'Open Source · IBM Telco Dataset',
    'proj4.demo': 'Demo en vivo',
    'proj4.desc': 'Pipeline ML end-to-end que entrena y compara <strong>3 modelos de clasificación</strong> (Regresión Logística, Random Forest, Gradient Boosting) sobre el dataset IBM Telco. Incluye un dashboard interactivo en Streamlit con métricas de modelos, importancia de variables, simulador de riesgo de cliente y segmentación de churn. El mejor modelo alcanza <strong>~81% de accuracy y 0.85 AUC-ROC</strong>. Técnicas similares fueron aplicadas en producción en Montecable, logrando una <strong>reducción del 13% en el churn</strong>.',

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
    'skills.m1': 'Modelado Predictivo y Machine Learning (Churn, Detección de Fraude)',
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
    'about.bio1': '経済学を学び、データの専門家として実践を積んできました。この6年以上、通信・EC・コンサルティングの各分野にわたり、生のデータを実際の意思決定につなげる分析基盤を構築してきました。実際に使われるダッシュボード、戦略を支える予測モデル、業務を動かし続けるデータパイプラインがその成果です。',
    'about.bio2': '現在は東京を拠点に、MontecableのリードBIアナリストとして活動しています。テクノロジーとビジネス戦略の接点で、チームが明確に判断し、自信を持って行動できるよう支援しています。具体的な数字と成果は、下の職務経歴セクションをご覧ください。',

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
    'exp1.b1': '<strong>Qlik SenseからPower BI</strong>へのBIエコシステムの完全移行を主導し、データモデルの再構築、ダッシュボードの再作成、レポートパイプラインの再設計を実施',
    'exp1.b2': '<strong>CRMおよびオペレーションデータソース</strong>を統合し、データ品質を向上させながらライセンス・インフラコストを年間約<strong>$20K削減</strong>',
    'exp1.b3': '主要メトリクスの文書化・部門間定義統一を通じて<strong>データドリブン文化</strong>の浸透を推進し、BIチームを分析の中心的参照点として確立',

    'exp2.title': '不正防止シニアアナリスト',
    'exp2.company': 'Mercado Libre',
    'exp2.dates': '2024年7月 – 2025年6月',
    'exp2.badge1': '$310K+防止',
    'exp2.badge2': '不正解析',
    'exp2.b1': '<strong>Mercado Libreの物流ネットワーク</strong>内で配送・業務データセットを分析し、不正シグナル、異常パターン、業務リスクを特定',
    'exp2.b2': '<strong>分析モデルとモニタリングダッシュボード</strong>を構築し、年間<strong>$310K超の損失</strong>の検知・防止に貢献',
    'exp2.b3': 'オペレーション・エンジニアリング・地域チームと連携し、分析結果を実際の業務制約に沿った<strong>具体的なリスク軽減策</strong>に転換',

    'exp3.title': 'シニアBIアナリスト',
    'exp3.company': 'Montecable',
    'exp3.dates': '2021年1月 – 2024年7月',
    'exp3.badge1': '解約率13%削減',
    'exp3.badge2': '$113K増収',
    'exp3.b1': '<strong>顧客行動追跡</strong>・商業KPIモニタリング・業績レポーティングのための経営・業務ダッシュボードを設計・維持管理',
    'exp3.b2': 'PythonおよびRを用いた機械学習手法で<strong>解約予測・コンバージョンモデル</strong>を開発し、ターゲティング型リテンション戦略に転換',
    'exp3.b3': '商業・マーケティングチームと連携し施策に落とし込み、年間解約率<strong>13%削減</strong>・<strong>$113K増収</strong>を達成',

    'exp4.title': 'データアナリスト',
    'exp4.company': 'タタ・コンサルタンシー・サービシズ',
    'exp4.dates': '2019年10月 – 2021年1月',
    'exp4.b1': 'KPI・業務パフォーマンスデータを分析し、クライアントチームの非効率・ボトルネック・パフォーマンス課題を特定',
    'exp4.b2': '業務管理者が日次・週次のチームパフォーマンスと業務負荷分散を把握できるダッシュボードを構築・維持',
    'exp4.b3': '複数のクライアントプロジェクトに対応し、各業務文脈に応じた分析フレームワークとレポート基準を適用',

    'exp5.title': 'ジュニアリサーチャー',
    'exp5.company': 'ウィリス・タワーズワトソン',
    'exp5.dates': '2019年1月 – 2019年7月',
    'exp5.b1': 'アクチュアリー・アドバイザリー向けの調査成果物を支援するため、財務・人材データセットを収集・構造化',
    'exp5.b2': '企業・業界をまたいだ年金債務・人材指標の比較分析を実施',
    'exp5.b3': 'ラテンアメリカ全域のクライアント向け案件で上級コンサルタントが活用する社内レポート作成に貢献',

    'proj4.title': '通信顧客解約予測',
    'proj4.context': 'オープンソース · IBM Telco データセット',
    'proj4.demo': 'ライブデモ',
    'proj4.desc': 'IBM Telcoデータセットを使用して<strong>3つの分類モデル</strong>（ロジスティック回帰・ランダムフォレスト・勾配ブースティング）を学習・比較するML パイプライン。モデル評価指標・特徴量の重要度・顧客リスクシミュレーター・解約セグメント分析を備えたインタラクティブなStreamlitダッシュボードを搭載。最良モデルは<strong>精度約81%・AUC-ROC 0.85</strong>を達成。同様の手法をMontecableの本番環境に適用し、<strong>解約率13%削減</strong>を実現。',

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
    'skills.m1': '予測モデリング・機械学習（解約予測、不正検知）',
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
