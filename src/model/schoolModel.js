import { getConnection } from "@/config/db";



const addSchool = async (data) => {
  try {
    const connection = await getConnection();
    const query =
      "INSERT INTO schools ( name, address, city, state, contact, image, email_id) VALUES (?, ?, ?, ?, ?, ?, ?)";
    const { name, address, city, state, contact, image, email_id } = data;
    const [result] = await connection.query(query, [
      id,
      name,
      address,
      city,
      state,
      contact,
      image,
      email_id,
    ]);
    return result;
  } catch (error) {
    console.error("Error occured while adding school", error);
    throw error;
  }
};

const getSchools =  async () => {
  try {
    const connection =  await getConnection();
    const [rows] = await connection.query("SELECT * FROM schoolLists");
    return rows;
  } catch (error) {
    console.log("Error Getting Schools", error)
  }
}

export { addSchool, getSchools };
