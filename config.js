// ============================================================
//  GITHUB TALENT FINDER — MASTER CONFIG
//  Only Vijay Kumar edits this file.
//  To reassign a domain: change the name + email on that line.
//  Push to GitHub → live in 30 seconds.
// ============================================================

const CONFIG = {

  // ----------------------------------------------------------
  //  YOUR GITHUB PERSONAL ACCESS TOKEN
  //  Get one free at: github.com/settings/tokens
  //  Scopes needed: read:user, user:email (public data only)
  //  Paste between the quotes below.
  // ----------------------------------------------------------
  GITHUB_TOKEN: "PASTE-YOUR-TOKEN-HERE",

  // ----------------------------------------------------------
  //  CITIES TO SEARCH
  //  These map to GitHub's location field.
  //  Add or remove cities as needed.
  // ----------------------------------------------------------
  CITIES: [
    "Bengaluru",
    "Hyderabad",
    "Pune",
    "Chennai",
    "NCR"
  ],

  // ----------------------------------------------------------
  //  MASTER ADMIN
  //  This is you — you receive all digest emails until
  //  you assign individual recruiters below.
  // ----------------------------------------------------------
  ADMIN: {
    name:  "Vijay Kumar",
    email: "vijay.kumar@equalexperts.com"
  },

  // ----------------------------------------------------------
  //  RECRUITER ROSTER
  //  One entry per domain. To assign a recruiter:
  //    1. Replace name with their first name
  //    2. Replace email with their work email
  //    3. Save + push to GitHub
  //  Domains rotate? Just update name + email — done.
  // ----------------------------------------------------------
  RECRUITERS: [
    {
      id:     "devops",
      label:  "DevOps & Platform",
      name:   "Vijay Kumar",
      email:  "vijay.kumar@equalexperts.com",
      color:  "#E1F5EE",
      tcolor: "#085041",
      icon:   "ti-server"
    },
    {
      id:     "mobile",
      label:  "Android & iOS Mobile",
      name:   "Vijay Kumar",
      email:  "vijay.kumar@equalexperts.com",
      color:  "#EEEDFE",
      tcolor: "#3C3489",
      icon:   "ti-device-mobile"
    },
    {
      id:     "backend",
      label:  "Backend Developers",
      name:   "Vijay Kumar",
      email:  "vijay.kumar@equalexperts.com",
      color:  "#FAEEDA",
      tcolor: "#633806",
      icon:   "ti-api"
    },
    {
      id:     "frontend",
      label:  "Frontend Developers",
      name:   "Vijay Kumar",
      email:  "vijay.kumar@equalexperts.com",
      color:  "#E6F1FB",
      tcolor: "#0C447C",
      icon:   "ti-layout"
    },
    {
      id:     "qa",
      label:  "QA & SDET",
      name:   "Vijay Kumar",
      email:  "vijay.kumar@equalexperts.com",
      color:  "#FAECE7",
      tcolor: "#712B13",
      icon:   "ti-bug"
    },
    {
      id:     "data",
      label:  "Data Engineers",
      name:   "Vijay Kumar",
      email:  "vijay.kumar@equalexperts.com",
      color:  "#EAF3DE",
      tcolor: "#27500A",
      icon:   "ti-chart-bar"
    },
    {
      id:     "genai",
      label:  "GenAI & ML Engineers",
      name:   "Vijay Kumar",
      email:  "vijay.kumar@equalexperts.com",
      color:  "#F1EFE8",
      tcolor: "#26215C",
      icon:   "ti-brain"
    }
  ],

  // ----------------------------------------------------------
  //  ROLE SKILL DEFINITIONS
  //  mustHave  — profile must match at least ONE of these
  //  goodHave  — each match adds +5 to the score
  //  excluded  — never use as a primary match signal
  //  Results sorted by: stars + recent activity + skill score
  // ----------------------------------------------------------
  ROLES: {

    devops: {
      mustHave: [
        "kubernetes", "k8s", "terraform", "docker", "github actions",
        "ci/cd", "cicd", "devops", "platform engineering", "sre"
      ],
      goodHave: [
        "helm", "argocd", "argo", "ansible", "prometheus", "grafana",
        "istio", "cilium", "pulumi", "aws", "gcp", "azure",
        "python", "golang", "go", "java", "node.js", "nodejs",
        "opentelemetry", "datadog", "vault", "crossplane"
      ],
      excluded: ["bash", "shell", "shellscript", "shell scripting"]
    },

    mobile: {
      mustHave: [
        "android", "kotlin", "swift", "ios", "flutter", "react native",
        "mobile developer", "mobile engineering"
      ],
      goodHave: [
        "jetpack compose", "swiftui", "coroutines", "xcode",
        "android studio", "mvvm", "clean architecture", "kmp",
        "kotlin multiplatform", "dart"
      ],
      excluded: []
    },

    backend: {
      mustHave: [
        "java", "golang", "go", "node.js", "nodejs", "python",
        "microservices", "backend", "backend developer", "api"
      ],
      goodHave: [
        "kafka", "grpc", "postgresql", "redis", "spring boot",
        "distributed systems", "rust", "scala", "graphql",
        "event driven", "message queue", "high scale"
      ],
      excluded: []
    },

    frontend: {
      mustHave: [
        "react", "typescript", "vue", "next.js", "nextjs",
        "javascript", "frontend", "front-end", "ui engineering"
      ],
      goodHave: [
        "tailwind", "graphql", "web performance", "accessibility",
        "storybook", "svelte", "angular", "webpack", "vite",
        "css", "web components"
      ],
      excluded: []
    },

    qa: {
      mustHave: [
        "playwright", "selenium", "cypress", "test automation",
        "sdet", "qa engineer", "quality engineering", "testing"
      ],
      goodHave: [
        "k6", "jest", "appium", "performance testing",
        "contract testing", "pact", "jmeter", "postman",
        "api testing", "bdd", "cucumber"
      ],
      excluded: []
    },

    data: {
      mustHave: [
        "apache spark", "spark", "dbt", "airflow", "data pipeline",
        "data engineer", "data engineering", "etl", "elt"
      ],
      goodHave: [
        "kafka", "snowflake", "bigquery", "flink", "delta lake",
        "databricks", "redshift", "hive", "presto", "trino",
        "python", "scala", "sql", "data lakehouse"
      ],
      excluded: []
    },

    genai: {
      mustHave: [
        "llm", "langchain", "rag", "fine-tuning", "finetuning",
        "pytorch", "generative ai", "genai", "large language model"
      ],
      goodHave: [
        "hugging face", "huggingface", "vector database", "pgvector",
        "prompt engineering", "mlflow", "tensorflow", "openai",
        "anthropic", "llamaindex", "llamaindex", "agents",
        "embeddings", "transformers", "diffusion"
      ],
      excluded: []
    }
  },

  // ----------------------------------------------------------
  //  SCORING WEIGHTS
  //  Adjust these to tune what matters most.
  // ----------------------------------------------------------
  SCORING: {
    starsPerPoint:       10,   // 100 stars = 10 points
    followersPerPoint:   20,   // 100 followers = 5 points
    reposPerPoint:       5,    // 25 repos = 5 points
    mustHaveBonus:       30,   // has a must-have keyword
    goodHaveBonus:       5,    // per good-have keyword matched
    activeWithin30days:  15,   // pushed code in last 30 days
    activeWithin90days:  8,    // pushed code in last 90 days
    hasWebsite:          5,    // has personal site / LinkedIn
    hasEmail:            5     // public email visible
  },

  // ----------------------------------------------------------
  //  DIGEST EMAIL SETTINGS
  //  TOP_N = how many profiles per email digest
  //  SUBJECT = email subject line (recruiter name auto-inserted)
  // ----------------------------------------------------------
  DIGEST: {
    TOP_N:   10,
    SUBJECT: "GitHub Talent Digest — Top {role} Contributors This Week"
  }

};
