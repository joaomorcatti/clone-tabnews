import database from "infra/database.js";

async function status(request, response) {
  const updatedAT = new Date().toISOString();

  response.status(200).json({
    updated_at: updatedAT,
  });
}

export default status;
