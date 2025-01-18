# Compare Banks

Compare Banks is a web application that allows user to compare different banks and thier packages to make informed decisions when selecting a bank.

This is the image of the landing page of compare banks
![image](https://github.com/user-attachments/assets/9d34b114-9b24-44f7-97d0-bd575ca010f4)

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/MrjjJunior/Compare_Banks.git
   ```
2. Run the venv
   ```bash
   source venv/bin/activate
   ```
3. install pip requirements
   ```bash
   pip install -r requirements.txt
   ```
4. install dependencies
   ```bash
   npm install
   ```
5. Start the development server:
   ```bash
   npm run dev
   ```

## Usage

- Start applicaiton:
```bash
npm run dev
```
- Search on your browser ```http://localhost:5173/```.
- You than be on the landing page of the web application click on "get started" or "compare" on the navbar to start comparing bank packages.

## Features
- You can filter the bank packages by package type which are Saving or Cheque.
- Click on "Take me to {Bank}" and it will take you to that specific bank site to create your bank account.

## Collaboraters

- Front-end developer
https://github.com/jayudoye
- Database Admin
https://github.com/mumugisha
- Front-end lead
https://github.com/otienojoseph
- Back-end Developer
https://github.com/MrjjJunior

## Acknowledgments
- [React](https://react.dev/) for the front-end framework
- [Flask](https://flask.palletsprojects.com/) for the backend-end framework

## Contact
Tshepiso Tlhong(tlhongtshepiso2@gmail.com) feel free to reach out!

# CHALLENGeS

1. Data collection was a major chhalenge in this project
    because it required collecting data from multiple sources.
    The data was collected from the following sources: 
        FNB website
        ABSA website

2. Because the Bank websites didn't have an API that provide us with the bank packages information,
    I thought of web scraping and another challenge arose which is that the bank didn't share the 
    package information on the website but they provide the information on a PDF.
3. I create a PDF scraper to scrape the information from the PDF file.

4. Another challenge I faced was that the PDF file was not in a standard format.
    It was not consistent through out all the banks

5. After the Data collection needed to put it in a database and it was a challenge
    because the data was not in a standard format and it was not easy to put it in a database.
    And know how to sctructure the tables and columns was a challenge .

6. The interection between the database and the API was a challenge because of how the information
    was stored.
    There was multiple tables and I had to join them together to get the information I needed.

