export const fetchEmployees = () => {
    return {
        type: 'EMPLOYEE_FETCH_ALL',
        payload: {}
    }
}

export const createEmployee = (data) => {
    return {
        type: 'EMPLOYEE_CREATE',
        payload: data
    }
}

export const fetchEmployee = (id) => {
    return {
        type: 'EMPLOYEE_FETCH_ONE',
        payload: id
    }
}
