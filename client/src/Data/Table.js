let rowsDataAccount = [];
let rowsDataJobArticle = [];

export function initRowsDataAccount() {
    for (let i = 0; i < 100; i++)
    {
        let newObject = {
            id: i,
            Username: `userName${i}`,
            FullName: `fullName${i}`,
            BirthDay: `12/4/1984`,
            DateCreated: `14/3/2002`,
            Role: `Người tìm việc`
        }

        rowsDataAccount.push(newObject);
    }

    return rowsDataAccount;
}

export function initRowsDataJobArticle() {
    for (let i = 0; i < 100; i++)
    {
        let newObject = {
            id: i,
            Username: `userName${i}`,
            FullName: `fullName${i}`,
            Company: `company${i}`,
            DateCreated: `14/3/2002`,
            TitleJob: `titleJob${i}`
        }

        rowsDataJobArticle.push(newObject);
    }

    return rowsDataJobArticle;
}