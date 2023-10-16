# KGP Chronicle - Your Ultimate News Forum

Hello everyone!

Welcome to **KGP Chronicle**, your premier destination for the latest news updates! In this project, I have created a dynamic news forum using a blend of HTML, CSS, Bootstrap, JavaScript, and Angular. Angular, being a powerful single-page application framework, allowed me to structure the project effectively.

## Features

### Modular Components:

- **App Component:** The central component managing the overall structure.
- **Headline Component:** Displays the main headlines for the day.
- **Tech Component:** Provides tech-related news articles.
- **Sports Component:** Delivers the latest sports news.
- **Search Engine Component:** Allows users to search for specific news topics.
- **Subscription Component:** Handles email subscriptions for newsletters.

### Integration with External APIs:

- **NewsAPI:** I've integrated the NewsAPI to fetch a wide array of news articles, ensuring diverse and comprehensive coverage.

### Email Subscription:

- Users can subscribe to our newsletter via email. All subscription data is seamlessly stored using the Google Sheets API, ensuring efficient management and easy access to subscriber information.

### Responsive Design:

- The website is fully responsive, ensuring a seamless user experience across various devices and screen sizes.

## Getting Started

### To run KGP Chronicle locally on your machine, follow these steps:

1. **Download the Project:**
   - Click on the green "Code" button in the GitHub repository.
   - Choose the "Download ZIP" option.
   - Extract the downloaded ZIP file to your preferred location on your computer.

2. **Navigate to the Project Directory:**
   - Open your terminal or command prompt.
   - Use the `cd` command to navigate to the location where you saved the extracted files.

3. **Install Dependencies:**
   - Before running the project, you need to install the necessary dependencies.
   - Run the following command in your terminal:
     ```
     npm install
     ```

4. **Run the Development Server:**
   - Once the installation is complete, start the development server using Angular CLI.
   - Run the following command in your terminal:
     ```
     ng serve -o
     ```
   - The `-o` flag will automatically open the project in your default web browser.

5. **Explore KGP Chronicle:**
   - Your local instance of KGP Chronicle is now running! You can explore the website, read news articles, and experience the features firsthand.

**Note:** Ensure you have Node.js and Angular CLI installed on your system before running the project.

Feel free to customize and contribute to **KGP Chronicle**. Enjoy exploring the world of news right from your local setup!

## Navigation and Categorization:

### Navbar:

The navigation bar features a search engine that dynamically queries our API based on user input. Additionally, users can navigate through specific news categories such as Home, Technology, and Sports, each handled by dedicated components.

### Footer:

The footer section provides quick access to my professional profiles, including LinkedIn, GitHub, and Twitter, allowing users to connect and stay updated with future developments.
