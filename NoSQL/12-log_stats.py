#!/usr/bin/env python3
"""
Script that provides stats about Nginx logs stored in MongoDB
"""
from pymongo import MongoClient


def print_nginx_stats():
    """
    Provides statistics about Nginx logs in MongoDB

    Database: logs
    Collection: nginx

    Displays:
    - Total number of logs
    - Number of logs per HTTP method (GET, POST, PUT, PATCH, DELETE)
    - Number of status checks (method=GET, path=/status)
    """
    client = MongoClient('mongodb://127.0.0.1:27017')
    db = client.logs
    collection = db.nginx

    total = collection.count_documents({})
    print(f"{total} logs")

    print("Methods:")
    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    for method in methods:
        count = collection.count_documents({"method": method})
        print(f"\tmethod {method}: {count}")

    status_check = collection.count_documents(
        {"method": "GET", "path": "/status"}
    )
    print(f"{status_check} status check")


if __name__ == "__main__":
    print_nginx_stats()
