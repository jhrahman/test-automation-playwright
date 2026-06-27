export const loginData = [
  {
    "username": "laura.taylor1234@example.com",
    "password": "test123",
    "shouldLogin": true
  },
  {
    "username": "",
    "password": "",
    "shouldLogin": false,
    "errorMessage": "Login was unsuccessful. Please correct the errors and try again. No customer account found"
  },
  {
    "username": "wrong@example.com",
    "password": "test123",
    "shouldLogin": false,
    "errorMessage": "Login was unsuccessful. Please correct the errors and try again. The credentials provided are incorrect"
  },
  {
    "username": "laura.taylor1234@example.com",
    "password": "wrongPassword",
    "shouldLogin": false,
    "errorMessage": "Login was unsuccessful. Please correct the errors and try again. The credentials provided are incorrect"
  }
]