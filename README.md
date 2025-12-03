<header>

<!--
  <<< Author notes: Course header >>>
  Read <https://skills.github.com/quickstart> for more information about how to build courses using this template.
  Include a 1280×640 image, course name in sentence case, and a concise description in emphasis.
  In your repository settings: enable template repository, add your 1280×640 social image, auto delete head branches.
  Next to "About", add description & tags; disable releases, packages, & environments.
  Add your open source license, GitHub uses the MIT license.
-->

# Todo Application - Angular + ASP.NET Core + SQL Server

A full-stack Todo application built with Angular frontend, ASP.NET Core Web API backend, and SQL Server database.

</header>

## 🚀 Project Structure

```
├── backend/
│   └── Api/                    # ASP.NET Core Web API
│       ├── Controllers/        # API Controllers
│       ├── Data/               # Entity Framework DbContext
│       └── Models/             # Data Models
├── frontend/
│   └── web-app/                # Angular Application
│       └── src/app/
│           ├── components/     # Angular Components
│           ├── models/         # TypeScript Interfaces
│           └── services/       # HTTP Services
└── .devcontainer/              # Development Container Configuration
```

## 🛠️ Technology Stack

- **Frontend**: Angular 18 with TypeScript
- **Backend**: ASP.NET Core 10 Web API
- **Database**: Microsoft SQL Server
- **ORM**: Entity Framework Core

## 🏃 Running the Application

### Using GitHub Codespaces (Recommended)

1. Click the "Code" button and select "Open with Codespaces"
2. Wait for the development container to build
3. Once ready, the SQL Server, backend API, and frontend will be available

### Running Locally

#### Backend API

```bash
cd backend/Api
dotnet restore
dotnet run
```

The API will be available at `http://localhost:5000`

#### Frontend

```bash
cd frontend/web-app
npm install
npm start
```

The Angular app will be available at `http://localhost:4200`

## 📖 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/todoitems` | Get all todo items |
| GET | `/api/todoitems/{id}` | Get a specific todo item |
| POST | `/api/todoitems` | Create a new todo item |
| PUT | `/api/todoitems/{id}` | Update a todo item |
| DELETE | `/api/todoitems/{id}` | Delete a todo item |

## 📝 Features

- ✅ Create, read, update, and delete todo items
- ✅ Mark todos as complete/incomplete
- ✅ Responsive UI design
- ✅ Entity Framework Core with SQL Server
- ✅ RESTful API design
- ✅ Development container for easy setup

<footer>

---

Get help: [Post in our discussion board](https://github.com/orgs/skills/discussions/categories/code-with-codespaces) &bull; [Review the GitHub status page](https://www.githubstatus.com/)

&copy; 2023 GitHub &bull; [Code of Conduct](https://www.contributor-covenant.org/version/2/1/code_of_conduct/code_of_conduct.md) &bull; [MIT License](https://gh.io/mit)

</footer>
