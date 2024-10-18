class Company{

    constructor(){
        this.departments = {}
    }

    addEmployee(name, salary, position, department){
        if (!name || !position || !department || salary == null || salary < 0 || typeof salary != 'number') {
            throw new Error('Invalid input!');
        } else {    
            if(department in this.departments){
                this.departments[department].push({name, salary, position})
            } else {
                this.departments[department] = [{name, salary, position}]
            }  
            return `New employee is hired. Name: ${name}. Position: ${position}`;
        }
    }

    bestDepartment(){
        let bestAverageSalary = 0
        let bestDepartment = ''
        for(let department in this.departments){
            let salarySum = 0
            let avrgSalary = 0
            this.departments[department].forEach(empl => {
                salarySum += empl['salary']
            })         
            avrgSalary = salarySum / this.departments[department].length
            if(avrgSalary > bestAverageSalary){
                bestAverageSalary = avrgSalary.toFixed(2)
                bestDepartment = department
            }
        }
        if(bestDepartment != ''){
            let sortedEmpls = this.departments[bestDepartment].sort((a, b) => b.salary - a.salary || a.name.localeCompare(b.name))

        let result = `Best Department is: ${bestDepartment}\nAverage salary: ${bestAverageSalary}\n`
        sortedEmpls.forEach(empl => {
            result += `${empl.name} ${empl.salary} ${empl.position}\n`
        })
        return result.trim()
        }
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
