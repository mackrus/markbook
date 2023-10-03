from flask import Flask
from flask import render_template

import time


app = Flask(__name__)

@app.route('/')
    
def calendar_function():       
 # Put functionality in here when needed
    return render_template('./template.html')


if __name__ == '__main__':
    app.run(debug=True)