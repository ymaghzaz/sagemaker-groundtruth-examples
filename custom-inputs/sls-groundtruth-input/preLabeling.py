
import json


def lambda_handler(event, context):
    return {
        "taskInput": {
            "taskObject": event['dataObject']['source-ref']
        }
    }
