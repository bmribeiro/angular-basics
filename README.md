# 🚀 Angular Basics

Repository developed as a practical, progressive guide to consolidate core **modern Angular** concepts and prepare for technical interviews.

The project is built using the **Standalone Components** architecture, focusing on the framework's current best practices (fine-grained reactivity with Signals, new built-in control flow syntax, and modern dependency injection).

## 🛠️ Technologies Used

* **Angular** (v22+)
* **TypeScript**
* **HTML5 & CSS3**

## 📚 Progression and Implemented Concepts

The project is structured into 5 progressive learning levels:

### Level 1: Components and Data Binding

* **Component:** `UserProfileComponent`
* **Concepts:** *Standalone* architecture, Text Interpolation (`{{ }}`), *Property Binding* (`[src]`) for dynamic attributes, and *Event Binding* (`(click)`) for user interaction.

### Level 2: Reactivity with Signals and Modern Control Flow

* **Component:** `TaskListComponent`
* **Concepts:**
  * Synchronous reactive state management using `signal()` and immutable updates via `.update()` and `.filter()`.
  * Replacing legacy structural directives (`*ngIf`, `*ngFor`) with the new built-in **`@if`**, **`@else`**, and **`@for`** syntax (with mandatory optimization via `track`).

### Level 3: Services and Dependency Injection

* **Service:** `TaskService` (`providedIn: 'root'`)
* **Concepts:**
  * *Separation of Concerns*: Extracting business logic and state into a centralized service (*Singleton* pattern), keeping components focused strictly on presentation.
  * Modern dependency injection using the **`inject()`** function instead of the traditional constructor.
  * Immutable array manipulation using the *Spread Operator* (`[...]`).

### Level 4: Data Validation with Reactive Forms

* **Module:** `ReactiveFormsModule`
* **Concepts:**
  * Programmatic creation of typed forms using `FormGroup` and `FormControl` (ensuring TypeScript is the single source of truth).
  * Applying synchronous validations (`Validators.required`, `Validators.minLength`).
  * Conditional visual feedback based on form states (`.invalid`, `.touched`) and state clearing with `.reset()`.

### Level 5: Navigation (Routing)

* **Configuration:** `app.routes.ts`
* **Concepts:**
  * Transforming the application into a seamless *Single Page Application* (SPA) without full-page reloads.
  * Route mapping, redirects (`redirectTo`), *wildcard* routes (`**`) for handling invalid URLs, and utilizing `<router-outlet>`, `routerLink`, and `routerLinkActive` directives.

## 📂 Main Project Structure

```text
src/app/
├── services/
│   └── task.service.ts        # Centralized task state management (Signals)
├── task-list/                 # Task listing and reactive form component
├── user-profile/              # Profile component with basic Data Binding
├── app.component.*            # Main layout and navigation menu
└── app.routes.ts              # Application route definitions
```

## 💻 How to Run Locally

To run this project on your machine, make sure you have **Node.js** and the **Angular CLI** installed.

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/angular-basics.git
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

   The application will automatically open at `http://localhost:4200/`.