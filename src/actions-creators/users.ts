export const getUsers = (users: any) => {
  return {
    type: 'GET_USERS',
    payload: users,
  }
}
