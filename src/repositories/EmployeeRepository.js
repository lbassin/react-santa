class EmployeeRepository {
    static fetchAll() {
        return new Promise((resolve) => {
            const employees = [
                { id: '0cd738a7-a305-4d68-98a0-959abd54ed8e', name: 'Marsha Boyd', role: 'Manager' },
                { id: 'd145fb3f-6a9a-45be-93b6-6fa743f61e35', name: 'William Allen', role: 'Developer' },
                { id: '8572dcc0-5cd8-46c5-ad76-31189664a5c9', name: 'Desiree Lawrence', role: 'Developer' },
                { id: 'cd0fd064-4c9e-409c-9e15-e2421101882c', name: 'Dorothy Ison', role: 'CTO' }
            ];

            setTimeout(() => {
                resolve(employees);
            }, 500);
        })
    }
}

export default EmployeeRepository;
