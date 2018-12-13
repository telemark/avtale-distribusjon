module.exports = data => {
  return Object.assign({}, data.shipment, { dokumenter: data.documents, mottaker: data.recipients })
}
