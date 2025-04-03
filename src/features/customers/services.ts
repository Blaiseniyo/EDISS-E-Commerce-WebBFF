/*
services.ts
description: This file contains the services for customers, using axios to forward requests to the Customer Service
author: Blaise Niyonkuru<blaiseniyonkuru12@gmail.com>
*/

import Customer from "../../models/customer";
import apiClient from '../../utils/axois';
import { CreateCustomerInput } from './types';

export class CustomerService {
  async createCustomer(customerData: CreateCustomerInput['body']) {
    const response = await apiClient.post('/customers', customerData);
    return response.data as Customer;
  }

  async getCustomerById(id: number) {
    const response = await apiClient.get(`/customers/${id}`);

    return response.data;
  }

  async getCustomerByUserId(userId: string) {
    const response = await apiClient.get(`/customers?userId=${userId}`);
    return response.data;
  }
}

export default new CustomerService();