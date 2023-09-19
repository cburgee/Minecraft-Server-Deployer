import { checkToken } from "../utilities/users-service"

// TODO: Save token expiration code and change name of file and related functions

function OrderHistoryPage() {
  const handleCheckToken = async () => {
    const expDate = await checkToken()
    console.log(expDate)
  }

  return (
    <div>
      <h1>OrderHistoryPage</h1>
      <button onClick={handleCheckToken}>
        Check When My Login Token Expires
      </button>
    </div>
  )
}

export default OrderHistoryPage
