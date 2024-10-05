function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let restaurantData = {}; // Stores restaurant names and their workers with salaries
      let totalSalary = 0; // Used to calculate the total salary of workers in a restaurant
      let averageSalary = 0; // Average salary for a restaurant
      let highestAverageSalary = 0; // Tracks the highest average salary across restaurants
      let bestRestaurant = ""; // The name of the restaurant with the highest average salary

      // Parse input from the textarea
      let input = JSON.parse(document.querySelector("#inputs textarea").value);
      
      // Loop through each line of input
      for (let line of input) {
         // Split restaurant name from worker info
         let [restaurantName, workerInfo] = line.split(" - ");

         // Split worker details and add them to the restaurant
         for (let worker of workerInfo.split(', ')) {
            let [workerName, workerSalary] = worker.split(' ').map(x => isNaN(x) ? x : Number(x));

            // If the restaurant is not in the object, initialize it
            if (!restaurantData.hasOwnProperty(restaurantName)) {
               restaurantData[restaurantName] = {};
            }

            // Add or update the worker's salary in the restaurant
            restaurantData[restaurantName][workerName] = workerSalary;
         }
      }

      // Iterate over each restaurant and calculate the average salary
      Object.entries(restaurantData).forEach(([restaurantName, workers]) => {
         let totalSalaries = Object.values(workers).reduce((sum, salary) => sum + salary, 0);
         let averageSalaries = totalSalaries / Object.keys(workers).length;

         // Check if this restaurant has the highest average salary
         if (averageSalaries > highestAverageSalary) {
            highestAverageSalary = averageSalaries;
            bestRestaurant = restaurantName;
         }
      });

      // Get the best restaurant's workers and sort them by salary
      let sortedWorkers = Object.entries(restaurantData[bestRestaurant])
         .sort((a, b) => b[1] - a[1]);

      // Build the output string for the workers
      let workersOutput = sortedWorkers.reduce((result, [workerName, salary]) => {
         return result + `Name: ${workerName} With Salary: ${salary} `;
      }, "");

      // Update the output in the HTML
      document.querySelector("#bestRestaurant p").textContent = `Name: ${bestRestaurant} Average Salary: ${highestAverageSalary.toFixed(2)} Best Salary: ${sortedWorkers[0][1].toFixed(2)}`;
      document.querySelector('#workers p').textContent = workersOutput;
   }
}
