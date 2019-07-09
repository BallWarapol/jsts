#!/usr/bin/env python
#coding:utf8

#from BeautifulSoup import BeautifulSoup
#    soup = BeautifulSoup(f.read())
#    f.write(soup.prettify())

import mysql.connector

mydb = mysql.connector.connect(
  host="localhost",
  user="x10000",
  passwd="x10000",
  database="thaipitaka"
)

mycursor = mydb.cursor()

sql = "INSERT INTO customers (name, address) VALUES (%s, %s)"
val = ("John", "Highway 21")
mycursor.execute(sql, val)

mydb.commit()

print(mycursor.rowcount, "record inserted.")
