# 🚀 Angular Basics

Repository developed as a practical, progressive guide to consolidate core **modern Angular** concepts and prepare for technical interviews.

The project is built using the **Standalone Components** architecture, focusing on the framework's current best practices (fine-grained reactivity with Signals, new built-in control flow syntax, RxJS interop, and modern functional dependency injection).

## 🛠️ Technologies Used

- **Angular** (v22+)
- **TypeScript**
- **RxJS**
- **HTML5 & CSS3**

## 📚 Progression and Implemented Concepts

The project is structured into 10 progressive learning levels, keeping parallel routes and services to preserve the evolution of each concept side by side:

### Level 1: Components and Data Binding

- **Component:** `UserProfileComponent`
- **Concepts:** *Standalone* architecture, Text Interpolation (`{{ }}`), *Property Binding* (`[src]`) for dynamic attributes, and *Event Binding* (`(click)`) for user interaction.

### Level 2: Reactivity with Signals and Modern Control Flow

- **Component:** `TaskListComponent`
- **Concepts:**
  * Synchronous reactive state management using `signal()` and immutable updates via `.update()` and `.filter()`.
  * Replacing legacy structural directives (`*ngIf`, `*ngFor`) with the new built-in **`@if`**, **`@else`**, and **`@for`** syntax (with mandatory optimization via `track`).

### Level 3: Services and Dependency Injection

- **Service:** `TaskService` (`providedIn: 'root'`)
- **Concepts:**
  * *Separation of Concerns*: Extracting business logic and state into a centralized service (*Singleton* pattern), keeping components focused strictly on presentation.
  * Modern dependency injection using the **`inject()`** function instead of the traditional constructor.
  * Immutable array manipulation using the *Spread Operator* (`[...]`).

### Level 4: Data Validation with Reactive Forms

- **Module:** `ReactiveFormsModule`
- **Concepts:**
  * Programmatic creation of typed forms using `FormGroup` and `FormControl` (ensuring TypeScript is the single source of truth).
  * Applying synchronous validations (`Validators.required`, `Validators.minLength`).
  * Conditional visual feedback based on form states (`.invalid`, `.touched`) and state clearing with `.reset()`.

### Level 5: Navigation (Routing)

- **Configuration:** `app.routes.ts`
- **Concepts:**
  * Transforming the application into a seamless *Single Page Application* (SPA) without full-page reloads.
  * Route mapping, redirects (`redirectTo`), *wildcard* routes (`**`) for handling invalid URLs, and utilizing `<router-outlet>`, `routerLink`, and `routerLinkActive` directives.

### Level 6: Component Communication (`input()` and `output()` Signals)

- **Component:** `TaskItemComponent`
- **Concepts:**
  * Signal-based required inputs (`input.required<string>()`) and modern typed event outputs (`output<void>()`) replacing legacy `@Input()` / `@Output()` decorators.
  * Implementing unidirectional data flow (*Data Down, Events Up*) by splitting the UI into **Smart (Container)** components and reusable **Dumb (Presentational)** components.

### Level 7: Derived Reactivity and Persistence (`computed()` and `effect()`)

- **Service & Component:** `PersistentTask` & `PersistentTaskListComponent` (`/tarefas-persistentes`)
- **Concepts:**
  * Lazy, memoized derived state using `computed()` to automatically track the total task count without redundant variables.
  * Side-effect synchronization with the browser's `localStorage` via `effect()` inside an injection context, paired with defensive initial state hydration (`try/catch`).

### Level 8: REST API Consumption (`HttpClient`, RxJS, and `toSignal()`)

- **Service & Component:** `ApiTask` & `ApiTaskList` (`/tarefas-api`)
- **Concepts:**
  * Configuring `provideHttpClient()` and executing typed `HttpClient.get<T>()` requests.
  * Transforming async streams and handling network errors gracefully with RxJS operators (`map`, `catchError`, `of`), bridging the stream into a synchronous, auto-unsubscribing Signal via `toSignal()`.

### Level 9: Pipes and Custom Directives

- **Pipe & Directive:** `Urgente` (`| urgente`) & `Destaque` (`appDestaque`)
- **Concepts:**
  * Built-in `DatePipe` formatting (`date:'dd/MM/yyyy'`) in `UserProfileComponent`.
  * Custom pure pipe (`pure: true`) for memoized highlighting of high-priority tasks.
  * Custom attribute directive using modern `host` event/style bindings and aliased `input()` signals.

### Level 10: Route Protection and HTTP Interception

- **Service, Guard & Interceptor:** `Auth`, `authGuard` (`CanActivateFn`), and `authInterceptor` (`HttpInterceptorFn`)
- **Concepts:**
  * Simulated authentication state managed with Signals and toggled from the main navigation bar.
  * Functional route guard (`CanActivateFn`) returning a `UrlTree` to protect private routes (`/tarefas-persistentes`, `/tarefas-api`).
  * Functional HTTP interceptor registered via `withInterceptors()` that clones outgoing requests to attach `Authorization: Bearer` headers.

## 📂 Main Project Structure

```text
src/app/
├── api-task-list/             # REST API task importer view (Level 8)
├── directives/
│   └── destaque.ts            # Custom hover highlight attribute directive (Level 9)
├── guards/
│   └── auth.ts                # Functional route guard (CanActivateFn) (Level 10)
├── interceptors/
│   └── auth.ts                # Functional HTTP interceptor (HttpInterceptorFn) (Level 10)
├── persistent-task-list/      # localStorage-synced task list view (Level 7)
├── pipes/
│   └── urgente.ts             # Custom pure pipe for high-priority tasks (Level 9)
├── services/
│   ├── api-task.ts            # HttpClient, RxJS & toSignal() state management
│   ├── auth.ts                # Simulated authentication state (Signals)
│   ├── persistent-task.ts     # Derived state (computed) & storage sync (effect)
│   └── task.service.ts        # In-memory centralized task state (Signals)
├── task-item/                 # Reusable presentational item with input()/output() (Level 6)
├── task-list/                 # Task listing and reactive form component
├── user-profile/              # Profile component with Data Binding & DatePipe
├── app.component.*            # Main layout, navigation menu & auth toggle
├── app.config.ts              # Global providers (Router, HttpClient & Interceptors)
└── app.routes.ts              # Public & protected application route definitions
```

## 💻 How to Run Locally

To run this project on your machine, make sure you have **Node.js** and the **Angular CLI** installed.

1. **Clone the repository:**

   ```bash
   git clone https://github.com/bmribeiro/angular-basics.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd angular-basics
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Start the development server:**

   ```bash
   ng serve -o
   ```

   The application will automatically open at `http://localhost:4200/`. Use the **Entrar / Sair** button in the top navigation bar to unlock and test the protected routes.