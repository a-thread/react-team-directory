const sortEmp = {
    searchEmp: (value: string, empArr: any[]) => {
        let filteredEmps = empArr.filter((emp: { firstName: string; lastName: string; email: string; cell: string; }) => {
            return emp.firstName.toLowerCase().includes(value.toLowerCase()) ||
                emp.lastName.toLowerCase().includes(value.toLowerCase()) ||
                emp.email.toLowerCase().includes(value.toLowerCase()) ||
                emp.cell.toLowerCase().includes(value.toLowerCase())
        })
        return filteredEmps;
    },

    // object sorting function from https://www.sitepoint.com/sort-an-array-of-objects-in-javascript/
    compareValues: (key: string | number, order = 'asc') => {
        return function innerSort(a: { [x: string]: any; hasOwnProperty: (arg0: any) => any; }, b: { [x: string]: any; hasOwnProperty: (arg0: any) => any; }) {
            if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
                return 0;
            }

            const varA = (typeof a[key] === 'string')
                ? a[key].toUpperCase() : a[key];
            const varB = (typeof b[key] === 'string')
                ? b[key].toUpperCase() : b[key];

            let comparison = 0;
            if (varA > varB) {
                comparison = 1;
            } else if (varA < varB) {
                comparison = -1;
            }
            return (
                (order === 'desc') ? (comparison * -1) : comparison
            );
        };
    }
}

export default sortEmp;