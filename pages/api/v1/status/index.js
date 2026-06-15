function status(request, response) {
  response.status(200).json({ chave: "top curso.dev" });
}

export default status;
