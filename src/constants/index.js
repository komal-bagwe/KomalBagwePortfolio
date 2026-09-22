import {
    nyulogo,
    mulogo,
    rag,
    security,
    ngo,
    ads,
    stock,
    auction,
    ratelimiter,
    dining,
    meeting
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "skills",
      title: "Skills",
    },
    {
      id: "experience",
      title: "Experience",
    },
    {
      id: "education",
      title: "Education",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  

  const education = [
    {
      logo: nyulogo,
      school: 'New York University',
      degree: 'Master of Science in Computer Science',
      course: [
        'Algorithms', 
        'Artificial Intelligence', 
        'Computer Vision', 
        'Machine Learning', 
        'Big Data', 
        'Deep Learning', 
        'Database Systems'
      ],
      year: 'Sept 2024 - May 2026',
    },
    {
      logo: mulogo,
      school: 'University of Mumbai',
      degree: 'Bachelor of Engineering in Computer Engineering',
      course: [
        'Object Oriented Programming', 
        'Software Engineering', 
        'Distributed Systems', 
        'Cloud Computing', 
        'Networking', 
        'Operating System'
      ],
      year: 'Aug 2016 - Jun 2019',
    },
  ];
  
  const skills = [
    { category: "Languages", details: "Python, Java, C++, JavaScript, TypeScript, HTML/CSS, SQL, PHP, Bash (Shell Scripting)" },
    { category: "Frameworks & Tools", details: "Spring Boot, ReactJS, FastAPI, Docker, Kubernetes, Kafka, Jenkins, Git, JIRA, Selenium, Postman, Tailwind CSS, Node.js, AngularJS, Maven, Gradle" },
    { category: "Cloud & Databases", details: "AWS (SES · SQS · EC2 · Lambda · ECS · DynamoDB · RDS · S3), Azure, GCP (BigQuery · Kubernetes Engine), PostgreSQL, MySQL, Oracle, MongoDB, Hadoop, Hibernate" },
    { category: "AI/ML & Data", details: "TensorFlow, PyTorch, NumPy, OpenCV, PySpark, Pandas, Scikit-learn" },
    { category: "Other Skills", details: "Full-Stack Development, Backend Architecture, Distributed Systems, System Design, Microservices, REST APIs, CI/CD, Agile, Scrum, Test Automation, SDLC" },
  ];
  
  const experiences = [
    {
      company: 'New York University',
      title: 'Course Assistant — Agile Software Development & DevOps',
      duration: 'Sept 2025 - Present',
      responsibilities: [
        'Support 190+ students in MERN Stack development and DevOps (Docker, DigitalOcean, CI/CD); guide student teams through Agile/Scrum workflows, from design in Figma to sprint planning and user story management using GitHub Projects.',
        'Manage a team of 3 graders and 2 tutors to ensure consistent and timely academic support.',
        'Created a bash script to automate repository insights for grading — scans student repos to generate reports on PR stats, commit history, and individual contributor metrics.',
      ],
    },
    {
      company: 'Accenture',
      title: 'Software Engineer II',
      duration: 'Dec 2021 - Aug 2024',
      responsibilities: [
        'Redesigned single-queue ActiveMQ into a dynamically configurable multi-consumer architecture and DLQ fault tolerance, scaling the pharmacy notification pipeline without message loss.',
        'Built a Spring Boot configuration sync job with 4+ entity-specific update methods, keeping the Enterprise Pharmacy System (EPS) aligned with admin-portal changes.',
        'Stepped as tech lead for an 8-member team across 15+ Agile sprints during a leadership gap, owning sprint refinement, design reviews, and stakeholder coordination while maintaining production stability.',
        'Drove end-to-end technical design for 4+ pharmacy features as Lead Designer, authoring system and deployment specs in Confluence across multiple program increments.',
        'Built microservice integration consuming patient card details from EPR into EPS, resolving identity-mismatch rejections and eliminating manual pharmacist intervention on Medi-Cal claims.',
      ],
    },
    {
      company: 'Accenture',
      title: 'Software Engineer',
      duration: 'Jun 2021 - Nov 2021',
      responsibilities: [
        'Performed root-cause analysis on stale delivery-date notifications reaching members, then engineered pickup-type-aware promise time calculation across 3 notification triggers to resolve incorrect order completion times.',
        'Persisted failed file transfer metadata in MongoDB, reducing defect team diagnosis time by 70% by eliminating log analysis.',
        'Built a Splunk dashboard with parameterized inputs (pub-sub, file name, date) to isolate failed transfers from high-volume logs, cutting investigation time by 90%.',
        'Migrated legacy manual testing to automated Selenium scripts, cutting manual QA time by 80% and increasing regression coverage.',
        'Served as DRI on production support for high-volume transaction modules, owning incident monitoring, root-cause investigation, and resolution to maintain service availability.',
      ],
    },
  ];
  
  const projects = [
    {
      category: 'Full Stack',
      items: [
        {
          title: 'TraceMyData',
          image: security,
          description: [
            'Privacy awareness platform that crawls websites, detects third-party trackers, and computes an ML-based privacy risk score.',
            'Secured with JWT authentication and Google OAuth2, with double opt-in email verification, password reset flows, and BCrypt password hashing.',
            'Containerized all services (React frontend, Spring Boot backend, Python ML microservice, PostgreSQL) using Docker Compose.',
            'Automated per-website CSV privacy audit reports covering tracker detections and risk scores.',
          ],
          techStack: 'React, TypeScript, Java, Spring Boot, Python, FastAPI, PostgreSQL, JWT, OAuth2, Docker, Kubernetes',
          github: 'https://github.com/komal-bagwe/TraceMyData',
        },
        {
          title: 'WelcomeHome',
          image: ngo,
          description: [
            'Web app for an NGO to manage donors, inventory, and role-based workflows for admins and volunteers.',
            'Designed a normalized MySQL schema ensuring ACID compliance and referential integrity.',
            'Implemented complex SQL joins for inventory search and task retrieval.',
            'Secured with Spring Security for role-based access control across admin and volunteer roles.',
          ],
          techStack: 'Java, Spring Boot, Spring Security, MySQL, ReactJS, CSS',
          github: 'https://github.com/komal-bagwe/WelcomeHome',
        },
      ],
    },
    {
      category: 'AI / ML',
      items: [
        {
          title: 'ROS2 RAG Assistant',
          image: rag,
          description: [
            'Domain-specific RAG chatbot helping robotics engineers get answers about ROS2, Nav2, MoveIt2, and Gazebo — grounded in real documentation.',
            'Automated ETL pipeline scrapes 27+ ROS2 documentation sources into MongoDB with upsert-based deduplication; all-mpnet-base-v2 sentence transformer embeddings with 512-token overlapping chunking stored in Qdrant vector database.',
            'Integrated Llama3.1-8b via Groq API replacing local LLM after diagnosing RAM constraints — reduced response time from 31 minutes to under 3 seconds.',
            'Evaluated with RAGAS framework on 8-question golden dataset achieving 0.94 context recall and 0.85 answer relevancy; experiment tracking with ClearML and containerized with Docker Compose.',
          ],
          techStack: 'Python, Sentence Transformers, Qdrant, MongoDB, Groq API, Llama3.1, ClearML, Gradio, Docker',
          github: 'https://github.com/komal-bagwe/rag-ros2',
        },
        {
          title: 'VibeTrader',
          image: stock,
          description: [
            'Hybrid AI trading engine fusing 60-hour LSTM price sequences with LLM-generated sentiment scores from financial news.',
            'Integrated Google Gemini via LangChain for semantic "vibe scoring" of news, outperforming traditional VADER sentiment tools.',
            'Event-driven scheduling with Apache Kafka: a Time Daemon triggers hourly inference and daily model retraining pipelines.',
            'PySpark ETL processes 5+ years of historical stock data; Redis caches real-time inference signals for low-latency access.',
          ],
          techStack: 'Python, TensorFlow, PyTorch, LangChain, Gemini API, Apache Kafka, PySpark, Redis, MongoDB, Selenium',
          github: 'https://github.com/komal-bagwe/VibeTrader',
        },
        {
          title: 'RAG + Agentic Ad-Buying Assistant',
          image: ads,
          description: [
            'Built a second-price auction simulator (Monte Carlo, up to 5,000 auctions/day) and a daily agent loop that decides whether to raise, lower, or hold the bid based on recent performance.',
            'Implemented RAG with Cohere embeddings and Qdrant Cloud over a bidding-strategy knowledge base, with an LLM (via Groq) making the final decision.',
            "Added guardrails (±20% max change per decision, $0.10 minimum bid) so the agent can't make unsafe bid swings.",
            "Built a Streamlit UI to configure campaigns, run simulations, and view the agent's day-by-day bids and reasoning.",
          ],
          techStack: 'Python, RAG, LLM Agents, Vector Databases, Prompt Engineering, Streamlit',
          github: 'https://github.com/komal-bagwe/ad-buying-agent',
        },

      ],
    },
    {
      category: 'Cloud',
      items: [
        {
          title: 'Dining Concierge Chatbot',
          image: dining,
          description: [
            'Fully serverless AWS chatbot recommending NYC restaurants by cuisine, location, time, and group size.',
            'End-to-end pipeline: Amazon Lex (NLP) → Lambda → SQS → OpenSearch → SES, with EventBridge scheduling suggestion delivery every minute.',
            'Indexed 1,000+ Yelp restaurants into DynamoDB and OpenSearch for fast, cuisine-filtered retrieval.',
            'Implemented a Dead Letter Queue for failed email deliveries with automatic retry logic.',
          ],
          techStack: 'AWS (Lex, Lambda, API Gateway, DynamoDB, OpenSearch, SQS, SES, S3, EventBridge), Python',
          github: 'https://github.com/komal-bagwe/Dining-Conceirge',
        },
        {
          title: 'Live Flash Auction Platform',
          image: auction,
          description: [
            'Real-time auction platform with 4 independent microservices (auction management, bid processing, WebSocket, timer) deployed on AWS EKS.',
            'WebSocket service powers live bidding, chat, and participant tracking; atomic bid validation with anti-snipe logic prevents race conditions.',
            'AWS stack: RDS PostgreSQL (auctions), ElastiCache Redis (pub/sub), DynamoDB (bid history), SQS + Lambda (async notifications), Cognito (auth), ALB (routing).',
          ],
          techStack: 'Python, React, TypeScript, AWS EKS, RDS PostgreSQL, ElastiCache Redis, DynamoDB, SQS, Lambda, Cognito, Kubernetes',
          github: 'https://github.com/komal-bagwe/live-flash-auction',
        },
      ],
    },
    {
      category: 'Distributed Systems',
      items: [
        {
          title: 'Multi-Node WebRTC Video Interview Platform with AI Proctoring',
          image: meeting,
          description: [
            'Built a WebRTC signaling layer with FastAPI and WebSockets, running as two stateless instances that coordinate through Redis Pub/Sub. Each instance subscribes only to channels for its own connected clients.',
            'Added a local routing shortcut: if both peers sit on the same instance, messages skip Redis entirely. Set up STUN plus a coturn TURN server for NAT traversal, and packaged the full stack (Redis, 2 signaling servers, coturn, Nginx) in Docker Compose so it runs with one command.',
            'Implemented proctoring in the browser with MediaPipe: no-face and multi-face detection, gaze-away tracking from iris landmarks, and tab-switch detection via the Visibility API. Video never leaves the candidate\'s machine.',
            'Sent warnings over a peer-to-peer WebRTC data channel instead of the signaling servers. Candidates see the first 2 warnings; interviewers see all of them.',
          ],
          techStack: 'Python, FastAPI, WebSockets, Redis Pub/Sub, WebRTC, MediaPipe, Docker Compose, Nginx, coturn',
          github: 'https://github.com/komal-bagwe/webrtc-scaled-signaling-video-call',
        },
        {
          title: 'Real-Time Crypto Alert System',
          image: stock,
          description: [
            'Decoupled event-driven architecture: a worker microservice polls CoinGecko prices and publishes to Redis Pub/Sub, keeping the web server lightweight and independently fault-tolerant.',
            'Targeted WebSocket alerts via Socket.io — only the specific user whose price target is hit receives a notification.',
            'Redis Sorted Sets (ZSET) enable O(log N) alert lookups across thousands of concurrent users.',
            'Live Chart.js dashboard renders real-time price charts without page refreshes.',
          ],
          techStack: 'Node.js, Express, Socket.io, Redis (Pub/Sub + ZSET), Chart.js, CoinGecko API',
          github: 'https://github.com/komal-bagwe/crypto-alert-system',
        },
        {
          title: 'Distributed Rate Limiter',
          image: ratelimiter,
          description: [
            'High-performance rate-limiting service in Go implementing 4 core algorithms: Token Bucket, Fixed Window, Sliding Window Log, and Sliding Window Counter.',
            'Redis-backed for distributed consistency — rate limit state is shared across multiple service replicas.',
          ],
          techStack: 'Go, Redis, Docker, Docker Compose',
          github: 'https://github.com/komal-bagwe/go-rate-limiter',
        },
      ],
    },
  ];
  
  
  export { education, skills, experiences, projects };
