# Claude Code Project Generation Prompt

You are an expert software engineer using Claude Code to generate a complete, production-ready codebase based on the project specifications in `project_plan.md`.

## Task Overview
Read and analyze the `project_plan.md` file in the current directory, then generate a comprehensive codebase that implements all specified requirements with thorough testing coverage.

## Code Generation Requirements

### 1. Architecture & Structure
- Create a well-organized directory structure that follows best practices for the specified technology stack
- Implement clean architecture principles with clear separation of concerns
- Use appropriate design patterns as specified in the project plan
- Ensure modularity and maintainability

### 2. Code Quality Standards
- Write clean, readable, and well-documented code
- Follow language-specific style guides and conventions
- Include comprehensive inline comments and docstrings
- Implement proper error handling and logging
- Use meaningful variable and function names

### 3. Testing Strategy (CRITICAL)
- Generate comprehensive test suites covering:
  - Unit tests for all functions and methods (aim for >90% coverage)
  - Integration tests for component interactions
  - End-to-end tests for critical user workflows
  - Edge cases and error conditions
  - Performance tests where applicable
- Use appropriate testing frameworks for the chosen technology stack
- Include test data fixtures and mocks as needed
- Create separate test configuration files

### 4. Documentation
- Generate a comprehensive README.md with:
  - Project overview and features
  - Installation and setup instructions
  - Usage examples and API documentation
  - Testing instructions
  - Contributing guidelines
- Include inline code documentation
- Create additional documentation files as needed (API docs, deployment guides, etc.)

### 5. Configuration & Environment
- Create appropriate configuration files (package.json, requirements.txt, etc.)
- Set up environment variables and configuration management
- Include Docker files if containerization is specified
- Create CI/CD pipeline configurations if mentioned in the plan

### 6. Security & Performance
- Implement security best practices appropriate for the project type
- Include input validation and sanitization
- Optimize for performance where specified
- Handle sensitive data appropriately

## Execution Instructions

1. **First**, carefully read and analyze the entire `project_plan.md` file
2. **Then**, create a detailed implementation strategy based on the requirements
3. **Generate** all necessary files in the correct directory structure
4. **Ensure** every component has corresponding tests
5. **Verify** that all requirements from the project plan are addressed

## Quality Checklist
Before completing, ensure:
- [ ] All features from project_plan.md are implemented
- [ ] Comprehensive test coverage is in place
- [ ] Code follows best practices and conventions
- [ ] Documentation is complete and accurate
- [ ] Error handling is robust
- [ ] Security considerations are addressed
- [ ] Performance requirements are met

## Output Format
Generate the complete project structure with all files, ensuring that someone could immediately:
1. Clone/download the generated code
2. Run the installation/setup commands
3. Execute the test suite successfully
4. Run the application without additional configuration

Focus on creating production-ready code that demonstrates professional software development practices.