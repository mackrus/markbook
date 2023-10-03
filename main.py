from flask import Flask


app = Flask(__name__)

@app.route('/')

class calendarBooker:
    
    msg = 'This is my new booker'
    
    def hello(msg):
        return msg
    
    


if __name__ == '__main__':
    app.run(debug=True)