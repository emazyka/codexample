class UserDetails {


    emailSuffix = '@example.com'
    firstName = ''

    constructor(user) {
        this.firstName = user.firstName
        this.lastName = user.lastName
    }

    getEmail() {
        const fullName = this.firstName + '.' + this.lastName
        return fullName + this.emailSuffix
    }

    getUsername() {
        return this.firstName + '.' + this.lastName
    }

    getDisplayName() {
        return this.firstName + this.lastName
    }
}

function getUser() {
    return new UserDetails(window.loggedUser)
}

const getUsername = () => {
    const user = new UserDetails(window.loggedUser)
    return user.getUsername()
}
const getDisplayName = () => {
    const user = new UserDetails(window.loggedUser)
    return user.getDisplayName()
}

const getEmail = () => {
    const user = new UserDetails(window.loggedUser)
    return user.getEmail()
}

window.loggedUser = {
    firstName: 'John',
    lastName: 'Doe'
}

export default {
    getUser,
    getEmail: getEmail,
    getUsername: () => getUsername(),
    getDisplayName: function () {
        return getDisplayName()
    }
}