function status(request, response) {
  response.status(200).json({ chave: "Primeira API" });
}

export default status;
