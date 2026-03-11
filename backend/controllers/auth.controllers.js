export const signUp = async (req, res) => {
  try {
    res.send("signup route working")
  } catch (error) {
    console.log(error)
  }
}

export const login = async (req, res) => {
  try {
    res.send("login route working")
  } catch (error) {
    console.log(error)
  }
}