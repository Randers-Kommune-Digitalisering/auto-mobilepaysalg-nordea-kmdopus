
# print("Hello World")

# def transform(data_in):
#     return new_data

# # Connect to the Redis server using the correct hostname
# r = redis.Redis(host='redis_microservice')

# # Subscribe to the "data" topic
# p = r.pubsub()
# p.subscribe('data')

# # Listen for new messages
# while True:
#     # Get a new message if one is available
#     message = p.get_message()
#     print(f"Received message: {message['data']}")

#     # If no message is available, sleep for a short time and try again
#     if not message:
#         time.sleep(0.001)
#         continue
#     # Ignore non-data messages
#     if message['type'] != 'message':
#         continue
#     # Parse again
#     preprocessed_data = message['data'].decode('utf-8')
#     print(f"Message processed: {preprocessed_data}")

#     data_out = transform(preprocessed_data)
#     print(f"Data out: {data_out}")

#     # Transform the data and Return the transformed data on the "results" topic
#     r.publish('results', json.dumps(data_out))
