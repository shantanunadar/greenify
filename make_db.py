import mysql.connector
import csv

# Database configuration
db_config = {
    'host': 'localhost',
    'user': '', # <-- your MySQL username
    'password': '', # <-- your MySQL user password
    'database': 'Greenify'
}

# Connect to MySQL
try:
    connection = mysql.connector.connect(
        host=db_config['host'],
        user=db_config['user'],
        password=db_config['password']
    )
    cursor = connection.cursor()

    # Create schema (database)
    cursor.execute("CREATE DATABASE IF NOT EXISTS Greenify")
    connection.database = db_config['database']

    # Create table PRODUCTS
    create_table_query = '''
    CREATE TABLE IF NOT EXISTS PRODUCTS (
        ID INT AUTO_INCREMENT PRIMARY KEY,
        NAME VARCHAR(255),
        ECO_DESC TEXT,
        NON_ECO_DESC TEXT,
        DISADV_1 TEXT,
        DISADV_2 TEXT,
        DISADV_3 TEXT,
        DISADV_4 TEXT,
        ADV_1 TEXT,
        ADV_2 TEXT,
        ADV_3 TEXT,
        ADV_4 TEXT
    )'''
    cursor.execute(create_table_query)

    # Read the csv file and insert data into the table
    csv_file = r'./final_data.csv'
    with open(csv_file, 'r') as file:
        csv_reader = csv.DictReader(file)
        
        insert_query = '''
        INSERT INTO PRODUCTS (NAME, ECO_DESC, NON_ECO_DESC, DISADV_1, DISADV_2, DISADV_3, DISADV_4, ADV_1, ADV_2, ADV_3, ADV_4)
        VALUES (%(NAME)s, %(ECO_DESC)s, %(NON_ECO_DESC)s, %(DISADV_1)s, %(DISADV_2)s, %(DISADV_3)s, %(DISADV_4)s, %(ADV_1)s, %(ADV_2)s, %(ADV_3)s, %(ADV_4)s)
        '''

        for row in csv_reader:
            cursor.execute(insert_query, row)

    connection.commit()
    print("Data inserted successfully.")

except mysql.connector.Error as err:
    print(f"Error: {err}")

finally:
    if connection.is_connected():
        cursor.close()
        connection.close()
        print("MySQL connection closed.")
