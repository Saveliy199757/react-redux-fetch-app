import React, { useEffect } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";
const UserList: React.FC = () => {
  const { users, error, loading } = useTypedSelector(state => state.user)
  const {fetchUsers} = useActions()

  useEffect(() => {
    fetchUsers()
  }, [])

  if (loading) {
   return <h1>Идет загрузка !</h1>
  }

  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <div>
      {
        users.map(user =>
          <p key={user.id}>{user.name}</p>
        )
      }
    </div>
  )
}

export default UserList