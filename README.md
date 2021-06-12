# Bangalore House Price Prediction

![House Price Prediction Demo](https://github.com/ritwik4690/House-Price-Prediction/blob/master/demo.gif)

This is a data science project in which I have built a model for real estate price prediction. I have used bangalore home prices dataset from kaggle.com and used linear regression model for prediction. I have made a flask server that uses this saved model to serve http requests. Finally for the front end, HTML, CSS and JavaScript is used to allow the user to enter the attributes like square ft area, bedrooms etc and the model will call python flask server to retrieve the predicted price. Technology and tools used:

1. Python
2. Numpy and Pandas for data cleaning
3. Matplotlib for data visualization
4. Sklearn for model building
5. Jupyter notebook, visual studio code and pycharm as IDE
6. Python flask for http server
7. HTML/CSS/Javascript for UI

## Deployed to cloud (AWS EC2)

I have deployed this machine learning model to production on amazon aws ec2 instance. I have used nginx web server that will server http requests. For AWS EC2, I used ubuntu server on which the web application and flask server were deployed. Using nginx reverse proxy /api requests will be routed to python flask server running on same machine.
This is the link for my aws ec2 instance: http://ec2-18-117-121-94.us-east-2.compute.amazonaws.com/

## Run this project locally

To run this project on your local machine:
1. Clone the run-locally branch OR download zip file
```
git clone https://github.com/ritwik4690/House-Price-Prediction.git --branch run-locally --single-branch
```
2. Change to the server directory
```
cd server
```
3. Install the requirements
```
pip install requirements.txt
```
4. Run the server
```
python server.py
```
Your website should now be running on http://loaclhost:5000

## Course followed

* Codebasics - complete data science course
* Playlist - https://youtube.com/playlist?list=PLeo1K3hjS3uu7clOTtwsp94PcHbzqpAdg

## Conclusion

This is a complete end-to-end project from data cleaning, EDA, model selection to deploying and creating UI. While choosing models, GridSearchCV was used along with k-fold cross validation. In this, **Linear Regression** gave the best accuracy. Flask API endpoints were created to fetch the list of locaitons and to predict the results.
