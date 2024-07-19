// components/OrderItem.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OrderItem = ({ order }) => {
  return (
    <View style={styles.orderItem}>
      <Text style={styles.orderText}>Захиалга ID: {order.id}</Text>
      <Text style={styles.orderText}>Машины төрөл: {order.carSize}</Text>
      <Text style={styles.orderText}>Угаалгах төрөл: {order.washType}</Text>
      <Text style={styles.orderText}>Огноо: {order.date.split('T')[0]}</Text>
      <Text style={styles.orderText}>Цаг: {new Date(order.scheduledTime).toLocaleTimeString()}</Text>
      <Text style={styles.orderText}>Үнэ: {order.price}₮</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  orderItem: {
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
  },
  orderText: {
    fontSize: 16,
  },
});

export default OrderItem;
