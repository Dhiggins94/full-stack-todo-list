import api from "./apiConfig"

export const getAllTodos = async () => {
  try {
    const res = await api.get("/todos")
    return res.data;
  } catch (e) {
    throw e;
  }
}

export const createTodo = async (input) => {
  try {
    const res = await api.post("/todos", input)
    console.log(res.data)
    return res.data
  } catch (e) {
    throw(e)
  }
 
}