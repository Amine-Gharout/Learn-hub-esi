import { Category, CourseLevel } from './types';

export const COURSE_DATA: Category[] = [
  {
    id: 'recommended',
    title: '🚀 Key Recommendations',
    description: 'Curated paths specifically for Machain Learning, AI, and Cloud Computing.',
    courses: [

      {
        id: 'ibm-ai-intro',
        title: 'Getting Started with Artificial Intelligence',
        topics: [
          'Foundations of AI',
          'AI Applications',
          'Algorithmic Concepts',
          'Generative AI',
          'Prompt Engineering',
          'Real-World Case Studies',
          'Hands-on with Generative AI Tools'
        ],
        level: CourseLevel.Beginner,
        link: 'https://skillsbuild.org/college-students/course-catalog/getting-started-with-artificial-intelligence',
        isRecommended: true,
        details: 'This 3-hour course covers essential Artificial Intelligence concepts, common AI applications, the basics of generative AI, and prompt engineering. Learners get practical experience by working directly with AI tools to refine and create prompts. Completion earns an IBM Digital Badge via Credly.',
        prerequisites: ['No prior experience required'],
        aiContent: 'WORKFLOW: In a guided sequence, you learn how AI is built and applied, explore practical use cases such as generative AI, and complete hands-on exercises to improve prompt creation and refinement. PREREQUISITES: No prior experience required.'
      },

      {
        id: 'fcc-python',
        title: 'Python Certification',
        topics: [
          'Python Fundamentals',
          'Control Structures',
          'Data Structures',
          'Functions',
          'OOP in Python',
          'File and API Operations',
          'Testing and Debugging',
          'Portfolio Projects'
        ],
        level: CourseLevel.Beginner,
        link: 'https://www.freecodecamp.org/learn/python-v9/',
        isRecommended: true,
        details: 'A project-based Python certification that takes you from absolute beginner to job-ready fundamentals. Interactive challenges and projects build skill in variables, functions, OOP, file operations, API use, and debugging. The course concludes with several real-world projects for demonstrable Python fluency and awards a certification upon completion.',
        prerequisites: ['No prior experience required'],
        aiContent: 'WORKFLOW: You move step-by-step through core Python concepts—syntax, loops, functions, as well as OOP and real-world file/project work. Each section includes hands-on coding, quizzes, and finished portfolio projects required for certification. PREREQUISITES: No experience needed.'
      },
      {
        id: 'ml-concepts',
        title: 'Introduction to Machine Learning Concepts',
        topics: ['ML Fundamentals', 'ML Types', 'Training/Evaluation', 'Deep Learning'],
        level: CourseLevel.Beginner,
        link: 'https://learn.microsoft.com/training/modules/fundamentals-machine-learning/?WT.mc_id=academic&wt.mc_id=studentamb_484680',
        details: 'Understand the core principles of ML: Regression, Classification, and Clustering, and how to evaluate models.',
        prerequisites: ['Basic Math'],
        aiContent: 'WORKFLOW: Theoretical deep dive. You will learn about the training process: splitting data into Training and Validation sets. You will understand evaluation metrics like Accuracy, Precision, Recall, and F1-Score. You will learn about Loss Functions and Gradient Descent conceptually. PREREQUISITES: High school algebra and basic statistics.',
        isRecommended: true,

      },
      {
        id: 'ibm-cybersecurity-intro',
        title: 'Getting Started with Cybersecurity',
        topics: [
          'Cybersecurity Fundamentals',
          'Key Elements & Threats',
          'Data Privacy',
          'CIA Triad Model',
          'Security Evaluation',
          'Cybersecurity Careers',
          'Essential Skills for Cyber Roles',
          'Intro to Security Tools'
        ],
        level: CourseLevel.Beginner,
        link: 'https://skillsbuild.org/college-students/course-catalog/getting-started-with-cybersecurity',
        isRecommended: true,
        details: 'This course provides foundational knowledge of cybersecurity including data protection, privacy, security evaluation using the CIA triad, and current cyber threats. Learners explore skills required for cybersecurity jobs and understand fundamental tools. Completing the course earns an IBM digital badge via Credly.',
        prerequisites: ['No prior experience required'],
        aiContent: 'WORKFLOW: In about 3 hours, you will learn conceptual basics, industry job outlook, and hands-on with tool demonstrations. You will understand the CIA triad (Confidentiality, Integrity, Availability), common threat scenarios, and essential practices for securing data. You finish by reviewing career roles and receive a badge backed by IBM/Credly for completion. PREREQUISITES: No prior cybersecurity experience required.'
      },
      {
        id: 'web-start',
        title: 'Get started with web development using Visual Studio Code',
        topics: ['HTML', 'CSS', 'JavaScript', 'Web Development', 'Browser DevTools'],
        level: CourseLevel.Beginner,
        link: 'https://learn.microsoft.com/training/modules/get-started-with-web-development/?WT.mc_id=academic&wt.mc_id=studentamb_484680',
        details: 'Understand how the internet works and build your first static website using VS Code.',
        prerequisites: ['No prior experience required'],
        aiContent: 'WORKFLOW: The basics. You create a folder with `index.html`. You learn the structure of an HTML5 document. You open the file in a browser and use the "Inspect Element" tool to see the DOM. PREREQUISITES: None.',
        isRecommended: true

      },
      {
        id: 'dlai-rag',
        title: 'Retrieval Augmented Generation (RAG) Course',
        topics: [
          'Retrieval-Augmented Generation (RAG)',
          'Document Retrieval',
          'Vector Databases (Weaviate)',
          'Keyword and Semantic Search',
          'Prompt Engineering',
          'Hybrid Retrieval',
          'Evaluation & Monitoring',
          'Production Deployment'
        ],
        level: CourseLevel.Intermediate,
        link: 'https://www.deeplearning.ai/courses/retrieval-augmented-generation-rag/',
        isRecommended: true,
        details: 'Master the practical design and implementation of RAG systems for real-world applications. The course covers every core RAG component: document retrieval, vector/semantic search, database integration, prompt augmentation, evaluation, and moving projects from prototype to production—including unique tradeoffs, error analysis, and performance tuning.',
        prerequisites: [
          'Intermediate Python skills',
          'Basic generative AI concepts',
          'basics Linear algebra'
        ],
        aiContent: 'WORKFLOW: In five modules, you build each part of a RAG system, from retrieval/prompt augmentation to scalable deployment. You’ll implement and compare retrieval methods (semantic search, BM25, hybrid), use Weaviate with real-world datasets, design domain-specific chatbots, and tackle real-world challenges (context window limits, dynamic pricing, monitoring). You learn prompt engineering for better LLM+retrieval synergy, and use evaluation tools like Phoenix. PREREQUISITES: Ability to code Python, basic grasp of generative AI and ML concepts, and comfort with hands-on project work.'
      },
      {
        id: 'ibm-data-intro',
        title: 'Getting Started with Data',
        topics: [
          'Basics of Data',
          'Data Sources & Types',
          'Data Collection',
          'Data Quality & Cleaning',
          'Data Visualization',
          'Data Ethics & Privacy',
          'Intro to Data-Driven Roles'
        ],
        level: CourseLevel.Beginner,
        link: 'https://skills.yourlearning.ibm.com/activity/PLAN-14F2691E3A32?ngo-id=0302',
        isRecommended: true,
        details: 'An entry-level, ~3-hour course presenting foundational concepts in data science. You’ll explore what data is, the different types of data, why quality and cleaning matter, basic data visualization, and jobs in the data field. Successfully finishing the course earns an IBM SkillsBuild digital badge.',
        prerequisites: ['No prior experience required'],
        aiContent: 'WORKFLOW: The course introduces core data skills through interactive lessons and hands-on activities. You investigate data sources, clean and visualize sample datasets, and get exposure to data-related careers. PREREQUISITES: No technical background required.'
      },
      {
        id: 'rec-genai-intro',
        title: 'Introduction to Generative AI and Agents',
        topics: ['Generative AI', 'LLMs', 'Prompting', 'AI Agents', 'Agentic AI'],
        level: CourseLevel.Beginner,
        link: 'https://learn.microsoft.com/training/modules/fundamentals-generative-ai/?WT.mc_id=academic&wt.mc_id=studentamb_490905',
        isRecommended: true,
        details: 'Understand how Large Language Models (LLMs) work, how to craft effective prompts, and the emerging field of autonomous AI agents.',
        prerequisites: ['No prior experience required'],
        aiContent: 'WORKFLOW: This is a conceptual module with some playground exploration. You will explore the Azure OpenAI Studio "Chat" playground. You will experiment with System Messages to change the persona of the AI, adjust parameters like Temperature and Top-P to control randomness, and learn prompt engineering techniques like Few-Shot Prompting. It also introduces the concept of "Agents" that can use tools. PREREQUISITES: None. Just curiosity about how ChatGPT and similar tools work.'
      },
      {
        id: 'fcc-js',
        title: 'JavaScript Certification',
        topics: [
          'JavaScript Basics',
          'Data Structures',
          'ES6 Features',
          'Functions and Scope',
          'DOM Manipulation',
          'Object-Oriented Programming',
          'APIs and Fetch',
          'Test-Driven Development',
          'Frontend Project-Building'
        ],
        level: CourseLevel.Beginner,
        link: 'https://www.freecodecamp.org/learn/javascript-v9/',
        isRecommended: true,
        details: 'A comprehensive, hands-on program covering JavaScript from fundamentals to more advanced features like ES6, OOP, and APIs. Lessons combine interactive coding challenges, quizzes, and real-world projects (such as calculator and drum machine apps), ensuring strong foundations in JS for front-end development. Completion awards a recognized JavaScript certification.',
        prerequisites: ['No prior experience required'],
        aiContent: 'WORKFLOW: You start with JavaScript syntax, control flow, and arrays/objects, then progress to ES6 features (arrow functions, classes), DOM projects, and API usage. Each section includes challenges, labs, and milestone projects that test your learning before granting the certification. PREREQUISITES: No programming experience needed.'
      },
      {
        id: 'cloud-intro',
        title: 'Introduction to Cloud Infrastructure: Describe Cloud Concepts',
        topics: ['Cloud Computing', 'Shared Responsibility Model', 'Azure Basics'],
        level: CourseLevel.Beginner,
        link: 'https://learn.microsoft.com/training/paths/microsoft-azure-fundamentals-describe-cloud-concepts/?WT.mc_id=academic&wt.mc_id=studentamb_490905',
        details: 'Explains IaaS, PaaS, SaaS models, and the benefits of cloud scalability and high availability.',
        prerequisites: ['No prior experience required'],
        aiContent: 'WORKFLOW: Conceptual foundation. You learn the difference between CapEx (upfront cost) and OpEx (pay-as-you-go). You understand the Shared Responsibility Model: what you manage vs what Microsoft manages in IaaS vs PaaS. PREREQUISITES: None.',
        isRecommended: true,

      },

      {
        id: 'py-vscode',
        title: 'Getting Started with Python in VS Code',
        topics: ['Python Setup', 'VS Code', 'Debugging', 'Virtual Environments'],
        level: CourseLevel.Beginner,
        link: 'https://learn.microsoft.com/shows/visual-studio-code/getting-started-with-python-in-vs-code-official-video?WT.mc_id=academic&wt.mc_id=studentamb_490905',
        details: 'Learn to use the Python extension for VS Code, including linting, formatting, and running Jupyter notebooks.',
        prerequisites: ['No prior experience required'],
        aiContent: 'WORKFLOW: Editor configuration. You will install the official Microsoft Python Extension. You will select the correct Python Interpreter (kernel). You will configure a linter (like Pylint) to highlight errors and a formatter (like Black) to clean your code. PREREQUISITES: None.',
        isRecommended: true,

      },
      {
        id: 'ibm-llm-intro',
        title: 'Introduction to Large Language Models',
        topics: [
          'Overview of LLMs',
          'IBM Granite Models',
          'Prompt Engineering',
          'LLM Use Cases (Customer Service, Content Creation)',
          'Model Capabilities & Limitations',
          'Practical LLM Guidance',
          'Simulation with IBM Granite'
        ],
        level: CourseLevel.Beginner,
        link: 'https://skills.yourlearning.ibm.com/activity/MDL-568?ngo-id=0302',
        isRecommended: true,
        details: 'A beginner-level, 1.5-hour course introducing large language models (LLMs), including hands-on use with IBM Granite models. Learn LLM concepts, explore prompting strategies for targeted outcomes, and apply LLMs in real-world scenarios such as customer service and content creation. Includes a guided simulation on crafting blog content using Granite.',
        prerequisites: ['No prior experience required'],
        aiContent: 'WORKFLOW: The module teaches concepts and applications of LLMs, introduces different types of IBM Granite models, and offers practical exercises in prompt design. You’ll simulate using an LLM for content generation, learning to guide model outputs for practical business needs. PREREQUISITES: No experience required.'
      },
      {
        id: 'fcc-responsive-web',
        title: 'Responsive Web Design Certification',
        topics: [
          'HTML',
          'CSS',
          'Accessibility',
          'Modern Layouts',
          'Semantic HTML',
          'Responsive Design',
          'SEO Fundamentals',
          'Forms and Tables',
          'Project-Based Learning (Survey Form, Product Landing Page, etc.)'
        ],
        level: CourseLevel.Beginner,
        link: 'https://www.freecodecamp.org/learn/responsive-web-design-v9/',
        isRecommended: true,
        details: 'This self-paced, certification-track course teaches you the fundamentals of user-friendly, accessible web development using HTML and CSS. You learn through interactive labs and build multiple real-world projects (survey forms, landing pages, technical docs) to showcase your skills. The program emphasizes best practices in design and web accessibility, preparing you for modern front-end roles.',
        prerequisites: ['No prior experience required'],
        aiContent: 'WORKFLOW: Complete interactive modules on HTML, semantic markup, accessibility, and CSS, then apply your learning by building practical projects. Upon passing all certification projects and exams, you earn a freeCodeCamp Responsive Web Design certification. PREREQUISITES: No prior coding experience required.'
      },
      {
        id: 'ml-cert',
        title: 'Microsoft Certified: Azure Data Scientist Associate',
        topics: ['Data Science', 'ML Models', 'MLflow', 'Azure AI Services', 'Python'],
        level: CourseLevel.Intermediate,
        link: 'https://learn.microsoft.com/credentials/certifications/azure-data-scientist/?WT.mc_id=academic&wt.mc_id=studentamb_484680',
        details: 'Certification path for data scientists applying their knowledge of data exploration and model training on Azure.',
        prerequisites: ['DP-100 Skills'],
        aiContent: 'WORKFLOW: Validation step. The exam tests your ability to: Configure the workspace, Run experiments, Optimize models, and Manage and Deploy models. PREREQUISITES: Extensive hands-on experience with the DP-100 curriculum.',
        isRecommended: true,

      },
      {
        id: 'ibm-cybersecurity-fund',
        title: 'Cybersecurity Fundamentals',
        topics: [
          'Cybersecurity Concepts',
          'Types of Attacks',
          'Threat Groups',
          'Risk Management',
          'Cryptography',
          'Social Engineering',
          'Case Studies',
          'Incident Response',
          'Cybersecurity Careers'
        ],
        level: CourseLevel.Beginner,
        link: 'https://skillsbuild.org/college-students/course-catalog/cybersecurity-fundamentals',
        isRecommended: true,
        details: 'A foundational program for understanding cybersecurity threats, strategies, and practices. Learn the landscape of digital threats, cryptographic protections, real-world attack cases, incident response frameworks, and job market landscape. The course includes hands-on evaluation of threats/scenarios and is designed for further upskilling or entry roles. Earn an IBM Digital Badge on completion.',
        prerequisites: ['No prior experience required'],
        aiContent: 'WORKFLOW: In about 7.5 hours, you progress from theory to practical application—analyzing cyber threat groups, simulating attacks (social engineering, malware), evaluating cryptographic tools, and reviewing real incident case studies. The course covers prevention, detection, and response strategies, as well as pathways for cybersecurity upskilling and careers. PREREQUISITES: No prior experience required.'
      },

      {
        id: 'fcc-backend-apis',
        title: 'Back End Development and APIs Certification',
        topics: [
          'Node.js',
          'Express.js',
          'REST APIs',
          'MongoDB',
          'CRUD Operations',
          'Authentication',
          'Testing and Debugging',
          'Project-Based Backend Apps'
        ],
        level: CourseLevel.Beginner,
        link: 'https://www.freecodecamp.org/learn/back-end-development-and-apis-v9/',
        isRecommended: true,
        details: 'A beginner-friendly full stack curriculum focused on server-side and API development with Node.js, Express.js, and MongoDB. You learn to build and test RESTful APIs, perform CRUD operations, manage authentication, and deploy real-world applications. The course is project-based and includes a certification on completion.',
        prerequisites: [
          'Basic JavaScript'
        ],
        aiContent: 'WORKFLOW: You move through hands-on backend concepts with live coding labs—building APIs, connecting to databases, securing endpoints, and debugging/testing your code. Final projects cement your skills, and earning the certification validates your backend credentials. PREREQUISITES: At minimum, basic JavaScript experience.'
      },

      {
        id: 'fcc-relational-db',
        title: 'Relational Databases Certification',
        topics: [
          'Relational Database Design',
          'SQL',
          'PostgreSQL',
          'Normalization',
          'Data Modeling',
          'CRUD Operations',
          'Advanced Queries (Joins, Aggregation)',
          'Database Security',
          'Real-World Projects'
        ],
        level: CourseLevel.Beginner,
        link: 'https://www.freecodecamp.org/learn/relational-databases-v9/',
        isRecommended: true,
        details: 'This hands-on certification teaches you how to design, query, and manage relational databases with SQL and PostgreSQL. Lessons progress from ER modeling and normalization basics to advanced query techniques, security, and project deployment. You build several real-world projects for portfolio proof and certification.',
        prerequisites: ['No prior experience required'],
        aiContent: 'WORKFLOW: You learn step-by-step via coding labs—designing schemas, implementing normalization, writing SQL for CRUD and complex queries (joins, aggregates), and building project databases for practical experience. Completion earns the freeCodeCamp Relational Databases certification. PREREQUISITES: No prior SQL or database experience needed.'
      },
      {
        id: 'ibm-cloud-fundamentals',
        title: 'Cloud Computing Fundamentals (Earn a credential!)',
        topics: [
          'Cloud Computing Basics',
          'Types of Cloud Services (IaaS, PaaS, SaaS)',
          'Deployment Models',
          'Virtualization and Containers',
          'Cloud Security and Compliance',
          'Practical Cloud Applications',
          'Cloud Career Paths'
        ],
        level: CourseLevel.Beginner,
        link: 'https://skills.yourlearning.ibm.com/activity/PLAN-2EC3A305F2C3?ngo-id=0302',
        isRecommended: true,
        details: 'This ~3-hour credential-earning course covers foundational cloud computing concepts, service models (IaaS, PaaS, SaaS), deployment strategies, security requirements, and real-world cloud solutions. Prepares you for further cloud certifications and offers a digital badge on completion.',
        prerequisites: ['No prior experience required'],
        aiContent: 'WORKFLOW: You explore cloud fundamentals via interactive lessons—identifying different service/deployment models, working through security and compliance challenges, and learning about containers/virtualization. The program ends with practical labs and a focus on cloud career opportunities. PREREQUISITES: No prior knowledge required.'
      },
      {
        id: 'fcc-frontend-libraries',
        title: 'Front End Development Libraries Certification',
        topics: [
          'React',
          'Redux',
          'Bootstrap',
          'jQuery',
          'SASS',
          'UI Component Building',
          'State Management',
          'Single Page Apps',
          'React Project Labs'
        ],
        level: CourseLevel.Intermediate,
        link: 'https://www.freecodecamp.org/learn/front-end-development-libraries-v9/',
        isRecommended: true,
        details: 'An intermediate, project-based certification on the key libraries in modern front-end web development. You’ll develop hands-on proficiency in React and Redux patterns, use Bootstrap and jQuery for rapid UI features, practice SASS styling, and build production-grade front-end apps through guided projects. Certification validates your ability to design, build, and deploy scalable interfaces.',
        prerequisites: [
          'Basic JavaScript',
          'HTML/CSS familiarity'
        ],
        aiContent: 'WORKFLOW: You’ll build live React apps, manage global state with Redux, and apply Bootstrap/jQuery for rapid prototyping. The course includes SASS modules for scalable CSS, culminating in multiple real-world app projects. Complete all labs and challenges to earn the freeCodeCamp Front End Development Libraries certification. PREREQUISITES: Working knowledge of JavaScript and basic web skills.'
      }
    ]
  },
  {
    id: 'ai-genai',
    title: 'Artificial Intelligence & Generative AI',
    description: 'Master the future of technology with courses on LLMs, Copilot, and Azure AI.',
    courses: [
      {
        id: 'dlai-agentic-ai',
        title: 'Agentic AI with Andrew Ng',
        topics: [
          'Agentic Design Patterns',
          'Reflection',
          'Tool Use',
          'Planning',
          'Multi-Agent Workflows',
          'LLM Integration',
          'Tool/API Integration',
          'Evaluation & Optimization',
          'Production Deployment'
        ],
        level: CourseLevel.Intermediate,
        link: 'https://www.deeplearning.ai/courses/agentic-ai/',
        isRecommended: true,
        details: 'Gain practical skills to build agentic AI systems—AI that takes iterative, multi-step actions based on workflows, tool use, and self-evaluation. The course covers foundational design patterns, tool integration, multi-agent orchestration, and system evaluation/optimization, preparing you to develop and deploy production-grade agentic applications.',
        prerequisites: [
          'Intermediate Python programming',
          'Basic understanding of LLMs and APIs'
        ],
        aiContent: 'WORKFLOW: You’ll learn agentic AI by building from first principles in Python. The program covers four core design patterns: Reflection (AI critiques and improves its outputs), Tool Use (AI interacts with APIs, databases, and code), Planning (AI decomposes tasks into steps, adapting in real-time), and Multi-Agent (AI systems collaborating to handle complex workflows). Each is implemented hands-on before introducing frameworks. You’ll deconstruct business processes, construct robust agentic workflows, implement rigorous testing/error analysis, and prepare systems for scalable deployment. PREREQUISITES: Proficient Python coding; comfort with LLM concepts and calling APIs.'
      },
      {
        id: 'dlai-rag',
        title: 'Retrieval Augmented Generation (RAG) Course',
        topics: [
          'Retrieval-Augmented Generation (RAG)',
          'Document Retrieval',
          'Vector Databases (Weaviate)',
          'Keyword and Semantic Search',
          'Prompt Engineering',
          'Hybrid Retrieval',
          'Evaluation & Monitoring',
          'Production Deployment'
        ],
        level: CourseLevel.Intermediate,
        link: 'https://www.deeplearning.ai/courses/retrieval-augmented-generation-rag/',
        isRecommended: true,
        details: 'Master the practical design and implementation of RAG systems for real-world applications. The course covers every core RAG component: document retrieval, vector/semantic search, database integration, prompt augmentation, evaluation, and moving projects from prototype to production—including unique tradeoffs, error analysis, and performance tuning.',
        prerequisites: [
          'Intermediate Python skills',
          'Basic generative AI concepts',
          'High school–level math'
        ],
        aiContent: 'WORKFLOW: In five modules, you build each part of a RAG system, from retrieval/prompt augmentation to scalable deployment. You’ll implement and compare retrieval methods (semantic search, BM25, hybrid), use Weaviate with real-world datasets, design domain-specific chatbots, and tackle real-world challenges (context window limits, dynamic pricing, monitoring). You learn prompt engineering for better LLM+retrieval synergy, and use evaluation tools like Phoenix. PREREQUISITES: Ability to code Python, basic grasp of generative AI and ML concepts, and comfort with hands-on project work.'
      },
      {
        id: 'ai-intro',
        title: 'Introduction to AI',         // meeeeeeeeeeeeeee
        topics: ['AI Concepts', 'Machine Learning', 'Azure Services', 'AI Solutions'],
        level: CourseLevel.Beginner,
        link: 'https://learn.microsoft.com/training/paths/introduction-to-ai-on-azure/?WT.mc_id=academic&wt.mc_id=studentamb_484680',
        details: 'Get started with Artificial Intelligence on Azure. Learn about Computer Vision, NLP, and Document Intelligence services.',
        prerequisites: ['No prior experience required'],
        aiContent: 'WORKFLOW: Users navigate the Azure Portal to instantiate services. They use the Vision Studio and Language Studio to upload sample images and text, observing how the AI interprets them. PREREQUISITES: None. This is an entry-level overview of capabilities.'
      },

      {
        id: 'ai-genai-intro',
        title: 'Introduction to Generative AI and Agents', ///////kkkkriiiim
        topics: ['Generative AI', 'LLMs', 'Prompting', 'AI Agents', 'Agentic AI'],
        level: CourseLevel.Beginner,
        link: 'https://learn.microsoft.com/training/modules/fundamentals-generative-ai/?WT.mc_id=academic&wt.mc_id=studentamb_490905',
        details: 'Explore the fundamentals of Generative AI, including how models are trained and how to use them responsibly.',
        prerequisites: ['No prior experience required'],
        aiContent: 'WORKFLOW: Conceptual learning about Transformer architecture and Tokens. Users learn the difference between "completion" models and "chat" models. Covers the Responsible AI framework: Fairness, Reliability, Privacy, Inclusiveness, Transparency, and Accountability. PREREQUISITES: None.'
      },
      {
        id: 'ibm-llm-intro',
        title: 'Introduction to Large Language Models',
        topics: [
          'Overview of LLMs',
          'IBM Granite Models',
          'Prompt Engineering',
          'LLM Use Cases (Customer Service, Content Creation)',
          'Model Capabilities & Limitations',
          'Practical LLM Guidance',
          'Simulation with IBM Granite'
        ],
        level: CourseLevel.Beginner,
        link: 'https://skills.yourlearning.ibm.com/activity/MDL-568?ngo-id=0302',
        isRecommended: true,
        details: 'A beginner-level, 1.5-hour course introducing large language models (LLMs), including hands-on use with IBM Granite models. Learn LLM concepts, explore prompting strategies for targeted outcomes, and apply LLMs in real-world scenarios such as customer service and content creation. Includes a guided simulation on crafting blog content using Granite.',
        prerequisites: ['No prior experience required'],
        aiContent: 'WORKFLOW: The module teaches concepts and applications of LLMs, introduces different types of IBM Granite models, and offers practical exercises in prompt design. You’ll simulate using an LLM for content generation, learning to guide model outputs for practical business needs. PREREQUISITES: No experience required.'
      },
      {
        id: 'ibm-ai-intro',
        title: 'Getting Started with Artificial Intelligence',
        topics: [
          'Foundations of AI',
          'AI Applications',
          'Algorithmic Concepts',
          'Generative AI',
          'Prompt Engineering',
          'Real-World Case Studies',
          'Hands-on with Generative AI Tools'
        ],
        level: CourseLevel.Beginner,
        link: 'https://skillsbuild.org/college-students/course-catalog/getting-started-with-artificial-intelligence',
        isRecommended: true,
        details: 'This 3-hour course covers essential Artificial Intelligence concepts, common AI applications, the basics of generative AI, and prompt engineering. Learners get practical experience by working directly with AI tools to refine and create prompts. Completion earns an IBM Digital Badge via Credly.',
        prerequisites: ['No prior experience required'],
        aiContent: 'WORKFLOW: In a guided sequence, you learn how AI is built and applied, explore practical use cases such as generative AI, and complete hands-on exercises to improve prompt creation and refinement. PREREQUISITES: No prior experience required.'
      },

      {
        id: 'ibm-ai-fundamentals',
        title: 'Artificial Intelligence Fundamentals',
        topics: [
          'Natural Language Processing',
          'Computer Vision',
          'Machine Learning',
          'Deep Learning',
          'Chatbots',
          'Neural Networks',
          'AI Ethics',
          'AI Applications',
          'Watson Studio (AI model deployment)'
        ],
        level: CourseLevel.Beginner,
        link: 'https://skillsbuild.org/college-students/course-catalog/artificial-intelligence-fundamentals',
        isRecommended: true,
        details: 'A comprehensive, 10+ hour course offering conceptual knowledge and hands-on skills across the landscape of AI—including NLP, vision, machine/deep learning, chatbots, neural networks, AI ethics, and deployment basics in IBM Watson Studio. Includes job outlook and career guidance for AI-related roles. Earn an IBM Digital Badge on completion.',
        prerequisites: ['No prior experience required'],
        aiContent: 'WORKFLOW: You progress through major AI fields (NLP, computer vision, ML/DL) with theory and Watson Studio exercises, apply prompt engineering, examine AI use cases, and study ethics and job roles. The course concludes with conceptual and applied labs, along with digital badge issuance for career readiness. PREREQUISITES: No prior experience required.'
      },
      {
        id: 'ai-eng',
        title: 'Microsoft Certified: Azure AI Engineer Associate',  //meeee
        topics: ['Azure AI Services', 'NLP', 'Computer Vision', 'Generative AI', 'AI Solutions'],
        level: CourseLevel.Intermediate,
        link: 'https://learn.microsoft.com/credentials/certifications/azure-ai-engineer/?WT.mc_id=academic&wt.mc_id=studentamb_484680',
        details: 'The official certification page. Validates your ability to build, manage, and deploy AI solutions.',
        prerequisites: ['AI-102 Skills', 'Experience with Azure'],
        aiContent: 'WORKFLOW: This is the certification exam itself. It validates that you can: Plan an Azure AI solution, implement Content Moderation, implement Computer Vision solutions, and implement Natural Language Processing solutions. PREREQUISITES: You should have completed the AI-102 course and have hands-on experience deploying code to Azure.'
      }
    ]
  },
  {
    id: 'machine-learning',
    title: 'Machine Learning',
    description: 'Build, train, and deploy models using Azure Machine Learning and Python.',
    courses: [
      {
        id: 'ml-concepts',
        title: 'Introduction to Machine Learning Concepts',   //meeeeeeeee
        topics: ['ML Fundamentals', 'ML Types', 'Training/Evaluation', 'Deep Learning'],
        level: CourseLevel.Beginner,
        link: 'https://learn.microsoft.com/training/modules/fundamentals-machine-learning/?WT.mc_id=academic&wt.mc_id=studentamb_484680',
        details: 'Understand the core principles of ML: Regression, Classification, and Clustering, and how to evaluate models.',
        prerequisites: ['Basic Math'],
        aiContent: 'WORKFLOW: Theoretical deep dive. You will learn about the training process: splitting data into Training and Validation sets. You will understand evaluation metrics like Accuracy, Precision, Recall, and F1-Score. You will learn about Loss Functions and Gradient Descent conceptually. PREREQUISITES: High school algebra and basic statistics.',
        isRecommended: true,
      },
      {
        id: 'ibm-ml-ds-projects',
        title: 'Machine Learning for Data Science Projects',
        topics: [
          'Data Science Process',
          'Machine Learning Fundamentals',
          'Project Design & Deployment',
          'Feature Engineering',
          'Model Evaluation',
          'Real-World Case Studies',
          'Job Readiness Skills'
        ],
        level: CourseLevel.Intermediate,
        link: 'https://skills.yourlearning.ibm.com/activity/PLAN-D8E7C82C1D76?ngo-id=0302',
        isRecommended: true,
        details: 'A comprehensive 20-hour learning plan focused on building, evaluating, and deploying machine learning projects within data science workflows. Participants gain practical skills in feature engineering, model selection, error analysis, and project design through applied labs. Strong emphasis is placed on job readiness for data science roles.',
        prerequisites: [
          'Basic Python/programming',
          'Some exposure to data analysis'
        ],
        aiContent: 'WORKFLOW: You follow a step-by-step project pipeline—data preparation, feature engineering, ML model training/testing, and production deployment. Each module links theory to practice, with hands-on labs and project work. Career readiness is built-in through guidance and portfolio development. PREREQUISITES: Basic coding and data skills; no prior ML depth required.'
      },
      {
        id: 'ml-create',                            //krim
        title: 'Create Machine Learning Models',
        topics: ['Regression', 'Classification', 'Clustering', 'Deep Learning'],
        level: CourseLevel.Intermediate,
        link: 'https://learn.microsoft.com/training/paths/create-machine-learn-models/?WT.mc_id=academic&wt.mc_id=studentamb_490905',
        details: 'Hands-on labs using Python to train models with Scikit-Learn and PyTorch within the Azure environment.',
        prerequisites: ['Python', 'Basic ML Concepts'],
        aiContent: 'WORKFLOW: Hands-on scripting. You will write `train.py` scripts. You will use the `argparse` library to pass hyperparameters into your script. You will use the `azure-ai-ml` Python SDK v2 to submit these scripts as "Jobs" to a compute cluster. PREREQUISITES: Proficiency with Python scripting and command-line arguments.'
      },
      {
        id: 'ibm-data-intro',
        title: 'Getting Started with Data (Earn a credential!)',
        topics: [
          'Basics of Data',
          'Data Sources & Types',
          'Data Collection',
          'Data Quality & Cleaning',
          'Data Visualization',
          'Data Ethics & Privacy',
          'Intro to Data-Driven Roles'
        ],
        level: CourseLevel.Beginner,
        link: 'https://skills.yourlearning.ibm.com/activity/PLAN-14F2691E3A32?ngo-id=0302',
        isRecommended: true,
        details: 'An entry-level, ~3-hour course presenting foundational concepts in data science. You’ll explore what data is, the different types of data, why quality and cleaning matter, basic data visualization, and jobs in the data field. Successfully finishing the course earns an IBM SkillsBuild digital badge.',
        prerequisites: ['No prior experience required'],
        aiContent: 'WORKFLOW: The course introduces core data skills through interactive lessons and hands-on activities. You investigate data sources, clean and visualize sample datasets, and get exposure to data-related careers. PREREQUISITES: No technical background required.'
      },
      {
        id: 'ml-pipeline',
        title: 'Run pipelines in Azure Machine Learning',//amine
        topics: ['ML Pipelines', 'Automation', 'Components', 'Workflow Orchestration'],
        level: CourseLevel.Beginner,
        link: 'https://learn.microsoft.com/training/modules/run-pipelines-azure-machine-learning/?WT.mc_id=academic&wt.mc_id=studentamb_484680',
        details: 'Automate your workflows by connecting data prep, training, and evaluation steps into reproducible pipelines.',
        prerequisites: ['Azure ML Workspace'],
        aiContent: 'WORKFLOW: Component-based architecture. You will define "Components" (reusable blocks of code with defined inputs/outputs). You will link these components together into a Pipeline using the `@dsl.pipeline` decorator in Python. This creates a DAG (Directed Acyclic Graph) of execution steps. PREREQUISITES: Understanding of modular programming.'
      },
      {
        id: 'ml-cert',
        title: 'Microsoft Certified: Azure Data Scientist Associate', //krim
        topics: ['Data Science', 'ML Models', 'MLflow', 'Azure AI Services', 'Python'],
        level: CourseLevel.Intermediate,
        link: 'https://learn.microsoft.com/credentials/certifications/azure-data-scientist/?WT.mc_id=academic&wt.mc_id=studentamb_490905',
        details: 'Certification path for data scientists applying their knowledge of data exploration and model training on Azure.',
        prerequisites: ['DP-100 Skills'],
        aiContent: 'WORKFLOW: Validation step. The exam tests your ability to: Configure the workspace, Run experiments, Optimize models, and Manage and Deploy models. PREREQUISITES: Extensive hands-on experience with the DP-100 curriculum.'
      }
    ]
  },
  {
    id: 'python',
    title: 'Python Development',
    description: 'From basics to advanced data analysis and intelligent apps.',
    courses: [
      {
        id: 'fcc-python',
        title: 'Python Certification',
        topics: [
          'Python Fundamentals',
          'Control Structures',
          'Data Structures',
          'Functions',
          'OOP in Python',
          'File and API Operations',
          'Testing and Debugging',
          'Portfolio Projects'
        ],
        level: CourseLevel.Beginner,
        link: 'https://www.freecodecamp.org/learn/python-v9/',
        isRecommended: true,
        details: 'A project-based Python certification that takes you from absolute beginner to job-ready fundamentals. Interactive challenges and projects build skill in variables, functions, OOP, file operations, API use, and debugging. The course concludes with several real-world projects for demonstrable Python fluency and awards a certification upon completion.',
        prerequisites: ['No prior experience required'],
        aiContent: 'WORKFLOW: You move step-by-step through core Python concepts—syntax, loops, functions, as well as OOP and real-world file/project work. Each section includes hands-on coding, quizzes, and finished portfolio projects required for certification. PREREQUISITES: No experience needed.'
      },
      {
        id: 'py-analyze',
        title: 'Explore and analyze data with Python',            //me
        topics: ['Data Exploration', 'NumPy', 'Pandas', 'Matplotlib', 'Data Analysis'],
        level: CourseLevel.Intermediate,
        link: 'https://learn.microsoft.com/training/modules/explore-analyze-data-with-python/?WT.mc_id=academic&wt.mc_id=studentamb_484680',
        details: 'Use Jupyter notebooks to manipulate large datasets and create visualizations for storytelling.',
        prerequisites: ['Python Syntax'],
        aiContent: 'WORKFLOW: (See rec-py-explore). Emphasis on storytelling with data. You will use Matplotlib to create Line, Bar, and Pie charts. You will calculate correlations between variables using `df.corr()`. PREREQUISITES: Python syntax and basic math.'
      },
      {
        id: 'py-vs',
        title: 'Python Development with Visual Studio',//kr
        topics: ['Python Development', 'Visual Studio IDE', 'Python Apps', 'Debugging'],
        level: CourseLevel.Beginner,
        link: 'https://learn.microsoft.com/visualstudio/python/?view=visualstudio?WT.mc_id=academic&wt.mc_id=studentamb_490905',
        details: 'Set up Visual Studio 2022 for Python development, including environment management and debugging tools.',
        prerequisites: ['No prior experience required'],
        aiContent: 'WORKFLOW: IDE Setup. You will install the "Python Development" workload in the Visual Studio Installer. You will manage Python environments (Conda, venv) via the GUI. You will learn to set Breakpoints, Inspect Variables, and use the Immediate Window for debugging. PREREQUISITES: None.'
      },


      {
        id: 'py-copilot',  //me
        title: 'Using GitHub Copilot with Python',
        topics: ['GitHub Copilot', 'AI Pair Programming', 'Python Development'],
        level: CourseLevel.Beginner,
        link: 'https://learn.microsoft.com/training/modules/introduction-copilot-python/?WT.mc_id=academic&wt.mc_id=studentamb_484680',
        details: 'Boost productivity by using AI to generate code snippets, write tests, and explain complex logic.',
        prerequisites: ['Basic Coding Knowledge'],
        aiContent: 'WORKFLOW: AI-Assisted Coding. You will install the Copilot extension and sign in with GitHub. You will write comments like `# function to calculate fibonacci` and let Copilot generate the body. You will use the Chat sidebar to ask "Explain this code" or "Fix this bug". PREREQUISITES: Basic understanding of code so you can verify the AI suggestions.'
      },
      {
        id: 'py-apps',//kr
        title: 'Build intelligent apps with Python',
        topics: ['Python', 'Azure', 'Cloud Computing', 'Intelligent Applications'],
        level: CourseLevel.Beginner,
        link: 'https://learn.microsoft.com/shows/azure-essentials-show/build-intelligent-apps-with-python?WT.mc_id=academic&wt.mc_id=studentamb_490905',
        details: 'Video series on integrating Azure AI services and databases into your Python web applications.',
        prerequisites: ['Web Dev Basics', 'Python'],
        aiContent: 'WORKFLOW: Full stack integration. You will build a web backend using Flask, Django, or FastAPI. You will connect this app to an Azure PostgreSQL database. You will then add API calls to Azure OpenAI to create an "intelligent" feature, like summarizing user input. PREREQUISITES: Understanding of HTTP routes, databases, and Python web frameworks.'
      }
    ]
  },
  {
    id: 'web-dev',
    title: 'Web Development',
    description: 'Modern web technologies including React, Node.js, and ASP.NET Core.',
    courses: [
      {
        id: 'fcc-responsive-web',
        title: 'Responsive Web Design Certification',
        topics: [
          'HTML',
          'CSS',
          'Accessibility',
          'Modern Layouts',
          'Semantic HTML',
          'Responsive Design',
          'SEO Fundamentals',
          'Forms and Tables',
          'Project-Based Learning (Survey Form, Product Landing Page, etc.)'
        ],
        level: CourseLevel.Beginner,
        link: 'https://www.freecodecamp.org/learn/responsive-web-design-v9/',
        isRecommended: true,
        details: 'This self-paced, certification-track course teaches you the fundamentals of user-friendly, accessible web development using HTML and CSS. You learn through interactive labs and build multiple real-world projects (survey forms, landing pages, technical docs) to showcase your skills. The program emphasizes best practices in design and web accessibility, preparing you for modern front-end roles.',
        prerequisites: ['No prior experience required'],
        aiContent: 'WORKFLOW: Complete interactive modules on HTML, semantic markup, accessibility, and CSS, then apply your learning by building practical projects. Upon passing all certification projects and exams, you earn a freeCodeCamp Responsive Web Design certification. PREREQUISITES: No prior coding experience required.'
      },
      {
        id: 'web-start',       ///krrr
        title: 'Get started with web development using Visual Studio Code',
        topics: ['HTML', 'CSS', 'JavaScript', 'Web Development', 'Browser DevTools'],
        level: CourseLevel.Beginner,
        link: 'https://learn.microsoft.com/training/modules/get-started-with-web-development/?WT.mc_id=academic&wt.mc_id=studentamb_484680',
        details: 'Understand how the internet works and build your first static website using VS Code.',
        prerequisites: ['No prior experience required'],
        aiContent: 'WORKFLOW: The basics. You create a folder with `index.html`. You learn the structure of an HTML5 document. You open the file in a browser and use the "Inspect Element" tool to see the DOM. PREREQUISITES: None.'
      },
      {
        id: 'fcc-frontend-libraries',
        title: 'Front End Development Libraries Certification',
        topics: [
          'React',
          'Redux',
          'Bootstrap',
          'jQuery',
          'SASS',
          'UI Component Building',
          'State Management',
          'Single Page Apps',
          'React Project Labs'
        ],
        level: CourseLevel.Intermediate,
        link: 'https://www.freecodecamp.org/learn/front-end-development-libraries-v9/',
        isRecommended: true,
        details: 'An intermediate, project-based certification on the key libraries in modern front-end web development. You’ll develop hands-on proficiency in React and Redux patterns, use Bootstrap and jQuery for rapid UI features, practice SASS styling, and build production-grade front-end apps through guided projects. Certification validates your ability to design, build, and deploy scalable interfaces.',
        prerequisites: [
          'Basic JavaScript',
          'HTML/CSS familiarity'
        ],
        aiContent: 'WORKFLOW: You’ll build live React apps, manage global state with Redux, and apply Bootstrap/jQuery for rapid prototyping. The course includes SASS modules for scalable CSS, culminating in multiple real-world app projects. Complete all labs and challenges to earn the freeCodeCamp Front End Development Libraries certification. PREREQUISITES: Working knowledge of JavaScript and basic web skills.'
      },

      {
        id: 'web-html',
        title: 'Build web pages with HTML and CSS for beginners',      //meee
        topics: ['HTML', 'CSS', 'Web Pages', 'VS Code', 'Web Accessibility'],
        level: CourseLevel.Beginner,
        link: 'https://learn.microsoft.com/training/paths/build-web-pages-html-css-for-beginners/?WT.mc_id=academic&wt.mc_id=studentamb_484680',
        details: 'Deep dive into semantic HTML tags, CSS styling, layout techniques, and accessibility best practices.',
        prerequisites: ['No prior experience required'],
        aiContent: 'WORKFLOW: UI construction. You will use semantic tags (`<nav>`, `<main>`, `<footer>`) for better accessibility. You will link a CSS file. You will learn the Box Model (margin, border, padding) and modern layouts using CSS Flexbox and CSS Grid. PREREQUISITES: None.'
      },
      {
        id: 'fcc-backend-apis',
        title: 'Back End Development and APIs Certification',
        topics: [
          'Node.js',
          'Express.js',
          'REST APIs',
          'MongoDB',
          'CRUD Operations',
          'Authentication',
          'Testing and Debugging',
          'Project-Based Backend Apps'
        ],
        level: CourseLevel.Beginner,
        link: 'https://www.freecodecamp.org/learn/back-end-development-and-apis-v9/',
        isRecommended: true,
        details: 'A beginner-friendly full stack curriculum focused on server-side and API development with Node.js, Express.js, and MongoDB. You learn to build and test RESTful APIs, perform CRUD operations, manage authentication, and deploy real-world applications. The course is project-based and includes a certification on completion.',
        prerequisites: [
          'Basic JavaScript'
        ],
        aiContent: 'WORKFLOW: You move through hands-on backend concepts with live coding labs—building APIs, connecting to databases, securing endpoints, and debugging/testing your code. Final projects cement your skills, and earning the certification validates your backend credentials. PREREQUISITES: At minimum, basic JavaScript experience.'
      },

      {
        id: 'fcc-js',
        title: 'JavaScript Certification',
        topics: [
          'JavaScript Basics',
          'Data Structures',
          'ES6 Features',
          'Functions and Scope',
          'DOM Manipulation',
          'Object-Oriented Programming',
          'APIs and Fetch',
          'Test-Driven Development',
          'Frontend Project-Building'
        ],
        level: CourseLevel.Beginner,
        link: 'https://www.freecodecamp.org/learn/javascript-v9/',
        isRecommended: true,
        details: 'A comprehensive, hands-on program covering JavaScript from fundamentals to more advanced features like ES6, OOP, and APIs. Lessons combine interactive coding challenges, quizzes, and real-world projects (such as calculator and drum machine apps), ensuring strong foundations in JS for front-end development. Completion awards a recognized JavaScript certification.',
        prerequisites: ['No prior experience required'],
        aiContent: 'WORKFLOW: You start with JavaScript syntax, control flow, and arrays/objects, then progress to ES6 features (arrow functions, classes), DOM projects, and API usage. Each section includes challenges, labs, and milestone projects that test your learning before granting the certification. PREREQUISITES: No programming experience needed.'
      },

    ]
  },
  {
    id: 'csharp',
    title: 'C# Development',
    description: 'Core fundamentals for building robust applications on the .NET platform.',
    courses: [

      {
        id: 'cs-write',           //ee
        title: 'Write your first C# code',
        topics: ['C# Basics', 'Console Applications', 'Syntax', 'First Code'],
        level: CourseLevel.Beginner,
        link: 'https://learn.microsoft.com/training/modules/csharp-write-first/?WT.mc_id=academic&wt.mc_id=studentamb_490905',
        details: 'Focuses on syntax precision, compilation, and understanding the .NET runtime environment.',
        prerequisites: ['No prior experience required'],
        aiContent: 'WORKFLOW: Understanding the compiler. You learn that C# is compiled, not interpreted. You learn to identify Syntax errors (red squiggles) vs Logic errors. You understand the `Class` and `Method` structure required for any C# program. PREREQUISITES: None.'
      },
      {
        id: 'fcc-csharp',
        title: 'Foundational C# with Microsoft Certification',
        topics: [
          'C# Syntax',
          'Variables & Data Types',
          'Control Structures',
          'Methods & Functions',
          'Object-Oriented Programming',
          'Exception Handling & Debugging',
          'Console Applications',
          'Portfolio Projects'
        ],
        level: CourseLevel.Beginner,
        link: 'https://www.freecodecamp.org/learn/foundational-c-sharp-with-microsoft/',
        isRecommended: true,
        details: "Un parcours complet et interactif pour maîtriser la syntaxe C#, la programmation orientée objet, la gestion des exceptions et l’écriture d’applications console. Projets guidés et certifications Microsoft inclus.",
        prerequisites: [
          'Aucune connaissance préalable'
        ],
        aiContent: "WORKFLOW : Tu progresses section par section — syntaxe de base, logique, programmation orientée objet, gestion des erreurs, cas pratiques en console. Chaque module comporte des challenges interactifs, des projets et des exercices de debugging dans Visual Studio Code. PRÉREQUIS : Aucun. Le cours commence à zéro et t’emmène jusqu’à la construction d’applications réelles en C#."
      }

    ]
  },
  {
    id: 'cloud',
    title: 'Cloud Computing',   //
    description: 'Essential knowledge for cloud computing and infrastructure.',
    courses: [
      {
        id: 'ibm-cloud-fundamentals',
        title: 'Cloud Computing Fundamentals (Earn a credential!)',
        topics: [
          'Cloud Computing Basics',
          'Types of Cloud Services (IaaS, PaaS, SaaS)',
          'Deployment Models',
          'Virtualization and Containers',
          'Cloud Security and Compliance',
          'Practical Cloud Applications',
          'Cloud Career Paths'
        ],
        level: CourseLevel.Beginner,
        link: 'https://skills.yourlearning.ibm.com/activity/PLAN-2EC3A305F2C3?ngo-id=0302',
        isRecommended: true,
        details: 'This ~3-hour credential-earning course covers foundational cloud computing concepts, service models (IaaS, PaaS, SaaS), deployment strategies, security requirements, and real-world cloud solutions. Prepares you for further cloud certifications and offers a digital badge on completion.',
        prerequisites: ['No prior experience required'],
        aiContent: 'WORKFLOW: You explore cloud fundamentals via interactive lessons—identifying different service/deployment models, working through security and compliance challenges, and learning about containers/virtualization. The program ends with practical labs and a focus on cloud career opportunities. PREREQUISITES: No prior knowledge required.'
      },
      {
        id: 'cloud-intro',
        title: 'Introduction to Cloud Infrastructure: Describe Cloud Concepts',
        topics: ['Cloud Computing', 'Shared Responsibility Model', 'Azure Basics'],
        level: CourseLevel.Beginner,
        isRecommended: true,     ///me

        link: 'https://learn.microsoft.com/training/paths/microsoft-azure-fundamentals-describe-cloud-concepts/?WT.mc_id=academic&wt.mc_id=studentamb_490905',
        details: 'Explains IaaS, PaaS, SaaS models, and the benefits of cloud scalability and high availability.',
        prerequisites: ['No prior experience required'],
        aiContent: 'WORKFLOW: Conceptual foundation. You learn the difference between CapEx (upfront cost) and OpEx (pay-as-you-go). You understand the Shared Responsibility Model: what you manage vs what Microsoft manages in IaaS vs PaaS. PREREQUISITES: None.'
      },
      {
        id: 'fcc-relational-db',
        title: 'Relational Databases Certification',
        topics: [
          'Relational Database Design',
          'SQL',
          'PostgreSQL',
          'Normalization',
          'Data Modeling',
          'CRUD Operations',
          'Advanced Queries (Joins, Aggregation)',
          'Database Security',
          'Real-World Projects'
        ],
        level: CourseLevel.Beginner,
        link: 'https://www.freecodecamp.org/learn/relational-databases-v9/',
        details: 'This hands-on certification teaches you how to design, query, and manage relational databases with SQL and PostgreSQL. Lessons progress from ER modeling and normalization basics to advanced query techniques, security, and project deployment. You build several real-world projects for portfolio proof and certification.',
        prerequisites: ['No prior experience required'],
        aiContent: 'WORKFLOW: You learn step-by-step via coding labs—designing schemas, implementing normalization, writing SQL for CRUD and complex queries (joins, aggregates), and building project databases for practical experience. Completion earns the freeCodeCamp Relational Databases certification. PREREQUISITES: No prior SQL or database experience needed.'
      },
      {
        id: 'cloud-az900',
        title: 'Microsoft Azure Fundamentals (AZ-900)',
        topics: ['Azure Fundamentals', 'Cloud Services', 'Certification Prep'],
        level: CourseLevel.Beginner,
        link: 'https://learn.microsoft.com/credentials/certifications/resources/study-guides/az-900?WT.mc_id=academic&wt.mc_id=studentamb_490905',
        details: 'Study guide for the AZ-900 exam. Covers identity, governance, security, and cost management on Azure.',
        prerequisites: ['No prior experience required'],
        aiContent: 'WORKFLOW: Exam Prep. Key topics: Azure Identity (Entra ID/Active Directory), RBAC (Role-Based Access Control) for security, Azure Policy for governance, and using the Cost Management tools to set budget alerts. PREREQUISITES: None.'
      },
    ]
  },
  {
    id: 'data-eng',
    title: 'Data Engineering',
    description: 'Pipelines, data storage, and analytics on the Azure platform.',
    courses: [
      {
        id: 'de-dp203',
        title: 'Data Engineering on Microsoft Azure (DP-203T00)',
        topics: ['Data Engineering', 'Azure Synapse', 'Azure Databricks', 'Data Pipelines'],
        level: CourseLevel.Intermediate,
        link: 'https://learn.microsoft.com/training/courses/dp-203t00?WT.mc_id=academic&wt.mc_id=studentamb_484680',
        details: 'Design and implement data storage, processing, and security using Azure Synapse Analytics and Databricks.',
        prerequisites: ['SQL', 'Python/Scala', 'Azure Fundamentals'],
        aiContent: 'WORKFLOW: Heavy data movement. You use Azure Data Factory to ingest data from various sources. You use Apache Spark (in Synapse or Databricks) to transform that data using Python or Scala. You optimize data storage using the Parquet format and Delta Lake. You serve the data using Dedicated SQL Pools. PREREQUISITES: Strong SQL skills and coding ability in Python or Scala.'
      }
    ]
  },
  {
    id: 'cyber-security',
    title: 'Cyber Security',
    description: 'Protect systems, networks, and programs from digital attacks using Microsoft Security solutions.',
    courses: [
      {
        id: 'ibm-cybersecurity-intro',
        title: 'Getting Started with Cybersecurity',
        topics: [
          'Cybersecurity Fundamentals',
          'Key Elements & Threats',
          'Data Privacy',
          'CIA Triad Model',
          'Security Evaluation',
          'Cybersecurity Careers',
          'Essential Skills for Cyber Roles',
          'Intro to Security Tools'
        ],
        level: CourseLevel.Beginner,
        link: 'https://skillsbuild.org/college-students/course-catalog/getting-started-with-cybersecurity',
        isRecommended: true,
        details: 'This course provides foundational knowledge of cybersecurity including data protection, privacy, security evaluation using the CIA triad, and current cyber threats. Learners explore skills required for cybersecurity jobs and understand fundamental tools. Completing the course earns an IBM digital badge via Credly.',
        prerequisites: ['No prior experience required'],
        aiContent: 'WORKFLOW: In about 3 hours, you will learn conceptual basics, industry job outlook, and hands-on with tool demonstrations. You will understand the CIA triad (Confidentiality, Integrity, Availability), common threat scenarios, and essential practices for securing data. You finish by reviewing career roles and receive a badge backed by IBM/Credly for completion. PREREQUISITES: No prior cybersecurity experience required.'
      },
      {
        id: 'ibm-cybersecurity-fund',
        title: 'Cybersecurity Fundamentals',
        topics: [
          'Cybersecurity Concepts',
          'Types of Attacks',
          'Threat Groups',
          'Risk Management',
          'Cryptography',
          'Social Engineering',
          'Case Studies',
          'Incident Response',
          'Cybersecurity Careers'
        ],
        level: CourseLevel.Beginner,
        link: 'https://skillsbuild.org/college-students/course-catalog/cybersecurity-fundamentals',
        isRecommended: true,
        details: 'A foundational program for understanding cybersecurity threats, strategies, and practices. Learn the landscape of digital threats, cryptographic protections, real-world attack cases, incident response frameworks, and job market landscape. The course includes hands-on evaluation of threats/scenarios and is designed for further upskilling or entry roles. Earn an IBM Digital Badge on completion.',
        prerequisites: ['No prior experience required'],
        aiContent: 'WORKFLOW: In about 7.5 hours, you progress from theory to practical application—analyzing cyber threat groups, simulating attacks (social engineering, malware), evaluating cryptographic tools, and reviewing real incident case studies. The course covers prevention, detection, and response strategies, as well as pathways for cybersecurity upskilling and careers. PREREQUISITES: No prior experience required.'
      },
      {
        id: 'sc-900',
        title: 'Microsoft Security, Compliance, and Identity Fundamentals',
        topics: ['Security Concepts', 'Identity Management', 'Compliance', 'Microsoft Entra ID'],
        level: CourseLevel.Beginner,   //nekk
        link: 'https://learn.microsoft.com/credentials/certifications/security-compliance-and-identity-fundamentals/?WT.mc_id=academic&wt.mc_id=studentamb_484680',
        details: 'Learn the fundamentals of security, compliance, and identity (SCI) across cloud-based and related Microsoft services.',
        prerequisites: ['No prior experience required'],
        aiContent: 'WORKFLOW: Conceptual foundation. You will learn about the Zero Trust methodology, the Shared Responsibility Model, and defense in depth. You will explore Microsoft Entra ID (formerly Azure AD) for identity management and Microsoft Sentinel for security monitoring. PREREQUISITES: General familiarity with networking and cloud computing concepts.'
      },
      {
        id: 'sc-200',
        title: 'Microsoft Security Operations Anaflyst',
        topics: ['Threat Protection', 'Microsoft Sentinel', 'Defender for Cloud', 'KQL'],
        level: CourseLevel.Intermediate, //krim
        link: 'https://learn.microsoft.com/credentials/certifications/security-operations-analyst/?WT.mc_id=academic&wt.mc_id=studentamb_490905',
        details: 'Learn to mitigate threats using Microsoft Sentinel, Microsoft Defender for Cloud, and Microsoft 365 Defender.',
        prerequisites: ['SC-900 Skills', 'Basic Scripting'],
        aiContent: 'WORKFLOW: Threat hunting. You will use Kusto Query Language (KQL) to query logs in Microsoft Sentinel. You will configure incidents and alerts. You will set up automated responses (Playbooks) using Logic Apps to remediate security threats. PREREQUISITES: Understanding of security logs and basic query logic.'
      }
    ]
  }
];

