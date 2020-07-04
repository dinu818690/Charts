from flask import Flask,render_template,flash, request, redirect,jsonify
# import matplotlib
# import matplotlib.pyplot as plt
# matplotlib.use('Agg')
# import seaborn as sns
from werkzeug.utils import secure_filename
import os
import pandas as pd
from dotenv import load_dotenv

load_dotenv()

debug=os.getenv('DEBUG')




app=Flask(__name__)
app.secret_key = 'Dinesh scret'

UPLOAD_FOLDER = 'static/uploads'
ALLOWED_EXTENSIONS = {'csv'}
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER


PORT=5000
@app.route('/',methods=['GET','POST'])
def charts():
    scatterdataA,scatterdataB,X,Y=get_data()
    legend = 'Monthly Data'
    labels = [1,2,3,4,5]
    data1 = [2,3,7,9,2]
    data2=[9,5,3,2,9]
    scatterA = []
    scatterB = []
    for x, y in zip(scatterdataA['x'].values, scatterdataA['y'].values):
        scatterA.append({'x': x, 'y': y})
    for x, y in zip(scatterdataB['x'].values, scatterdataB['y'].values):
        scatterB.append({'x': x, 'y': y})
    dataA = str(scatterA).replace('\'', '')
    dataB = str(scatterB).replace('\'', '')
    print(X,Y)
    return render_template('index.html',data1=data1,data2=data2,labels =labels,dataA=dataA,dataB=dataB,X=X,Y=Y)#,scatterAx=scatterdataAx,scatterAy=scatterdataAy,scatterBx=scatterdataBx,scatterBy=scatterdataBy)

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/upload',methods=['GET','POST'])
def upload():
    print(request.method)
    if request.method == 'POST':
        # check if the post request does not have the file part
        if 'file' not in request.files:
            flash('No file selected to upload','error')
        file = request.files['file']
        # if user does not select file
        if file.filename == '':
            flash('No file selected to upload','error')
        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
            flash('uploaded successfully','message');
        return redirect("/")    


#@app.route('/data')
def get_data():
    df=pd.read_csv(r'static/uploads/testData.csv',sep=";")
    df.columns=['x','y']
    dataA=df.head()
    dataB=df.tail()
    minAx=df['x'].min()
    maxAx=df['x'].max()
    minBy=df['y'].min()
    maxBy=df['y'].max()
    return dataA,dataB,(minAx,maxAx),(minBy,maxBy)

if __name__ == "__main__":
    app.run(port=PORT,debug=debug)