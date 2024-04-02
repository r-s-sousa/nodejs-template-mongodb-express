import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
    vus: 50, // Number of virtual users (concurrent users) to simulate
    duration: '5s', // Duration of the test
};

// Function to generate a random field name
function generateFieldName() {
    return 'Field_' + Math.random().toString(36).substring(7);
}

export default function () {
    const BASE_URL = 'http://localhost:3000'; // Base URL of the API

    // Create a new field
    const newName = generateFieldName();
    const createFieldResponse = http.post(`${BASE_URL}/field`, { name: newName });
    check(createFieldResponse, {
        'Field creation status is 201': (res) => res.status === 201,
    });

    // Get all fields
    const getAllFieldsResponse = http.get(`${BASE_URL}/field`);
    check(getAllFieldsResponse, {
        'Get all fields status is 200': (res) => res.status === 200,
    });

    // Retrieve a random field
    const fields = getAllFieldsResponse.json().fields;
    const randomField = fields[Math.floor(Math.random() * fields.length)];
    const getFieldResponse = http.get(`${BASE_URL}/field/${randomField.id}`);
    check(getFieldResponse, {
        'Get field by ID status is 200': (res) => res.status === 200,
    });

    // Update the random field
    const updatedName = generateFieldName();
    const updateFieldResponse = http.put(`${BASE_URL}/field/${randomField.id}`, { name: updatedName });
    check(updateFieldResponse, {
        'Field update status is 204': (res) => res.status === 204,
    });

    // Delete the random field
    const deleteFieldResponse = http.del(`${BASE_URL}/field/${randomField.id}`);
    check(deleteFieldResponse, {
        'Field deletion status is 204': (res) => res.status === 204,
    });

    // Sleep for a short duration between iterations
    sleep(1);
}
