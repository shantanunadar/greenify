from flask import Flask, render_template
import mysql.connector
from mysql.connector import Error

app = Flask(__name__)

def get_db_connection():
    try:
        conn = mysql.connector.connect(
            host='localhost',
            user='', # <-- your MySQL username
            password='', # <-- your MySQL user password
            database='greenify'
        )
        if conn.is_connected():
            print('Connected to MySQL database')
            return conn
    except Error as e:
        print(f"Error connecting to MySQL database: {e}")
        return None

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/products')
def products():
    return render_template('products.html')

@app.route('/category/<data_id>')
def display_data(data_id):
    connection = get_db_connection()
    if connection:
        try:
            cursor = connection.cursor(dictionary=True)
            
            # Example query using the received data_id
            query = "SELECT * FROM products WHERE id = %s"
            cursor.execute(query, (data_id,))
            data = cursor.fetchone()
            
            cursor.close()
            connection.close()
            return render_template('category.html', data=data)
        except Error as e:
            pass

@app.route('/about_us')
def about_us():
    return render_template('about_us.html')

@app.route('/feedback')
def feedback():
    return render_template('feedback.html')

if __name__ == '__main__':
    app.run(debug=True)