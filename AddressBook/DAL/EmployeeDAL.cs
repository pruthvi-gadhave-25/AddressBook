using AddressBook.DAL.Interface;
using AddressBook.Models;
using Microsoft.Data.SqlClient;

namespace AddressBook.DAL
{
    public class EmployeeDAL   :IEmployeedal 
    {
        private readonly string _connectionString; 

       public  EmployeeDAL( string connectionString) {
            _connectionString = connectionString;
        }


   // get all Employees 

        public async Task<List<Employee>> GetEmployees()
        {   
            List<Employee> employees = new List<Employee>();
            //connectionn
            string getQuery = "SELECT * FROM Employees";  
           using (SqlConnection conn = new SqlConnection( _connectionString ) )
           {
                SqlCommand cmd = new  SqlCommand(getQuery , conn);

               await  conn.OpenAsync();

                SqlDataReader reader = await  cmd.ExecuteReaderAsync();

                while (await reader.ReadAsync())
                {
                    employees.Add(new Employee
                    {
                        EmployeeId = reader["EmployeeId"].ToString(),
                        EmployeeName = reader["EmployeeName"].ToString(),
                        EmployeeEmail = reader["EmployeeEmail"].ToString(),
                        EmployeeMobile = reader["EmployeeMobile"].ToString(),
                        EmployeeAddress = reader["EmployeeAddress"].ToString()

                    });
                }
           }
            //
            return employees ;
        }
    //employeeby Id 
    public async Task<Employee> GetEmployeeById(string id )
        {
            Employee employee = new Employee();

            string getQuery = $"SELECT *FROM Employees where EmployeeId = @EmployeeId";

            //ConnectionEndpointRouteBuilder
            using (SqlConnection conn = new SqlConnection(_connectionString))
            {
                SqlCommand cmd = new SqlCommand(getQuery, conn);
                cmd.Parameters.AddWithValue("@EmployeeId" , id);
               await conn.OpenAsync();

                SqlDataReader reader = await cmd.ExecuteReaderAsync();

                if (await reader.ReadAsync())
                {

                    employee = new Employee
                    {
                        EmployeeId = reader["EmployeeId"].ToString(),
                        EmployeeName = reader["EmployeeName"].ToString(),
                        EmployeeEmail = reader["EmployeeEmail"].ToString(),
                        EmployeeMobile = reader["EmployeeMobile"].ToString(),
                        EmployeeAddress = reader["EmployeeAddress"].ToString()
                    };
                }

                return employee ;
               
            }
          

        }
        // Add
        public async Task<bool> AddEmployee(Employee employee)
        {
            string insertQuery = "INSERT INTO Employees (EmployeeName, EmployeeEmail, EmployeeMobile, EmployeeAddress) VALUES (@EmployeeName, @EmployeeEmail, @EmployeeMobile, @EmployeeAddress)";

            using (SqlConnection conn = new SqlConnection(_connectionString))
            {
                SqlCommand cmd = new SqlCommand(insertQuery, conn);
                cmd.Parameters.AddWithValue("@EmployeeName", employee.EmployeeName);
                cmd.Parameters.AddWithValue("@EmployeeEmail", employee.EmployeeEmail);
                cmd.Parameters.AddWithValue("@EmployeeMobile", employee.EmployeeMobile);
                cmd.Parameters.AddWithValue("@EmployeeAddress", employee.EmployeeAddress);

                await conn.OpenAsync();
                int rowsAffected = await cmd.ExecuteNonQueryAsync();
                return rowsAffected > 0; 
            }
        }

        // Update an existing Employee
        public async Task<bool> UpdateEmployee(Employee employee , string id)
        {
            string updateQuery = "UPDATE Employees SET EmployeeName = @EmployeeName, EmployeeEmail = @EmployeeEmail, EmployeeMobile = @EmployeeMobile, EmployeeAddress = @EmployeeAddress WHERE EmployeeId = @EmployeeId";

            using (SqlConnection conn = new SqlConnection(_connectionString))
            {
                SqlCommand cmd = new SqlCommand(updateQuery, conn);
                cmd.Parameters.AddWithValue("@EmployeeId", id);
                cmd.Parameters.AddWithValue("@EmployeeName", employee.EmployeeName);
                cmd.Parameters.AddWithValue("@EmployeeEmail", employee.EmployeeEmail);
                cmd.Parameters.AddWithValue("@EmployeeMobile", employee.EmployeeMobile);
                cmd.Parameters.AddWithValue("@EmployeeAddress", employee.EmployeeAddress);

                await conn.OpenAsync();
                int rowsAffected = await cmd.ExecuteNonQueryAsync();
                return rowsAffected > 0; 
            }
        }

        //delete 
        public async Task<bool> DeleteEmployeeById(string id)
        {
            string deleteQuery = "DELETE FROM Employees WHERE EmployeeId = @EmployeeId";

            using (SqlConnection conn = new SqlConnection(_connectionString))
            {
                SqlCommand cmd = new SqlCommand(deleteQuery, conn);
                cmd.Parameters.AddWithValue("@EmployeeId", id);

                await conn.OpenAsync();
                int rowsAffected = await cmd.ExecuteNonQueryAsync();
                return rowsAffected > 0;
            }
        }




    }
}
