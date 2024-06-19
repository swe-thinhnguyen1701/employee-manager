class Menu {
    constructor() {
        this.MENU = ["View All Employees", "Add Employee", "Update Employee Role",
            "View All Roles", "Add Role",
            "View All Departments", "Add Deperatment",
            "Exit"];
        this.dataService = {
            id: 0,
            addNewData: false,
            modifyData: false
        }
    }

    getMenu() {
        return this.MENU;
    }

    setDataService(option) {
        const idx = this.MENU.indexOf(option);
        if (idx == 2)
            this.dataService.modifyData = true;
        if(idx == 1 || idx == 6 || idx == 4)
            this.dataService.addNewData = true;
        if (idx < 3) 
            this.dataService.id = 2;
        else if (idx < 5) 
            this.dataService.id = 1;
        else if (idx < 7)
            this.dataService.id = 0;
        else
            this.dataService.id = -1;
    }

    getDataService() {
        return this.dataService;
    }
}

module.exports = Menu;