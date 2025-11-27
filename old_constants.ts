import { Category, CourseLevel } from './types';

export const COURSE_DATA: Category[] = [
  {
    id: 'recommended',
    title: '🚀 Key Recommendations',
    description: 'Curated paths specifically for ML, AutoML, AI systems, and Graph Databases.',
    courses: [
      {
        id: 'rec-ai-intro',
        title: 'Introduction to AI',
        topics: ['AI Concepts', 'Machine Learning', 'Azure Services', 'AI Solutions'],
        level: CourseLevel.Beginner,
        link: 'https://learn.microsoft.com/en-us/training/paths/introduction-to-ai-on-azure/',
        isRecommended: true,
        details: 'Learn how to use Azure AI services to build intelligent applications. This path covers the core concepts of AI and how to provision services in Azure.',
        prerequisites: ['Basic Cloud Concepts', 'General IT Knowledge'],
        aiContent: 'WORKFLOW: This course is designed for beginners. You will start by logging into the Azure Portal to create a multi-service "Azure AI Services" resource. You will then use the Azure AI Studio GUI to test pre-trained models for vision and language without writing code. Finally, you will explore the Responsible AI dashboard to understand fairness and inclusiveness. PREREQUISITES: No coding required. You should understand basic cloud concepts (SaaS vs PaaS) and have a general familiarity with IT terminology.'
      },
      {
        id: 'ml-concepts',
        title: 'Introduction to Machine Learning Concepts',
        topics: ['ML Fundamentals', 'ML Types', 'Training/Evaluation', 'Deep Learning'],
        level: CourseLevel.Beginner,
        link: 'https://learn.microsoft.com/en-us/training/modules/fundamentals-machine-learning/',
        details: 'Understand the core principles of ML: Regression, Classification, and Clustering, and how to evaluate models.',
        prerequisites: ['Basic Math'],
        aiContent: 'WORKFLOW: Theoretical deep dive. You will learn about the training process: splitting data into Training and Validation sets. You will understand evaluation metrics like Accuracy, Precision, Recall, and F1-Score. You will learn about Loss Functions and Gradient Descent conceptually. PREREQUISITES: High school algebra and basic statistics.',
        isRecommended: true,

      },
      {
        id: 'py-vscode',
        title: 'Getting Started with Python in VS Code',
        topics: ['Python Setup', 'VS Code', 'Debugging', 'Virtual Environments'],
        level: CourseLevel.Beginner,
        link: 'https://learn.microsoft.com/en-us/shows/visual-studio-code/getting-started-with-python-in-vs-code-official-video',
        details: 'Learn to use the Python extension for VS Code, including linting, formatting, and running Jupyter notebooks.',
        prerequisites: ['None'],
        aiContent: 'WORKFLOW: Editor configuration. You will install the official Microsoft Python Extension. You will select the correct Python Interpreter (kernel). You will configure a linter (like Pylint) to highlight errors and a formatter (like Black) to clean your code. PREREQUISITES: None.',
        isRecommended: true,

      },
      {
        id: 'web-start',
        title: 'Get started with web development using Visual Studio Code',
        topics: ['HTML', 'CSS', 'JavaScript', 'Web Development', 'Browser DevTools'],
        level: CourseLevel.Beginner,
        link: 'https://learn.microsoft.com/en-us/training/modules/get-started-with-web-development/',
        details: 'Understand how the internet works and build your first static website using VS Code.',
        prerequisites: ['None'],
        aiContent: 'WORKFLOW: The basics. You create a folder with `index.html`. You learn the structure of an HTML5 document. You open the file in a browser and use the "Inspect Element" tool to see the DOM. PREREQUISITES: None.',
        isRecommended: true

      },
      {
        id: 'rec-genai-intro',
        title: 'Introduction to Generative AI and Agents',
        topics: ['Generative AI', 'LLMs', 'Prompting', 'AI Agents', 'Agentic AI'],
        level: CourseLevel.Beginner,
        link: 'https://learn.microsoft.com/en-us/training/modules/fundamentals-generative-ai/',
        isRecommended: true,
        details: 'Understand how Large Language Models (LLMs) work, how to craft effective prompts, and the emerging field of autonomous AI agents.',
        prerequisites: ['None'],
        aiContent: 'WORKFLOW: This is a conceptual module with some playground exploration. You will explore the Azure OpenAI Studio "Chat" playground. You will experiment with System Messages to change the persona of the AI, adjust parameters like Temperature and Top-P to control randomness, and learn prompt engineering techniques like Few-Shot Prompting. It also introduces the concept of "Agents" that can use tools. PREREQUISITES: None. Just curiosity about how ChatGPT and similar tools work.'
      }, {
        id: 'cloud-intro',
        title: 'Introduction to Cloud Infrastructure: Describe Cloud Concepts',
        topics: ['Cloud Computing', 'Shared Responsibility Model', 'Azure Basics'],
        level: CourseLevel.Beginner,
        link: 'https://learn.microsoft.com/en-us/training/paths/microsoft-azure-fundamentals-describe-cloud-concepts/',
        details: 'Explains IaaS, PaaS, SaaS models, and the benefits of cloud scalability and high availability.',
        prerequisites: ['None'],
        aiContent: 'WORKFLOW: Conceptual foundation. You learn the difference between CapEx (upfront cost) and OpEx (pay-as-you-go). You understand the Shared Responsibility Model: what you manage vs what Microsoft manages in IaaS vs PaaS. PREREQUISITES: None.',
        isRecommended: true,

      },
      {
        id: 'ml-cert',
        title: 'Microsoft Certified: Azure Data Scientist Associate',
        topics: ['Data Science', 'ML Models', 'MLflow', 'Azure AI Services', 'Python'],
        level: CourseLevel.Intermediate,
        link: 'https://learn.microsoft.com/en-us/credentials/certifications/azure-data-scientist/',
        details: 'Certification path for data scientists applying their knowledge of data exploration and model training on Azure.',
        prerequisites: ['DP-100 Skills'],
        aiContent: 'WORKFLOW: Validation step. The exam tests your ability to: Configure the workspace, Run experiments, Optimize models, and Manage and Deploy models. PREREQUISITES: Extensive hands-on experience with the DP-100 curriculum.',
        isRecommended: true,

      }
    ]
  },
  {
    id: 'ai-genai',
    title: 'Artificial Intelligence & Generative AI',
    description: 'Master the future of technology with courses on LLMs, Copilot, and Azure AI.',
    courses: [
      {
        id: 'ai-intro',
        title: 'Introduction to AI',
        topics: ['AI Concepts', 'Machine Learning', 'Azure Services', 'AI Solutions'],
        level: CourseLevel.Beginner,
        link: 'https://learn.microsoft.com/en-us/training/paths/introduction-to-ai-on-azure/',
        details: 'Get started with Artificial Intelligence on Azure. Learn about Computer Vision, NLP, and Document Intelligence services.',
        prerequisites: ['None'],
        aiContent: 'WORKFLOW: Users navigate the Azure Portal to instantiate services. They use the Vision Studio and Language Studio to upload sample images and text, observing how the AI interprets them. PREREQUISITES: None. This is an entry-level overview of capabilities.'
      },
      {
        id: 'ai-genai-intro',
        title: 'Introduction to Generative AI and Agents',
        topics: ['Generative AI', 'LLMs', 'Prompting', 'AI Agents', 'Agentic AI'],
        level: CourseLevel.Beginner,
        link: 'https://learn.microsoft.com/en-us/training/modules/fundamentals-generative-ai/',
        details: 'Explore the fundamentals of Generative AI, including how models are trained and how to use them responsibly.',
        prerequisites: ['None'],
        aiContent: 'WORKFLOW: Conceptual learning about Transformer architecture and Tokens. Users learn the difference between "completion" models and "chat" models. Covers the Responsible AI framework: Fairness, Reliability, Privacy, Inclusiveness, Transparency, and Accountability. PREREQUISITES: None.'
      },
      {
        id: 'ai-900',
        title: 'AI-900: Fundamentals of Generative AI',
        topics: ['Generative AI', 'LLMs', 'Microsoft Copilot', 'Azure AI Studio', 'Responsible AI'],
        level: CourseLevel.Beginner,
        link: 'https://learn.microsoft.com/en-us/shows/on-demand-instructor-led-training-series/ai-900-05-fy25',
        details: 'A video-led training series preparing you for the AI-900 exam, focusing on Generative AI workloads.',
        prerequisites: ['General Tech Interest'],
        aiContent: 'WORKFLOW: Exam preparation focused. You will learn to distinguish between Regression (predicting values), Classification (sorting data), and Clustering (grouping data). You will study the capabilities of Generative AI: text generation, code generation, and image generation (DALL-E). PREREQUISITES: General technical literacy.'
      },
      {
        id: 'ai-102',
        title: 'Develop AI solutions (AI-102T00)',
        topics: ['Generative AI Apps', 'AI Agents', 'Computer Vision', 'Information Extraction'],
        level: CourseLevel.Intermediate,
        link: 'https://learn.microsoft.com/en-us/training/courses/ai-102t00',
        details: 'Learn to design and implement Azure AI solutions. Covers Cognitive Services, Applied AI services, and bot development.',
        prerequisites: ['Python/C#', 'REST APIs'],
        aiContent: 'WORKFLOW: (See rec-ai-102). This is the standard engineering course. Key activities: Implementing the "Orchestrator" pattern for AI agents, using the Azure Bot Framework SDK, and indexing documents for Retrieval Augmented Generation (RAG) using Azure AI Search. PREREQUISITES: Coding fluency and understanding of async/await patterns.'
      },
      {
        id: 'ai-eng',
        title: 'Microsoft Certified: Azure AI Engineer Associate',
        topics: ['Azure AI Services', 'NLP', 'Computer Vision', 'Generative AI', 'AI Solutions'],
        level: CourseLevel.Intermediate,
        link: 'https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/',
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
        title: 'Introduction to Machine Learning Concepts',
        topics: ['ML Fundamentals', 'ML Types', 'Training/Evaluation', 'Deep Learning'],
        level: CourseLevel.Beginner,
        link: 'https://learn.microsoft.com/en-us/training/modules/fundamentals-machine-learning/',
        details: 'Understand the core principles of ML: Regression, Classification, and Clustering, and how to evaluate models.',
        prerequisites: ['Basic Math'],
        aiContent: 'WORKFLOW: Theoretical deep dive. You will learn about the training process: splitting data into Training and Validation sets. You will understand evaluation metrics like Accuracy, Precision, Recall, and F1-Score. You will learn about Loss Functions and Gradient Descent conceptually. PREREQUISITES: High school algebra and basic statistics.',
        isRecommended: true,

      },
      {
        id: 'ml-intro',
        title: 'Introduction to Azure Machine Learning',
        topics: ['Azure ML Platform', 'Lifecycle Management', 'ML Workflows'],
        level: CourseLevel.Beginner,
        link: 'https://learn.microsoft.com/en-us/training/modules/intro-to-azure-ml/',
        details: 'Learn to provision an Azure Machine Learning workspace and use the studio interface for managing assets.',
        prerequisites: ['Azure Fundamentals'],
        aiContent: 'WORKFLOW: Setup focused. You create the AML Workspace and its dependent resources (Storage Account, Key Vault, Container Registry, App Insights). You explore the "Studio" web interface to view Datasets, Experiments, and Models. PREREQUISITES: Azure Fundamentals (AZ-900 level knowledge).'
      },
      {
        id: 'ml-create',
        title: 'Create Machine Learning Models',
        topics: ['Regression', 'Classification', 'Clustering', 'Deep Learning'],
        level: CourseLevel.Intermediate,
        link: 'https://learn.microsoft.com/en-us/training/paths/create-machine-learn-models/',
        details: 'Hands-on labs using Python to train models with Scikit-Learn and PyTorch within the Azure environment.',
        prerequisites: ['Python', 'Basic ML Concepts'],
        aiContent: 'WORKFLOW: Hands-on scripting. You will write `train.py` scripts. You will use the `argparse` library to pass hyperparameters into your script. You will use the `azure-ai-ml` Python SDK v2 to submit these scripts as "Jobs" to a compute cluster. PREREQUISITES: Proficiency with Python scripting and command-line arguments.'
      },
      {
        id: 'ml-dp100',
        title: 'Designing and implementing a data science solution (DP-100T01)',
        topics: ['Data Science', 'Azure ML', 'Model Training', 'Deployment', 'MLflow', 'Python'],
        level: CourseLevel.Intermediate,
        link: 'https://learn.microsoft.com/en-us/training/courses/dp-100t01',
        details: 'Advanced workflow management: Data drift detection, hyperparameter tuning, and managing endpoints.',
        prerequisites: ['Python', 'Azure Experience'],
        aiContent: 'WORKFLOW: (See rec-dp-100). Advanced MLOps tasks. You will configure "Sweeps" for Hyperparameter tuning (Hyperdrive). You will use AutoML to automatically find the best model. You will set up Data Drift monitors to check if your model is becoming stale in production. PREREQUISITES: Deep Python and Data Science knowledge.'
      },
      {
        id: 'ml-pipeline',
        title: 'Run pipelines in Azure Machine Learning',
        topics: ['ML Pipelines', 'Automation', 'Components', 'Workflow Orchestration'],
        level: CourseLevel.Beginner,
        link: 'https://learn.microsoft.com/en-us/training/modules/run-pipelines-azure-machine-learning/',
        details: 'Automate your workflows by connecting data prep, training, and evaluation steps into reproducible pipelines.',
        prerequisites: ['Azure ML Workspace'],
        aiContent: 'WORKFLOW: Component-based architecture. You will define "Components" (reusable blocks of code with defined inputs/outputs). You will link these components together into a Pipeline using the `@dsl.pipeline` decorator in Python. This creates a DAG (Directed Acyclic Graph) of execution steps. PREREQUISITES: Understanding of modular programming.'
      },
      {
        id: 'ml-cert',
        title: 'Microsoft Certified: Azure Data Scientist Associate',
        topics: ['Data Science', 'ML Models', 'MLflow', 'Azure AI Services', 'Python'],
        level: CourseLevel.Intermediate,
        link: 'https://learn.microsoft.com/en-us/credentials/certifications/azure-data-scientist/',
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
        id: 'py-analyze',
        title: 'Explore and analyze data with Python',
        topics: ['Data Exploration', 'NumPy', 'Pandas', 'Matplotlib', 'Data Analysis'],
        level: CourseLevel.Intermediate,
        link: 'https://learn.microsoft.com/en-us/training/modules/explore-analyze-data-with-python/',
        details: 'Use Jupyter notebooks to manipulate large datasets and create visualizations for storytelling.',
        prerequisites: ['Python Syntax'],
        aiContent: 'WORKFLOW: (See rec-py-explore). Emphasis on storytelling with data. You will use Matplotlib to create Line, Bar, and Pie charts. You will calculate correlations between variables using `df.corr()`. PREREQUISITES: Python syntax and basic math.'
      },
      {
        id: 'py-vs',
        title: 'Python Development with Visual Studio',
        topics: ['Python Development', 'Visual Studio IDE', 'Python Apps', 'Debugging'],
        level: CourseLevel.Beginner,
        link: 'https://learn.microsoft.com/en-us/visualstudio/python/?view=visualstudio',
        details: 'Set up Visual Studio 2022 for Python development, including environment management and debugging tools.',
        prerequisites: ['None'],
        aiContent: 'WORKFLOW: IDE Setup. You will install the "Python Development" workload in the Visual Studio Installer. You will manage Python environments (Conda, venv) via the GUI. You will learn to set Breakpoints, Inspect Variables, and use the Immediate Window for debugging. PREREQUISITES: None.'
      },
      {
        id: 'py-win',
        title: 'Get started with Python using Windows',
        topics: ['Python Setup', 'Development Environment', 'Windows Configuration'],
        level: CourseLevel.Beginner,
        link: 'https://learn.microsoft.com/en-us/windows/python/',
        details: 'A guide to installing Python on Windows, configuring PATH, and using the Windows Terminal.',
        prerequisites: ['Windows 10/11'],
        aiContent: 'WORKFLOW: OS Configuration. You will decide between the Microsoft Store Python installer (simple) vs the direct download (flexible). You will learn about adding Python to the System PATH variable so you can run `python` from any terminal. PREREQUISITES: Basic familiarity with Windows.'
      },
      {
        id: 'py-win-begin',
        title: 'Get started using Python on Windows for beginners',
        topics: ['Python Basics', 'Development Setup', 'Environment Configuration'],
        level: CourseLevel.Beginner,
        link: 'https://learn.microsoft.com/en-us/windows/python/beginners',
        details: 'Absolute beginner guide to writing your first "Hello World" script on a Windows machine.',
        prerequisites: ['None'],
        aiContent: 'WORKFLOW: Your first steps. You will open VS Code. You will create a file named `hello.py`. You will write `print("Hello World")`. You will run this using the terminal command `python hello.py`. PREREQUISITES: None.'
      },
      {
        id: 'py-vscode',
        title: 'Getting Started with Python in VS Code',
        topics: ['Python Setup', 'VS Code', 'Debugging', 'Virtual Environments'],
        level: CourseLevel.Beginner,
        link: 'https://learn.microsoft.com/en-us/shows/visual-studio-code/getting-started-with-python-in-vs-code-official-video',
        details: 'Learn to use the Python extension for VS Code, including linting, formatting, and running Jupyter notebooks.',
        prerequisites: ['None'],
        aiContent: 'WORKFLOW: Editor configuration. You will install the official Microsoft Python Extension. You will select the correct Python Interpreter (kernel). You will configure a linter (like Pylint) to highlight errors and a formatter (like Black) to clean your code. PREREQUISITES: None.'
      },
      {
        id: 'py-test',
        title: 'Testing with Pytest',
        topics: ['Python Testing', 'Pytest Framework', 'Quality Assurance', 'Test Patterns'],
        level: CourseLevel.Beginner,
        link: 'https://learn.microsoft.com/en-us/training/modules/test-python-with-pytest/',
        details: 'Ensure code quality by writing effective unit tests and parameterized tests using the Pytest framework.',
        prerequisites: ['Intermediate Python'],
        aiContent: 'WORKFLOW: Test Driven Development (TDD) basics. You will write test functions prefixed with `test_`. You will use the `assert` keyword to check conditions. You will run the `pytest` command to execute all tests and view the report. You will use "Fixtures" to handle setup and teardown logic. PREREQUISITES: Comfortable writing Python functions and classes.'
      },
      {
        id: 'py-copilot',
        title: 'Using GitHub Copilot with Python',
        topics: ['GitHub Copilot', 'AI Pair Programming', 'Python Development'],
        level: CourseLevel.Beginner,
        link: 'https://learn.microsoft.com/en-us/training/modules/introduction-copilot-python/',
        details: 'Boost productivity by using AI to generate code snippets, write tests, and explain complex logic.',
        prerequisites: ['Basic Coding Knowledge'],
        aiContent: 'WORKFLOW: AI-Assisted Coding. You will install the Copilot extension and sign in with GitHub. You will write comments like `# function to calculate fibonacci` and let Copilot generate the body. You will use the Chat sidebar to ask "Explain this code" or "Fix this bug". PREREQUISITES: Basic understanding of code so you can verify the AI suggestions.'
      },
      {
        id: 'py-apps',
        title: 'Build intelligent apps with Python',
        topics: ['Python', 'Azure', 'Cloud Computing', 'Intelligent Applications'],
        level: CourseLevel.Beginner,
        link: 'https://learn.microsoft.com/en-us/shows/azure-essentials-show/build-intelligent-apps-with-python',
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
        id: 'web-start',
        title: 'Get started with web development using Visual Studio Code',
        topics: ['HTML', 'CSS', 'JavaScript', 'Web Development', 'Browser DevTools'],
        level: CourseLevel.Beginner,
        link: 'https://learn.microsoft.com/en-us/training/modules/get-started-with-web-development/',
        details: 'Understand how the internet works and build your first static website using VS Code.',
        prerequisites: ['None'],
        aiContent: 'WORKFLOW: The basics. You create a folder with `index.html`. You learn the structure of an HTML5 document. You open the file in a browser and use the "Inspect Element" tool to see the DOM. PREREQUISITES: None.'
      },
      {
        id: 'web-html',
        title: 'Build web pages with HTML and CSS for beginners',
        topics: ['HTML', 'CSS', 'Web Pages', 'VS Code', 'Web Accessibility'],
        level: CourseLevel.Beginner,
        link: 'https://learn.microsoft.com/en-us/training/paths/build-web-pages-html-css-for-beginners/',
        details: 'Deep dive into semantic HTML tags, CSS styling, layout techniques, and accessibility best practices.',
        prerequisites: ['None'],
        aiContent: 'WORKFLOW: UI construction. You will use semantic tags (`<nav>`, `<main>`, `<footer>`) for better accessibility. You will link a CSS file. You will learn the Box Model (margin, border, padding) and modern layouts using CSS Flexbox and CSS Grid. PREREQUISITES: None.'
      },
      {
        id: 'web-dotnet',
        title: 'Introduction to .NET web development with ASP.NET Core',
        topics: ['Web Development', 'ASP.NET Core', '.NET Framework', 'Web Apps'],
        level: CourseLevel.Beginner,
        link: 'https://learn.microsoft.com/en-us/training/modules/introduction-to-aspnet-core/',
        details: 'Build dynamic backend services and web applications using C# and the ASP.NET Core framework.',
        prerequisites: ['C# Basics'],
        aiContent: 'WORKFLOW: Server-side C#. You will use the CLI command `dotnet new webapp` to scaffold a project. You will understand the Razor Pages architecture or the MVC (Model-View-Controller) pattern. You will implement Dependency Injection and configure the Middleware pipeline in `Program.cs`. PREREQUISITES: Basic C# syntax.'
      },
      {
        id: 'web-azure',
        title: 'Training with JavaScript',
        topics: ['JavaScript', 'Azure', 'React', 'Static Web Apps', 'Cloud Services'],
        level: CourseLevel.Beginner,
        link: 'https://learn.microsoft.com/en-us/azure/developer/javascript/learn-azure-javascript',
        details: 'Learn how to host Node.js, React, or Angular applications on Azure using App Service or Static Web Apps.',
        prerequisites: ['JavaScript', 'Git'],
        aiContent: 'WORKFLOW: Deployment. You will push your React/Vue/Angular code to GitHub. You will connect your repository to Azure Static Web Apps, which automatically creates a GitHub Actions workflow to build and deploy your site. You will optionally add a serverless API using Azure Functions. PREREQUISITES: JavaScript and Git basics.'
      },
      {
        id: 'web-js',
        title: "Beginner's Series to: JavaScript",
        topics: ['JavaScript', 'Node.js', 'Programming Fundamentals', 'ES6'],
        level: CourseLevel.Beginner,
        link: 'https://learn.microsoft.com/en-us/shows/beginners-series-to-javascript/',
        details: 'A video series covering syntax, variables, functions, and event handling in JavaScript.',
        prerequisites: ['None'],
        aiContent: 'WORKFLOW: Scripting logic. You will work in the browser console or a `.js` file. You will learn `let` vs `const`. You will write functions to manipulate the DOM (e.g., changing the text of a button when clicked). You will fetch data from an API using `fetch()`. PREREQUISITES: None.'
      }
    ]
  },
  {
    id: 'csharp',
    title: 'C# Development',
    description: 'Core fundamentals for building robust applications on the .NET platform.',
    courses: [
      {
        id: 'cs-start',
        title: 'Write your first code using C# (Get started with C#, Part 1)',
        topics: ['C# Syntax', 'Object-Oriented Programming', '.NET', 'Basic Programming'],
        level: CourseLevel.Beginner,
        link: 'https://learn.microsoft.com/en-us/training/paths/get-started-c-sharp-part-1/',
        details: 'Hands-on module to write and run your first C# program, understanding data types and basic logic.',
        prerequisites: ['None'],
        aiContent: 'WORKFLOW: Interactive browser editor. You write `Console.WriteLine("Hello World");`. You learn about strict typing: `int`, `string`, `bool`. You write `if/else` logic. PREREQUISITES: None.'
      },
      {
        id: 'cs-write',
        title: 'Write your first C# code',
        topics: ['C# Basics', 'Console Applications', 'Syntax', 'First Code'],
        level: CourseLevel.Beginner,
        link: 'https://learn.microsoft.com/en-us/training/modules/csharp-write-first/',
        details: 'Focuses on syntax precision, compilation, and understanding the .NET runtime environment.',
        prerequisites: ['None'],
        aiContent: 'WORKFLOW: Understanding the compiler. You learn that C# is compiled, not interpreted. You learn to identify Syntax errors (red squiggles) vs Logic errors. You understand the `Class` and `Method` structure required for any C# program. PREREQUISITES: None.'
      },
      {
        id: 'cs-jump',
        title: 'Programming in C# Jump Start',
        topics: ['C# Fundamentals', '.NET Framework', 'Programming Concepts'],
        level: CourseLevel.Beginner,
        link: 'https://learn.microsoft.com/en-us/shows/programming-in-c-jump-start/',
        details: 'Fast-paced video course for developers moving to C# from other languages.',
        prerequisites: ['Programming Logic'],
        aiContent: 'WORKFLOW: Accelerated learning. Designed for those who know Java or C++. Quickly covers syntax differences, LINQ (Language Integrated Query) for data manipulation, and Async/Await patterns. PREREQUISITES: Prior coding experience in another language.'
      }
    ]
  },
  {
    id: 'cloud',
    title: 'Cloud & Azure Fundamentals',
    description: 'Essential knowledge for cloud computing and infrastructure.',
    courses: [
      {
        id: 'cloud-intro',
        title: 'Introduction to Cloud Infrastructure: Describe Cloud Concepts',
        topics: ['Cloud Computing', 'Shared Responsibility Model', 'Azure Basics'],
        level: CourseLevel.Beginner,
        link: 'https://learn.microsoft.com/en-us/training/paths/microsoft-azure-fundamentals-describe-cloud-concepts/',
        details: 'Explains IaaS, PaaS, SaaS models, and the benefits of cloud scalability and high availability.',
        prerequisites: ['None'],
        aiContent: 'WORKFLOW: Conceptual foundation. You learn the difference between CapEx (upfront cost) and OpEx (pay-as-you-go). You understand the Shared Responsibility Model: what you manage vs what Microsoft manages in IaaS vs PaaS. PREREQUISITES: None.'
      },
      {
        id: 'cloud-az900',
        title: 'Microsoft Azure Fundamentals (AZ-900)',
        topics: ['Azure Fundamentals', 'Cloud Services', 'Certification Prep'],
        level: CourseLevel.Beginner,
        link: 'https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-900',
        details: 'Study guide for the AZ-900 exam. Covers identity, governance, security, and cost management on Azure.',
        prerequisites: ['None'],
        aiContent: 'WORKFLOW: Exam Prep. Key topics: Azure Identity (Entra ID/Active Directory), RBAC (Role-Based Access Control) for security, Azure Policy for governance, and using the Cost Management tools to set budget alerts. PREREQUISITES: None.'
      },
      {
        id: 'cloud-dp900',
        title: 'Introduction to Microsoft Azure Data (DP-900T00)',
        topics: ['Data Concepts', 'Relational Databases', 'Azure Data Services'],
        level: CourseLevel.Beginner,
        link: 'https://learn.microsoft.com/en-us/training/courses/dp-900t00',
        details: 'Learn about core data concepts, including relational (SQL) vs. non-relational (NoSQL) data workloads.',
        prerequisites: ['None'],
        aiContent: 'WORKFLOW: Data Architecture concepts. You distinguish between OLTP (Transactional) and OLAP (Analytical) workloads. You compare Azure SQL Database (Relational) with Azure Cosmos DB (NoSQL/JSON). You learn about ETL (Extract, Transform, Load) processes. PREREQUISITES: None.'
      }
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
        link: 'https://learn.microsoft.com/en-us/training/courses/dp-203t00',
        details: 'Design and implement data storage, processing, and security using Azure Synapse Analytics and Databricks.',
        prerequisites: ['SQL', 'Python/Scala', 'Azure Fundamentals'],
        aiContent: 'WORKFLOW: Heavy data movement. You use Azure Data Factory to ingest data from various sources. You use Apache Spark (in Synapse or Databricks) to transform that data using Python or Scala. You optimize data storage using the Parquet format and Delta Lake. You serve the data using Dedicated SQL Pools. PREREQUISITES: Strong SQL skills and coding ability in Python or Scala.'
      }
    ]
  }
];