# Greenify

## Overview
Greenify is a website that promotes the usage of eco-friendly products by comparing them to their inorganic counterparts. It highlights the advantages of sustainable alternatives, empowering users to make environmentally conscious choices

## Team Members
- **Shantanu Nadar** 
- **Shaunak Karve**
- **Sanchit Narayan** 
- **Shail Shaji** 

## Features 
- Shows advantages of using eco-friendly products
- Shows disadvantages of using inorganic products
  
## Tech Stack
- HTML, CSS, JavaScript
- Flask framework for the backend
- Python for preparing the database from a .csv file
- MySQL for the database

## Installation
1. Clone the repository:
```bash
git clone https://github.com/shantanunadar/greenify.git
```
2. Navigate to the project directory:
```bash
cd greenify
```
3. Install the required dependencies:
```bash
pip install -r requirements.txt
```
4. Ensure that your local MySQL server is online, then enter your MySQL database username and password into `make_db.py` and run the file using the following command to prepare the database:
```bash
py make_db.py
```
5. Enter the same database username and password into their respective variables in `app.py` and run the following command to start the server: 
```bash
py app.py
```
6. Open your browser and go to 'http://localhost:5000'
