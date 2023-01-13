import * as mysql from "mysql";
// Create a connection pool
const serv = mysql.createConnection({
  host: "127.0.0.1",
  user: "Ray",
  password: "Rmte4744",
  database: "classicmodels",
});

async function myData() {
  try {
    await serv.connect();
    console.log("Connected to the database.");
  } catch (error) {
    console.error("Error connecting to the database: ${error.message}");
  }
}
myData();

//CREATE New form of data
async function createCustomer() {
  try {
    await serv.query(
      "INSERT INTO `customers`(`customerNumber`,`customerName`,`contactLastName`,`contactFirstName`,`phone`,`addressLine1`,`addressLine2`,`city`,`state`,`postalCode`,`country`,`creditLimit`) values (77,'NextGen Tech', 'Ray', 'Telpha', '7049061234', '1234 Tech Blvd.', NULL, 'Charlotte', 'NC', '21900', 'USA', '7000.00')"
    );
    console.log("Customer added created successfully!");
  } catch (error) {
    console.error(`Error inserting record: ${error.message}`);
  }
}
createCustomer();

//READ Data
async function getAllCustomers() {
  try {
    await serv.query("SELECT * FROM customers");
    console.log("All customers are displaying successfully");
  } catch (error) {
    console.error(`Error creating new customer: ${error.message}`);
  }
}
getAllCustomers();

//UPDATE Data
async function updateCustomer() {
  try {
    await serv.query(
      "UPDATE customers SET addressLine1 = '4321 Techie Blvd.' WHERE customerNumber = 77"
    );
    console.log("Updates customers information successfully");
  } catch (error) {
    console.error(`Error updating customers informations: ${error.message}`);
  }
}
updateCustomer();

//DELETE Data
async function deleteCustomer() {
  try {
    await serv.query("DELETE FROM customers WHERE customerNumber = 77");
    console.log("Customer has been deleted successfully");
  } catch (error) {
    console.error(`Error deleting customer: ${error.message}`);
  }
}
deleteCustomer();
