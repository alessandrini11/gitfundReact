const randomDate = (start, end) => {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
} 
exports.admin = [
    {
        id: Math.random() * 1000 + '-'+ new Date(),
        username: 'alex',
        password: 'alex',
        role: 'super_admin',
        isBlocked: false
    },
    {
        id: Math.random() * 1000 + '-'+ new Date(),
        username: 'legrand',
        password: 'legrand',
        role: 'admin',
        isBlocked: false
    },
    {
        id: Math.random() * 1000 + '-'+ new Date(),
        username: 'visitor',
        password: 'visitor',
        role: 'visitor',
        isBlocked: false
    },
    {
        id: Math.random() * 1000 + '-'+ new Date(),
        username: 'chap',
        password: 'chap',
        role: 'visitor',
        isBlocked: true
    }
]
exports.deposits = [
    {
        amount: 2000,
        suscriber: 1,
        isVisible: true,
        date: randomDate(new Date(2022,0,1), new Date(2022, 11, 31)),
    },
    {
        amount: 5000,
        suscriber: 3,
        isVisible: true,
        date: randomDate(new Date(2022,0,1), new Date(2022, 11, 31)),
    },
    {
        amount: 1500,
        suscriber: 3,
        isVisible: true,
        date: randomDate(new Date(2022,0,1), new Date(2022, 11, 31)),
    },
    {
        amount: 10000,
        suscriber: 2,
        isVisible: true,
        date: randomDate(new Date(2022,0,1), new Date(2022, 11, 31)),
    },
    {
        amount: 500,
        suscriber: 2,
        isVisible: false,
        date: randomDate(new Date(2022,0,1), new Date(2022, 11, 31)),
    }
]
exports.speciality = [
    {
        id: 1,
        name: 'GLO'
    },
    {
        id: 2,
        name: 'GRT'
    }
]
exports.sexe = [
    {
        id: 1,
        name: 'male'
    },
    {
        id: 2,
        name: 'female'
    }
]
exports.suscriber = [
    {
        id: 1,
        firstName: 'schuame',
        lastName: 'alexandre lionel',
        picture: false,
        registrationNumber: '20G00642',
        sexId: 1,
        specialityId: 1,
        
    },
    {
        id: 2,
        firstName: 'hannah hannah',
        lastName: 'esther mispa',
        picture: false,
        registrationNumber: '20G00678',
        sexId: 2,
        specialityId: 1,
        
    },
    {
        id: 3,
        firstName: 'chew',
        lastName: 'arnaud',
        picture: false,
        registrationNumber: '20G00522',
        sexId: 1,
        specialityId: 2,
        
    },
    {
        id: 4,
        firstName: 'maka maka',
        lastName: 'ebenezer ',
        picture: false,
        registrationNumber: '20G00642',
        sexId: 1,
        specialityId: 1,
        
    }
]

exports.depenses = [
    {
        id: 1,
        amount: 2000,
        motif: 'achat des marqueurs et des effaçoires',
        isVisible: true,
        date: randomDate(new Date(2022,0,1), new Date(2022, 11, 31))
    },
    {
        id: 2,
        amount: 3000,
        motif: 'location du projecteur',
        isVisible: false,
        date: randomDate(new Date(2022,0,1), new Date(2022, 11, 31))
    }
]