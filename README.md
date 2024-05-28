# Verstack Monorepo

Welcome to the Verstack monorepo project! This repository contains both the client and API applications, organized within a monorepo structure using pnpm workspaces and Turborepo.

## Folder Structure

The repository is organized as follows:

```
my-monorepo/
├── apps/
│   ├── client/
│   │   ├── src/
│   │   ├── dist/
│   │   ├── package.json
│   │   ├── vercel.json
│   │   └── ...
│   └── api/
│       ├── api/
│       ├── dist/
│       ├── package.json
│       ├── vercel.json
│       └── ...
├── packages/
│   ├── types/
│   │   ├── src/
│   │   ├── dist/
│   │   ├── package.json
│   │   └── ...
│   ├── utilities/
│   │   ├── src/
│   │   ├── dist/
│   │   ├── package.json
│   │   └── ...
│   └── database/
│       ├── src/
│       ├── dist/
│       ├── package.json
│       └── ...
├── turbo.json
├── package.json
├── pnpm-workspace.yaml
├── docker-compose.yml
└── .dockerignore
```

## Development Process

### Prerequisites

- Node.js (version 14.x or later)
- pnpm (version 6.x or later)
- Docker (for running services locally)
- Vercel CLI (for deployment)

### Initial Setup

1. **Clone the repository:**

   ```sh
   git clone https://github.com/your-username/verstack.git
   cd verstack
   ```

2. **Install dependencies:**

   Use pnpm to install all dependencies for the entire monorepo:

   ```sh
   pnpm install
   ```

### Running the Applications Locally

#### Client Application

1. **Navigate to the client directory:**

   ```sh
   cd apps/client
   ```

2. **Start the development server:**

   ```sh
   pnpm run dev
   ```

   The client application will be available at `http://localhost:3000`.

#### API Application

1. **Navigate to the API directory:**

   ```sh
   cd apps/api
   ```

2. **Start the development server:**

   ```sh
   pnpm run dev
   ```

   The API server will be available at `http://localhost:5001`.

### Building the Applications

#### Client Application

1. **Navigate to the client directory:**

   ```sh
   cd apps/client
   ```

2. **Build the client application:**

   ```sh
   pnpm run build
   ```

   The build output will be located in the `dist` directory.

#### API Application

1. **Navigate to the API directory:**

   ```sh
   cd apps/api
   ```

2. **Build the API application:**

   ```sh
   pnpm run build
   ```

   The build output will be located in the `dist` directory.

### Running Services with Docker

1. **Start services using Docker Compose:**

   ```sh
   docker-compose up
   ```

   This will start the client, API, and database services.

### Deployment to Vercel

Each application has its own `vercel.json` configuration file for deployment.

#### Client Application

1. **Navigate to the client directory:**

   ```sh
   cd apps/client
   ```

2. **Deploy to Vercel:**

   ```sh
   vercel --prod
   ```

#### API Application

1. **Navigate to the API directory:**

   ```sh
   cd apps/api
   ```

2. **Deploy to Vercel:**

   ```sh
   vercel --prod
   ```

### Project Configuration Files

#### `turbo.json`

```json
{
  "pipeline": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist/**", "build/**"]
    },
    "lint": {
      "outputs": []
    },
    "test": {
      "outputs": []
    }
  }
}
```

#### `pnpm-workspace.yaml`

```yaml
packages:
  - 'apps/*'
  - 'packages/*'
```

### Contributing

If you would like to contribute, please follow the [contribution guidelines](CONTRIBUTING.md).

### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to update this README with any additional information or instructions specific to your project.
